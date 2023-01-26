var button = document.createElement('button');
button.innerHTML = 'Get Access To This Site';
button.style.color = 'white';
button.style.backgroundColor = 'black';
button.style.borderRadius = '10px';
button.style.position = 'absolute';
button.style.top = '50%';
button.style.left = '50%';
button.style.transform = 'translate(-50%, -50%)';
button.style.cursor = 'pointer';
document.body.appendChild(button);
var counter = 0;
button.onmouseover = function() {
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  button.style.top = y + 'px';
  button.style.left = x + 'px';
  counter++;
  if (counter == 25) {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    var image = document.createElement('img');
    image.src = 'https://www.pngkey.com/png/full/8-81229_lock-png-lock-png-transparent-image.png';
    image.style.position = 'absolute';
    image.style.top = '50%';
    image.style.left = '50%';
    image.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(image);
  }
};
