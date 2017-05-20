import Bloco from "./Bloco"
import Ajuda from "../components/Ajuda.js"

export default ({ onAnswer, enunciado, alternativas, resposta }) => (
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
      <Ajuda />
      <h1
        style={{ textAlign: "center" }}
        dangerouslySetInnerHTML={{ __html: enunciado }}
      />
      <div className="images">
        {Object.keys(alternativas).map(letra => (
          <div onClick={() => onAnswer(letra == resposta, letra)}>
            <Bloco img={alternativas[letra]} />
          </div>
        ))}
      </div>
    </div>
  </div>
)
