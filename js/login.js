function login(){
    var email = document.getElementById("txtEmail").value;
    var senha = document.getElementById("extPasswork").value; 

};

var cabecalho={
    method: "POST",
    body:JSON.stringify(mesagme),
    headers: {
        'Content-type': 'application/json'

    }
}

fetch(API + "/login", cabecalho)
    .then(res => res.json())
    .then(res => {alert(res.nome);
    })
    .catch(err => {alert("Deu Ruim");
});