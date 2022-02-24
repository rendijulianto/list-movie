





window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=190e4cff1377ee683cd88f35c0f7fa19`)
    .then(res => res.json())
    .then(data => {
        gendres = data.genres;
    });
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=190e4cff1377ee683cd88f35c0f7fa19`)
    .then(res => res.json())
    .then(data => {
        const results = data.results;
      
        showData(results ,'movies_popular');
    });
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=190e4cff1377ee683cd88f35c0f7fa19`)
    .then(res => res.json())
    .then(data => {
        const results = data.results;
     
        showData(results ,'movies_upcoming');
    });
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=190e4cff1377ee683cd88f35c0f7fa19`)
    .then(res => res.json())
    .then(data => {
        const results = data.results;
     
        showData(results ,'movies_playnow');
    });
    convertGender();
})


