# Kami

Document-generation skill and template system. Editorial HTML templates plus a PDF / PPTX / PNG build pipeline.

## Where things live

- **`AGENTS.md` owns every repository maintenance rule**: repo map, working rules, generated mirrors, packaging hard stops, CI gotchas, risk areas, verification, fonts. This file does not restate them. The Claude-specific section below is the only overlap, and it exists because those steps are Claude-side workflow rather than repository policy.
- Producing a document: `SKILL.md` is the runbook. Template design spec: `references/design.md`. Writing spec: `references/writing.md`. Draft review checklist: `references/anti-patterns.md`. Render troubleshooting: `references/production.md` Part 4. Release flow: `docs/release.md`.
- `python3 scripts/build.py --help` is the authoritative command list. Do not trust a hand-written copy; the Commands section in `AGENTS.md` covers only the scripts `--help` cannot reach.

## Claude-specific

- This repo ships plugins for both Claude Code and Codex. `plugins/kami/` and `.claude-plugin/marketplace.json` are generated: after editing a root file, run `python3 scripts/build_metadata.py --check`.
- The Claude Desktop skill package must be the output of `bash scripts/package-skill.sh` (top-level `kami/` directory, 6 MB ceiling). A hand-zipped checkout is rejected on size.
- To let Claude drive rendering and verification directly: `claude mcp add kami -- python3 <checkout>/scripts/mcp_server.py`.
- Plugin install changes need an isolated smoke run: under `HOME=/tmp/...`, `claude plugin marketplace add <path>` then `claude plugin install kami@kami`. Reading metadata is not verification.
