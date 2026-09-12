# Presenze Mercato Caramanico

Rilevamento delle presenze sulla planimetria ufficiale del Mercato Caramanico.
U.O. San Lorenzo · Ufficio di Polizia Amministrativa · Polizia Municipale di Napoli.

557 posteggi. Si tocca la casella: **vuota → P (presente) → S (spuntista) → vuota**.
Conteggi in tempo reale, esportazione del foglio compilato in PDF (Mod. CAR/PRES) e dei dati in CSV.

## File

| file | a cosa serve |
|---|---|
| `index.html` | l'applicazione, completa: planimetria, loghi e libreria PDF sono dentro il file |
| `sw.js` | fa funzionare la pagina **senza rete** dopo la prima apertura |
| `manifest.webmanifest` | permette di installarla sul telefono come un'app |
| `icon-192.png`, `icon-512.png` | icona dell'app |

Nessuna dipendenza esterna, tranne il link ai Google Fonts: se manca la rete
la pagina usa i font di sistema e resta identica nella sostanza.

## Pubblicazione su GitHub Pages

1. Carica i cinque file nella radice del repository (o in una sottocartella).
2. **Settings → Pages → Source:** branch `main`, cartella `/ (root)`.
3. Dopo un paio di minuti la pagina è su `https://<utente>.github.io/<repo>/`.

## Uso sul telefono

Aprire l'indirizzo **una volta con la rete**, poi:

- **iPhone (Safari):** Condividi → *Aggiungi alla schermata Home*
- **Android (Chrome):** menu ⋮ → *Installa app* / *Aggiungi a schermata Home*

Da quel momento si apre dall'icona e funziona anche senza campo.

> Importante: usare **sempre** l'icona, non il browser. I dati del rilevamento
> restano nel dispositivo, e l'app installata e il browser hanno due memorie
> separate. Non usare la navigazione privata: l'app avvisa in rosso se non
> riesce a salvare.

## Dati

Il rilevamento è salvato sul dispositivo a ogni tocco. Sopravvive a una
telefonata, alla chiusura del browser, al riavvio e allo spegnimento del
telefono. Non viene inviato da nessuna parte: nessun server, nessun account.

`Azzera` chiede conferma e per 30 secondi resta disponibile `Annulla`.

## Aggiornamenti

Quando modifichi `index.html`, cambia anche il numero di versione in cima a
`sw.js` (`caramanico-v1` → `caramanico-v2`): è l'unico modo perché i telefoni
che hanno già installato l'app scarichino la versione nuova.
