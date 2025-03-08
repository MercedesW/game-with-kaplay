import kaplay from "https://unpkg.com/kaplay@3001/dist/kaplay.mjs";

// start kaplay
kaplay({
  width: 1280,
  height: 720,
  background: '#e9967a',
  debug: true,
  burp: true,
  // and more uselful opts, like burp is 
});

debug.log("Press (B) button to burp!");

loadSprite("bean", "assets/bean.png");
setGravity(2000);

const player = add([
  sprite("bean"),
  pos(center()),
  area(),
  body(),
  offscreen()
]);

player.onKeyPress("space", () => {
  if (player.isGrounded()) player.jump()
})

player.onExitScreen(() => {
  go("gameover");
})

scene("gameover", () => {
  add([
    text("Game Over! \n" + "Cantidad de bloques: " + counterUI.text),
    pos(300, 300)
  ]);
})

add([
  rect(1280, 300),
  pos(0, 500),
  area(),
  outline(3),
  body({isStatic: true})
]);

let counter = 0;

const counterUI = add([
  text("0")
]);

loop(1, () => {
  counter++;
  counterUI.text = counter.toString();

  const speeds = [300, 500, 800, 1000, 1500];
  const currentSpeed = speeds[Math.floor(Math.random() * speeds.length)];

  add([
    rect(50, 50),
    pos(1000, 500),
    area(),
    body(),
    outline(3),
    move(vec2(-1, 0), currentSpeed)
  ])
})