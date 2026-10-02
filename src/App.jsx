import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);

  const [busca, setBusca] = useState("");

  const [carregando, setCarregando] = useState(true);

  const [erro, setErro] = useState("");

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");

  const [erroNome, setErroNome] = useState("");

  const [erroPreco, setErroPreco] = useState("");
  const [erroCategoria, setErroCategoria] = useState("");

  const [mensagem, setMensagem] = useState("");

  const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);

  const produtosFiltrados = produtos.filter((produto) =>
  produto.nome.toLowerCase().includes(busca.toLowerCase())
);

  useEffect(() => {
  axios
    .get("http://localhost:3000/produtos")
    .then((resposta) => {
      setProdutos(resposta.data);
      setCarregando(false)
    })
    .catch((erro) => {
      console.error("Erro ao buscar produtos:", erro);
      setErro("Não foi possível carregar os produtos. Tente novamente.");
      setCarregando(false)
    });
}, []);


async function cadastrarProduto(e) {

e.preventDefault();

if (!nome.trim()) {
  setErroNome("Informe o nome do produto.");
  setMensagem("");
  return;
}

setErroNome("");

if (!preco || !Number.isFinite(Number(preco)) || Number(preco) <= 0) {
  setErroPreco("Informe um preço válido maior que zero.");
  setMensagem("");
  return;
}

setErroPreco("");

if (!categoria.trim()) {
  setErroCategoria("Informe a categoria do produto.");
  setMensagem("");
  return;
}

setErroCategoria("");

if (!preco || !categoria.trim()) {
  setMensagem("Preencha todos os campos.");
  return;
}

if (Number(preco) <= 0 || !Number.isFinite(Number(preco))) {
  setMensagem("Informe um preço válido maior que zero.");
  return;
}

const dadosProduto = {
  nome: nome.trim(),
  preco: Number(preco),
  categoria: categoria.trim(),
};

  try {
    if (produtoEmEdicao) {
      const resposta = await axios.put(
        `http://localhost:3000/produtos/${produtoEmEdicao.id}`,
        dadosProduto
      );

      setProdutos((produtosAtuais) =>
        produtosAtuais.map((produto) =>
          produto.id === resposta.data.id
            ? {
                ...produto,
                ...resposta.data,
                preco: Number(resposta.data.preco),
              }
            : produto
        )
      );

      setMensagem("Produto atualizado com sucesso!");
      setProdutoEmEdicao(null);
    } else {
      const resposta = await axios.post(
        "http://localhost:3000/produtos",
        dadosProduto
      );

      setProdutos((produtosAtuais) => [
        ...produtosAtuais,
        resposta.data,
      ]);

      setMensagem("Produto cadastrado com sucesso!");
    }

    setNome("");
    setPreco("");
    setCategoria("");
  } catch (erro) {
    console.error("Erro ao salvar produto:", erro);
    setMensagem(
      produtoEmEdicao
        ? "Não foi possível atualizar o produto."
        : "Não foi possível cadastrar o produto."
    );
  }
}

async function excluirProduto(id) {
  try {
    await axios.delete(`http://localhost:3000/produtos/${id}`);

    setProdutos((produtosAtuais) =>
      produtosAtuais.filter((produto) => produto.id !== id)
    );

    setMensagem("Produto excluído com sucesso!");
  } catch (erro) {
    console.error("Erro ao excluir produto:", erro);
    setMensagem("Não foi possível excluir o produto. Tente novamente.");
  }
}

function iniciarEdicao(produto) {
  setProdutoEmEdicao(produto);
  setNome(produto.nome);
  setPreco(String(produto.preco));
  setCategoria(produto.categoria);
}

function cancelarEdicao() {
  setProdutoEmEdicao(null);
  setNome("");
  setPreco("");
  setCategoria("");
  setMensagem("");
  setErroNome("");
  setErroPreco("");
  setErroCategoria("");
  setErroNome("");
  setErroPreco("");
  setErroCategoria("");
  setMensagem("");
}

return (
  <div className="container">
    <h1>Minha loja de produtos</h1>
    <p className="subtitulo">
      Confira os produtos disponíveis no catálogo.
    </p>

    <div className="container-pesquisa">
  <span className="icone-pesquisa">⌕</span>

  <input
    type="text"
    className="barra-pesquisa"
    placeholder="Pesquisar produto pelo nome..."
    value={busca}
    onChange={(e) => setBusca(e.target.value)}
  />
</div>

    <h2>Lista de produtos</h2>

    
<form className="formulario" onSubmit={cadastrarProduto}>
  <h2>
  {produtoEmEdicao ? "Editar produto" : "Cadastrar produto"}
</h2>

  <input
    type="text"
    placeholder="Nome do produto"
    value={nome}
    onChange={(e) => {
  setNome(e.target.value);
  setMensagem("");
  setErroNome("");
}}
  />

  {erroNome && <p className="erro-campo">{erroNome}</p>}

  <input
    type="number"
    placeholder="Preço"
    min="0.01"
    step="0.01"
    value={preco}
    onChange={(e) => {
  setPreco(e.target.value);
  setMensagem("");
  setErroPreco("");
}}
  />

  {erroPreco && <p className="erro-campo">{erroPreco}</p>}

  <input
    type="text"
    placeholder="Categoria"
    value={categoria}
    onChange={(e) => {
  setCategoria(e.target.value);
  setMensagem("");
  setErroCategoria("");
}}
  />

  {erroCategoria && <p className="erro-campo">{erroCategoria}</p>}

  <button type="submit">
    {produtoEmEdicao ? "Salvar alterações" : "Cadastrar produto"}
  </button>

  {produtoEmEdicao && (
  <button
    type="button"
    className="botao-cancelar"
    onClick={cancelarEdicao}
  >
    Cancelar
  </button>
)}

</form>

{mensagem && (
  <p
    className={`mensagem ${
      mensagem.includes("sucesso") ? "mensagem-sucesso" : "mensagem-erro"
    }`}
  >
    {mensagem}
  </p>
)}


    {carregando ? (
      <p className="mensagem">Carregando produtos...</p>
    ) : erro ? (
      <p className="mensagem erro">{erro}</p>
    ) : produtos.length === 0 ? (
  <p className="mensagem">Nenhum produto cadastrado.</p>
) : produtosFiltrados.length === 0 ? (
  <p className="mensagem mensagem-pesquisa">
  Nenhum produto encontrado.
</p>
) : (
      <div className="lista-produtos">
        {produtosFiltrados.map((produto) => (
          <div className="card-produto" key={produto.id}>
            <h3>{produto.nome}</h3>

            <p className="preco">
              R$ {Number(produto.preco).toFixed(2)}
            </p>

            <span className="categoria">
              {produto.categoria}
            </span>

            <div className="botoes-produto">
  <button
    type="button"
    onClick={() => iniciarEdicao(produto)}
    className="botao-editar"
  >
    Editar
  </button>

  <button
    type="button"
    onClick={() => excluirProduto(produto.id)}
  >
    Excluir
  </button>
</div>
          </div>
        ))}
      </div>
    )}
  </div>
);

}

export default App;
