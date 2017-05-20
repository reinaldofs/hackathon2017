import Maos from '../components/Maos.js'

export default () => (
    <div>
        <style global jsx>{`
          body {
            width: 100;
            height: 100;
            font-family: Courier New;
            color: #212121;
            text-shadow: 2px 2px 5px white;
            font-size: 26px;
            background: #f5f5f5;
          }    
      `}</style>
        <Maos mao="mao-direita.png"/>
    </div>
)