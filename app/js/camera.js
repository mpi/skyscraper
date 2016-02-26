define(['vendor/three'], function (three) {

  var camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  return camera;

});
