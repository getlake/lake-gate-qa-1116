---
id: rate-limit-outgoing-webhooks
title: "Rate-limit outgoing webhooks"
author: 356904241+getlake@users.noreply.github.com
source: cli
created: 2026-11-16T07:59:05.888Z
---
# Rate-limit outgoing webhooks

Model: Sonnet 5.5

## Steps
1. Add a token-bucket rate limiter per receiver
2. Wire it into the delivery worker with concurrency safety
3. Add tests for burst traffic
4. Document the limits

<!-- lake:estimate:start (generated, not part of the approved digest) -->
## Lake estimate

Overall complexity: **high** · Planned model **Sonnet 5.5**: **$0.77–$2.62** · Lake mix (cheapest model that fits each step): $1.02–$3.42

| # | Step | Complexity | Planned model | Recommended model | Est. cost |
|---|---|---|---|---|---|
| 1 | Add a token-bucket rate limiter per receiver | low | Sonnet 5.5 | Haiku 5.5 | $0.071–$0.25 |
| 2 | Wire it into the delivery worker with concurrency safety | high | Sonnet 5.5 (may be too weak) | Opus 5.5 | $0.55–$1.86 |
| 3 | Add tests for burst traffic | low | Sonnet 5.5 | Haiku 5.5 | $0.071–$0.25 |
| 4 | Document the limits | low | Sonnet 5.5 | Haiku 5.5 | $0.071–$0.25 |

Same estimator and price table as lake-meter (API list prices as of 2026-11-12). Not a quote. Subscription plans spend quota, not these dollars.
Auto-approve policy (on): needs a human (upper estimate $2.62 > $1.50; 4 steps > 3; complexity high > low).
<!-- lake:estimate:end -->
