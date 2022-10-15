import { useEffect, useState, useRef } from "react"
import { io } from "socket.io-client";
import {Hands, HAND_CONNECTIONS} from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import * as mediapipeUtils from '@mediapipe/drawing_utils';
import Webcam from "react-webcam";


export default function Webcams(){
  // let cv = require('opencv.js');
    const socket = io("localhost:5001/", {
        transports: ["websocket"],
        cors: {
            origin: "http://localhost:3000/",
            }})

    const [data, setData]= useState("")
    const videoRef = useRef()
    const photoRef = useRef()
    const canvasRef =useRef()
    var camera = null;

  function paintToCanvas (photos) {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      ctx.drawImage(photos.image, 0, 0, width, height);
      let canvas = document.getElementById('canvas');
    let dataURL = canvas.toDataURL();
    var type = "image/png"
    dataURL = dataURL.replace('data:' + type + ';base64,', '');
      socket.emit('image', dataURL);
    }, 300);
  };

  function onResults(results){
    const videoWidth = videoRef.current.video.videoWidth;
    const videoHeight = videoRef.current.video.videoHeight;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    
    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        mediapipeUtils.drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                       {color: '#000000', lineWidth: 5});
        mediapipeUtils.drawLandmarks(canvasCtx, landmarks, {color: '#000000', lineWidth: 2});
      }
    }
    
    canvasCtx.restore();
  }

    useEffect(() => {
    socket.on('response_back', function(image){
      const image_id = document.getElementById('image');
      console.log(image_id)
      image_id.src = image;
  });

    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      }
    });


    hands.setOptions({
      modelComplexity: 1,
      maxNumHands: 2,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    hands.onResults(onResults);

    if (
      typeof videoRef.current !== "undefined" &&
      videoRef.current !== null
    ) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      camera = new cam.Camera(videoRef.current.video, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current.video });
        },
        width: 320,
        height: 240,
      });
      camera.start();
      paintToCanvas({ image: videoRef.current.video })
    };
        
	}, [])

    return(
        <div className="video-container">
          <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" crossorigin="anonymous"></script>
<Webcam
hidden
          ref={videoRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 320,
            height: 240,
          }}
        />{" "}
                <p>{data}</p>
                <canvas ref={photoRef} id="canvas"></canvas>
                <canvas ref={canvasRef} id="canvas"></canvas>
                <div class = 'video'>
    <img id="image"/>
</div>
                </div>

    )

}