import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import injectTapEventPlugin from "react-tap-event-plugin"
import { List, ListItem } from "material-ui/List"
import ActionGrade from "material-ui/svg-icons/action/grade"
import IconMenu from "material-ui/IconMenu"
import Router from "next/router"
import "isomorphic-fetch"
import {
  deepOrange500,
  grey400,
  darkBlack,
  lightBlack
} from "material-ui/styles/colors"
import IconButton from "material-ui/IconButton"
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert"
import MenuItem from "material-ui/MenuItem"

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

    const iconButtonElement = (
      <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400} />
      </IconButton>
    )

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onTouchTap={() => Router.push(`/painel/perguntas`)}>
          Perguntas
        </MenuItem>
        <MenuItem onTouchTap={() => Router.push(`/painel/respostas`)}>
          Respostas
        </MenuItem>
      </IconMenu>
    )

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
                leftIcon={<ActionGrade />}
                rightIconButton={rightIconMenu}
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
