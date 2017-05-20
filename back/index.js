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
  text: 'Selecione o elemento diferente?',
  audio: "aaaa",
  alternatives: {
    a: "BolaAzul.png",
    b: "QuadradoAzul.png",
    c: "BolaAzul.png"
  },
  answer: "b",
  active: true,
  hand: "right"
})

questoes.create({
  text: 'Selecione o elemento diferente?',
  audio: "aaaa",
  alternatives: {
    a: "BolaVermelha.png",
    b: "TrianguloVermelho.png",
    c: "TrianguloVermelho.png"
  },
  answer: "a",
  active: true,
  hand: "right"
})

questoes.create({
  text: 'Selecione o elemento diferente?',
  audio: "aaaa",
  alternatives: {
    a: "QuadradoAmarelo.png",
    b: "QuadradoAmarelo.png",
    c: "TrianguloAmarelo.png"
  },
  answer: "c",
  active: true,
  hand: "right"
})

questoes.create({
  text: 'Selecione o elemento diferente?',
  audio: "aaaa",
  alternatives: {
    a: "BolaVerde.png",
    b: "QuadradoVerde.png",
    c: "BolaVerde.png"
  },
  answer: "b",
  active: true,
  hand: "right"
})

questoes.create({
  text: 'Selecione a <span style="color: red">Bola Vermelha</span>?',
  audio: "aaaa",
  alternatives: {
    a: "BolaAmarela.png",
    b: "BolaVermelha.png",
    c: "BolaAmarela.png"
  },
  answer: "b",
  active: true,
  hand: "right"
})

questoes.create({
  text: 'Selecione o <span style="color: blue">Triangulo Azul</span>?',
  audio: "aaaa",
  alternatives: {
    a: "TrianguloVermelho.png",
    b: "TrianguloVermelho.png",
    c: "TrianguloAzul.png"
  },
  answer: "c",
  active: true,
  hand: "right"
})

questoes.create({
  text: 'Selecione o <span style="color: yellow">Quadrado Amarelo</span>?',
  audio: "aaaa",
  alternatives: {
    a: "QuadradoAmarelo.png",
    b: "QuadradoVerde.png",
    c: "QuadradoVerde.png"
  },
  answer: "a",
  active: true,
  hand: "right"
})

questoes.create({
  text: 'Selecione o <span style="color: green">Bola Verde</span>?',
  audio: "aaaa",
  alternatives: {
    a: "TrianguloVerde.png",
    b: "TrianguloVerde.png",
    c: "BolaVerde.png"
  },
  answer: "c",
  active: true,
  hand: "right"
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
