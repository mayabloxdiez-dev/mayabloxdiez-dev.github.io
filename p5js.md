```javascript
const trail = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(20);

  const moved = mouseX || mouseY;
  trail.push(moved ? [mouseX, mouseY] : [width / 2, height / 2]);
  if (trail.length > 40) trail.shift();

  trail.forEach(([x, y], i) => {
    fill((frameCount + i * 6) % 360, 80, 100);
    circle(x, y, i + 4);
  });
}
```
