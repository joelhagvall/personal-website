#!/usr/bin/env bash
# Run Lighthouse + pa11y audits against the static export in ./out
# Usage: bun run audit [--build]
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ "${1:-}" == "--build" || ! -d out ]]; then
  echo "==> Building static export..."
  bun run build
fi

echo "==> Lighthouse (perf / a11y / best-practices / SEO)..."
bunx lhci autorun

echo "==> Accessibility (pa11y, WCAG2AA)..."
bunx serve out -l 4173 --no-clipboard >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT

for _ in $(seq 1 50); do
  curl -sf http://localhost:4173/ >/dev/null && break
  sleep 0.2
done

bunx pa11y-ci

echo "==> All audits passed. Lighthouse reports in .lighthouseci/reports/"
