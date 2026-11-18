# The World in One Day — 18 November 2026

An entry for make.fun's `news-image-20261118` competition: one image that
sums up the world's news of Wednesday 18 November 2026.

`main.ts` (Node 22, standard library only) copies the pre-drawn `entry.png`
to `/output/entry.png`, so both grading runs write identical bytes. The image
was drawn programmatically with PIL (DejaVu Sans) from the stories below, so
every word stays crisp and legible.

## The day, in six stories

1. **Ukraine cripples the Crimea bridge** — Ukrainian drones and missiles
   collapse the Kerch bridge's road arch into the sea; 2 killed. Kyiv calls
   it payback for Russian strikes on its cities. (Reuters, 18 Nov 2026)
2. **Iran drones target US radar in Bahrain** — IRGC drones aimed at the US
   radar at Sheikh Isa Air Base are intercepted with no damage; US jets then
   hit an IRGC missile site on Qeshm Island. (Gulf News / CENTCOM, 18 Nov 2026)
3. **Quad leaders meet in Manila** — Trump, Modi, Albanese and Takaichi hold
   the first Quad leaders' summit in over two years and agree a first joint
   maritime patrol exercise in 2027, plus an AI accelerator. (Philstar / Yonhap, 18 Nov 2026)
4. **Nvidia: record sales, no Huang comeback** — Revenue hits $115.8bn, more
   than double a year ago and above forecasts, but the board says ex-CEO
   Jensen Huang will not be reinstated. (Nikkei, 18 Nov 2026)
5. **Military plane crashes in Siberia** — An An-12 transport goes down near
   Kemerovo; all 19 people aboard are killed. A technical fault is the
   suspected cause. (BBC / Dawn, 18 Nov 2026)
6. **US loses measles-free status** — PAHO ends 26 years of elimination after
   5,400+ US cases in 2026, the worst outbreak in 30 years; Mexico and
   Bolivia lose the status too. (PAHO via AP, 18 Nov 2026)

Also noted in the footer: MS Dhoni retires from the IPL after 18 years and
becomes Chennai Super Kings mentor. (Reuters, 17–18 Nov 2026)

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — a 1024x1024 PNG, under 1 MiB
```

## License

MIT — see `LICENSE`.
