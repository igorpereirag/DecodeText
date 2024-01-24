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
  