document.getElementById("copiar").style.display="none"
    function encriptar(){
		var texto = document.getElementById("texto").value;
		if(texto != ""){
      	var resultado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
      	document.getElementById("resultado").value = resultado;
		document.getElementById("copiar").style.display="block"
		document.getElementById("resultado").style.backgroundImage="none";
		 }else {	
        	document.getElementById("resultado").value = "Ningún mensaje fue encontrado";
			document.getElementById("resultado").style.backgroundImage="none";
			document.getElementById("copiar").style.display="none"
		}
	}
	function desencriptar(){
      	var texto = document.getElementById("texto").value;
      	if(texto !=""){
		var resultado = texto.replace(/enter/g, "e")
                          .replace(/imes/g, "i")
                          .replace(/ai/g, "a")
                          .replace(/ober/g, "o")
                          .replace(/ufat/g, "u");
      	document.getElementById("resultado").value = resultado;
		document.getElementById("copiar").style.display="block"
		document.getElementById("resultado").style.backgroundImage="none";
		}else {
		document.getElementById("resultado").value = "Ningún mensaje fue encontrado";
		document.getElementById("resultado").style.backgroundImage="none";
		document.getElementById("copiar").style.display="none"	
		}
    } 
	function copiartexto() {
 		var copyText = document.getElementById("resultado");
  		copyText.select();
  		document.execCommand("copy");
	}
	function sololetras(e){
		key=e.keyCode || e.which;
		teclado=String.fromCharCode(key).toLowerCase();
		letras=" qwertyuiopasdfghjklñzxcvbnm";
		especiales="8-37-38-46-164";
		teclado_especial=false;
		for(var i in especiales){
			if (key==especiales[i]){
				teclado_especial=true;break;

			}
		}
		if(letras.indexOf(teclado)==-1 && !teclado_especial){
			return false;
		}
	}