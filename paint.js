
/**
 * [Paint description]
 * @param {[type]} ctx [description]
 */
function Paint(ctx){
  if(!(this instanceof Paint))
    return new Paint(ctx);
  if(typeof ctx == 'string')
    ctx = document.querySelector(ctx);
  if(ctx instanceof HTMLElement)
    ctx = ctx.getContext("2d");

  this.ctx = ctx;
  this.canvas = this.ctx.canvas;
  this.width  = this.ctx.canvas.width;
  this.height = this.ctx.canvas.height;
  return this;
};

Paint.prototype.text = function(text, x, y, font, color){
  x = x || 0;
  y = y || 0;
  this.ctx.font = font || '48px serif';
  this.ctx.fillStyle = color || 'black';
  this.ctx.fillText(text, x, y);
  return this;
};

/**
 * [image description]
 * @param  {[type]} src     [description]
 * @param  {[type]} dx      [description]
 * @param  {[type]} dy      [description]
 * @param  {[type]} dWidth  [description]
 * @param  {[type]} dHeight [description]
 * @param  {[type]} sx      [description]
 * @param  {[type]} sy      [description]
 * @param  {[type]} sWidth  [description]
 * @param  {[type]} sHeight [description]
 * @return {[type]}         [description]
 */
Paint.prototype.image = function(src, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight){
  dx = dx || 0;
  dy = dy || 0;
  dWidth  = dWidth  || this.width;
  dHeight = dHeight || this.height;
  sx = sx || 0;
  sy = sy || 0;
  var img = new Image();
  img.src = src;
  this.ctx.drawImage(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight);
};
/**
 * [rotate description]
 * @param  {[type]} deg [description]
 * @return {[type]}     [description]
 */
Paint.prototype.rotate = function(deg){
  this.ctx.rotate(deg * Math.PI / 180);
  return this;
};
/**
 * [line description]
 * @param  {[type]} x  [description]
 * @param  {[type]} y  [description]
 * @param  {[type]} x1 [description]
 * @param  {[type]} y1 [description]
 * @return {[type]}    [description]
 */
Paint.prototype.line = function(x, y, x1, y1){
  x = x || 0;
  y = y || 0;
  x1 = x1 || 0;
  y1 = y1 || 0;
  this.ctx.moveTo(x, y);
  this.ctx.lineTo(x1, y1);
  this.ctx.stroke();
  return this;
};
/**
 * [rect description]
 * @param  {[type]} x      [description]
 * @param  {[type]} y      [description]
 * @param  {[type]} width  [description]
 * @param  {[type]} height [description]
 * @param  {[type]} color  [description]
 * @return {[type]}        [description]
 */
Paint.prototype.rect = function(x, y, width, height){
  x = x || 0;
  y = y || 0;
  width  = width  || this.width;
  height = height || this.height;
  this.ctx.rect(x, y, width, height);
  this.ctx.stroke();
  return this;
};
/**
 * [arc description]
 * @param  {[type]} x             [description]
 * @param  {[type]} y             [description]
 * @param  {[type]} radius        [description]
 * @param  {[type]} startAngle    [description]
 * @param  {[type]} endAngle      [description]
 * @param  {[type]} anticlockwise [description]
 * @return {[type]}               [description]
 */
Paint.prototype.arc = function(x, y, radius, startAngle, endAngle, anticlockwise){
  x = x || 0;
  y = y || 0;
  radius = radius || 50;
  startAngle = startAngle || 0;
  endAngle   = endAngle   || Math.PI * 2;
  this.ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  this.ctx.stroke();
  return this;
};
/**
 * [background description]
 * @param  {[type]} color [description]
 * @return {[type]}       [description]
 */
Paint.prototype.background = function(color){    
  return this.fill(null, null, null, null, color);
};
/**
 * [fill description]
 * @param  {[type]} color  [description]
 * @param  {[type]} x      [description]
 * @param  {[type]} y      [description]
 * @param  {[type]} width  [description]
 * @param  {[type]} height [description]
 * @return {[type]}        [description]
 */
Paint.prototype.fill = function(x, y, width, height, color){
  x = x || 0;
  y = y || 0;
  width  = width  || this.width;
  height = height || this.height;
  this.ctx.fillStyle = color || 'white';
  this.ctx.fillRect(x, y, width, height);
  return this;
};
/**
 * [clear description]
 * @param  {[type]} x      [description]
 * @param  {[type]} y      [description]
 * @param  {[type]} width  [description]
 * @param  {[type]} height [description]
 * @return {[type]}        [description]
 */
Paint.prototype.clear = function(x, y, width, height){
  x = x || 0;
  y = y || 0;
  width  = width  || this.width;
  height = height || this.height;
  this.ctx.clearRect(x, y, width, height);
  return this;
};
