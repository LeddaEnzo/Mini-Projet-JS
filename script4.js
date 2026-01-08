// Fait le lien entre les objets html et les variables js
const blocs = document.querySelectorAll(".bloc");
const code = document.querySelector("#code");
const input = document.querySelector("#couleur");
const appliquerBtn = document.querySelector("#appliquer");
const reinitialiserBtn = document.querySelector("#reinitialiser");

// Définition des actions qui seront exécutées
// Les carrées sont blancs au chargement de la page 
const couleursBlocs = {
  bloc1: "#FFFFFF",
  bloc2: "#FFFFFF",
  bloc3: "#FFFFFF"
};

// Génération de la couleur aléatoire des blocs quand cliqués
function couleurAleatoire() {
  return (
    "#" + // met un # au début du code héxadémicimal
    Math.floor(Math.random() * 16777215)
    // Math.random donne un numéro entre 0 et 1 puis Math.floor supprime la virgule
    // On obtient ainsi un nombre compris entre 0 et 1677215 (le nombre de valeurs possibles en hexadécimal)
      .toString(16) // convertit le nombre en base 16
      .padStart(6, "0") // permet de completer avec des 0 le nombre si il n'a pas 6 chiffres
  );
}

// Met à jour le texte sous les blocs à chaque changement de couleur
function mettreAJourTexte() {
  code.innerHTML = `
    Bloc 1 : ${couleursBlocs.bloc1}
    Bloc 2 : ${couleursBlocs.bloc2}
    Bloc 3 : ${couleursBlocs.bloc3}
  `; // la fonction attribue le code héxadécimal généré à chaque fois et l'affiche sous les blocs
}

// Initialise le texte dans les blocs
mettreAJourTexte();

// Cliquer sur un bloc pour changer sa couleur
blocs.forEach((bloc) => {
  bloc.addEventListener("click", () => {
    const couleur = couleurAleatoire();
    bloc.style.backgroundColor = couleur;
    couleursBlocs[bloc.id] = couleur;
    mettreAJourTexte();
  });
});

// Appliquer une couleur sélectionnée au fond
appliquerBtn.addEventListener("click", () => {
    let valeur = input.value.trim();
        valeur = "#" + valeur; // met un # pour que l'utilisateur n'ait pas besoin de le faire
    document.body.style.backgroundColor = valeur;
  }
);

// Réinitialiser le fond et le remettre blanc
reinitialiserBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#FFFFFF";
});