function  codificarTexto() {
    try {
      var texto = document.getElementById('inputText').value;
      var textoCodificado = btoa(texto);
      document.getElementById('resultMessage').innerText = textoCodificado;
      document.getElementById('textoStatus').innerText = " Texto criptografado:";
      document.getElementById('inputText').value = "";
    } catch (error) {
      document.getElementById('resultMessage').innerText = "Erro ao codificar o texto.";
      console.error("Erro ao codificar o texto:", error);
    }
  }
  
  
  function descodificarTexto() {
    try {
      var texto = document.getElementById('inputText').value;
      var textoDecodificado = atob(texto);
      document.getElementById('resultMessage').innerText = textoDecodificado;
      document.getElementById('textoStatus').innerText = " Texto descriptografado:";
      document.getElementById('inputText').value = "";
      
    } catch (error) {
      document.getElementById('resultMessage').innerText = "Erro ao decodificar o texto.";
      console.error("Erro ao decodificar o texto:", error);
    }
  }
  
  function copy() {
    try {
      var resultTextElement = document.getElementById('resultMessage');
      var textArea = document.createElement('textarea');
    
      textArea.value = resultTextElement.innerText;
      document.body.appendChild(textArea);
    
      textArea.select();
      document.execCommand('copy');
    
      document.body.removeChild(textArea);
     console.log("Texto copiado para a Área de Transferência.");
     
    } catch (error) {
      console.error("Erro ao copiar para a Área de Transferência:", error);
    }
  }
  


  //codigo pra implementações futuras de novos metodos de criptografia 
  function encode(text, algorithm) {
    if (algorithm === 'base64') {
        return btoa(text);
    } else if (algorithm === 'sha256') {
        /
    } else if (algorithm === 'md5') {
      
    } 
    return '';
    

    }
//codigo pra implementações futuras de novos metodos de criptografia 
function decode(encodedText, algorithm) {
    if (algorithm === 'base64') {
        return atob(encodedText);
    } else if (algorithm === 'sha256') {
       
    } else if (algorithm === 'md5') {
      
    } 

    return '';
}
//codigo pra implementações futuras de novos metodos de criptografia 
function rot13(text) {
  return text.replace(/[a-zA-Z]/g, function (char) {
      var offset = char <= 'Z' ? 65 : 97;
      return String.fromCharCode((char.charCodeAt(0) - offset + 13) % 26 + offset);
  });
}
//codigo pra implementações futuras de novos metodos de criptografia 
function hexEncode(text) {
  return text.split('').map(function (char) {
      return char.charCodeAt(0).toString(16);
  }).join('');
}
//codigo pra implementações futuras de novos metodos de criptografia 
function base32Encode(text) {
  let binaryString = '';
  for (let i = 0; i < text.length; i++) {
      const binaryChar = text[i].charCodeAt(0).toString(2).padStart(8, '0');
      binaryString += binaryChar;
  }

  let encoded = '';
  for (let i = 0; i < binaryString.length; i += 5) {
      const chunk = binaryString.substr(i, 5).padEnd(5, '0');
      encoded += base32Chars[parseInt(chunk, 2)];
  }

  return encoded;
}
function urlEncode(text) {
    return encodeURIComponent(text);
}
//codigo pra implementações futuras de novos metodos de criptografia 
function urlEncode(text) {
  return encodeURIComponent(text);
}