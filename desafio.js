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
    nivelHeroi = 'Null';
    if(campoXp<1000){
        nivelHeroi = "Ferro";
    }if(campoXp>1001 && campoXp<2000){
        nivelHeroi = "Bronze";
    }if(campoXp>2001){
        nivelHeroi = "Prata";
    }if(campoXp>=5001){
        nivelHeroi = "Ouro";
    }if(campoXp>=7001){
        nivelHeroi = "Platina";
    } if(campoXp>=8001 ){
        nivelHeroi = "Ascendente";
    } if(campoXp>=9001){
        nivelHeroi = "Imortal";
    }if(campoXp>=10001){
        nivelHeroi = "Radiante";
    }
    return nivelHeroi;
}

