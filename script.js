const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// função para remover acentos e transformar em minúsculas
function normalizeText(text) {
    // funcao para converter o texto para letras minúsculas
    text = text.toLowerCase();
    
    // funçao para remover acentos e caracteres especiais
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function btnEncriptar() {
    const textoEncriptado = encriptar(normalizeText(textArea.value));
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = Desencriptar(normalizeText(textArea.value));
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copyToClipboard() {
    const outputText = mensagem.value;
    navigator.clipboard.writeText(outputText).then(() => {
        // exibe um alert para informar que o texto foi copiado
        alert('texto copiado com sucesso!');
        // recarrega a página para voltar ao resultado inicial
        window.location.reload();
    }).catch(err => {
        console.error('erro ao copiar o texto: ', err);
    });
}
