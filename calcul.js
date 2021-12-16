var saisir = document.querySelector('#ecran1'); 

function affiche(argument){
    console.log(argument);
saisir.value +=argument
}
function agal(){
  let resultat = saisir.value;
  saisir.value = eval(resultat); 
}
function clear(){
     = resultat.value;
    effacer = 0;
}