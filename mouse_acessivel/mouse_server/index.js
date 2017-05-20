// Auxiliar para simular as entradas(Teclado, click...)
var robot = require("robotjs");
// Auxiliar para leitura da porta serial
var SerialPort = require('serialport');
// Servidor para fornecer os dados para o frontend
var express = require('express'),
    app = express();


// Conecta na porta serial para receber as coordenadas do joystick 
var port = new SerialPort('/dev/cu.usbmodem14411', {
  parser: SerialPort.parsers.readline('\n')
});

// Define o listener para leitura da porta serial
port.on('data', loop_arduino);

// Variaveis para o controle da posicao do ponteiro
var incX = 0; // Incremento X
var incY = 0; // Incremento Y
var sensibilidade = 2; // Sensibilidade do ponteiro
var tempoMovimento = 1; // Tempo para movimentacao do cursor

// Retorno para a aplicacao frontend
var retorno = {direcao:{x:0,y:0}, botao:{joystick:false, clickBotao:false}};

// Funcao que trata as leituras
function loop_arduino(data){
	var values = data.split(',');
	var joystick = {x:Number(values[1]), y:Number(values[0])};
	
	// Testa se esta indo para os lados
	if (joystick.x<500){
		incX = -sensibilidade;
	}else if (joystick.x>515){
		incX = sensibilidade;
	}else{
		incX = 0;
	}

	if (joystick.y<500){
		incY = sensibilidade;
	}else if (joystick.y>525){
		incY = -sensibilidade;
	}else{
		incY = 0;
	}

	console.log(values);

	// o retorno para o frontend sera somente a direcao
	retorno.direcao.x = incX > 0 ? 1 : incX < 0 ? -1 : 0;
	retorno.direcao.y = incY > 0 ? 1 : incY < 0 ? -1 : 0;

	// Escreve no retorno o status dos botoes
	//retorno.botao.joystick = values[2].charAt(0)=='0';
}


// Metodo que realiza a movimentacao do ponteiro
function mouseMove(){
	// Obtem a posicao do mouse
	var mouse = robot.getMousePos();
    
    if (incX!=0||incY!=0){
		// Realiza o movimento
		mouse.x += incX;
		mouse.y += incY;
		robot.moveMouse(mouse.x, mouse.y);
	}
}

// Inicia a escuta de movimentacao do mouse
setInterval(mouseMove, tempoMovimento);

// inicia o servidor para fornecer para o
var server = app.listen(1234);

// Fornece a direcao do joystick para o frontend quando requisitado
app.get('/joystick', function(req, res){
    res.send(retorno);
});