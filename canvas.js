const canvas = document.querySelector("canvas");
const sandbox = new GlslCanvas(canvas);
const calcSize = () => {
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  let dpi = window.devicePixelRatio;

  let s = Math.max(ww + 200, wh);
  canvas.width = s * dpi;
  canvas.height = s * dpi;

  canvas.style.width = s + "px";
  canvas.style.height = s + "px";
};
sandbox.load(frag);

const images = ["trails.jpg", "flowers.jpg", "light.jpg"];
let current = 0;

canvas.addEventListener("click", () => {
  current += 1;

  if (current > images.length) {
    current = 0;
  }
  sandbox.setUniform("image", images[current]);
});
sandbox.setUniform("image", images[current]);

calcSize();

window.addEventListener("resize", () => {
  calcSize();
});
