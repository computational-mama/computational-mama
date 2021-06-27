// create a new hydra-synth instance
var hydra = new Hydra({
  detectAudio: false,
  canvas: document.getElementById("myCanvas")
});
osc(10, 0.1, 20)
  .kaleid(8)
  .rotate(0, -0.1)
  .out();
osc(30, 0.1, 0.4)
  .rotate(2, 0.1)
  .scale(4)
  .diff(noise(3))
  .mask(shape(40, 0.2).scrollX(0.3,0.2))
  .modulate(osc(20, 0.05))
  .repeat(5, 5, 0.5)
  // 	.rotate(2,0.1)
  // .kaleid(6)
  .out();
// create functions to use with buttons
