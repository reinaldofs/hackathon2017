import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import injectTapEventPlugin from "react-tap-event-plugin"
import { List, ListItem } from "material-ui/List"
import ActionGrade from "material-ui/svg-icons/action/grade"
import Router from "next/router"
import "isomorphic-fetch"
import { deepOrange500 } from "material-ui/styles/colors"

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

    const res = await fetch("http://localhost:3030/pacientes")
    const data = await res.json()
    return { userAgent, pacientes: data.data }
  }

  constructor(props, context) {
    super(props, context)

    this.state = {}
  }

  render() {
    const { userAgent, pacientes } = this.props

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>
        <div>
          <AppBar
            title="Pacientes"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <List>
            {pacientes.map(paciente => (
              <ListItem
                onTouchTap={() => Router.push(`/painel/respostas`)}
                leftIcon={<ActionGrade />}
              >
                {paciente.nome}
              </ListItem>
            ))}
          </List>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main
