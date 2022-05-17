let giphy;
let gui;

//var contador = 0;

//start//
let s1;
let s2;
let p1;
let p2;
let p3;

let dogeee;
let cheeems;

//controles//
let p4;

var home;
var controles;
var start;
var boton;
var fondomenu;
var x;
var x0;

//start//
var fondomenu;
var cancion;
var chispas;
var resplandor;
var doge;
var cheems;

//controles//
var fondocontrol;

//doge game//
//var imágenes//
var fondo4;
var player2;
var player1;
var elote;
var esquite;
var gameOver;
var gameOver2;
var puntuacion;
var nivel2;
let p;

//estas variables corresponden a la geometría que va cayendo/
// para el elote
var x_el;
var y_el;
var vel_el;

//para el esquite
var x_esq;
var y_esq;
var vel_esq;

//estas variables son de la ubicación del control//
var a0;
var b0;
var vel0;

var c0;
var d0;
var vel01;

var controles;
var start;

var a;
var a0;

function preload() {
  giphy = loadImage("fondogif.gif");
  fondomenu = loadImage("menu.jpg");
  fondocontrol = loadImage("controles.jpg");
  fuente = loadFont("PAC-FONT.TTF");
  fuente1 = loadFont("04B_30__.TTF");
  cancion = loadSound("star.mp3");
  chispas = loadSound("chispas.mp3");
  resplandor = loadSound("resplandor.mp3");
  dog = loadImage("dogee.png");
  dog2 = loadImage("cheemss.png");
  doge = loadImage("doge.jpg");
  cheems = loadImage("cheemss.jpg");
}

function setup() {
  createCanvas(1920, 1080);
  imageMode(CENTER);

  fondo4 = loadImage("fondo4.jpg");
  player2 = loadImage("player2.png");
  esquite = loadImage("esquite.png");
  gameOver = loadImage("gameover.jpg");
  gameOver2 = loadImage("gameover2.jpg");
  nivel2 = loadImage("nivel2.jpg");
  player1 = loadImage("player1.png");
  elote = loadImage("elote.png");
  puntuacion = 0;

  //aquí estoy iniciando las variables del punto que va cayendo//

  // para el esquite
  x_esq = 0;
  y_esq = height * 0.5;
  vel_esq = 3;

  // para el elote
  x_el = width;
  y_el = height * 0.5;
  vel_el = 4;

  //aqui iniicio las variables del control p1//
  a0 = width / 2;
  b0 = height;
  vel0 = 5;

  //aqui iniicio las variables del control 2//
  c0 = width / 2;
  d0 = height - 50;
  vel01 = 7;

  gui = createGui();

  //home//

  controles = createToggle("controles", 740, 300, 450, 90);
  start = createToggle("Players", 828, 475, 280, 100);
  boton = createToggle("M", 75, 1000, 50, 50);
  dogeee = createToggle("Doge", 700, 659, 200, 80);
  cheeems = createToggle("Cheems", 1070, 659, 255, 80);
  //controles//
  p4 = createButton("X", 1750, 59, 100, 80);

  //SETTINGS//
  s1 = createSlider("Slider", 900, 260, 350, 30, 0, 1);
  s1.visible = false;

  s2 = createSlider("Slider", 800, 350, 350, 30, 0, 1);
  s2.visible = false;

  p1 = createToggle("Doge", 700, 899, 200, 80);
  p1.visible = false;

  p2 = createToggle("Cheems", 1070, 899, 255, 80);
  p2.visible = false;

  //controles//
  controles.setStyle("fillBgOff", color(255, 238, 3));
  controles.setStyle("fillBgOffHover", color(255));
  controles.setStyle("fillBgOffActive", color(255, 238, 3));
  controles.setStyle("fillBgOn", color(250));
  controles.setStyle("fillBgOnHover", color(255, 238, 3));

  //start//
  start.setStyle("fillBgOff", color(0, 252, 0));
  start.setStyle("fillBgOffHover", color(255));
  start.setStyle("fillBgOffActive", color(0, 252, 0));
  start.setStyle("fillBgOn", color(250));
  start.setStyle("fillBgOnHover", color(0, 252, 0));

  //boton//
  boton.setStyle("fillBgOff", color(0, 255, 247));
  boton.setStyle("fillBgOffHover", color(255));
  boton.setStyle("fillBgOffActive", color(0, 255, 247));
  boton.setStyle("fillBgOn", color(250));
  boton.setStyle("fillBgOnHover", color(0, 255, 247));

  //boton p4//
  p4.setStyle("fillBgOff", color(159, 15, 242));
  p4.setStyle("fillBgOffHover", color(242, 23, 7));
  p4.setStyle("fillBgOffActive", color(242, 23, 7));
  p4.setStyle("fillBgOn", color(242, 23, 7));
  p4.setStyle("fillBgOnHover", color(242, 23, 7));

  //SETTINGS//
  //music//
  s1.setStyle("fillBg", color(34, 213, 230));
  s1.setStyle("fillTrack", color(0));
  s1.setStyle("fillHandle", color(9, 67, 148));

  s1.setStyle("fillBgHover", color(34, 213, 230));
  s1.setStyle("fillTrackHover", color(250));
  s1.setStyle("fillHandleHover", color(9, 67, 148));

  s1.setStyle("fillBgActive", color(250));
  s1.setStyle("fillTrackActive", color(0));
  s1.setStyle("fillHandleActive", color(0, 255, 255));

  //sfx//
  s2.setStyle("fillBg", color(34, 213, 230));
  s2.setStyle("fillTrack", color(0));
  s2.setStyle("fillHandle", color(9, 67, 148));

  s2.setStyle("fillBgHover", color(34, 213, 230));
  s2.setStyle("fillTrackHover", color(250));
  s2.setStyle("fillHandleHover", color(9, 67, 148));

  s2.setStyle("fillBgActive", color(250));
  s2.setStyle("fillTrackActive", color(0));
  s2.setStyle("fillHandleActive", color(0, 255, 255));

  //boton doge (players)//
  p1.setStyle("fillBgOff", color(255, 238, 3));
  p1.setStyle("fillBgOffHover", color(255));
  p1.setStyle("fillBgOffActive", color(255, 238, 3));
  p1.setStyle("fillBgOn", color(250));
  p1.setStyle("fillBgOnHover", color(255, 238, 3));
  
    //boton doge //
  dogeee.setStyle("fillBgOff", color(185, 66, 245));
  dogeee.setStyle("fillBgOffHover", color(255));
  dogeee.setStyle("fillBgOffActive", color(185, 66, 245));
  dogeee.setStyle("fillBgOn", color(250));
  dogeee.setStyle("fillBgOnHover", color(185, 66, 245));

  //boton cheems//
  p2.setStyle("fillBgOff", color(0, 255, 2552));
  p2.setStyle("fillBgOffHover", color(0, 255, 255));
  p2.setStyle("fillBgOffActive", color(0, 255, 255));
  p2.setStyle("fillBgOn", color(250));
  p2.setStyle("fillBgOnHover", color(0, 255, 255));
  
    //boton cheems//
  cheeems.setStyle("fillBgOff", color(0, 250, 242));
  cheeems.setStyle("fillBgOffHover", color(0, 250, 242));
  cheeems.setStyle("fillBgOffActive", color(0, 250, 242));
  cheeems.setStyle("fillBgOn", color(250));
  cheeems.setStyle("fillBgOnHover", color(0, 250, 242));

  gui.setTextSize(45);
  gui.setStrokeWeight(3);
  gui.setFont(fuente1);

  //fondomenu= loadImage("space.jpg");
  x = -100;
  x0 = width + 100;
}

function draw() {
  //clear();
  image(giphy, width * 0.5, height * 0.5);
  image(dog, 1580, 290, 750, 580);
  image(dog2, 350, 290, 750, 580);

  textAlign(CENTER);
  textSize(50);
  fill(255, 255, 255);
  stroke(0);
  strokeWeight(2);

  {
    textFont(fuente1);
  }
  textAlign(CENTER);
  textSize(100);

  text("CHEEMS", x, 0.8 * height);
  text("GAME", x0, height * 0.9 + 75);

  x += 1;

  if (x >= width / 2) {
    x = width / 2;

    x0 -= 1;

    if (x0 <= width / 2) {
      x0 = width / 2;
    }

    if (p4.val) {
      background(220);
      controles.val = false;
      start.val = false;
      p1.visible = false;
      p2.visible = false;
      dogeee.val = false;
      cheeems.visible= false;
    } else {
      controles.visible = true;
      start.visible = true;
      dogeee.visible=true;
      cheeems.visible= true;
    }

    if (controles.val) {
      image(fondocontrol, width * 0.5, height * 0.5);
      controles.visible = false;
      start.visible = false;
      dogeee.visible= false;
      cheeems.visible= false;
    } else {
    }

    if (start.val) {
      image(fondomenu, width * 0.5, height * 0.5);
      controles.visible = false;
      start.visible = false;
      dogeee.visible= false;
      cheeems.visible= false;
      s1.visible = true;
      s2.visible = true;
      p1.visible = true;
      p2.visible = true;
      

      cancion.setVolume(s1.val);

      if (s1.val) {
        if (cancion.isPlaying()) {
        } else {
          cancion.play();
        }
      } else {
        if (cancion.isPlaying()) {
          cancion.stop();
        } else {
        }
      }

      if (p1.val) {
        image(doge, 650, 620, 280, 280);

        if (chispas.isPlaying()) {
        } else {
          chispas.play();
        }
      } else {
        if (chispas.isPlaying()) {
          chispas.stop();
        } else {
        }
      }

      if (p2.val) {
        image(cheems, 1250, 620, 280, 280);
        if (resplandor.isPlaying()) {
        } else {
          resplandor.play();
        }
      } else {
        if (resplandor.isPlaying()) {
          resplandor.stop();
        } else {
        }
      }
    } else {
      s1.visible = false;
      s2.visible = false;
      p1.visible = false;
      p2.visible = false;
    }

    //////DOGEEE//////////////////
    
     if (dogeee.val) {
      controles.visible = false;
      start.visible = false;
      dogeee.visible= false;
      cheeems.visible= false;
      s1.visible = false;
      s2.visible = false;
      p1.visible = false;
      p2.visible = false;
      p4.visible = true;

      imageMode(CORNER);
      image(fondo4, 0, 0, width, height);

      textSize(30);
      fill(250);
      text("puntos:" + puntuacion, 100, 80);

      //todo esto corresponde a lo que cae//
      //
      // Para el elote
      strokeWeight(10);
      imageMode(CENTER);
      image(esquite, x_esq, y_esq, 150, 150);
      //point (x,y);
      x_esq += vel_esq;

      //todo esto corresponde al punto que yo controlo//
      strokeWeight(10);
      imageMode(CENTER);
      image(player2, a0, b0, 360, 360);

      // Para fin de juego

      if (x_esq >= width) {
        imageMode(CORNER);
        image(gameOver,0,0,width,height);
        //noLoop();

        //p1.val = false;
      }

      // Controles
      if (keyIsPressed);
      {
        if (key == "d") {
          a0 += vel0;
        }

        if (key == "a") {
          a0 -= vel0;
        }
      }

      if (keyIsPressed);
      {
        if (key == "s") {
          b0 += vel0;
        }

        if (key == "w") {
          b0 -= vel0;
        }
      }

      // distancia entre control y objetos
      var distancia = dist(x_esq, y_esq, a0, b0);

      if (distancia < 300) {
        y_esq = height * random(0.1, 1);
        x_esq = 0;
        vel_esq = random(6, 8);
        puntuacion += 1;
      }

      // Para la puntución

      if (puntuacion >= 15) {
        imageMode(CORNER);
        image(nivel2, 0, 0, width, height);
        //p1.val = false;
      }
    } else {

    }

    
    //GAME CHEEMS//

    if (cheeems.val) {
      controles.visible = false;
      start.visible = false;
      dogeee.visible= false;
      cheeems.visible= false;
      s1.visible = false;
      s2.visible = false;
      p1.visible = false;
      p2.visible = false;
      p4.visible = true;

      imageMode(CORNER);
      image(fondo4, 0, 0, width, height);

      textSize(30);
      fill(250);
      text("puntos:" + puntuacion, 100, 80);

      //todo esto corresponde a lo que cae//
      //
      // Para el elote
      strokeWeight(10);
      imageMode(CENTER);
      image(elote, x_el, y_el, 150, 150);
      x_el -= vel_el;

      //todo esto corresponde al punto que yo controlo//
      strokeWeight(10);
      imageMode(CENTER);
      image(player1, c0, d0, 300, 360);

      // Para fin de juego
      if (x_el <= 0) {
       // contador += 1;

       // if (contador <= 100) {
          imageMode(CORNER);
          image(gameOver2, 0, 0, width, height);
       // } else {
        //  p2.val = false;
        }        
        
      }

      // Controles
      if (keyIsPressed);
      {
        if (key == "d") {
          c0 += vel01;
        }

        if (key == "a") {
          c0 -= vel01;
        }
      }

      if (keyIsPressed);
      {
        if (key == "s") {
          d0 += vel01;
        }

        if (key == "w") {
          d0 -= vel01;
        }

        // distancia entre control y objetos
        var distancia = dist(x_el, y_el, c0, d0);

        if (distancia < 300) {
          y_el = height * random(0.1, 1);
          x_el = width;
          vel_el = random(6, 8);
          puntuacion += 1;
        }

        // Para la puntución

        if (puntuacion >= 15) { 
          imageMode(CORNER);
          image(nivel2, 0, 0, width, height);
        }
      }
    } else {

    }

   
    drawGui();
  }

