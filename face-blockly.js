+(async function (window, webduino) {
  'use strict';
  var MODEL_URL = "https://127.0.0.1:8080/weights/";
  MODEL_URL = "https://marty5499.github.io/webduino-module-face/weights/";
  window.faceAPI = new webduino.module.face(MODEL_URL);

}(window, window.webduino));