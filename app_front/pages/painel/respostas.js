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
  static async getInitialProps({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers["user-agent"]
    }

    const res = await fetch("http://localhost:3030/respostas")
    const data = await res.json()

    const questoes = await fetch("http://localhost:3030/questions")
    const questoesData = await questoes.json()

    return { userAgent, respostas: data.data, questoes: questoesData.data }
  }

  render() {
    const { userAgent, respostas, questoes } = this.props

    const isCorrect = resposta => {
      const quest = questoes.filter(q => q.id == resposta.id_questao)[0]

      if (!quest) return false

      console.log(JSON.stringify(quest) + "   -   " + JSON.stringify(resposta))

      return quest.answer == resposta.resposta
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>
        <div>
          <AppBar
            title="Guilherme"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTouchTap={() => Router.push(`/painel/pacientes`)}
          />
          <h2
            style={{ fontFamily: "'Roboto', sans-serif", textAlign: "center" }}
          >
            Respostas
          </h2>
          <Table>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn>Número</TableHeaderColumn>
                <TableHeaderColumn>Acertou?</TableHeaderColumn>
                <TableHeaderColumn>Tempo de resposta</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {respostas.map(resposta => (
                <TableRow>
                  <TableRowColumn>{resposta.id_questao}</TableRowColumn>
                  <TableRowColumn>
                    {isCorrect(resposta)
                      ? <span style={{ color: "green" }}>Sim</span>
                      : <span style={{ color: "red" }}>Não</span>}
                  </TableRowColumn>
                  <TableRowColumn>{resposta.tempo_de_resposta}</TableRowColumn>
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
