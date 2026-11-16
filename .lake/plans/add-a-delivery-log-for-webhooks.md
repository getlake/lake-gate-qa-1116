---
id: add-a-delivery-log-for-webhooks
title: "Add a delivery log for webhooks"
author: 356904241+getlake@users.noreply.github.com
source: mcp
created: 2026-11-16T09:06:17.964Z
---
# Add a delivery log for webhooks

Model: Haiku 5.5

We want a small append-only log of webhook delivery attempts so support can answer "did we send it?".

1. Add a `deliveryLog` module with `record(event, status)` and `recent(n)` backed by a JSON lines file.
2. Call `record` from the webhook sender after every attempt, including failures.
3. Add a `GET /admin/deliveries` endpoint behind the existing admin token check that returns the last 50 entries.
4. Add unit tests for the log module and the endpoint.

<!-- lake:estimate:start (generated, not part of the approved digest) -->
## Lake estimate

Overall complexity: **medium** · Planned model **Haiku 5.5**: **$0.037–$0.13** · Lake mix (cheapest model that fits each step): $0.42–$1.44

| # | Step | Complexity | Planned model | Recommended model | Est. cost |
|---|---|---|---|---|---|
| 1 | Add a deliveryLog module with record(event, status) and recent(n) backed by a JSON lines f | low | Haiku 5.5 | Haiku 5.5 | <$0.01–$0.017 |
| 2 | Call record from the webhook sender after every attempt, including failures. | low | Haiku 5.5 | Haiku 5.5 | <$0.01–$0.017 |
| 3 | Add a GET /admin/deliveries endpoint behind the existing admin token check that returns th | medium | Haiku 5.5 (may be too weak) | Sonnet 5.5 | $0.014–$0.047 |
| 4 | Add unit tests for the log module and the endpoint. | medium | Haiku 5.5 (may be too weak) | Sonnet 5.5 | $0.014–$0.047 |

Same estimator and price table as lake-meter (API list prices as of 2026-11-12). Not a quote. Subscription plans spend quota, not these dollars.
Auto-approve policy (on): needs a human (4 steps > 3; complexity medium > low).
<!-- lake:estimate:end -->
