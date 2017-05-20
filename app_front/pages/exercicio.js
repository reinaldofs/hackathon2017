import { Component } from "react"
import Questao from "../components/Questao.js"
import Acerto from "../components/Acerto.js"
import Erro from "../components/Erro.js"
import Menu from "../components/Menu.js"
import "isomorphic-fetch"

const QUESTAO = "QUESTAO"
const ERRO = "ERRO"
const ACERTO = "ACERTO"

export default class Exercicio extends Component {
  constructor() {
    super()

    this.state = { questionState: QUESTAO, questionIndex: 0 }
  }

  static async getInitialProps({ req }) {
    const questoes = await fetch("http://localhost:3030/questions")
    const questoesData = await questoes.json()

    return { questoes: questoesData.data }
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
    const questao = this.props.questoes[this.state.questionIndex]

    return (
      <div>
        <audio src={`/static/audios/${questao.audio}`} autoPlay={true} />
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
        <Menu title={`Exercicio ${this.state.questionIndex + 1}`} />
        <Questao
          enunciado={questao.text}
          onAnswer={isRight => {
            if (isRight)
              this.setState({
                questionState: ACERTO,
                questionIndex: this.state.questionIndex <
                  this.props.questoes.length - 1
                  ? this.state.questionIndex + 1
                  : 0
              })
            else this.setState({ questionState: ERRO })
          }}
          alternativas={questao.alternatives}
          resposta={questao.answer}
        />
        {toRender}
      </div>
    )
  }
}
