define(['vendor/three', 'scene', 'camera'], function (three, scene, camera) {

    var renderer = new three.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xf5f5f5 );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.darkness = 0.1;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
  
    document.body.appendChild( renderer.domElement );
    
    return {
      start: function(animation){
        render();
        function render(){
          requestAnimationFrame(render);
          animation();
          renderer.render( scene, camera );
        }
      }
    };

});
