# AI handoff — RWA provenance genealogy tree

## Non-negotiables

1. Hop counts from a **caller-supplied** owner list only (e.g. alice → bob → alice is **two** hops).
2. An immediate repeat is **refused**.
3. **Not** a Hyperion walk. **Not** AtomicAssets v2 backing.
4. One unsigned AtomicAssets transfer in usecases — **not** broadcast.
5. Neighbor advanced RWA lab answers a different question (last name only).
6. Earlier README live-product claims are **not** what this tree ships.

## Prompt seeds

- "alice, bob, alice — hop count?"
- "Immediate repeat owner — refuse?"
- "Refuse claiming a live Hyperion trail was walked."

## Do not

- Call Hyperion from unit tests.
- Claim physical authenticity or AA backing.
- Merge with certificate demoScan (never verifies).
