import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { List, ListItem } from "material-ui/List"
import ActionGrade from "material-ui/svg-icons/action/grade"
import { deepOrange500 } from "material-ui/styles/colors"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
if (!process.tapEventInjected) {
    injectTapEventPlugin()
    process.tapEventInjected = true
}

export default ({title}) => (
    <div>
         <style global jsx>{`
          .login {
            margin: 0;
            color: white;
            font-weight: bold;
          }    
      `}</style>
      <MuiThemeProvider muiTheme={getMuiTheme({})}>
        <div>
            <Card style={{marginTop:'100px', marginRight:'34%',marginLeft:'34%', height:'380px'}}>
                <CardHeader

                    title="Logar"
                    subtitle="Acesse o Sistema com o Login Fornecido"
                />

                <CardText expandable={false} >
                        <TextField
                            style={{width:'100%', marginTop:'5%'}}
                            hintText="Login"
                    /><br />
                        <TextField
                            style={{width:'100%',  marginTop:'5%'}}
                            hintText="Senha"
                        /><br />
                </CardText>

                <CardActions style={{marginTop:'10%'}}>
                    <FlatButton label="Logar" style={{width:'100%'}}/>
                    <FlatButton label="Cadastrar" style={{width:'100%'}} />
                </CardActions>
            </Card>
        </div>
      </MuiThemeProvider>
    </div>
)