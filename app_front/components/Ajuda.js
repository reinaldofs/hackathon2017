export default () => (
    <div>
        <style jsx>{` 
            @keyframes grow {
            from {
              transform: scale(1, 1);
            }

            to {
              transform: scale(1.5, 1.5);
            }
        }
        
            @keyframes decrease {
            from {
              transform: scale(1.5, 1.5);
            }

            to {
             transform: scale(1, 1);
            }
        }

            .img-faq {
                display: block;
                position: absolute;
                margin-top: 10px;
                margin-left: 94%;
                width: 4%;
                height: 4%;
                transform: scale(1, 1);
                animation-duration: 0.5s;
                animation-name: decrease;
            }

            .img-faq:hover {
                transform: scale(1.5, 1.5);
                animation-duration: 0.5s;
                animation-name: grow
            }
            `}
        </style>
        <img className="img-faq" src={`/static/misc/FAQ.png`}/>
    </div>
)