// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movie) {
  return movie.map(newMovie => newMovie.director);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movie) {

  let thisDirector = movie.filter((dramaMovies) => {
    let thisMovie = dramaMovies.director === 'Steven Spielberg' && dramaMovies.genre.include('Drama');
    return thisMovie;
  })
  return thisDirector;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movie) {

  let sumOfAll = movie.reduce((acc, val) => {
    console.log(acc + val.score);
  }, 0)

  // return Number((sumOfAll / movie.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movie) {
  let sum = 0;
  let numOfScores = 0;
  
  for (let film of movie) {
    for (let eachGenre of film.genre) {
      if (eachGenre === 'Drama');
      sum += film.score;
      numOfScores++;
    }
  }

  return parseFloat((sum / numOfScores).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {
  return movie.sort(( a, b ) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movie) {
  return movie.sort(( a, b ) => a.title - b.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movie) {
  let hours = 0;
  let minutes = 0;

  let editedMovie = movie.map( newMovie => {
    hours = parseInt(newMovie.duration[0]) * 60;

    if (isNaN(newMovie.duration[4])) {
      minutes = parseInt(newMovie.duration[3]);
    } else {
      minutes = parseInt(newMovie.duration[3]) + parseInt(newMovie.duration[4]);
    }

    return newMovie.duration = hours + minutes + ' min';
    // console.log(newMovie);
  })

  return editedMovie;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movie) {



  for (let i = 0; i < movie.length; i++ ) {
    let scoreForYear = movie[i].score;
    for (let j = i + 1; j < movie.length; j++ ) {
    if (movie.year[i] === movie.year[j]) {
      scoreForYear += movie.year[j]
    }
  }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
