function verProduto() {
    let valor = document.getElementById("pro1").value;
    let resultado = document.getElementById("resultado");

    if (valor == "1") {
        resultado.innerHTML = `
            <h2>Mouse</h2>
            <h3>R$ 50</h3>
            <p>
            O mouse serve para controlar o cursor na tela.
            </p>
            <img src="imgs/mouse.jpg" width="200">
        `;
    } else if (valor == "2") {
        resultado.innerHTML = `
            <h2>Teclado</h2>
            <h3>R$ 150</h3>
            <p>
            O teclado é utilizado para digitar texto e comandos.
            </p>
            <img src="imgs/teclado.jpg" width="200">
        `;
    } else if (valor == "3") {
        resultado.innerHTML = `
            <h2>Cabo USB</h2>
            <h3>R$ 20</h3>
            <p>
            O cabo USB é usado para conectar dispositivos ao computador.
            </p>
            <img src="imgs/cabo usb.jpg" width="200">
        `;
    } else if (valor == "4") {
        resultado.innerHTML = `
            <h2>Monitor</h2>
            <h3>R$ 900</h3>
            <p>
            O monitor é utilizado para exibir a imagem e o texto do computador.
            </p>
            <img src="imgs/monitor.jpg" width="200">
        `;
    } else if (valor == "5") {
        resultado.innerHTML = `
            <h2>Antivírus</h2>
            <h3>R$ 60</h3>
            <p>
            O antivírus é um software que protege o computador contra vírus e outras ameaças.
            </p>
            <img src="imgs/antivirus.jpg" width="200">
        `;
    } else if (valor == "6") {
        resultado.innerHTML = `
            <h2>Cabo HDMI</h2>
            <h3>R$ 30</h3>
            <p>
            O cabo HDMI é utilizado para transmitir áudio e vídeo de alta definição.
            </p>
            <img src="imgs/hdmi.jpg" width="200">
        `;
    } else if (valor == "7") {
        resultado.innerHTML = `
            <h2>Placa de Vídeo</h2>
            <h3>R$ 1200</h3>
            <p>
            A placa de vídeo é responsável por processar e exibir gráficos no computador.
            </p>
            <img src="imgs/placadevideo.jpg" width="200">
        `;
    } else if (valor == "8") {
        resultado.innerHTML = `
            <h2>Processador</h2>
            <h3>R$ 800</h3>
            <p>
            O processador é o cérebro do computador, responsável por executar instruções e realizar cálculos.
            </p>
            <img src="imgs/processador.jpg" width="200">
        `;
    } else if (valor == "9") {
        resultado.innerHTML = `
            <h2>Memória RAM</h2>
            <h3>R$ 400</h3>
            <p>
            A memória RAM é utilizada para armazenar temporariamente os dados e programas em execução no computador.
            </p>
            <img src="imgs/ram.jpg" width="200">
        `;
    } else if (valor == "10") {
        resultado.innerHTML = `
            <h2>Placa Mãe</h2>
            <h3>R$ 600</h3>
            <p>
            A placa mãe é a principal placa de circuito do computador, onde todos os componentes são conectados.
            </p>
            <img src="imgs/placamae.jpg" width="200">
        `;
    } else if (valor == "11") {
        resultado.innerHTML = `
            <h2>HD/SSD</h2>
            <h3>R$ 500</h3>
            <p>
            O HD (Disco Rígido) ou SSD (Disco Sólido) é utilizado para armazenar dados permanentemente no computador.
            </p>
            <img src="imgs/hd.jpg" width="200">
        `;
    } else if (valor == "12") {
        resultado.innerHTML = `
            <h2>Fonte de Alimentação</h2>
            <h3>R$ 300</h3>
            <p>
            A fonte de alimentação é responsável por fornecer energia elétrica para todos os componentes do computador.
            </p>
            <img src="imgs/fonte.jpg" width="200">
        `;
    } else {
        resultado.innerHTML = "<p>Produto não encontrado.</p>";
    }

}

function limparLista() {
    document.getElementById("resultado").innerHTML = "";
}