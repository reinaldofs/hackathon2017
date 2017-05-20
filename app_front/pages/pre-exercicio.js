import Router from "next/router"
import Maos from "../components/Maos.js"
import Menu from "../components/Menu.js"
import injectTapEventPlugin from "react-tap-event-plugin"

if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

export default class PreExercicio extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Router.push(`/exercicio`)
    }, 5000)
  }

  render() {
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

          ::-webkit-scrollbar { 
            display: none; 
          }
      `}</style>
        <Menu title="Inicio" />
        <Maos mao="mao-direita.png" />
      </div>
    )
  }
}
