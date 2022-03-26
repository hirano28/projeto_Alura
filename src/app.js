import express from "express";

const app = express();
app.use(express.json())

const livros = [
    {id: 1, titulo: "Harry Potter e o Cálice de Fogo"},
    {id: 2, titulo: "O Hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.post('/livros', (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).send('Livro cadastrado com sucesso.');
})

app.put('/livros/:id', (req, res) => {
    const livro = buscaLivro(req.params.id);

})

function buscaLivro(id) {
    return this.livros.find(livro => livro.id == id);
}

export default app