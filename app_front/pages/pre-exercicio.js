export default () => (
    <div>
        <style jsx>{` 
            @keyframes grow {
                from {
                    transform: rotate(0deg);
                }
                
                to {
                    transform: rotate(45deg);
                }
            }
        
            @keyframes decrease {
            from {
               transform: rotate(45deg);
            }

            to {
                transform: rotate(0deg);
            }
        }

            .hand {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .hand-img {
                transform: rotate(0deg);
                animation-duration: 0.5s;
                animation-name: decrease;
            }

            .hand-img:hover {
                transform: rotate(45deg);
                animation-duration: 0.5s;
                animation-name: grow;
            }
            `}
        </style>
        <h1 style={{ textAlign: "center" }}>Utilize a mão Direita</h1>
        <div className="hand">
            <a style={{ width: "25%"}} href="exercicio">
            <img
            className="hand-img"
            src={`/static/misc/mao-direita.png`}
        /></a>
      </div>
    </div>
)