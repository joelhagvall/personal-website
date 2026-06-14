# TypeScript Checks

Run these commands from the repository root.

## Standard Checks

```bash
bun x tsc --noEmit
```

Main pure TypeScript check using `tsconfig.json`.

```bash
bun x tsc --noEmit --pretty false
```

Same check with output that is easier to parse in CI logs.

```bash
bun x tsc --noEmit --incremental false
```

Fresh check that ignores cached incremental state.

```bash
bun x tsc --noEmit --project tsconfig.json
```

Explicitly checks this repo's TypeScript config.

```bash
bun x tsc --noEmit --watch
```

Continuous typecheck while editing.

```bash
bun run build
```

Next.js production build. This also runs TypeScript validation and catches Next-specific generated type issues that plain `tsc` may not surface the same way.

## Debug Checks

```bash
bun x tsc --noEmit --extendedDiagnostics
```

Shows compiler timing and performance diagnostics.

```bash
bun x tsc --noEmit --incremental false --extendedDiagnostics
```

Runs a cold diagnostics check without using the incremental cache. This gives a better picture of full type-checking cost.

```bash
bun x tsc --noEmit --listFiles
```

Prints every file included in the TypeScript program.

```bash
bun x tsc --noEmit --traceResolution
```

Traces module resolution when debugging import or type lookup issues.

## Most Useful

```bash
bun x tsc --noEmit
bun run build
```
