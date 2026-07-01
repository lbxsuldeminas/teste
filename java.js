
// ===========================================
// SECRETARIA MUNICIPAL DE TRANSPORTES
// Conceição do Rio Verde - MG
// Dashboard - Versão 1.0
// ===========================================

console.log("Sistema iniciado com sucesso!");

// ===============================
// DATA E HORA
// ===============================

function atualizarRelogio() {

    const agora = new Date();

    const opcoes = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const data = agora.toLocaleDateString("pt-BR", opcoes);
    const hora = agora.toLocaleTimeString("pt-BR");

    document.title =
        "Secretaria de Transportes | " +
        hora;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ===============================
// CLIQUE NOS CARDS
// ===============================

cards.forEach(card => {

    card.addEventListener("click", () => {

        const titulo = card.querySelector("h3").innerText;

        alert("Em breve será aberta a tela de: " + titulo);

    });

});

// ===============================
// CLIQUE NAS FOTOS
// ===============================

const fotos = document.querySelectorAll(".foto");

fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        alert("Aqui futuramente será possível visualizar ou adicionar fotos.");

    });

});

// ===============================
// MENU LATERAL
// ===============================

const itensMenu = document.querySelectorAll(".sidebar li");

itensMenu.forEach(item => {

    item.addEventListener("click", () => {

        itensMenu.forEach(li => {

            li.classList.remove("active");

        });

        item.classList.add("active");

    });

});

// ===============================
// BOAS-VINDAS
// ===============================

window.addEventListener("load", () => {

    console.log("--------------------------------------");
    console.log("Secretaria Municipal de Transportes");
    console.log("Conceição do Rio Verde - MG");
    console.log("Sistema carregado.");
    console.log("--------------------------------------");

});

// ===============================
// FUNÇÕES FUTURAS
// ===============================

// Cadastro de veículos
function abrirVeiculos() {
    console.log("Tela de veículos.");
}

// Cadastro de motoristas
function abrirMotoristas() {
    console.log("Tela de motoristas.");
}

// Almoxarifado
function abrirEstoque() {
    console.log("Tela de estoque.");
}

// Combustível
function abrirCombustivel() {
    console.log("Tela de combustível.");
}

// Manutenções
function abrirManutencoes() {
    console.log("Tela de manutenções.");
}

// Relatórios
function abrirRelatorios() {
    console.log("Tela de relatórios.");
}

// Upload de fotos
function abrirFotos() {
    console.log("Tela de fotos.");
}
