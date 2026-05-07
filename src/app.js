import express from 'express'
import routes from './routes.js'

const app = express()

app.use(express.json()) // Indica para o express ler o body (corpo da requisição) com json

app.use(routes)

// retortnar o objeto por id
//function buscarSelecaoPorId(id) {
//    return selecoes.filter(selecao => selecao.id == id)
//}

// pegar a posição ou index do elemento no array por id
//function buscarIndexSelecao(id) {
//    return selecoes.findIndex(selecao => selecao.id == id)
//}

export default app
