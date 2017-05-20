import React, { Component } from "react"
import { deepOrange500 } from "material-ui/styles/colors"
import AppBar from "material-ui/AppBar"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import injectTapEventPlugin from "react-tap-event-plugin"
import { List, ListItem } from "material-ui/List"
import ActionGrade from "material-ui/svg-icons/action/grade"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table"
import "isomorphic-fetch"

const feathers = require("feathers/client")
const rest = require("feathers-rest/client")
const host = "http://localhost:3030"
const app = feathers().configure(rest(host).fetch(fetch))

const questions = app.service("questions")

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

const muiTheme = {
  palette: {
    accent1Color: deepOrange500
  }
}

class Main extends Component {
  constructor() {
    super()

    this.state = { overrides: {} }
  }

  static async getInitialProps({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers["user-agent"]
    }

    const questoes = await fetch("http://localhost:3030/questions")
    const questoesData = await questoes.json()

    return { userAgent, questoes: questoesData.data }
  }

  render() {
    const { userAgent, questoes } = this.props

    const getStatus = questao => {
      if (this.state.overrides[questao.id] !== undefined)
        return this.state.overrides[questao.id]
      else return questao.active
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>
        <div>
          <AppBar
            title="Perguntas"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Table multiSelectable={true}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Número</TableHeaderColumn>
                <TableHeaderColumn>Texto</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questoes.map(questao => (
                <TableRow
                  selected={getStatus(questao)}
                  onTouchTap={() =>
                    questions
                      .patch(questao.id, { active: !getStatus(questao) })
                      .then(({ active }) => {
                        const over = { ...this.state.overrides }
                        over[questao.id] = active
                        this.setState({ overrides: over })
                      })}
                >
                  <TableRowColumn>{questao.id}</TableRowColumn>
                  <TableRowColumn>{questao.text}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main
