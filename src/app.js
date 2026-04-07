import express from 'express'

const app = express()

// mock - Estrutura básica de dados para fazer testes na api
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíca', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'}
]

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.status(200).send('Hello world!')
})

app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

export default app
