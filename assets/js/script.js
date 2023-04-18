const dadosFicticios = [
    {
        codigo: "001",
        codigoBarras: "12324326531",
        fabricante: "Fabricante A",
        departamento: "Departamento 1",
        status: "Ativo",
        tipoCadastro: "Novo Produto",
        nomeProduto: "Produto A",
        nomeAbreviado: "Prod A",
        preco: "10.00",
        custo: "5.00",
        margem: "50",
        disponivel: "Sim"
    }
]

const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const codigo = document.querySelector('#codigo').value;
    const codigoBarras = document.querySelector('#codigoBarras').value;
    const fabricante = document.querySelector('#fabricante').value;
    const departamento = document.querySelector('#departamento').value;
    const status = document.querySelector('#status').value;
    const tipoCadastro = document.querySelector('#tipoCadastro').value;
    const nomeProduto = document.querySelector('#nomeProduto').value;
    const nomeAbreviado = document.querySelector('#nomeAbreviado').value;
    const preco = document.querySelector('#preco').value;
    const custo = document.querySelector('#custo').value;
    const margem = document.querySelector('#margem').value;
    const disponivel = document.querySelector('#disponivel').value;

    const produto = {
        codigo,
        codigoBarras,
        fabricante,
        departamento,
        status,
        tipoCadastro,
        nomeProduto,
        nomeAbreviado,
        preco,
        custo,
        margem,
        disponivel
    };

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(dadosFicticios);
    
    localStorage.setItem('produtos', JSON.stringify(dadosFicticios));

    console.log(produto)

    atualizarTabela();
})

function atualizarTabela(){
    const tbody = document.querySelector('#tbody');
    tbody.innerHTML = '';

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos.forEach(produto => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${produto.codigo}</td>
        <td>${produto.codigoBarras}</td>
        <td>${produto.fabricante}</td>
        <td>${produto.departamento}</td>
        <td>${produto.status}</td>
        <td>${produto.tipoCadastro}</td>
        <td>${produto.nomeProduto}</td>
        <td>${produto.nomeAbreviado}</td>
        <td>${produto.preco}</td>
        <td>${produto.custo}</td>
        <td>${produto.margem}</td>
        <td>${produto.disponivel}</td>
        `
        console.log(tr)
        tbody.appendChild(tr);
    });
}