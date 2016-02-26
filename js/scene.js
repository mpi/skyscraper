define(['vendor/three'], function(three) {
  var scene = new three.Scene();
  scene.fog = new three.Fog(0xf5f5f5, 1, 2000);
  return scene;
});
