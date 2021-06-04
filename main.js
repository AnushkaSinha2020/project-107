prediction=""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});
camera= document.getElementById("camera");

Webcam.attach( '#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="photo" src="'+data_uri+'"/>';
    })
}

console.log('ml5 Version : ',ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I4F2_Rt_O/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded !');
}