import {checkRate} from "./Project_MovieRatingSystem_FairuzAlthafNabul_utils.js";
const daftarFilm = [
    { judul: "Interstellar", rating: 9 },
    { judul: "Inception", rating: 8 },
    { judul: "The Room", rating: 2 },
    { judul: "The 4 Bandung Man", rating: 15 },
    { judul: "Two Dotz!", rating: "bagus" }
];

daftarFilm.forEach(rating => {
    try{
        console.log(checkRate(rating));
    }
    catch (err) {
        console.error('Error :' + err.message);
    }
})