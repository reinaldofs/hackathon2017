import Router from "next/router"

export default () => (
  <div>
    <style global jsx>{`
             @keyframes visible {
              from {
                  left: 60%;
              }

              50% {
                  left: 10%;
              }

              to {
                  left: 60%;
              }
           }

            .acerto {
              position: fixed;
              top: 500px;
              left: 60%;
              animation-duration: 3.5s;
              animation-name: visible;

            }
      `}</style>
    <div id="img" className="acerto">
      <img src="/static/imagens-coisas/parabens.png"/>
      <audio src="/static/audios/acerto.mp3" autoPlay={true} />
    </div>
  </div>

)
