import { Component } from "react"
import Questao from "../components/Questao.js"
import Acerto from "../components/Acerto.js"
import Erro from "../components/Erro.js"

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
        <Questao
          onAnswer={isRight =>
            this.setState({ questionState: isRight ? ACERTO : ERRO })}
        />
        {toRender}
      </div>
    )
  }
}
