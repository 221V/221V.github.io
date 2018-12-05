
'use strict';

const FRAMES_PER_SECOND = 30; // Valid values are 60,30,20,15,10...
// set the mim time to render the next frame
const FRAME_MIN_TIME = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;
var lastFrameTime = 0; // the last frame time

function update(time){
  if(time-lastFrameTime < FRAME_MIN_TIME){ //skip the frame if the call is too early
    requestAnimationFrame(update);
    return; // return as there is nothing to do
  }
  lastFrameTime = time; // remember the time of the rendered frame
  // render the frame
  requestAnimationFrame(update); // get next farme
}

requestAnimationFrame(update); // start animation


