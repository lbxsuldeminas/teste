// ===============================
// SISTEMA SECRETARIA DE TRANSPORTES
// PARTE 3A
// ===============================

let veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
let editando = -1;

//==============================
// TROCAR TELAS
//==============================

function mostrarTela(id){

    document.querySelectorAll(".tela").forEach(tela=>{
        tela.classList.add("esconder");
    });

    document.getElementById(id).classList.remove("esconder");

    if(id=="veiculos"){
        atualizarTabela();
    }

    atualizarDashboard();

}

//==============================
// SALVAR
//==============================

function salvarDados(){

    localStorage.setItem("veiculos",JSON.stringify(veiculos));

}

//==============================
// CADASTRAR VEÍCULO
//==============================

function salvarVeiculo(){

    let placa=document.getElementById("placa").value.trim();
    let modelo=document.getElementById("modelo").value.trim();
    let marca=document.getElementById("marca").value.trim();
    let ano=document.getElementById("ano").value.trim();
    let cor=document.getElementById("cor").value.trim();
    let km=document.getElementById("km").value.trim();

    if(
        placa==""||
        modelo==""||
        marca==""||
        ano==""||
        cor==""||
        km==""
    ){

        alert("Preencha todos os campos.");

        return;

    }

    let veiculo={

        placa,
        modelo,
        marca,
        ano,
        cor,
        km

    };

    veiculos.push(veiculo);

    salvarDados();

    limparFormulario();

    atualizarTabela();

    atualizarDashboard();

    mostrarTela("veiculos");

}

//==============================
// LIMPAR FORMULÁRIO
//==============================

function limparFormulario(){

    document.getElementById("placa").value="";
    document.getElementById("modelo").value="";
    document.getElementById("marca").value="";
    document.getElementById("ano").value="";
    document.getElementById("cor").value="";
    document.getElementById("km").value="";

}

//==============================
// TABELA
//==============================

function atualizarTabela(){

    let tbody=document.getElementById("listaVeiculos");

    tbody.innerHTML="";

    veiculos.forEach((v,i)=>{

        tbody.innerHTML+=`

        <tr>

        <td>${v.placa}</td>

        <td>${v.marca} ${v.modelo}</td>

        <td>${v.ano}</td>

        <td>${Number(v.km).toLocaleString()} km</td>

        <td>

        <button
        class="editar"
        onclick="editarVeiculo(${i})">

        Editar

        </button>

        <button
        class="excluir"
        onclick="excluirVeiculo(${i})">

        Excluir

        </button>

        </td>

        </tr>

        `;

    });

}

//==============================
// DASHBOARD
//==============================

function atualizarDashboard(){

    document.getElementById("totalVeiculos").innerHTML=veiculos.length;

}

//==============================
// INICIAR
//==============================

atualizarDashboard();

atualizarTabela();
