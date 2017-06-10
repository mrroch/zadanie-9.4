//wybór liczby
var number = 5;

//funkcja
function drawTree(number) {

    //zewnetrzna pętla 
    for (var i = 0; i <= 5; i++) {
        var star = (' ');

        //wewenętrzna pętla
        for (var j = 0; j = i; j++)
            star += '*';
    }
    console.log(star);
}