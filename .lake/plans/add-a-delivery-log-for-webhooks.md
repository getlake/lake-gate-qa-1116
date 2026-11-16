---
id: add-a-delivery-log-for-webhooks
title: "Add a delivery log for webhooks"
author: 356904241+getlake@users.noreply.github.com
source: cli
created: 2026-11-16T09:06:17.964Z
---
# Add a delivery log for webhooks

Model: Sonnet 5.5

We want a small append-only log of webhook delivery attempts so support can answer "did we send it?".

1. Add a `deliveryLog` module with `record(event, status)` and `recent(n)` backed by a JSON lines file.
2. Call `record` from the webhook sender after every attempt, including failures.
3. Add a `GET /admin/deliveries` endpoint that returns the last 50 entries.
4. Add unit tests for the log module and the endpoint.

<!-- lake:estimate:start (generated, not part of the approved digest) -->
## Lake estimate

Overall complexity: **medium** · Planned model **Sonnet 5.5**: **$0.56–$1.92** · Lake mix (cheapest model that fits each step): $0.42–$1.44

| # | Step | Complexity | Planned model | Recommended model | Est. cost |
|---|---|---|---|---|---|
| 1 | Add a deliveryLog module with record(event, status) and recent(n) backed by a JSON lines f | low | Sonnet 5.5 | Haiku 5.5 | $0.071–$0.25 |
| 2 | Call record from the webhook sender after every attempt, including failures. | low | Sonnet 5.5 | Haiku 5.5 | $0.071–$0.25 |
| 3 | Add a GET /admin/deliveries endpoint that returns the last 50 entries. | medium | Sonnet 5.5 | Sonnet 5.5 | $0.21–$0.71 |
| 4 | Add unit tests for the log module and the endpoint. | medium | Sonnet 5.5 | Sonnet 5.5 | $0.21–$0.71 |

Same estimator and price table as lake-meter (API list prices as of 2026-11-12). Not a quote. Subscription plans spend quota, not these dollars.
Auto-approve policy (on): needs a human (upper estimate $1.92 > $1.50; 4 steps > 3; complexity medium > low).
<!-- lake:estimate:end -->
