//--- Exercicio 1 ---// 
function Maior(){	
	var n1 = parseInt(document.getElementById("n1").value);	
	var n2 = parseInt(document.getElementById('n2').value);	
	
	if(n1 != "" && n2 != ""){
		if(n1>n2){
			alert("O maior nº é: " + n1);
		}else{
			alert("O maior nº é: " + n2);
		}
	}else{
		alert("Digite os numeros");
	}
}

//--- Exercicio 2 ---// 
function Palindrome(){
	var word = document.getElementById("palavra").value;		
	var palavra = "";
	for(i = word.length-1; i>=0; i--){
		palavra += word[i];
	}
		
	if(palavra == word){
		alert(word + " é Palindrome");
	}else{
		alert(word + " não é Palindrome");
	}		
}

//--- Exercicio 3 ---// 
function caracteres(){	
	var caracter = document.getElementById("caracter").value;
	alert(caracter);
}

//--- Exercicio 6 ---// 
function pessoa(){
	var nome 	= document.getElementById('nome').value;
	var idade 	= document.getElementById('idade').value;
	var altura	= document.getElementById('altura').value;
	var peso 	= document.getElementById('peso').value;
	if(nome != '' && idade !='' && idade >= '18' && altura !='' && peso != '' && peso < '90'){
		alert('Ok');
	}else{
		alert('NOK');
	}
}

//--- Exercicio 10 ---//
function invertida(){
	word = document.getElementById('word').value;
	palavra = document.getElementById('palavra').value;
	
	for(i = word.length-1; i>=0; i--){
		palavra += word[i];
	}
	alert(palavra);
}




