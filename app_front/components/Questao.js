export default ({ onAnswer }) => (
  <div>
    <h1 style={{ textAlign: "center" }}>Qual é o quadrado?</h1>
    <div>
      <style jsx>{`
         @keyframes grow {
            from {
                transform: scale(1, 1);
            }

            to {
             transform: scale(1.2, 1.2);
            }
        }
        
        .alternativa {
          transform: scale(1, 1);
        }

        .alternativa:hover {
            transform: scale(1.2, 1.2);
            animation-duration: 0.5s;
            animation-name: grow;
        }
    `}</style>
      <img
        className="alternativa"
        style={{ width: "33%" }}
        src="https://oblogmenoslidodomundo.files.wordpress.com/2014/10/quadrado.jpg"
        onClick={() => onAnswer(true)}
      />
      <img
        className="alternativa"
        style={{ width: "33%" }}
        src="http://3.bp.blogspot.com/_N8rtcf8YfEo/R0YKb--LZPI/AAAAAAAAARI/jwCcX95MCI0/s320/Estado+do+Triangulo.JPG"
        onClick={() => onAnswer(false)}
      />
      <img
        className="alternativa"
        style={{ width: "33%" }}
        src="http://icon-icons.com/icons2/321/PNG/512/Circle_34541.png"
        onClick={() => onAnswer(false)}
      />
    </div>
  </div>
)
