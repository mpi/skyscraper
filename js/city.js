define(['vendor/underscore'], function (_) {

  var dirs = [right, up, left, down];
  
  function up(p, delta) {
    //console.log('up');
    p.y += delta;
    return p;
  }

  function down(p, delta) {
    //console.log('down');
    p.y -= delta;
    return p;
  }

  function left(p, delta) {
    //console.log('left');
    p.x -= delta;
    return p;
  }

  function right(p, delta) {
    //console.log('right');
    p.x += delta;
    return p;
  }

  return function (blocks) {

    blocks = _.sortBy(blocks, function(x) { return -(x.opts.height * x.opts.base); });
    
    var layouted = [];

    var b = blocks[0];
    layouted.push({
      x: 0,
      y: 0,
      r: b.opts.base / 2,
      i: 0,
      d: 0
    });

    var e;
    
    for (e = 1; e < blocks.length; e++) {
      layout(e-1, e);
    }

    console.log(layouted);
    
    layouted.forEach(function (l) {
      blocks[l.i].moveTo(l.x, 0, l.y);
    });


    function layout(p, i) {
      
      var ahead = candidate(p, i, 0);
      var turnBack = candidate(p, i, -1);
      var turnForward = candidate(p, i, +1);
      
      if (isValid(ahead)) {
        if (isValid(turnForward)) {
          console.log('fwd');
          layouted.push(turnForward);
          return;
        }
        console.log('ahead');
        layouted.push(ahead);
        return;
      }
      if (isValid(turnBack)) {
        console.log('bck');
        layouted.push(turnBack);
        return;
      }
      
      return layout(p-1, i);
      
    }

    function candidate(pr, i, x) {

      var p = layouted[pr];

      var nd = (p.d + x) % 4;
      if (nd < 0) {
        nd = 3;
      }

      var c = {
        x: p.x,
        y: p.y,
        r: blocks[i].opts.base / 2,
        i: i,
        d: nd
      };

      return dirs[c.d](c, (p.r + c.r) * 1.6);

    }

    function isValid(c) {
      
//      if(c.x + c.r > 500 || c.x - c.r < -500){
//        return false;
//      }
//      if(c.y + c.r > 500 || c.y - c.r < -500){
//        return false;
//      }
      
      var i;
      for (i = 0; i < layouted.length; i++) {
        if (colidesWith(c, layouted[i])) {
          return false;
        }
        if (colidesWith(layouted[i], c)) {
          return false;
        }
      }
      return true;
    }

    function colidesWith(a, b) {
      if (containsPoint(a, b.x - b.r, b.y - b.r)) {
        return true;
      }
      if (containsPoint(a, b.x + b.r, b.y - b.r)) {
        return true;
      }
      if (containsPoint(a, b.x - b.r, b.y + b.r)) {
        return true;
      }
      if (containsPoint(a, b.x + b.r, b.y + b.r)) {
        return true;
      }
      return false;
    }

    function containsPoint(a, x, y) {
      return (x < a.x + a.r && x > a.x - a.r) && (y < a.y + a.r && y > a.y - a.r);
    }

  };

});
