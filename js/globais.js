/* ======================================================
   VARIÁVEIS GLOBAIS
   ====================================================== */

let imagens = [];
let indiceAtual = 0;


/* ======================================================
   CARREGA IMAGENS DE ACORDO COM O CARRO
   ====================================================== */

function carregarImagens() {

    indiceAtual = 0;

    if (carroAtual === "HB20") {
        imagens = [
            "../../img/HB20/Hb20.jpg",
            "../../img/HB20/hb20_2.jpg",
            "../../img/HB20/hb20_3.jpg",
            "../../img/HB20/hb20_4.jpeg",
            "../../img/HB20/hb20_5.webp"
        ];
    } else if (carroAtual === "Jetta") {
        imagens = [
            "../../img/Jetta/Jetta_GLI.jpg",
            "../../img/Jetta/Jetta_2.webp",
            "../../img/Jetta/Jetta_3.webp",
            "../../img/Jetta/Jetta_4.jpg",
            "../../img/Jetta/Jetta_5.jpg"
        ];
    } else if (carroAtual === "M3") {
        imagens = [
            "../../img/M3/M3.jpg",
            "../../img/M3/M3_3.webp",
            "../../img/M3/M3_4.png"
        ];
    } else if (carroAtual === "X5") {
        imagens = [
            "../../img/X5/x5_m.avif",
            "../../img/X5/x5_2.avif",
            "../../img/X5/x5_3.jpg",
            "../../img/X5/x5_4.jpg",
            "../../img/X5/x5_5.jpg"
        ];
    }

    document.getElementById("fotoCarro").src = imagens[indiceAtual];
}


/* ======================================================
   AVANÇAR FOTO
   ====================================================== */

function avancarFoto() {

    indiceAtual++;

    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    document.getElementById("fotoCarro").src = imagens[indiceAtual];
}


/* ======================================================
   VOLTAR FOTO
   ====================================================== */

function voltarFoto() {

    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    }

    document.getElementById("fotoCarro").src = imagens[indiceAtual];
}


/* ======================================================
   EXECUTA AO ABRIR A PÁGINA
   ====================================================== */

window.onload = carregarImagens;



console.log('Deu certo')