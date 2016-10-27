## Brush.js

> A canvas library focused on mobile applications.

### Example

```js
var el = document.getElementById('canvas');
  var brush = new Brush(el);

  brush
  .background('#f70')
  .text('test', 50, 50)
  .arc(50, 50)
  .rect(30, 30, 100, 100)
  .line(50, 50, 100, 100)
  .image('https://mdn.mozillademos.org/files/5397/rhino.jpg')
```