define(['vendor/three'], function(three) {
  
  var ambientlight = new three.AmbientLight( 0x151515 );
  

  var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.75);
  directionalLight.position.set( 5000, 2000, 1000 );
  directionalLight.castShadow = true;

  directionalLight.shadowMapWidth = 2048;
  directionalLight.shadowMapHeight = 2048;
  var d = 400;
//
  directionalLight.shadowCameraLeft = -d;
  directionalLight.shadowCameraRight = d;
  directionalLight.shadowCameraTop = d;
  directionalLight.shadowCameraBottom = -d;

//  directionalLight.shadowCameraVisible = true;
  directionalLight.shadowCameraFar = 10000;
  directionalLight.shadowBias = -0.0001;
  directionalLight.shadowDarkness = 0.1;
  
  return [ambientlight, light, directionalLight];
  
});
