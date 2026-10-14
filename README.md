# Prayer Scroll · Europe
Static web app: one merged book of European travel writing is "scrolled" linearly between each of the five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha; Isha→next Fajr spans midnight). The book starts at the beginning at each prayer and finishes at the next. Press **Get passage** to read where the scroll is now.

- Prayer times: [Aladhan API](https://aladhan.com/prayer-times-api) using browser geolocation, or a manually entered city (saved in localStorage).
- `logic.js` – window/progress logic; `node test.js` runs tests (incl. midnight span).
- `build.py` – rebuilds `book.json` from Gutenberg plain-text downloads.

## Sources (public domain in the USA)
Originally from Project Gutenberg (https://www.gutenberg.org); headers, license and branding stripped, so this edited compilation is not a Project Gutenberg product.
- Mark Twain, *The Innocents Abroad* (#3176)
- Mark Twain, *A Tramp Abroad* (#119)
- Charles Dickens, *Pictures from Italy* (#650)
- Robert Louis Stevenson, *An Inland Voyage* (#534)
- Robert Louis Stevenson, *Travels with a Donkey in the Cévennes* (#535)
