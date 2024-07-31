const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

function filtrarFilmesPorAno(ano) {
    return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}

const filmes1993 = filtrarFilmesPorAno(1993);
console.log(filmes1993);

const filmes1999 = filtrarFilmesPorAno(1999);
console.log(filmes1999)