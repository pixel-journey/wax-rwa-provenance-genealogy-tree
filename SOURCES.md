# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets) | NFT ownership context |
| [atomicassets-contract](https://github.com/pinknetworkx/atomicassets-contract) | Transfer shape (usecase unsent) |
| [advanced RWA](https://github.com/pixel-journey/wax-advanced-rwa-provenance-and-authenticity) | Last-name equality (different product) |
| [certificate verifier](https://github.com/pixel-journey/wax-rwa-certificate-authenticity-verifier) | demoScan never verifies |
| [atomic-knowledge](https://github.com/atomicassets/atomic-knowledge) | Network before live AA actions |
| [wharfkit/skill](https://github.com/wharfkit/skill) | SessionKit if a host later transfers |

```bash
git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit
```

## Product facts locked by tests

- Hop counts from a **caller-supplied** owner list only.
- Immediate repeat refused.
- **Not** a Hyperion walk. **Not** AtomicAssets v2 backing.
- Unsigned transfer in usecases is not broadcast.

## Portability

Hop counting ports. Explorer/Hyperion hosts and AA account names are chain-local.

## Suggested topics

`antelope` `education` `pixel-journey` `nft` `wax`
