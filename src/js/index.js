import '../css/style.css';
const movieLists = document.querySelector('.List');
let _defaultData = [{
        id: 1,
        src: "./images/image-equilibrium.jpg",
        label: "Romance to the Rescue",
        basicInfo: {
            year: 2019,
            time: '90 min',
            Likes: '10 Likes'
        }
    }, {
        id: 2,
        src: "./images/image-equilibrium.jpg",
        label: "Romance to the Rescue",
        basicInfo: {
            year: 2015,
            time: '80 min',
            Likes: '0 Likes'
        }
    },
    {
        id: 3,
        src: "./images/image-equilibrium.jpg",
        label: "Romance to the Rescue",
        basicInfo: {
            year: 1019,
            time: '1 hr',
            Likes: '500 Likes'
        }
    },
    {
        id: 3,
        src: "./images/image-equilibrium.jpg",
        label: "Romance to the Rescue",
        basicInfo: {
            year: 1019,
            time: '1 hr',
            Likes: '500 Likes'
        }
    }
];
movieLists.innerHTML = _defaultData.map(movie => (
    ` <div class="card" id=${movie.id}>
    <img src=${movie.src} alt="" />
    <div class="contatin">
        <div class="card-header">
            <Label>${movie.label}</Label>

            <span class="material-symbols-outlined">
          favorite 
        </span>
        </div>
        <ul>
            <li>
               ${movie.basicInfo.year}
            </li>
            <li>${movie.basicInfo.time}
            </li>
            <li>
                ${movie.basicInfo.Likes}
            </li>
        </ul>
        <button id=${movie.id}>Comment</button>
        <button id=${movie.id}>Reservation</button>
    </div>
</div>`
));