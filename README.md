<<<<<<< HEAD
# Technical Documentation Hub — Landing Page

## Overview
Welcome to the **Klobase Technical Documentation** hub — the central workspace for release notes, training guides, and user documentation. This landing page mirrors the repository structure below, giving contributors and readers a quick-glance workflow for finding and maintaining docs.

## Repository Structure

Technical-Documentation/
└── Docs/
├── release notes/
│ └── klobase/
│ ├── sprint sep 11/
│ └── sprint sep 27/
├── Training guides/
│ ├── Advanced Training guide/
│ └── basic Training Guide/
└── user guides/
├── _config.yml
├── LICENSE
└── README.md


## Workflow

1. **Release Notes** (`Docs/release notes/klobase/`)
   Each sprint gets its own dated folder (e.g. `sprint sep 11`, `sprint sep 27`). New release notes are added at the end of each sprint cycle and linked from the landing page's "Latest Updates" section.

2. **Training Guides** (`Docs/Training guides/`)
   Split into **Advanced** and **Basic** tracks so users can self-select their starting point based on familiarity with the product.

3. **User Guides** (`Docs/user guides/`)
   Task-oriented, end-user-facing documentation — kept separate from training material to reduce noise for readers looking for quick answers.

4. **Site Configuration** (`_config.yml`)
   Drives the landing page's navigation, theme, and build settings (e.g. for Jekyll/GitHub Pages).

5. **Licensing & Readme**
   `LICENSE` governs reuse of documentation content; `README.md` is the entry point summarizing the hub's purpose and how to contribute.

## Suggested Landing Page Sections

| Section | Source Folder | Purpose |
|---|---|---|
| Hero / Intro | `README.md` | Project overview, quick links |
| Latest Release Notes | `release notes/klobase/sprint *` | Surface most recent sprint updates |
| Get Started | `Training guides/basic Training Guide` | Onboarding path for new users |
| Go Deeper | `Training guides/Advanced Training guide` | Power-user / admin content |
| User Guides | `user guides/` | Searchable how-to documentation |
| Contribute | `LICENSE`, `_config.yml` | Contribution and licensing info |

## Notes
- Keep sprint folders chronologically named (`sprint <month> <day>`) so the landing page can auto-sort "Latest Updates."
- Consider a `Training guides/index.md` linking Basic → Advanced for a guided learning path.
=======
# Technical-Documentation
>>>>>>> a2969a14d2fb64b0341da4a5f30b2c0ff6dbfdc3
