# Education — hops in a list you typed

> **Rung:** `npm test` runs `src/line.test.ts`.  
> **The test is the rule.** The owner list is not a chain history.

`lineage` takes 1 to 12 account names. A bad name or a bad length returns `{ ok: false, reason }`. It does not throw. Hops are `length - 1`. An owner may not sit next to itself. alice → bob → alice is allowed.

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Count hops on a short list |
| Intermediate | See which repeats fail, and that failure is not an exception |
| Masterclass | Keep this apart from `matches`, from a transfer, and from NFT backing |

---

## Beginner — one scene

```ts
lineage(["alice", "bob", "alice"]);
// { ok: true, hops: 2 }

lineage(["alice", "alice"]);
// { ok: false, reason: "an owner cannot follow itself" }
```

One name is 0 hops. Twelve names is 11 hops. Thirteen names is `"pass 1 to 12 owners"`.

The name test is the same shape used elsewhere: no empty, no leading or trailing dot, no `..`, only `a-z`, `1-5`, and dots, at most 12 characters. `Alice` fails. The reason string includes the bad text: `` `${owners[i]} is not an account` ``.

### Predict, then run

```bash
npm test
```

---

## Intermediate — the list is the whole story

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Reject alice → bob → alice as a cycle | any repeat fails | only the immediate neighbor is refused | `hops` 2 |
| Throw on a bad name | `throw` | `{ ok: false }` | `["alice", "alice"].ok` is false |
| Treat hops as transfers you fetched | Hyperion length | `owners.length - 1` on the argument | the same test |
| Call the list an asset's `owner` history | indexer | nothing in `line.ts` fetches | no host in the test |

`src/usecases.ts` builds two requests and one unsigned `atomicassets::transfer` of fixture asset id `"1"` with memo `"provenance preview"`. `executed` is not a field that flips to true. The comment says the owner list was not read from that transfer. The transfer is not broadcast.

The page prints hops for a fixed list. It does not ask for accounts.

---

## Masterclass — RWA here is a word, not a backing

`wax-advanced-rwa-provenance-and-authenticity` exports `matches`. That one **throws**, and it only checks the last name. alice is in `["alice", "bob"]` and still does not match. Do not catch `lineage` errors. It does not throw. Do not treat a `matches: false` as this file's `{ ok: false }`.

`wax-rwa-fractional-floor-index` divides an integer pool. It was not re-opened in this pass. It is not an owner tree and not NFT backing.

`wax-rwa-certificate-authenticity-verifier` calls `demoScan()`, which returns `verified: false`. A hop count is not a camera match.

AtomicAssets v2 still rejects `backasset` and a non-empty `tokens_to_back`. An owner list does not escrow tokens. A real custody move, if you ever send one, is `atomicassets::transfer` — the unsigned body in `usecases.ts` is the shape, and this repo does not push it.

### What this course will not teach

- Hyperion `get_actions`, a merkle proof, or a physical tag
- That returning to an earlier owner is suspicious
- Native backing of an NFT
