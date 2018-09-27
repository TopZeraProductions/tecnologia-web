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
		alert(word[i]);
	}

		
	if(palavra == word){
		alert(word + " é Palindrome");
	}else{
		alert(word + " não é Palindrome");
	}		
}

//--- Exercicio 3 ---// 
function caracteres(){	
	var word = document.getElementById("caracter").value;
	if(word.length >= 6){
		var first = "";	
		var last  = "";	
		for(i = 0; i < 3; i++){
			first += word[i];
		}	
		// for(x = word.length-3; x <= word.length; x--){
		// 	last += word[x];
		// }

		alert(word.length-3);
		return true;
	}
	alert("Palavra inválida");	
	return false;
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

//--- Exercicio 7 ---//
function removePar(){
	var list = document.getElementById('list').value;
	var list_new = [];
	var index = "";

	for(i = 0; i < list.length; i++){
		list= list.replace(",","");	
		
		list_new.push(list[i]);	
		if(list_new[i] % 2 == 0){
			list_new[i] = 1;
		}
	}
	alert(list_new);
	return true
}

//--- Exercicio 10 ---//
function invertida(){
	var word = document.getElementById('word').value;
	var palavra = document.getElementById('palavra').value;
	
	for(i = word.length-1; i>=0; i--){
		palavra += word[i];
	}
	alert(palavra);
}




