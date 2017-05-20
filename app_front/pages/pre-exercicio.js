import Maos from '../components/Maos.js'
import Menu from "../components/Menu.js"

export default () => (
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
        <Menu title="Inicio"/>
        <Maos mao="mao-direita.png"/>
    </div>
)