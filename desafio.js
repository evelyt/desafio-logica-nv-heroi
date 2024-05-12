const nomeHeroi = document.getElementById('nome');
const xpHeroi = document.getElementById('xp');
const botaoEnviar = document.querySelector('submit');

botaoEnviar.addEventListener("click", exibeMensagem());

function exibeMensagem(){
    campoNome = nomeHeroi.value;
    campoXp = xpHeroi.value;
    nivel = defineNivelHeroi(campoXp);
    alert(`O Herói de nome ${campoNome} está no nível de ${nivel}`);
    location.reload();
}

function defineNivelHeroi(campoXp){
    nivelHeroi = 'Ferro';
    if(campoXp<1000){
        nivelHeroi = "Ferro";
    }else if(campoXp>1001 && campoXp<2000){
        nivelHeroi = "Bronze";
    }else if(campoXp>2001 && campoXp<5000){
        nivelHeroi = "Prata";
    }else if(campoXp>5001 && campoXp<7000){
        nivelHeroi = "Ouro";
    }else if(campoXp>7001 && campoXp<8000){
        nivelHeroi = "Platina";
    }else if(campoXp>8001 && campoXp<9000){
        nivelHeroi = "Ascendente";
    }else if(campoXp>9001 && campoXp<10000){
        nivelHeroi = "Imortal";
    }else if(campoXp>=10001){
        nivelHeroi = "Radiante";
    }
    return nivelHeroi;
}

