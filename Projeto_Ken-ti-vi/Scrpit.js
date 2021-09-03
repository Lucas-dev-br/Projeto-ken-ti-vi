// 1º pegar o valor da textArea para criar o tweet.
// 2º construir o tweet
// 3º imprimir o tweet


const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector('.conteudoPrincipal__noticias');

function tweet(event) {
    // com esse comando ira enterromper o envio do valor do tweet para o formulario
    event.preventDefault();
    const tweetTextarea = textarea.value;
    tweetText(tweetTextarea);
}

tweetar.addEventListener ('click', tweet);

// Nome, foto, Texto, Nome do usuario, Horário


//função para fazer o tweet
function tweetText (tweetTexto) {
    
    //Horario
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();    
    let i = minutos

    //Objeto do tweet
    const tweet = {
        nome : "Lucas",
        foto : "./Assets/Eu.jpeg",
        usuario : "@LucasHenrique",
        texto : tweetTexto,
        tempo : `${hora}:${minutos}`
    }
    
    listarTweet(tweet);

}

function listarTweet(tweet){
    
    const {nome, foto, usuario, texto, tempo} = tweet
   
    //criando elementos para o template
    let li   = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")
    let img  = document.createElement("img");
    img.src = foto
    img.classList.add("tweet__fotoPerfil");

    let div  = document.createElement("div");
    div.classList.add('tweet__conteudo');
    let h2   = document.createElement("h2");
    h2.innerText = nome;
    
    let span = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`;
    
    let p  = document.createElement("p");
    p.innerText = texto;

    //Adição dos elementos na div
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    //adição de elementos dentro da li
    li.appendChild(img);
    li.appendChild(div);
    console.log(li);
    
    feed.appendChild(li);
}

