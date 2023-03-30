function getData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://www.omdbapi.com/?apikey=b6003d8a&s=All");
    xhr.send();

    xhr.onload=()=>{
        let data = JSON.parse(xhr.response);
        console.log(data.Search)
    }
}

let films = document.querySelector('.films');
let z = fetch('https://www.omdbapi.com/?apikey=b6003d8a&s=All');

z.then((response)=>{
    return response.json();
}).then((info)=>{
    films.innerHTML = "";
    info.Search.forEach((elem)=>{
        films.innerHTML += `
        <div class="movie">
        <img class="poster" src= "${elem.Poster}" alt="imgPoster" width="220" height="300">
            <h2>${elem.Title}</h2>
            <br>
            <h3>${elem.Year}</h3>
            <br>
            <a href="https://30mar.zetfix.online/" target="_blank" class="watch">WATCH!</a>
        </div>
        `
    });
}).catch((err)=>{
    console.log(err);
})