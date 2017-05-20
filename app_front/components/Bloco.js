export default ({img}) => (
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
        .alternativa {
          transform: scale(1, 1);
          animation-duration: 0.5s;
          animation-name: decrease;
        }

        .alternativa:hover {
          transform: scale(1.5, 1.5);
          animation-duration: 0.5s;
          animation-name: grow;
        }
    `}</style>
      <img
        className="alternativa"
        style={{ width: "80%" }}
        src={`/static/formas-geometricas/${img}`}
      />
</div>
)