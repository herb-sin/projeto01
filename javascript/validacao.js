function validar() {
    let keyword = document.getElementById("kw").value;
    
    if(keyword == "" || keyword == null || keyword.length < 2) {
      alert("Preencha o campo com uma palavra-chave válida!");
      document.getElementById("box_search").focus();
  }     

    else if(keyword.length > 140) {
      alert("Máximo de 140 caracteres");
      document.getElementById("box_search").focus();
    }

    else{
      alert("Palavra-chave" + " '" + keyword + "' " + " validada!");
    }
  }