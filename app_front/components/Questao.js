import Bloco from './Bloco'
import Ajuda from '../components/Ajuda.js'

export default ({ onAnswer }) => (
  <div className="body">
     <style jsx>{`          
          .images {
            display: inline-flex;
            margin-top: 50px;
          }
    `}</style>
    <Ajuda/>
    <h1 style={{ textAlign: "center"}}>Qual é o quadrado?</h1>
    <div className="images">

      <div onClick={() => onAnswer(false)}>
        <Bloco img="BolaAmarela.png"/>
      </div>
      
      <div onClick={() => onAnswer(false)}>
        <Bloco img="BolaAmarela.png"/>
      </div>      
      
      <div onClick={() => onAnswer(true)}>
        <Bloco img="QuadradoAmarelo.png"/>
      </div> 

    </div>
  </div>
)
