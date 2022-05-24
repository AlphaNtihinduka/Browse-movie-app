import _default from "../config/default"

export const getMovieHandler = async() => {
    try {
        const response = await fetch(_default._MOVE_API_URL);
        const movieListsJson = await response.json();
        return movieListsJson;
    } catch (error) {
        throw new Error(error);
    }
}

export const renderMovieHandler = (Database) =>
    Database.map(movie => (
        ` <div class="card" id=${movie.id}>
   <a href=${movie.officialSite}><img src=${movie.image.medium} alt="" /></a>
    <div class="container">
        <div class="card-header">
            <Label>${movie.name}</Label>
            <span class="material-symbols-outlined">
          favorite 
        </span>
        </div>
        <ul>
            <li>${movie.premiered}</li>
            <li>${movie.averageRuntime} min</li>
            <li>0 Likes</li>
        </ul>
        <button id=${movie.id}>Comment</button>
        <button id=${movie.id}>Reservation</button>
    </div>
</div>`
    ));