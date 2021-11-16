"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastFilm_0 = prompt('Один из последних просмотренных фильмов?');
const rate_0 = prompt('rate?')
const lastFilm_1 = prompt('Один из последних просмотренных фильмов?');
const rate_1 = prompt('rate?');
personalMovieDB.movies = {
    lastFilm_0: rate_0,
    lastFilm_1: rate_1
}
console.log(personalMovieDB)
