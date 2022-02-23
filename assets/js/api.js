let gendres  = null;


const showData = (movies,content) => {
    let HTMLCard ='';
    const container = document.getElementById(content);
    movies.forEach(movie => {
        let gendre = '';
        let j =1;
        movie.genre_ids.forEach(g => {
           if(j < movie.genre_ids.length){
                gendre += convertGender(g) + ', ';
            }else{
                gendre += convertGender(g) + '.';
            }
            j++;
        });

        let dateConvert = new Date(movie.release_date);
       
        HTMLCard += `
        <div class="card col-3">
        <div class="card__image">
         <a href="#">
          <img
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
            alt="movie"
            width="250px"
            height="370px"
          />
          </a>
        </div>
        <div class="card__content">
          <p class="card__content__date">${movie.original_language}, ${dateConvert.toDateString()}</p>
          <h4 class="card__content__title">${movie.title}</h4>
          <div class="card__content__rating">
            <div class="imDb">
              <img
                src="/assets/images/IMDb.png"
                width="35px"
                height="17px"
              />
              <p>${movie.vote_average}</p>
            </div>
            <div class="rotten">
              <img
                src="/assets/images/Rotten.png"
                width="16px"
                height="17px"
              />
              <p>${movie.vote_count}</p>
            </div>
          </div>
          <p class="card__content__gendre">${gendre}</p>
        </div>
      </div>`;
    });
    container.innerHTML = HTMLCard;
}

const convertGender = (gendre) => {
    textGen = '';
     if (gendres !== null) {
        gendres.map(g => {
    
            if(g.id === gendre) {
                textGen = g.name;
            } 
        });
    }

    return textGen;
  
}

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
    convertGender();
})



