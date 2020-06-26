const movieUl = document.getElementById('list');
const radioBts = document.getElementsByName('filter');

const getImdbURL = (id) => {
    return "https://www.imdb.com/title/" + id; 
}

const addMoviesToDom = (movies) => {
    const movieListItems = movies.map((movie) => {
        const anchor = document.createElement('a');
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        image.src = movie.Poster;
        anchor.href = getImdbURL(movie.imdbID);
        anchor.appendChild(image);
        listItem.appendChild(anchor);
        return listItem;
    });
    movieListItems.forEach(item => {
        movieUl.appendChild(item);
    });
}

const removeMoviesFromDom = () => {
    movieUl.innerHTML = "";
}

const filterMovies = (wordInMovieTitle) => {
    return movies.Movies.filter((item) => {
        return item.Title.includes(wordInMovieTitle);
    })
}

const filterLatestMovies = () => {
    return movies.Movies.filter((item) => {
        return item.Year >= 2014;
    })
}

const handleChangeEvent  = (event) => {
    switch (event.target.value) {
        case "new":
            removeMoviesFromDom();
            addMoviesToDom(filterLatestMovies());
            break;
        case "avenger":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Avenger"));
            break;
        case "xmen":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("X-Men"));
            break;
        case "princess":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Princess"));
            break;
        case "batman":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Batman"));
            break;
        default:
            removeMoviesFromDom();
            addMoviesToDom(movies.Movies);
            break;
    }
}

console.log(radioBts);
radioBts.forEach((button) => {
    button.addEventListener('change', () => handleChangeEvent(event));
})

addMoviesToDom(movies.Movies);