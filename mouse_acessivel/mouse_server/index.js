// Auxiliar para simular as entradas(Teclado, click...)
var robot = require("robotjs");
// Auxiliar para leitura da porta serial
var SerialPort = require('serialport');
// Servidor para fornecer os dados para o frontend
var express = require('express'),
    app = express();

// Auxiliar para detectar a porta do arduino
var Avrgirl = require('avrgirl-arduino');

var port = null;

// Detecta a porta do arduino
Avrgirl.list(function(err, ports) { 
  ports.filter(p=>p.serialNumber!=undefined).map(p=>{
  	console.log(p);
		// Conecta na porta serial para receber as coordenadas do joystick 
		port = new SerialPort(p.comName, {
		  parser: SerialPort.parsers.readline('\n')
		});

		// Define o listener para leitura da porta serial
		port.on('data', loop_arduino);
		// Inicia a escuta de movimentacao do mouse
		setInterval(mouseAction, tempoMovimento);
	});  
});





// Variaveis para o controle da posicao do ponteiro
var incX = 0; // Incremento X
var incY = 0; // Incremento Y
var sensibilidade = 2; // Sensibilidade do ponteiro
var tempoMovimento = 1; // Tempo para movimentacao do cursor
var leftClicked = false; // Botao esquerdo esta clicado?
var rightClicked = false; // Botao direito esta clicado?


// Retorno para a aplicacao frontend
var retorno = {direcao:{x:0,y:0}, click:{joystick:false, esquerda:false, direita:false}};

// Funcao que trata as leituras
function loop_arduino(data){
	var values = data.split(',');
	var joystick = {x:Number(values[1]), y:Number(values[0])};
	
	// Testa se esta indo para os lados
	if (joystick.x<500){
		incX = -sensibilidade;
	}else if (joystick.x>525){
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

	// o retorno para o frontend sera somente a direcao
	retorno.direcao.x = incX > 0 ? 1 : incX < 0 ? -1 : 0;
	retorno.direcao.y = incY > 0 ? 1 : incY < 0 ? -1 : 0;

	// Escreve no retorno o status dos botoes
	retorno.click.joystick = (values[2]||'').charAt(0)=='0';
	retorno.click.esquerda = (values[3]||'').charAt(0)=='0';
	retorno.click.direita = (values[4]||'').charAt(0)=='0';

}


// Metodo que realiza as acoes do ponteiro
function mouseAction(){
	// Obtem a posicao do mouse
	var mouse = robot.getMousePos();
    
    if (incX!=0||incY!=0){
		// Realiza o movimento
		mouse.x += incX;
		mouse.y += incY;
		robot.moveMouse(mouse.x, mouse.y);
	}

	// Verifica se precisa clicar
	if (retorno.click.esquerda){
		// Filtro para nao clicar duas vezes seguidas
		if (!leftClicked){
			robot.mouseClick();
			leftClicked = true;
		}
	}else{
		leftClicked = false;
	}

	if (retorno.click.direita){
		// Filtro para nao clicar duas vezes seguidas
		if (!rightClicked){
			robot.mouseClick('right');
			rightClicked = true;
		}
	}else{
		rightClicked = false;
	}

}


// inicia o servidor para fornecer para o
var server = app.listen(1234);

// Fornece a direcao do joystick para o frontend quando requisitado
app.get('/joystick', function(req, res){
    res.send(retorno);
});