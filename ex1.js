var n=1;
var pre=window.prompt("Entrez le prénom N°"+n+" ou laissez le champ vide pour arrêter la saisie");
console.log("prénom"+n+"est"+pre);
while (pre!=0)
{
n++;
pre=window.prompt("Entrez le prénom N°"+n+" ou laissez le champ vide pour arrêter la saisie");
  console.log("prénom"+n+"est"+pre);
}