// --- PARTIE 1 : FONCTIONS ---

// Correction : Le nom de la fonction est maintenant 'double'
const double = (a) => a * 2;
console.log(double(2));

// Correction : Le nom de la fonction est maintenant 'calcul' (au lieu de 'clacul')
const calcul = (p, taux) => p * taux;

const calcul2 = (p) => {
    if (p > 100) {
        return 0.1 * p;
    } else {
        // Correction : 'prix' a été remplacé par 'p' (la variable passée en paramètre)
        return 0.05 * p;
    }
};

const calcul3 = (p) => p > 100 ? 0.1 * p : 0.05 * p;

// Correction : Appel de 'calcul' au lieu de 'clacul', et 'calcul' a bien été défini plus haut
console.log(calcul(100, 0.2)); 
console.log(calcul2(100));     
console.log(calcul3(100));     


// --- PARTIE 2 : BOUCLES ET TABLEAUX ---

// Correction : Les commentaires en JavaScript utilisent '//' et non '#'
// boucles

const fruitsRouges = ["fraise", "framboise", "cerise"]; // Correction du mot "framboise"

for (let fruit of fruitsRouges) {
    // Correction : Utilisation des accents graves (backticks) pour l'interpolation
    console.log(`La ${fruit} c'est bon !`);
}

fruitsRouges.forEach(fruit => {
    // Correction : Accents graves + ajout des accolades manquantes
    console.log(`LA ${fruit} c'est bon`);
}); // Correction : L'accolade fermante est maintenant correctement placée

const nombre = [12, 3, 4, 10];
let doubles = nombre.map(n => n * 2);
console.log(doubles); 

// Note : forEach retourne toujours 'undefined', donc 'd2' sera undefined. 
// C'est ok si le but est juste d'afficher les valeurs.
let d2 = nombre.forEach(n => console.log(n * 2)); 

let paires = nombre.filter(n => n % 2 === 0);
console.log(paires); 

// Correction : Commentaires syntaxiquement corrects et faute de frappe corrigée ("spread")
// destructuring
// object
// spread