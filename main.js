//This is main.js

Webcam.set({
    width: 340,
    height: 300,
    image_format: "png",
    image_quality: 90
});

var camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_uri+"'>";
    });
}

console.log("ml5 version: ",ml5.version);

var classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/-57PUIvXf/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded!");
};