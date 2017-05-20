import Bloco from './Bloco'
import Ajuda from '../components/Ajuda.js'

export default ({ onAnswer }) => (
  <div className="body">
     <style jsx>{`          
          .images {
            display: inline-flex;
            margin-top: 50px;
          }

          #cursor {
            cursor: url("http://emojipedia-us.s3.amazonaws.com/cache/16/59/16599a86ba26438673f9ebddc6d07fef.png"), auto; 
          }
    `}</style>
    <div id="cursor">
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
  </div>
)
