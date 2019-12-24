import {ADD_MOVIE,REMOVE_MOVIE,GET_MOVIES,GET_NUMBER} from "./index"


//ACTION POUR AJOUTER UN FILM DANS LA LISTE DES SOUHAITS
export const addMovie = movie =>{
    let movies = JSON.parse(localStorage.getItem("movies")) //verification que je n'ai pas de film enregistré dans mon local storage. si oui, j'ajoute le film passé en param dans le tableau de film du local storage
    if(movies){
        movies = [...movies, movie]
    }
    else{ // je crée un tableau vide et j'ajoute mon film au tableau. ce tableau jle push sur le local storage
        movies = []
        movies.push(movie)
    }
    localStorage.setItem("movies", JSON.stringify(movies))
    return {
        type: ADD_MOVIE,
        payload: movies
    }
}

//ACTION POUR SUPPRIMER UN FILM DE LA LISTE DES SOUHAITS
export const removeMovie = movieId => {
    const oldMovies = JSON.parse(localStorage.getItem("movies"))
    const movies = oldMovies.filter(movie=> movie.id !== movieId) // recupere les films dont l'id est different de l'id passé en param
    localStorage.setItem("movies", JSON.stringify(movies))
    return{
        type: REMOVE_MOVIE,
        payload: movies
    }
}

//ACTION POUR RECUPERER MES FILMS
export const getMovies = () =>{
    const movies = JSON.parse(localStorage.getItem("movies"))
    return {
        type:GET_MOVIES,
        payload:movies
    }
}

//RECUPERE LE NOMBRE DE FILMS DANS LA LISTE DE SOUHAIT POUR LE BADGE
export const getNumber = () => {
    const movies = JSON.parse(localStorage.getItem("movies"))
    let number 

    if(movies)
        number = movies.length
    else
        number =0

    return{
        type:GET_NUMBER,
        payload: number
    }
}