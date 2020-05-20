var bici = [ {

    nome : "pippo",

    peso : 5,

},
{

    nome : "luca",

    peso : 2,

},
{

    nome : "paperino",

    peso : 10,

},
{

    nome : "topolino",

    peso : 12,

},
{

    nome : "pluto",

    peso : 9,

}, ]

//prima variante

var pesoMinimo = -1

var nomeBici = "segnaposto"

for (var i = 0; i < bici.length; i++) {

    var biciCorrente = bici[i].peso

    var nomeCorrente = bici[i].nome

    if (pesoMinimo == -1) {

        pesoMinimo = biciCorrente

        nomeBici = nomeCorrente

    } else if (biciCorrente < pesoMinimo) {

        pesoMinimo = biciCorrente

        nomeBici = nomeCorrente

    }

}

console.log(pesoMinimo);
console.log(nomeBici);

//seconda variante

var pesoMinimo = bici[0].peso;

var nomeBici = bici[0].nome;

for (var i = 1; i < bici.length; i++) {

    var biciCorrente = bici[i].peso;

    var nomeCorrente = bici[i].nome;

     if (biciCorrente < pesoMinimo) {

            pesoMinimo = biciCorrente;

            nomeBici = nomeCorrente;

        }
}

console.log(pesoMinimo);

console.log(nomeBici);
