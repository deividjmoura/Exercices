function mostrarTabuada(){
  let n = parseFloat(prompt("Digite um numero"));
  limparTabuada();
  let i = 1;
  while(i <= 1000){
  
    mensagem += n + " x " + i + " = " + (n * i) + "<br>";
    i++;
  }
   
  output.innerHTML = mensagem;
} 
function limparTabuada(){
  mensagem = "";
  output.innerHTML = mensagem;
}


let mensagem = "";

let output = document.querySelector("#output");