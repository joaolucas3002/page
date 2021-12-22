let saibaMais = document.querySelector("#saiba-mais");
saibaMais.onclick = function saiba(){
    return{
        from:document.querySelector("#from").style.display = "inline-block",
        saibaMais:document.querySelector("#saiba-mais").style.display = "none",
    }
}
let x = document.querySelector("#fechar");
x.onclick = function saiba(){
    return{
        from:document.querySelector("#from").style.display = "none",
        saibaMais:document.querySelector("#saiba-mais").style.display = "block",
    }
}


let valor = document.querySelector("#button") 
valor.onclick = function enviar() {
    return{
        text:document.querySelector("#text").value,
        mail:document.querySelector("#email").value,
            pas:console.log(text,mail)
    }
    }
    






