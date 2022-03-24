var SpeeachRecognition = window.webkitSpeechrecognition;

var recogniion = new SpeeachRecognition();

function start(){

    document.getElementById("texbox").innerHTML="";
    recogniion.start();

}


recogniion.onresult = function run(event){

    console.log(event);
    var content= event.results[0][0].transcript;
    console.log(conent);
    document.getElementById("textbox").innerHTML=conten;
    if(content == "take my selfie"){
    speak();}
}

function  speak(){
    var synth = window.speechSynthesis;
    speekdata="taking your selfie in 5 second";
    var utterthis =  new SpeechSynthesisUtterance(speekdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();

    }, 5000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
   camera=document.getElementById("camera")
   function takesnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
});
   }
   function save(){
       link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
link.href=image;
link.click();

   }
   