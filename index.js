/**
 * Voici le point de depart. Le méthode matchMedia dedans l'objet de Window. Plus d'information est trouver dans le MDN à propos. Faites attention à ce que cette méthode retourne.
 */
const mqList = window.matchMedia("(max-width: 900px)");
console.log(mqList);

const mqList2 = window.matchMedia("(max-width: 600px)");
console.log(mqList2);
