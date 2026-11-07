# Owners you listed

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

alice, bob, alice is two hops. An immediate repeat is refused. One unsigned AtomicAssets transfer.

The earlier README described a live product. This tree does not ship that.

The course is [EDUCATION.md](./EDUCATION.md). The list is not a Hyperion walk and not AtomicAssets v2 backing. `wax-advanced-rwa-provenance-and-authenticity` answers a different question (last name only, and it throws). `wax-rwa-fractional-floor-index` is integer floor of a share. It was not re-opened here.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/line.ts` | The pure rules |
| `src/line.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

`npm test` runs the rules. `npm run dev` opens the page.

## Queries

`executed` is false. This repo did not call any host. One use case includes an unsigned atomicassets transfer. It is not broadcast.
