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
         body{
            background-color:black;
         }
          .login {
            margin: 0;
            color: white;
            font-weight: bold;
          }    
      `}</style>
      <MuiThemeProvider muiTheme={getMuiTheme({})}>
        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img style={{position:'absolute', marginTop:'60px'}} src="/static/imagens-coisas/pratix.png"  height="10%" width="30%"/>
            </div>
            <video loop  autoPlay muted src="/static/video/criancas.mp4" width="100%" height="100%"
            style={{position:'absolute', zIndex: "-100", width:'100%', height:'100%'}}
            ></video>
            <Card style={{position: 'fixed', marginTop:'30vh', marginRight:'34%',marginLeft:'34%', height:'400px', backgroundColor:'rgba(355, 355, 355, 0.9)'}}>
                <CardHeader
                    style={{textAlign: 'center', marginLeft:'75px'}}
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
                    <FlatButton label="Logar" href={'/pre-exercicio'} style={{width:'100%'}}/>
                    <FlatButton label="Cadastrar" style={{width:'100%'}} />
                </CardActions>
            </Card>
            </div>
      </MuiThemeProvider>
    </div>
)