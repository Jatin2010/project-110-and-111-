
prediction1 = "";
prediction2 = "";

Webcam.set({
    width:346,
    height:296,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="taken_img" src="'+data_uri+'"/>';

    });
    }

    console.log("ml5 version:" ,ml5.version);
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9Wzy-1xoL/model.json",modelLoaded);

    function modelLoaded(){
        console.log("ml5 Model Loaded");
    }

    function speak(){
        synth = window.speechSynthesis;
        speak_data1 = "The first prediction is"+prediction1;
        speak_data2 = "The second prediction is"+prediction2;
        Uter_this = new SpeechSynthesisUtterance(speak_data1+speak_data2);
        synth.speak(Uter_this);
    }
