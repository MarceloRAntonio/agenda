const express = require ('express')
const app = express()
app.use(express.json())

const agenda = []

app.post('/inserir', (req, res)=> {
    const {nome, numero} = req.body
    agenda.push({nome, numero})
    return res.json(agenda)


})
app.get('/listar', (req, res)=> {
    return res.json(agenda)

})
app.put('/atualizar/:nome', (req, res)=> {
    const {nome} = req.params
    const {nnome, nnumero} = req.body
    const c = agenda.find(contato => contato.nome === nome)
    c.nome = nnome
    c.numero= nnumero
    return res.json(agenda)


})
app.delete('/remover/:nome', (req, res)=> {
    const {nome} = req.params
    const c = agenda.find(contato => contato.nome === nome)
    const index = agenda.indexOf(c)
    agenda.splice(index,1)
    return res.json(agenda)

})



app.listen(3000)