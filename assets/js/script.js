let gendres  = null;

setInterval(function () {
    if (window.scrollY > 100) {
      document.querySelector(".nav").style.backgroundColor =
        "rgba(0, 0, 0, 0.8)";
    } else {
      document.querySelector(".nav").style.backgroundColor = "transparent";
    }
  }, 500);

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
        <div class="card col-3 col-sm-6">
        <div class="card__image">
         <a href="detail.html?movie=${movie.id}">
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
          <a style="text-decoration:none" href="detail.html?movie=${movie.id}">
            <h4 class="card__content__title">${movie.title}</h4>
          </a>
          <div class="card__content__rating">
            <div class="imDb">
              <img
                src="assets/images/IMDb.png"
                width="35px"
                height="17px"
              />
              <p>${movie.vote_average}</p>
            </div>
            <div class="rotten">
              <img
                src="assets/images/Rotten.png"
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

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
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