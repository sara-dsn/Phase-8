var myVar=window.prompt("Entrez un mot en minuscule:");
var longueur = myVar.length;
var i=0;
// var mot = myVar.substring(n,longueur);
var voyelles=0;

for (i=0; i<=longueur; i++)
{
    var n= myVar.substring(i,i+1);
if (n=="a")
{
voyelles++;
}
else if (n=="e")
{
voyelles++;
}
else if (n=="i")
{
voyelles++;
}
else if (n=="o")
{
voyelles++;
}
else if (n=="u")
{
voyelles++;
}
else if (n=="y")
{
voyelles++;
}

}

window.alert("Il y a "+voyelles+" voyelles");

