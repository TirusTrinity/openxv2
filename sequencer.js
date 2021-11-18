class Sequencer{
  constructor(length, bpm, bdb ){
    this.bpm = bpm;
    this.length = length;
    this.steps = [];
    this.lspTime = 0;
    this.lspIndex = 0;
    this.bdb = bdb;
    this.mspb = this.bpmToMilli(bpm, this.bdb);
    this.sequencerControler = new SequencerControler(this);
    this.isRunning = false;
    for (let i = 0; i < length; i++){
        this.steps[i] = new Step();
    }
  }

  changeStepSound(stepNum, newSound) {
      this.steps[stepNum].sound = newSound;
    console.log(this.steps[stepNum].sound);
    }

  run() {
    if (this.nextStepMan(this.mspb,this.lspTime)) {
    this.playNextStep(this.lspIndex);
   }
  }

  nextStepMan(mspb, lspTime) {
    if (lspTime + mspb <= millis()) {
      return true;
    } else {
      return false;
    }
  }

    bpmToMilli(bpm, bdb) {
    const mspb = (60/bpm) * 1000;
    //converting bpm to milliseconds per beat.
    return(mspb/bdb);
  }

  nextIndexMan(stepToPlay){
    if( stepToPlay + 1 >= this.length){
      return 0;
    } else {
      return stepToPlay + 1;
    }
  }

  playNextStep(stepToPlay){
    this.lspTime = millis();
    this.lspIndex = this.nextIndexMan(stepToPlay);
    this.steps[stepToPlay].play();
  }

  listener() {
    if(this.isRunning) {
      this.run();
    }
  }

}
