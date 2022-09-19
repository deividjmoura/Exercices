const now = new Date
const tabela = document.getElementById('tabela');
let tr = document.createElement('tr');
let td = document.createElement('td');

function nome()
{
let x;

let nome=prompt("Digite seu nome:");

if (nome!=null)
  {
  x=`${nome}`;
  document.getElementById("nome").innerHTML=x;
  }
}

function codigo()
{
let x;

let codigo=prompt("Digite seu código:");

if (nome!=null)
  {
  x=`${codigo}`;
  document.getElementById("codigo").innerHTML=x;
  }
}

function data()
{
let x;

if (codigo!=null)
  {
  x=`${codigo}`;
  document.getElementById("data").innerHTML = (now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear());
  }
}

function pedido() {
    tabela.appendChild(tr);
    let td = document.createElement('td');
    let pedido = prompt("Digite o número do pedido:");
    td.innerHTML = `${pedido}`
    tr.appendChild(td)
}

function nota() {
    tabela.appendChild(tr);
    let td1 = document.createElement('td');
    let nota = prompt("Digite o número da nota:");
    td1.innerHTML = `${nota}`
    tr.appendChild(td1)
}

function volumes() {
    tabela.appendChild(tr);
    let td2 = document.createElement('td');
    let volumes = prompt("Digite o número de volumes:");
    td2.innerHTML = `${volumes}`
    tr.appendChild(td2)
}

function hora() {
    tabela.appendChild(tr);
    let td3 = document.createElement('td');
    let hora = (now.getHours() + ":" + now.getMinutes());
    td3.innerHTML = `${hora}`
    tr.appendChild(td3)
}

function itens() {
    tabela.appendChild(tr);
    let td4 = document.createElement('td');
    let itens = prompt("Descrição dos itens:");
    td4.innerHTML = `${itens}`
    tr.appendChild(td4)
}

function trans() {
    tabela.appendChild(tr);
    let td5 = document.createElement('td');
    let trans = prompt("qual é a transportadora?");
    td5.innerHTML = `${trans}`
    tr.appendChild(td5)
}