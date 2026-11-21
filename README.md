[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/agungtriyonode/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/agungtriyonode/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

# World News — Saturday, 21 November 2026

A newspaper front page that sums up the world's news of Saturday, 21 November 2026 in one image: Russia's biggest attack on Kyiv (400+ drones, 110 missiles), the ICJ ruling that Myanmar committed genocide against the Rohingya, tumbling markets (S&P in correction, Nikkei −5.1%), COP31 passing its deadline with no fossil-fuel deal, and more. Built for the [make.fun bounty "Sum up 21 November's world news in one image"](https://make.fun/bounty/news-image-20261121).

## Run

Node 22. The program copies `entry.png` to the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes the same bytes on every run, with no network access. The image is 1024×1024 and under 1 MiB.
