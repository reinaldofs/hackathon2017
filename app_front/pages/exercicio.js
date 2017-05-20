import { Component } from "react"
import Questao from "../components/Questao.js"
import Acerto from "../components/Acerto.js"
import Erro from "../components/Erro.js"
import Menu from "../components/Menu.js"
import "isomorphic-fetch"
const feathers = require("feathers/client")
const rest = require("feathers-rest/client")
const host = "http://localhost:3030"
const app = feathers().configure(rest(host).fetch(fetch))

const respostas = app.service("respostas")

const QUESTAO = "QUESTAO"
const ERRO = "ERRO"
const ACERTO = "ACERTO"

export default class Exercicio extends Component {
  constructor() {
    super()

    this.state = {
      questionState: QUESTAO,
      questionIndex: 0,
      dtInicio: new Date()
    }
  }

  static async getInitialProps({ req }) {
    const questoesRaw = await fetch("http://localhost:3030/questions")
    const questoesData = await questoesRaw.json()

    const questoes = questoesData.data.filter(q => q.active)
    return { questoes }
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
          onAnswer={(isRight, letra) => {
            respostas.create({
              id_questao: questao.id,
              id_paciente: "1",
              resposta: letra,
              tempo_de_resposta: (new Date() - this.state.dtInicio) / 1000
            })
            if (isRight)
              this.setState({
                questionState: ACERTO,
                dtInicio: new Date(),
                questionIndex: this.state.questionIndex <
                  this.props.questoes.length - 1
                  ? this.state.questionIndex + 1
                  : 0
              })
            else this.setState({ questionState: ERRO, dtInicio: new Date() })
          }}
          alternativas={questao.alternatives}
          resposta={questao.answer}
        />
        {toRender}
      </div>
    )
  }
}
