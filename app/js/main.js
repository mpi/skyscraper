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

require(['vendor/three'], function (three) {

  require(['scene', 'skyscraper', 'animation', 'camera', 'light'], function (scene, Skyscraper, animation, camera, light) {

    init();

    function init() {

      scene.add(new Skyscraper({
        base: 100,
        height: 300
      }));
      scene.add(new Skyscraper({
        base: 80,
        height: 200,
        x: 100,
        z: 300
      }));
      scene.add(new Skyscraper({
        base: 80,
        height: 220,
        x: -100,
        z: -120
      }));
      scene.add(new Skyscraper({
        base: 60,
        height: 100,
        x: 200,
        z: 400
      }));
      scene.add(new Skyscraper({
        base: 60,
        height: 100,
        x: 280,
        z: 400
      }));
      scene.add(new Skyscraper({
        base: 60,
        height: 100,
        x: 360,
        z: 400
      }));
      scene.add(new Skyscraper({
        base: 120,
        height: 180,
        x: 150,
        z: 150
      }));
      scene.add(new Skyscraper({
        base: 1000,
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
      }
    }

  });


});
