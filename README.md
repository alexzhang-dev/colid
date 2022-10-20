# Colid

Alternative to Vueuse in Solid-JS, using Colid is just like using Vueuse.

## Installation

```bash
pnpm install -D solid-js @colid/core
```

## Usage

### useDark

Combine `usePreferredDark`

```tsx
import { useDark } from '@colid/core'

export const Comp = () => {
  const { isDark, setIsDark } = useDark()
  createEffect(() => {
    console.log('dark mode: ', isDark())
  })
  return () => (<div onclick={() => setIsDark(d => !d)}>{dark()}</div>)
}
```
