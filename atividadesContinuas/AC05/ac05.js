//--- Exercicio 1 ---// 
function maior(){	
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
function palindrome(){
	var word = document.getElementById("palavra").value;		
	var palavra = "";
	if(word != ""){
		for(i = word.length-1; i>=0; i--){
			palavra += word[i];
			// alert(word[i]);
		}		
		if(palavra == word){
			alert(word + " é Palindrome");
		}else{
			alert(word + " não é Palindrome");
		}	
		return true;
	}		
	alert("Digite uma palavra");
	return false;
}

//--- Exercicio 3 ---// 
function caracteres(){	
	var word = document.getElementById("caracter").value;
	if(word.length >= 6){
		var first = "";	
		var last  = "";	
		x = 3;
		for(i = 0; i < 3; i++){
			first+=word[i];
			last += word.charAt(word.length-x);
			x--;
		}
		if(first == last){
			alert("Os primeiros 3 caracteres da palavra '"+word+"' são iguais aos últimos");
			return true;
		}
		alert("Os primeiros 3 caracteres da palavra '"+word+"' são diferentes aos 3 últimos");
		return false;
	}
	alert("Palavra inválida");	
	return false;
}

//--- Exercicio 4 ---// 
// function uniao(){
// 	var list1 = document.getElementById('arranjo1').value.split(",");
// 	var list2 = document.getElementById('arranjo2').value.split(",");
// 	if(list1 != "" && list2 != ""){
// 		var list_new =[...new Set([...list1,...list2])];
// 		alert(list_new);
// 		return true;
// 	}
// 	alert("Preencha o formulário");
// 	return false;	
// }

function uniao(){
	var list = document.getElementById('arranjo1').value.split(",").concat(document.getElementById('arranjo2').value.split(","));
	var list_new = [];
	var dic = {};
	if(list != ""){		
		for(x = 0; x < list.length; x++){
			dic[list[x]] = list[x];
		}

		for(key in dic){
			list_new.push(key);
		}
		
		alert(list_new);
		return true;
	}
	alert("Preencha o formulário");
	return false;	
}


//--- Exercicio 5 ---//
function interseccao(){
	var list1 = document.getElementById('list1').value.split(",");
	var list2 = document.getElementById('list2').value.split(",");
	var list_new = [];

	if(list1 != '' && list2 != ''){
		for(i = 0; i < list1.length; i++){
			for(x = 0; x < list2.length; x++){
				if(list2[x] == list1[i]){
					list_new.push(list2[x]);
				}
			}
		}
		alert(list_new);
		return true;
	}
	alert("Preencha o formulário");
	return false;	
}


//--- Exercicio 6 ---// 
function pessoa(){
	var nome 	= document.getElementById('nome').value;
	var idade 	= document.getElementById('idade').value;
	var altura	= document.getElementById('altura').value;
	var peso 	= document.getElementById('peso').value;
	if(nome != '' && idade !='' && altura !='' && peso != ''){
		if(idade >= '18' && peso < '90'){
			alert('Ok');
		}else{
			alert('NOK');
		}
		return true
	}
	alert("Preencha o formulário");
	return false;	
}

//--- Exercicio 7 ---//
function removePar(){
	var list = document.getElementById('list').value.split(",");
	if(list != ''){
		for(i = 0; i< list.length; i++){
			if(list[i] % 2 == 0){
				list[i] = 1;
			}
		}
		alert(list);
		return true;
	}
	alert("Preencha o formulário");
	return false;	
}

//--- Exercicio 8 ---//
function sensitive(){
	var word = document.getElementById('word_sensitive').value;
	var cont = 0;
	if(word != ""){
		for(i = 0; i<word.length; i++){
			if(word[i] == "A"){
				cont++;
			}
		}
		alert("A palavra digitado tem : "+cont+" A(s) em caixa alta");
		return true;
	}
	alert("Digite uma palavra");
	return false;
}

//--- Exercicio 9 ---//
function vogais(){
	var word = document.getElementById('vogal').value.toLowerCase();
	var cont = 0;
	if(word != ""){
		for(i = 0; i < word.length; i++){
			if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
				cont++
			}
		}
		alert("O valor digitado contém : "+cont+" vogal(s)");
		return true;
	}
	alert("Digite uma palavra");
	return false;
		
} 


//--- Exercicio 10 ---//
function invertida(){
	var word = document.getElementById('word').value;
	var palavra = '';
	if(word != ""){
		for(i = word.length-1; i>=0; i--){
		palavra += word[i];
		}
		alert(palavra);
		return true;
	}
	alert("Digite uma palavra");
	return false;
}




