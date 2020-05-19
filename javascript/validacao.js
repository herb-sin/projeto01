function validar() {
  let keyword = document.getElementById("kw").value;

  if (keyword == "" || keyword == null || keyword.length < 2) {
    alert("Preencha o campo com uma palavra-chave válida!");
    document.getElementById("box_search").focus();
  }

  else if (keyword.length > 140) {
    alert("Máximo de 140 caracteres");
    document.getElementById("box_search").focus();
  }

  else {
    alert("Palavra-chave" + " '" + keyword + "' " + " validada!");
  }


  /*
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
  
  
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets");
    xhr.setRequestHeader("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAPDWDQEAAAAAwhC8wAmvbpYad%2BFYLqXv4ep%2BWrE%3DoghUarbwC9b00RNDR5cK64XIt7qyWTm2j3StEjzaAxeASwfady");
  
    xhr.send();
  */



  var xhr = new XMLHttpRequest(); xhr.withCredentials = true; xhr.addEventListener("readystatechange", function () { if (this.readyState === 4) { console.log(this.responseText); } }); xhr.open("GET", "https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?include_entities=true&count=100&q=corona"); xhr.setRequestHeader("authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAPDWDQEAAAAAwhC8wAmvbpYad%2BFYLqXv4ep%2BWrE%3DoghUarbwC9b00RNDR5cK64XIt7qyWTm2j3StEjzaAxeASwfady"); xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); xhr.send();


}
