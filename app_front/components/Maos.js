import Ajuda from '../components/Ajuda.js'

export default ({mao}) => (
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
        <Ajuda/>
        <h1 style={{ textAlign: "center" }}>Utilize a mão Direita</h1>
        <div className="hand">
            <a href="exercicio">
            <img
            className="hand-img"
            src={`/static/misc/${mao}`}
        /></a>
        </div>
    </div>
)