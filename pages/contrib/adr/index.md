---
layout: doc
title: Architecture Decision Records (ADR)
description: Overview of Architecture Decision Records (ADR)
---

# Architecture Decision Records (ADR)

The substantial architecture decisions made in the Backstage project live here.
For more information about ADRs, when to write them, and why, please see
[this blog post](https://engineering.atspotify.com/2020/04/14/when-should-i-write-an-architecture-decision-record/).

Records are never deleted but can be marked as superseded by new decisions or
deprecated.

Records should be stored under the `adr` directory.

## Contributing

### Creating an ADR

- Copy `contrib/adr/adr000-template.md` to
  `contrib/adr/adr000-my-decision.md` (my-decision should be
  descriptive. Do not assign an ADR number.)
- Fill in the ADR following the guidelines in the template
- Submit a pull request
- Address and integrate feedback from the community
- Eventually, assign a number
- Add the path of the ADR to the microsite sidebar in
  [`sidebars.json`](https://github.com/backstage/backstage/blob/master/microsite/sidebars.json)
- Add the path of the ADR to the
  [`mkdocs.yml`](https://github.com/backstage/backstage/blob/master/mkdocs.yml)
- Merge the pull request

## Superseding an ADR

If an ADR supersedes an older ADR then the status of the older ADR is changed to
"superseded by ADR-XXXX", and links to the new ADR.
