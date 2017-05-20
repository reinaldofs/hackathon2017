import Bloco from './Bloco'

export default ({ onAnswer }) => (
  <div>
     <style jsx>{`
          .images {
            margin-top: 5rem;
            display: inline-flex;
          }
    `}</style>
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
)
