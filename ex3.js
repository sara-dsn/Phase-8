var somme=0;
var moyenne=0;
var diviseur=1;
while (n!=0)
{
    if (n){
    somme=somme+n;
    moyenne=somme/diviseur;
    diviseur++;
    }
    var n=parseInt(window.prompt("Entrez un nombre entier: "));
}
window.alert("La somme des entiers est "+somme+" et sa moyenne est "+moyenne);