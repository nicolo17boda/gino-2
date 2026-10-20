# Gino II

Platform Phaser/PoliPhaser basato sulla lezione 05: livello da 3840 pixel,
camera con anticipo, piattaforma, cinque funghi animati, bandiera finale e
sfondo parallax a tre livelli.

## Avvio

Dalla cartella del progetto:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Apri http://127.0.0.1:8000 oppure usa Live Server su `index.html` nella radice.
Gli script sono moduli: serve un server HTTP, non l'apertura tramite `file://`.

## Comandi

- Frecce sinistra/destra: cammina.
- Spazio: salta quando sei sul terreno o sulla piattaforma.
- Spazio nella schermata finale: ricomincia (rilascia prima il tasto).

Raggiungi la bandiera evitando i funghi. Il contatto con un fungo termina
la partita. Il riavvio ripristina personaggi, animazioni e posizione della camera.

Gli esercizi facoltativi finali (fuoco, piattaforma mobile, fragole e funghi
infiniti) non fanno parte di questa versione. Per visualizzare i corpi fisici,
imposta `debug_mode: true` in `src/main.js`.
