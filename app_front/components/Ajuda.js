export default () => (
    <div>
        <style jsx>{` 
            .img-faq {
                display: block;
                position: absolute;
                margin-left: 95%;
                width: 4%;
                height: 4%;
            }

            .img-faq:hover {
                transform: scale(1.5, 1.5);
            }
            `}
        </style>
        <img className="img-faq" src={`/static/misc/FAQ.png`}/>
    </div>
)