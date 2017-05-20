// Auxiliar para simular as entradas(Teclado, click...)
var robot = require("robotjs");
// Auxiliar para leitura da porta serial
var SerialPort = require('serialport');

// Conecta na porta serial para receber as coordenadas do joystick 
var port = new SerialPort('/dev/cu.usbmodem14411', {
  parser: SerialPort.parsers.readline('\n')
});

// Define o listener para leitura da porta serial
port.on('data', loop_arduino);

// Funcao que trata as leituras
function loop_arduino(data){
	var values = data.split(',');
	console.log('Arduino: ', values);
}