class Step{
  constructor(){
    this.sound = -1;
  }
  play(){
    if(this.sound != -1){
    samples[this.sound].play();
    }
  }
}