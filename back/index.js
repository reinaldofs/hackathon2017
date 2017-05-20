const feathers = require("feathers")
const bodyParser = require("body-parser")
const rest = require("feathers-rest")
const socketio = require("feathers-socketio")
const memory = require("feathers-memory")
const cors = require("cors")

// Create a feathers instance.
const app = feathers()
  // Enable REST services
  .configure(rest())
  // Enable Socket.io services
  .configure(socketio())
  // Turn on JSON parser for REST services
  .use(bodyParser.json())
  .use(cors())
  // Turn on URL-encoded parser for REST services
  .use(bodyParser.urlencoded({ extended: true }))

// Create an in-memory Feathers service with a default page size of 2 items
// and a maximum size of 4
app.use(
  "/questions",
  memory({
    paginate: {
      default: 20,
      max: 20
    }
  })
)

app.use(
  "/pacientes",
  memory({
    paginate: {
      default: 20,
      max: 20
    }
  })
)

app.use(
  "/respostas",
  memory({
    paginate: {
      default: 20,
      max: 20
    }
  })
)

const questoes = app.service("questions")

questoes.create({
  text: "Qual é o quadrado?",
  audio: "aaaa",
  alternatives: {
    a: "BolaAmarela.png",
    b: "QuadradoVerde.png",
    c: "TrianguloAzul.png"
  },
  answer: "b",
  active: true,
  hand: "right"
})

questoes.create({
  text: "Qual é o triangulo?",
  audio: "aaaa",
  alternatives: {
    a: "BolaAmarela.png",
    b: "QuadradoVerde.png",
    c: "TrianguloAzul.png"
  },
  answer: "c",
  active: true,
  hand: "right"
})

questoes.create({
  text: "Qual é o circulo?",
  audio: "aaaa",
  alternatives: {
    a: "BolaAmarela.png",
    b: "QuadradoVerde.png",
    c: "TrianguloAzul.png"
  },
  answer: "a",
  active: true,
  hand: "left"
})

const pacientes = app.service("pacientes")

pacientes.create({ nome: "Guilherme", warning: false })
pacientes.create({ nome: "Bruno", warning: true })
pacientes.create({ nome: "Fernando", warning: false })
pacientes.create({ nome: "Gabriel", warning: false })
pacientes.create({ nome: "Reinaldo", warning: false })

const respostas = app.service("respostas")

respostas.create({
  id_questao: "1",
  resposta: "a",
  tempo_de_resposta: 100,
  id_paciente: "1"
})
respostas.create({
  id_questao: "2",
  resposta: "a",
  tempo_de_resposta: 300,
  id_paciente: "1"
})
respostas.create({
  id_questao: "3",
  resposta: "c",
  tempo_de_resposta: 140,
  id_paciente: "1"
})
respostas.create({
  id_questao: "4",
  resposta: "d",
  tempo_de_resposta: 120,
  id_paciente: "1"
})

// Start the server.
const port = 3030

app.listen(port, function() {
  console.log(`Feathers server listening on port ${port}`)
})
