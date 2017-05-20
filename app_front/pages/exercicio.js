import { Component } from "react"
import Questao from "../components/Questao.js"
import Acerto from "../components/Acerto.js"
import Erro from "../components/Erro.js"
import Menu from "../components/Menu.js"

const QUESTAO = "QUESTAO"
const ERRO = "ERRO"
const ACERTO = "ACERTO"

export default class Exercicio extends Component {
  constructor() {
    super()

    this.state = { questionState: QUESTAO }
  }

  render() {
    let toRender = <div />

    switch (this.state.questionState) {
      case ACERTO:
        toRender = <Acerto />
        break
      case ERRO:
        toRender = <Erro />
        break
    }

    return (
      <div>
        <style global jsx>{`
          body {
            width: 100;
            height: 100;
            font-family: Courier New;
            color: #212121;
            font-size: 26px;
            background: #f5f5f5;
          }    
      `}</style>
        <Menu title="Exercicio 1"/>
        <Questao
          onAnswer={isRight =>
            this.setState({ questionState: isRight ? ACERTO : ERRO })}
        />
        {toRender}
      </div>
    )
  }
}
