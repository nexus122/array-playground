// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// ✔️ Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter( word => word[0] == "e")); // TODO [ 'elite', 'exuberant']

// ✔️ Usa el método filter para filtrar las palabras que empiezan por vocal

// Definimos un array de vocales para hacer un includes
const vocales =["a","e","i","o","u"];

console.log(words.filter( word => vocales.includes(word[0]))); // TODO [ 'elite', 'exuberant', 'away']
