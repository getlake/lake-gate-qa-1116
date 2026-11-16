---
id: add-retries-to-webhook-delivery
title: "Add retries to webhook delivery"
author: 356904241+getlake@users.noreply.github.com
source: cli
created: 2026-11-16T07:39:03.550Z
---
# Add retries to webhook delivery

Model: Opus 5.5

Webhook deliveries fail silently when the receiver is down. We want bounded retries without duplicate side effects.

## Steps
1. Add retry settings (maxAttempts, backoffMs) to config (model: Haiku 5.5)
2. Design an idempotent delivery queue with a database migration for retry_count, with a down-migration and a feature flag to roll back
3. Implement the retry worker with exponential backoff and jitter (model: Sonnet 5.5)
4. Expose delivery status in the API (model: Sonnet 5.5)
5. Tests for failure paths and duplicate deliveries (model: Haiku 5.5)
6. Update the changelog and the README and docs site [round 9] (model: haiku)

<!-- lake:estimate:start (generated, not part of the approved digest) -->
## Lake estimate

Overall complexity: **high** · Planned per step (default **Opus 5.5**): **$2.53–$9.66** · Lake mix (cheapest model that fits each step): $2.53–$9.66

| # | Step | Complexity | Planned model | Recommended model | Est. cost |
|---|---|---|---|---|---|
| 1 | Add retry settings (maxAttempts, backoffMs) to config | low | Haiku 5.5 | Haiku 5.5 | <$0.01 |
| 2 | Design an idempotent delivery queue with a database migration for retry_count, with a down | high | Opus 5.5 | Opus 5.5 | $2.10–$8.22 |
| 3 | Implement the retry worker with exponential backoff and jitter | medium | Sonnet 5.5 | Sonnet 5.5 | $0.21–$0.71 |
| 4 | Expose delivery status in the API | medium | Sonnet 5.5 | Sonnet 5.5 | $0.21–$0.71 |
| 5 | Tests for failure paths and duplicate deliveries | low | Haiku 5.5 | Haiku 5.5 | <$0.01–$0.017 |
| 6 | Update the changelog and the README and docs site | low | Haiku 5.5 | Haiku 5.5 | <$0.01 |

Same estimator and price table as lake-meter (API list prices as of 2026-11-12). Not a quote. Subscription plans spend quota, not these dollars.
Auto-approve policy (on): needs a human (upper estimate $9.66 > $1.50; needs budget approval; 6 steps > 3; complexity high > low).
<!-- lake:estimate:end -->
