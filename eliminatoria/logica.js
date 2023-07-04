var clubes = [];

function adicionarClube() {
    var inClube = document.getElementById("inClube");

    var clube = inClube.value;

    if(clube == "") {
        alert("Insira um valor válido");
        inClube.focus();
        return;
    }

    clubes.push(clube);

    inClube.value = "";
    inClube.focus();

    listarClubes();
}

var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionarClube);

function listarClubes() {
    if(clubes.length == 0) {
        alert("Não há clubes na lista");
    }

    var lista = "";

    for(var i = 0; i < clubes.length; i++) {
        lista += (i + 1) + ". " + clubes[i] + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}

var btLista = document.getElementById("btLista");
btLista.addEventListener("click", listarClubes);


function montarTabela() {
   if(clubes.length <= 1) {
    alert("Não pode ser menos que 1 clube!");
    return
   } else if(clubes.length % 2 !== 0) {
    alert("Os clubes não podem ser ímpar");
   } else {
        var tabela = "Tabela de Jogos: \n";
        var totalClubes = clubes.length;
        var rodadas = totalClubes - 1;
        var jogoPorRodada =  totalClubes / 2;
   }

   for(var i = 0; i < rodadas; i++) {
        tabela += "Rodadas" + (i + 1) + ":\n";
        for(var j = 0; j < jogoPorRodada; j++) {
            var clubeA = clubes[j];
            var clubeB = clubes[totalClubes - j - 1];
            tabela += clubeA + " x " + clubeB + '\n'
        }
        
        clubes.splice(1,0, clubes.pop());
   }

   document.getElementById("outLista").textContent = tabela;
}

var btTabela = document.getElementById("btTabela");
btTabela.addEventListener("click", montarTabela);

