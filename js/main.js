
function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; // injetar um texto e html aqui dentro
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar (){
    window.open("http://ww1.globallabs.academy/"); //- abre em uma página
    //window.location.href = "http://ww1.globallabs.academy/"; // abre na mesma página
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada"); 
}

function funcaoChange(elemento){
    console.log(elemento.value) // sempre que ele escolher um valor, aquilo vai ficar guardado
}

/* function soma(n1, n2){
    return n1+n2;
}
*/

/*
 var validar; // variável global
function validaIdade(idade){
   // var validar; -> variável local
    if (idade >=18){
        validar = true
    } else{
        validar=false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);
//console.log(validaIdade(idade));
*/

//alert(soma(5,10));


/*function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}


alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


//var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());



/* 
var count;
for (count=0; count<=5; count++){
    alert(count);
}; */



/*var count = 0;
while(count <= 5){
    console.log (count);
    //count = count +1;
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual a sua idade?");
var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

//var fruta = {nome:"maçã", cor:"vermelha"};
// console.log(fruta.nome);
//alert(fruta.cor);

//var lista = ["maça", "pêra", "laranja"];
//console.log(lista [1]);
//lista.push("uva");
//lista.pop();
//console.log(lista);
//alert(lista [1]);
//console.log (lista.reverse()); // trazer os elementos contrários na minha lista
//console.log (lista);
//console.log (lista.toString());

//console.log (lista.join (" -"));
// var nome = "Williamson Silva"; /* ele é de tipagem dinâmica, ele já vai saber o tipo da string*/
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " +  idade + " anos");
// alert(idade + idade2);

//console.log(nome);
//console.log(n1 * n2);
// console.log(frase.toUpperCase()); tudo maiúsculo
//console.log(frase.toLowerCase());