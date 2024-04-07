function doisDigitos(numero){
	var str = "";
	if(numero < 10) str += "0";
	str += numero;
	return str;
}

function tresDigitos(numero){
	var str = "";
	if(numero < 100) str += "0";
	str += doisDigitos(numero);
	return str;
}

function quatroDigitos(numero){
	var str = "";
	if(numero < 1000) str += "0";
	str += tresDigitos(numero);
	return str;
}

function cincoDigitos(numero){
	var str = "";
	if(numero < 10000) str += "0";
	str += quatroDigitos(numero);
	return str;
}

function seisDigitos(numero){
	var str = "";
	if(numero < 100000) str += "0";
	str += cincoDigitos(numero);
	return str;
}

function seteDigitos(numero){
	var str = "";
	if(numero < 1000000) str += "0";
	str += seisDigitos(numero);
	return str;
}

// ordenar vetor aleatoriamente
function shuffle(array) {
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}

function legendasVideo(){
	return function(){
		const cues = this.activeCues;
		for (let i = 0; i < cues.length; i++) {
			if (window.matchMedia('(min-width: 720px)').matches) cues[i].div.style.fontSize = '16pt';
			else if (window.matchMedia('(min-width: 120px)').matches) cues[i].div.style.fontSize = '32pt';
			cues[i].div.style.color = 'white';
			cues[i].div.style.textShadow = '-5px -5px 0 black, 5px -5px 0 black, -5px 5px 0 black, 5px 5px 0 black';
			cues[i].div.style.backgroundColor = 'transparent';
		}
	};
}

function substringsEntreDuasSubstringsPreDefinidas(stringOriginal, substringInicio, substringFim) {
	var substrings = [];
	var posicaoInicio = -1;

	while (true) {
		posicaoInicio = stringOriginal.indexOf(substringInicio, posicaoInicio + 1);
		if (posicaoInicio === -1) {
			break;
		}

		posicaoInicio += substringInicio.length;
		var posicaoFim = stringOriginal.indexOf(substringFim, posicaoInicio);

		if (posicaoFim !== -1) {
			var substringEntre = stringOriginal.substring(posicaoInicio, posicaoFim);
			substrings.push(substringEntre);
			posicaoInicio = posicaoFim + substringFim.length - 1;
		} else {
			break;
		}
	}

	return substrings;
}

function copiarValor(elemento) {
		// Seleciona o texto dentro do campo
		elemento.select();
		// Copia o texto para a área de transferência
		document.execCommand('copy');
		// Desfoca o campo para evitar a seleção indesejada ao minimizar a guia
		elemento.blur();
		// Desseleciona o texto
		window.getSelection().removeAllRanges();
}

function criarNumeroComDigitoMaisAEsquerda(numero) {
	// Converte o número para string
	let numeroString = numero.toString();

	// Pega o primeiro dígito
	let primeiroDigito = numeroString[0];

	// Cria uma string com o primeiro dígito seguido por zeros
	let novoNumeroString = primeiroDigito + '0'.repeat(numeroString.length - 1);

	// Converte a string de volta para um número inteiro
	let novoNumero = parseInt(novoNumeroString);

	return novoNumero;
}

function encontrarPosicoesSubstring(string, substring) {
	var posicoes = [];
	var indice = string.indexOf(substring);

	while (indice !== -1) {
		posicoes.push(indice);
		indice = string.indexOf(substring, indice + 1);
	}

	return posicoes;
}

function substituirSubstring(stringEntrada, substringAntiga, novaSubstring) {
	// Usando expressão regular com a flag global (g) para substituir todas as ocorrências
	var expressaoRegular = new RegExp(substringAntiga, 'g');
	
	// Substituir todas as ocorrências da substring antiga pela nova substring
	var stringResultante = stringEntrada.replace(expressaoRegular, novaSubstring);
	
	return stringResultante;
}

async function verificaArquivo(url) {
	try {
		const resposta = await fetch(url);
		if (resposta.status === 200) {
			return true;
		} else {
			return false;
		}
	} catch (erro) {
		return false;
	}
}