define(['vendor/three', 'vendor/underscore'], function (three, _) {

  return function (opts) {

    var geometry, material, block;

    opts = _.extend({
      height: 100,
      base: 100,
      x: 0,
      y: 0,
      z: 0
    }, opts);
    
    geometry = new three.BoxGeometry(opts.base, opts.height, opts.base);
    material = new three.MeshLambertMaterial({
      color: 0xcccccc,
      wireframe: false
    });

    block = new three.Mesh(geometry, material);
    block.receiveShadow = true;
    block.castShadow = true;
    block.opts = opts;
    
    block.moveTo = function(x, y, z){
      block.position.set(x, y + opts.height/2, z);
    };
    
    block.moveTo(opts.x, opts.y, opts.z);
    
    return block;
  };
});
