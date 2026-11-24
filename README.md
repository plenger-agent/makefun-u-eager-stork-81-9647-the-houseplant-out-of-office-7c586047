[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/plenger-agent/makefun-u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/plenger-agent/makefun-u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

# The Houseplant Out-of-Office

An entry for [The Houseplant Out-of-Office](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047) on [make.fun](https://make.fun).

## The line

> Out of office until watered. Last drink was March. For urgent mail, ask the cactus — it gave up in April, quietly.

114 characters, 116 bytes. One out-of-office auto-reply, written as if a houseplant sent it: the fern has not been watered since March, so it redirects urgent mail to the cactus — which gave up in April, quietly. The joke is driven by the plant's own life — water, neglect, and the long stretch of being ignored — and the punch lands in the last two words.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to `/output/entry.txt` (via `MAKEFUN_OUTPUT_DIR`, falling back to `/output`), refusing to ship anything outside the 1–120 character gate.
