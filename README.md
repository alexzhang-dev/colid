# Colid

Alternative to Vueuse in Solid-JS, using Colid is just like using Vueuse.

## Installation

```bash
pnpm install -D solid-js @colid/core
```

## Usage

### useDark

Combine `usePreferredDark`

```ts
import { useDark } from '@colid/core'

export const Comp = () => {
  const [dark] = useDark()
  createEffect(() => {
    console.log('dark mode: ', dark())
  })
  return () => null
}
```
