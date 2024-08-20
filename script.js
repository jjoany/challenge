const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function normalizeText(text) {
   
    text = text.toLowerCase();
    
    
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
        
        window.location.reload();
    }).catch(err => {
        console.error('erro ao copiar o texto: ', err);
    });
}

