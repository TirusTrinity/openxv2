class SequencerControler{
  constructor(sequencer){
    this.sequencer = sequencer;
    this.selectedStep = -1;
    this.selectedSound = -1;
  }
  
 startOrStop(){
   if(this.sequencer.isRunning){
      this.sequencer.isRunning = false;
      this.sequencer.lspIndex = 0;
    } else {
      this.sequencer.isRunning = true;
    }
  }
  
  selectStep(k) {
    this.selectedStep = k - 1;
    if (this.getSound() == this.selectedSound) {
      this.setNoSound();
    } else {
      this.changeSound();
    }
  }
  
  getSound() {
    return this.sequencer.steps[this.selectedStep].sound;
  }
  
  changeSound(){
    this.sequencer.changeStepSound(this.selectedStep, this.selectedSound);
  }
  
  setNoSound(){
    this.sequencer.changeStepSound(this.selectedStep, -1);
  }
  
  selectSound(k) {
    this.selectedSound = k - 1;
  }
}
