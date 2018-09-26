function Maior(){
	
	//console.log('ok');
	var n1 = parseInt(document.getElementById("n1").value);	
	var n2 = parseInt(document.getElementById('n2').value);	
	
	if(n1 != "" && n2 != ""){
		//alert(n1);
		if(n1>n2){
			alert("O maior nº é: " + n1);
		}else{
			alert("O maior nº é: " + n2);
		}
	}else{
		alert("Digite os numeros");
	}
}

function Palindrome(){
	//alert('ok');
	
	var word = document.getElementById("palavra").value;
		
	var palavra = word.split("").reverse().join("");	
		
	if(palavra == word){
		alert(word + " é Palindrome");
	}else{
		alert(word + " não é Palindrome");
	}		
}

function caracteres(){
	
	var caracter = document.getElementById("caracter").value;
	alert(caracter);
}