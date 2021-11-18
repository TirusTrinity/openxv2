var samples = [];
var seq;

function preload(){
  samples [0] = loadSound("kick.mp3");
  samples [1] = loadSound("snare.mp3");
}

function setup() {
  createCanvas(400, 400);
  seq = new Sequencer(8, 130, 1);

}

function keyTyped() {
  
  if(key == ' '){
    seq.sequencerControler.startOrStop();
  }

  if(key >= 1 && key < 9 ){
    if(keyIsDown(CONTROL)){
      seq.sequencerControler.selectSound(key);
    } else {
      seq.sequencerControler.selectStep(key);
    }
  }
  
  if( key == 0) {
    seq.sequencerControler.selectSound(key);
  }
}

function draw() {
  background(0);
  seq.listener();
}



