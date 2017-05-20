int JoyStick_X = A0; // x
int JoyStick_Y = A1; // y
int JoyStick_Z = 3; // key
int btn        = 2; // Botao 
int btn2        = 4; // Botao2
 
void setup ()
{
  pinMode (JoyStick_X, INPUT);
  pinMode (JoyStick_Y, INPUT);
  pinMode (JoyStick_Z, INPUT_PULLUP);
  pinMode (btn, INPUT_PULLUP);
  pinMode (btn, INPUT_PULLUP);
  Serial.begin (9600); // 9600 bps
}
void loop ()
{
  int x, y, z, b, b2;
  x = analogRead (JoyStick_X);
  y = analogRead (JoyStick_Y);
  z = digitalRead (JoyStick_Z);
  b = digitalRead (btn);
  b2 = digitalRead (btn2);
  
  Serial.print (x, DEC);
  Serial.print (",");
  Serial.print (y, DEC);
  Serial.print (",");
  Serial.print (z, DEC);
  Serial.print (",");
  Serial.print (b, DEC);
  Serial.print (",");
  Serial.println (b2, DEC);
  delay (100);
}
