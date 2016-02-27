'use strict';

requirejs.config({
  baseUrl: 'js',
  urlArgs: 'ts=' + (new Date()).getTime(),
  shim: {
    'vendor/three': {
      exports: 'THREE'
    },
    'vendor/underscore': {
      exports: '_'
    }
  }
});

require(['vendor/three', 'city', 'vendor/underscore'], function (three, city, _) {

  require(['scene', 'skyscraper', 'animation', 'camera', 'light'], function (scene, Skyscraper, animation, camera, light) {

    init();

    function init() {

      var a;
      var blocks = [];
//      blocks.push(new Skyscraper({ base: 120, height: 500 }));
//      blocks.push(new Skyscraper({ base: 120, height: 500 }));
//      blocks.push(new Skyscraper({ base: 120, height: 500 }));
//      blocks.push(new Skyscraper({ base: 100, height: 300 }));
//      blocks.push(new Skyscraper({ base: 80, height: 220 }));
//      blocks.push(new Skyscraper({ base: 120, height: 180 }));
//      blocks.push(new Skyscraper({ base: 80, height: 120 }));
//      blocks.push(new Skyscraper({ base: 80, height: 200 }));
//      blocks.push(new Skyscraper({ base: 60, height: 100 }));
//      blocks.push(new Skyscraper({ base: 60, height: 100 }));
//      blocks.push(new Skyscraper({ base: 60, height: 100 }));
//      blocks.push(new Skyscraper({ base: 60, height: 100 }));

      var bases = [30, 30, 40, 40, 40, 40, 50, 50, 50, 50, 60, 60, 60, 80, 80, 100, 100, 120];
      var heights = [50, 50, 50, 50, 50, 60, 60, 60, 80, 80, 80, 140, 160, 200, 260, 280, 300, 340, 400];
      
      for(a = 0; a < 50; a++){
        blocks.push(new Skyscraper({ base: randomOf(bases), height: randomOf(heights) }));
      }
      
      function randomOf(array){
        var x = Math.random() * array.length;
        x = Math.floor(x);
        return array[x];
      }
      
      city(blocks);
      blocks.forEach(function(b){ scene.add(b); });

      var max = _(blocks).map(function(b) {
        var x = Math.abs(b.opts.x) + Math.abs(b.opts.base);
        var y = Math.abs(b.opts.z) + Math.abs(b.opts.base);
        return Math.max(x, y);
      });
      max = _.max(max);
      
      scene.add(new Skyscraper({
        base: 2*max + 50,
        height: 5,
        y: -5
      }));
      scene.add.apply(scene, light);

      animation.start(animate);
				
      function animate() {
        //block.rotation.x += 0.01;
        //block.rotation.y += 0.02;
        camera.position.applyAxisAngle(new three.Vector3(0, 1, 0), Math.PI / 360);
        camera.position.setY(500);
        camera.lookAt(new three.Vector3(0, 0, 0));
//        var sun = light[2];
//        sun.position.applyAxisAngle(new three.Vector3(0, 1, 0), -Math.PI / (2*360));
//        sun.lookAt(new three.Vector3(0, 0, 0));
        
      }
    }

  });


});
