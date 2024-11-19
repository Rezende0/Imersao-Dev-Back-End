import express from "express";

const livros = [
    {
      "titulo": "O Senhor dos Anéis",
      "autor": "J.R.R. Tolkien",
      "ano": 1954
    },
    {
      "titulo": "O Hobbit",
      "autor": "J.R.R. Tolkien",
      "ano": 1937
    },
    {
      "titulo": "1984",
      "autor": "George Orwell",
      "ano": 1949
    }
];

const app = express();
app.use(express.json());
app.listen(3000,() => {
    console.log("Servidor escutando...");
});

app.get("/livros",(req, res) => {
    res.status(200).json(livros);
});

function filtrarLivros(autor){
    return livros.filter((livro) => {
        return livro.autor === autor;
    });
}
app.get("/livros/:autor",(req, res) => {
    const livrosFiltrados = filtrarLivros(req.params.autor);
    if (livrosFiltrados.length > 0) {
        res.status(200).json(livrosFiltrados);
    } else {
        res.status(404).json({ message: "Autor não encontrado" });
    }
})