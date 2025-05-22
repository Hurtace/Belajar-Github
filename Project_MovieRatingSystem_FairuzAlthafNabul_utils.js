export function checkRate (film) {
    if (film.rating < 1 || film.rating > 10) {
        throw new Error('Range rating tidak sesuai format');
    }
    if (typeof film.rating !== 'number') {
        throw new Error('Rating yang anda masukkan tidak valid');
    }
    return `Judul :  ${film.judul}, Rating ${film.rating} `;
} 