song ="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song= loadSound("music.mp3")
}

function setup(){
    canvas =createCanvas(600,500);
    canvas.center;


    video.createCapture(VIDEO);
    video.hide;

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    img(video,0,0,600,500);
}

function play(){
 song.play;
 song.setVolume;   
 song.rate(1);
}

function modelLoaded(){
    console.log('poseNet is Initilized')
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX =reuslts[0].pose.leftWrist.x;
        leftWristY =reuslts[0].pose.leftWrist.y;

        console.log("leftWristX ="+leftWristX+"leftWristY="+leftWristY);


        rightWristX =reuslts[0].pose.rightWrist.X;
        rightWristY=reuslts[0].pose.rightWrist.Y;

        console.log("leftWristX ="+leftWristX+"leftWristY="+leftWristY);
        
    }
}