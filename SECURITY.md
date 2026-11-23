# Security — provenance hop counts

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Caller-supplied list | hop counts only |
| Immediate repeat | refused |
| Network | not called |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Hyperion trail | Not walked |
| Physical tag / camera | Not verified |
| AtomicAssets v2 backing | Not this product |
| Legal authenticity | Forbidden claim |

## Attack angles

1. Claiming a live mint trail was verified.  
2. Treating hop count as a certificate.  
3. Merging throw-on-mismatch advanced RWA style without tests.  
4. Broadcasting the unsigned transfer usecase.

## Honesty limits

List arithmetic only.

| Sibling | Distinction |
| --- | --- |
| [advanced RWA](https://github.com/pixel-journey/wax-advanced-rwa-provenance-and-authenticity) | Last-name equality |
| [certificate verifier](https://github.com/pixel-journey/wax-rwa-certificate-authenticity-verifier) | demoScan never verifies |

[docs.wax.io](https://docs.wax.io/)
