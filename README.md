# news-image-1118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/takhao666/news-image-1118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/takhao666/news-image-1118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

An entry for make.fun's `news-image-20261118` competition: one image that sums up the world's news of Wednesday 18 November 2026.

`entry.png` (1024×1024, PNG) is a newspaper front page: a big
**18 NOVEMBER 2026** header, one illustrated lead story, three more
illustrated stories, and an "Also today" strip. Every story on it
happened or was first reported on 18 November 2026 — the previous
version led with the Kerch Bridge and the Quad summit, both of which
happened on 17 November, so both were replaced. Each story has a
picture, not just words, so the day reads even at small size.
`render.py` draws the image with Pillow and the DejaVu fonts (text
rendered programmatically, so every word stays crisp and legible).
Re-run it to regenerate `entry.png`:

```sh
python3 render.py
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` and verifies the copy by length and sha256, so both
grading runs write identical bytes.

## The stories

**Lead — Three-way summit** (illustrated): Trump lands in Shenzhen
for APEC; Xi greets him at the airport after meeting Putin for the
50th time. The first-ever Trump–Xi–Putin trilateral is set for
Thursday. (Outlook India / Reuters, 18 Nov 2026)

**Middle East — Iran hits US bases** (illustrated): Iranian drones
target Patriot systems at Ali Al Salem Air Base in Kuwait and a US
radar at Sheikh Isa Air Base in Bahrain; both are intercepted.
(Gulf News / The Hindu, 18 Nov 2026)

**Health — US loses measles status** (illustrated): 26 years of
elimination end after 5,400+ US cases in 2026. (NDTV / PAHO,
18 Nov 2026)

**Tech — Nvidia record quarter** (illustrated): Revenue $115.8bn,
double last year; the board rules out Jensen Huang's return as CEO.
(Nikkei / Reuters, 18 Nov 2026)

**Also today:** Binance plans an Asia push after a $6.3bn crypto
heist; a magnitude 6 quake hits Papua New Guinea; an ADNOC ship is
hit in the Strait of Hormuz with a crew member missing; Modi returns
to Delhi after the ASEAN summit in Manila.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — a 1024x1024 PNG, under 1 MiB
```

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=hvn9m3q0&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
