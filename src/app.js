import express from 'express'

const app = express()

app.use(express.json()) // Indica para o express ler o body (corpo da requisição) com json

// mock - Estrutura básica de dados para fazer testes na api
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíca', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'}
]

// retortnar o objeto por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// pegar a posição ou index do elemento no array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.status(200).send('Hello world!')
})

app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

app.get('/selecoes/:id', (req, res) => { // o :id é um parametro
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com id ${req.params.id} deletada com sucesso`)
})

export default app
