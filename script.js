let monInput = document.getElementById("montantDalasis");
let monBouton = document.getElementById ("boutonConvertir");
let monResultat = document.getElementById("resultat");
monBouton.addEventListener('click', function() { 

let valeurTaper = monInput.value
console.log(valeurTaper);
let montantDollars = (valeurTaper / 70).toFixed(2);
monResultat.textContent = `Le résultat est de ${montantDollars} dollars`
});
