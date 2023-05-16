import bodyParser from 'body-parser'
import Express from 'express'

const app = Express()

app.use(bodyParser.urlencoded({ extended: true }))


app.post('/inserir', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Inserido</h1>')
})

app.post('/atualizar/:id', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Atualizado</h1>')
})


app.listen(3003, () => {
    console.log("Deuuu ?")
})