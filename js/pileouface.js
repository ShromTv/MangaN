
function launch(){
    var audio =new Audio("../sons/achievement_message_tone.mp3");
    audio.oncanplaythrough =function(){
        audio.play();
    }
    var pile = document.getElementById("pile");
    var face = document.getElementById("face");
    var text = document.getElementById("text1");
    var text1 = document.getElementById("text2");
    var alea=randomNb();
    text.innerHTML="Tirage : ";
    text1.innerHTML="R&eacute;sultat : "
    if(alea==1){
        text.innerHTML+="Pile";
        console.log("pile")
    }
    else{
        text.innerHTML+="Face";
        console.log("face")
    }

    if((pile.checked && alea==1) || (face.checked && alea==2)){
        text1.innerHTML+=" Gagn&eacute; !";
    }
    else{
        text1.innerHTML+=" Perdu !";
    }
}

function randomNb(){
    return Math.floor(Math.random()*(2-1+1))+1;
}