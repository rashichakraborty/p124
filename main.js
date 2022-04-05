function setup(){
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotposes);
}

function draw(){
    background("white");
}

function modelLoaded(){
    console.log("Posenet is loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}
    
