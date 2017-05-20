import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { List, ListItem } from "material-ui/List"
import ActionGrade from "material-ui/svg-icons/action/grade"
import { deepOrange500 } from "material-ui/styles/colors"
    
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();

export default ({title}) => (
    <div>
         <style global jsx>{`
          .menu {
            margin: 0;
            color: white;
            font-weight: bold;
          }    
      `}</style>
      <MuiThemeProvider muiTheme={getMuiTheme({})}>
        <div>
          <AppBar
            iconElementLeft={<h2 className="menu">Pratix</h2>}
            iconElementRight={<h2 className="menu">{`${title}`}</h2>}
          />
        </div>
      </MuiThemeProvider>
    </div>
)