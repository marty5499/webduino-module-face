// face-api.js API: https://justadudewhohacks.github.io/face-api.js/docs/globals.html#euclideandistance

+(function (factory) {

  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';
  var self;
  var proto;
  var Module = scope.Module;

  function face(MODEL_URL) {
    Module.call(this);
    this.MODEL_URL = MODEL_URL;
    this.isReady = false;
  }

  face.prototype = proto =
    Object.create(Module.prototype, {
      constructor: {
        value: face
      }
    });

  proto.euclideanDistance = async function (face1, face2) {
    if (typeof face1 === 'string') {
      face1 = face1.split(',').length == 128 ? JSON.parse("[" + face1 + "]") : this.getDescription(face1);
    }
    if (typeof face2 === 'string') {
      face2 = face2.split(',').length == 128 ? JSON.parse("[" + face2 + "]") : this.getDescription(face2);
    }
    try {
      return faceapi.euclideanDistance(face1, face2);
    } catch (e) {
      return 1;
    }
  }

  proto.getDescription = async function (image) {
    await this.loadModel();
    var isURL = ("" + image).substring(0, 4) === "http";
    var input = isURL ? await faceapi.fetchImage(image) : image;
    var singleFace = await faceapi.detectSingleFace(input);
    if (typeof singleFace === 'object') {
      var faceLandmarks = await faceapi.detectSingleFace(input).withFaceLandmarks();
      var descriptor = await faceapi.detectSingleFace(input).withFaceLandmarks().withFaceDescriptor();
      var faceDescriptor = descriptor.descriptor;
      return faceDescriptor;
    } else {
      return [];
    }
  }

  proto.loadModel = async function () {
    if (this.isReady) {
      return;
    }
    console.log("load face model...");
    //await faceapi.loadTinyFaceDetectorModel(this.MODEL_URL)
    await faceapi.loadSsdMobilenetv1Model(this.MODEL_URL);
    //await faceapi.loadMtcnnModel(this.MODEL_URL);
    //await faceapi.loadTinyYolov2Model(this.MODEL_URL);
    await faceapi.loadFaceLandmarkModel(this.MODEL_URL);
    await faceapi.loadFaceRecognitionModel(this.MODEL_URL);
    console.log("done.");
    this.isReady = true;
  }

  scope.module.face = face;
}));