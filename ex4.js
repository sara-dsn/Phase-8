var x=window.prompt("Entrez la valeur à multiplier: ");
var n=window.prompt("Entrez le multiplicateur de fin: ");
var nombre=1;
do 
{
    resultat=nombre*x;
    window.alert(nombre+" x "+x+" = "+resultat);
    nombre++;
}while (nombre<=n);