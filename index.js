
/**
 * [Brush description]
 * @param {[type]} ctx [description]
 */
function Brush(ctx){
  if(!(this instanceof Brush))
    return new Brush(ctx);
  this.ctx = ctx;
  return this;
};

Brush.prototype.clear = function(){
  // body...
  return this;
};

Brush.prototype.text = function(x, y, style){
  // body...
  return this;
};

Brush.prototype.image = function(src, x, y, style){
  // body...
  return this;
};

Brush.prototype.line = function(x1, y1, x2, y2, style){
  // body...
  return this;
};

Brush.prototype.rect = function(x, y, width, height, style){
  // body...
  return this;
};

Brush.prototype.polygon = function(x1, y1, x2, y2, x3, y3, style){
  // body...
  return this;
};

Brush.prototype.background = function(){
  // body...
  return this;
};

Brush.prototype.draw = function(){
  // body...
  return this;
};

Brush.prototype.save = function(){
  // body...
  return this;
};

module.exports = Brush;