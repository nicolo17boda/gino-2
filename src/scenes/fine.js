const NERO = "0x000000";
const TASTO_GIOCA = PP.key_codes.SPACE;
let pronto;

function preload(s) {}

function create(s) {
  // Richiede una nuova pressione, anche se SPAZIO era premuto al traguardo.
  pronto = false;
  const messaggio = PP.game_state.get_variable("messaggio");
  PP.shapes.text_styled_add(s,
    LARGHEZZA / 2, ALTEZZA / 3, messaggio,
    64, "Arial", "bold", NERO, null, 0.5, 0.5);
  PP.shapes.text_styled_add(s,
    LARGHEZZA / 2, ALTEZZA / 2, "RIGIOCA (SPAZIO)",
    40, "Arial", "bold", NERO, null, 0.5, 0.5);
}

function update(s) {
  const premuto = PP.interactive.kb.is_key_just_down(s, TASTO_GIOCA);
  if (!PP.interactive.kb.is_key_down(s, TASTO_GIOCA)) pronto = true;
  if (pronto && premuto) PP.scenes.start("gino");
}

function destroy(s) {}

PP.scenes.add("fine", preload, create, update, destroy);
