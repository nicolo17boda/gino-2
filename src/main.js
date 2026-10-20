import "./scenes/gino.js";
import "./scenes/fine.js";

window.LARGHEZZA = 1280;
window.ALTEZZA = 720;

const config = {
  canvas_width: LARGHEZZA,
  canvas_height: ALTEZZA,
  canvas_id: "area_gioco",
  background_color: 0x7EC8F0,
  gravity_value: 2000,
  debug_mode: false,
};

PP.game.create(config);
