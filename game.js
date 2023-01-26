import { Event_Handler } from './event_handler.js';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAIcM_CC7xtC4uhK8yl8vf2cSpTbgXpIT0",
//   authDomain: "coberna22.firebaseapp.com",
//   projectId: "coberna22",
//   storageBucket: "coberna22.appspot.com",
//   messagingSenderId: "83410062375",
//   appId: "1:83410062375:web:c1332abc854ec58e839202",
//   measurementId: "G-3NDKRPGZEZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function setup(){
    var cnv = createCanvas(window_width, window_height);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

    textAlign(CENTER, CENTER)
    textSize(24)
    rectMode(CENTER)
    imageMode(CENTER)
    frameRate(60)
}

// refit the screen when resized
function windowResized() {
    var cnv = createCanvas(window_width, window_height);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function draw(){
    background(30, 30, 30)
    event_handler.draw()

    // if the time elapsed is more than update_time, run update
    var delta_time = new Date().getTime() - last_update_time.getTime()
    if (delta_time > update_time){
        update()
        last_update_time = new Date()
    }
}

function update(){
    event_handler.update()
}

function mouseClicked(){
    event_handler.mouse_clicked()
}

var window_width = 1200
var window_height = 600
// This will fix the module problem
window.setup = setup;
window.draw = draw;
window.windowResized = windowResized
window.mouseClicked = mouseClicked

var event_handler = new Event_Handler(window_width, window_height)

var last_update_time = new Date()
var update_time = 10

// This is how to restore objects with their functions.
// Super dirty but need to get the object, then merge it with an empty version of itself.
// This will need to be different for every object... Oh my god this is horrible...

// const obj = new Wall(100, 100, 100, 100, 100, "white")
// window.localStorage.setItem("myObject", JSON.stringify(obj));
// var raw_obj = window.localStorage.getItem("myObject")

// var myObj = JSON.parse(raw_obj);
// myObj = Object.assign(new Wall(), myObj);
// myObj.draw()

// // Dynamically create a File
// const myFile = new File([`${new Date()}: Meow!`], "my-cat.txt");

// // Download it using our function
// downloadFile(myFile);