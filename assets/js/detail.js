

const showDataDetail = (movie) => {
   document.getElementById('movie_title').innerHTML = movie.title;
   document.getElementById('movie_tailer').href = movie.homepage;
   document.getElementById('movie_description').innerHTML = movie.overview;
   document.getElementById('vote_average').innerHTML = movie.vote_average;
   document.getElementById('vote_count').innerHTML = movie.vote_count;
   document.querySelector(".hero").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
   document.querySelector(".hero").style.backgroundSize  = `cover`;
   document.querySelector(".hero").style.backgroundPosition  = `center`;
   document.querySelector(".hero").style.backgroundRepeat = `no-repeat`;
   document.title += ' | '+ movie.title;
  
}


window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=190e4cff1377ee683cd88f35c0f7fa19`)
    .then(res => res.json())
    .then(data => {
        gendres = data.genres;
    });
    let idMovie = getParameterByName('movie');
    if(idMovie) {
        fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=190e4cff1377ee683cd88f35c0f7fa19`)
        .then(res => res.json())
        .then(data => {
            const result = data;
            showDataDetail(result);
        });
        convertGender();
    } else {
        window.location.href = "/";
    }


    fetch(`https://api.themoviedb.org/3/movie/${idMovie}/recommendations?api_key=190e4cff1377ee683cd88f35c0f7fa19`)
    .then(res => res.json())
    .then(data => {
        const results = data.results;
     
        showData(results ,'movies_rekomen');
    });

})