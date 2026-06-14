# React and Next.js Stable Update Checks

Run these commands from the repository root.

Use stable releases only in this repo. Do not install `canary`, `preview`, `beta`, or `rc` versions unless there is a specific reason and the change is tested separately.

## Check Installed Versions

```bash
bun pm ls next react react-dom eslint-config-next @next/swc-wasm-nodejs @types/react @types/react-dom
```

Shows the currently installed React, Next.js, and related package versions.

## Check Available Updates

```bash
bun outdated
```

Shows outdated dependencies across the repo. Look for:

- `next`
- `react`
- `react-dom`
- `eslint-config-next`
- `@next/swc-wasm-nodejs`
- `@types/react`
- `@types/react-dom`

## Check Latest Stable Versions Directly

```bash
bun pm view next version
bun pm view react version
bun pm view react-dom version
bun pm view eslint-config-next version
bun pm view @next/swc-wasm-nodejs version
bun pm view @types/react version
bun pm view @types/react-dom version
```

These query the package registry directly for the latest stable versions.

## Check Release Tags

```bash
bun pm view next dist-tags --json
bun pm view react dist-tags --json
bun pm view react-dom dist-tags --json
```

Use this only to confirm which version is tagged as `latest`. Ignore `canary`, `preview`, `beta`, and `rc` tags for normal updates.

## Update React and Next.js Packages

```bash
bun add next@latest react@latest react-dom@latest eslint-config-next@latest @next/swc-wasm-nodejs@latest
bun add -d @types/react@latest @types/react-dom@latest
```

Updates the main React and Next.js packages plus matching TypeScript types.

## Verify After Updating

```bash
bun x tsc --noEmit
bun run build
bun run test
bun outdated
```

Use these after updating to confirm TypeScript, Next.js build, tests, and remaining dependency updates.
