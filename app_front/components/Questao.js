import Bloco from './Bloco'

export default ({ onAnswer }) => (
  <div>
     <style jsx>{`
          .images {
            margin-top: 5rem;
            display: inline-flex;
          }
          #cursor{
              cursor: url("http://emojipedia-us.s3.amazonaws.com/cache/16/59/16599a86ba26438673f9ebddc6d07fef.png"), auto;
            }
           .background{
             background-color: yellow;
            }

    `}</style>
  <div id="cursor" class="background">
    <h1 style={{ textAlign: "center" }}>Qual é o quadrado?</h1>
    <div className="images">

      <div onClick={() => onAnswer(true)}>
        <Bloco img="BolaAmarela.png"/>
      </div>
      
      <div onClick={() => onAnswer(false)}>
        <Bloco img="BolaAmarela.png"/>
      </div>      
      
      <div onClick={() => onAnswer(false)}>
        <Bloco img="QuadradoAmarelo.png"/>
      </div>

    </div>
  </div>
      </div>


)
