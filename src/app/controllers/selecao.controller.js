import selecaoRepository from "../repositories/selecao.repository.js"

class selecaoController {

    // Listar tudo
    async index(req, res) {
        const row = await selecaoRepository.findAll()
        res.json(row)
    }

    // Listar tudo por id
    async show(req, res) { // o :id é um parametro
        const id = req.params.id
        const row = await selecaoRepository.findById(id)
        res.json(row)
    }

    // Criar dados
    async store(req, res) {
        const selecao = req.body
        const row = await selecaoRepository.create(selecao)
        res.json(row)
    }

    //Atualiza dados
    async update(req, res) {
        const selecao = req.body
        const id = req.params.id 
        const row = await selecaoRepository.update(selecao, id)
        res.json(row)
    }

    // deleta dados
    async delete(req, res) {
        const id = req.params.id
        const row = await selecaoRepository.delete(id)
        res.json(row)
    }
}

export default new selecaoController()
