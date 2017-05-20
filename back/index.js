const feathers = require("feathers")
const bodyParser = require("body-parser")
const rest = require("feathers-rest")
const socketio = require("feathers-socketio")
const memory = require("feathers-memory")

// Create a feathers instance.
const app = feathers()
  // Enable REST services
  .configure(rest())
  // Enable Socket.io services
  .configure(socketio())
  // Turn on JSON parser for REST services
  .use(bodyParser.json())
  // Turn on URL-encoded parser for REST services
  .use(bodyParser.urlencoded({ extended: true }))

// Create an in-memory Feathers service with a default page size of 2 items
// and a maximum size of 4
app.use(
  "/questions",
  memory({
    paginate: {
      default: 2,
      max: 4
    }
  })
)

app
  .service("questions")
  .create({
    text: "Qual é o quadrado?",
    audio: "aaaa",
    alternatives: {
      a: "BolaAmarela.png",
      b: "QuadradoVerde.png",
      c: "TrianguloAzul.png"
    },
    answer: "a"
  })
  .then(function(message) {
    console.log("Created message", message)
  })

// Start the server.
const port = 3030

app.listen(port, function() {
  console.log(`Feathers server listening on port ${port}`)
})
