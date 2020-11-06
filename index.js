const preaUsor = ["Prea u&#351or coae",
    "Iar pierzi, iar te oftici",
    "&#350i cum e s&#259 pierzi?",
    "&#354ine algoritmu cu mine c&#259 eu l-am scris",
    "Veronico, preg&#259te&#351te cana! &#206n sara asta beau zam&#259...",
    "( •_•)>⌐■-■   (⌐■_■)    gg ez win",
    "( ´･･)ﾉ(._.`)  *pat pat* nu mai boci",
    "Uite un emoji cu tine - 🚮 - c&#259 esti 'garbage at this game' "];
const cacat = ["A&#351a ceva nu s-o mai v&#259zut de la Hitler &#238ncoace",
    "Nu se ezist&#259 a&#351a ceva",
    "Coi eu nu te cred pe tine te t",
    "M&#226nca-&#355i-a&#351 ochii"];
const trisezi = ["Te-n plm c&#259 ai dat o lab&#259 &#351i ai bulan",
    "Tu crezi c&#259 eu nu v&#259d c&#259 modifici codu HTML? N-ai cum s&#259 c&#226&#351tigi altfel",
    "Irose&#351ti bulanu pe mizeria asta de joc (5 euro pe steam)",
    "Joac&#259 &#238n plm la lotto 4/69",
    "BRAVO RADUUUUU! <br>Bravo domnu Radu! <br>Bra <br>vo!",
    "(╯°□°）╯︵ ┻━┻",
    "(╬▔皿▔)╯  ragequit direct"];

function arunca(){
    var scor1 = 0, scor2 = 0;
    var zaruri = [];

    for(var i = 0; i < 4; ++i){
        zaruri[i] = Math.floor(Math.random() * 6) + 1;
        var src = "images/dice" + zaruri[i] + "_";
        if(i < 2){
            scor1 += zaruri[i];
            src += "rosu.png";
        }
        else{
            scor2 += zaruri[i];
            src += "albastru.png";
        }
        document.getElementById("img" + i).setAttribute("src", src);
    }

    var randomNumber = Math.random();
    var index = 0;
    if(scor1 < scor2){
        index = Math.floor(randomNumber * preaUsor.length);
        document.getElementById("mesajSiropos").innerHTML = preaUsor[index];
    }
    else if(scor1 === scor2){
        index = Math.floor(randomNumber * cacat.length);
        document.getElementById("mesajSiropos").innerHTML = cacat[index];
    }
    else{
        index = Math.floor(randomNumber * trisezi.length);
        document.getElementById("mesajSiropos").innerHTML = trisezi[index];
    }

    document.getElementById("scorp1").innerHTML = scor1;
    document.getElementById("scorp2").innerHTML = scor2;
    if(scor1 === 6 && scor2 === 9){
        document.getElementById("scorp2").innerHTML = scor2 + "😉";
    }
}
