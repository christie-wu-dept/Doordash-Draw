let button;
let permissionGranted = false;

let cx1, cy1, cx2, cy2;

let jackImg;

function preload() {
  jackImg = loadImage('images/jack in the box.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cx1 = width/2;
  cy1 = height/2;
    
  cx2 = width/3;
  cy2 = height/3*2;
  
  //deviceOrientationEvent, DeviceMotionEvent
  if (typeof(DeviceOrientationEvent) !== "undefined" && typeof   
      (DeviceOrientationEvent.requestPermission) === 'function'){
    
    DeviceOrientationEvent.requestPermission()
    .catch(() => {
      //show permission dialogue only the first time 
    button = createButton("click to allow access to sensors");
    button.style("font-size", "24px")
    button.center();
    button.mousePressed(requestAccess);
      throw error;
    })
  .then (() => {
    //on any subsequent visit 
    permissionGranted = true;
  })
  } else {
    
    //non ios 13 device  
    textSize(48);
    text('non ios 13 device', 100,100);
    permissionGranted = true;
  } 
  background(255);
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
  .then(response => {
    if (response == 'granted') {
      permissionGranted = true;
    } else {
      permissionGranted = false;
    }
  })
  .catch(console.error);
  
  this.remove();
}

function draw() {
  if (!permissionGranted) return;

  
  // flip rotation XY!!!!
  const dx = constrain(rotationY, -3, 3);
  const dy = constrain(rotationX, -3, 3);
  cx1 += dx*2;
  cy1 += dy*2;
  
  cx1 = constrain(cx1, 0, width-60);
  cy1 = constrain(cy1, 0, height-60);
  image(jackImg, cx1-60, cy1-100, 120, 123.5);
  
  
//   ellipse (cx2, cy2, 200, 200);
}

function touchStarted(){
  clear();
  background(255);
}