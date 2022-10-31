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

### UseToggle

Toggle given boolean value/Accessor

> NOTICE: solid cannot notify upstream dependencies when you change the upstream ref value, so you need to provide `upstreamSetter` to notify upstream value if necessary.

```tsx
import { useToggle } from '@colid/core'
import { createSignal } from 'solid-js'

// boolean value
const { value, toggle } = useToggle(true)
value() // true
toggle()
value() // false

// Accessor
const [rawValue, setRawValue] = createSignal(false)
// Notify upstream value
const { value, toggle } = useToggle(rawValue, {
  upstreamSetter: setRawValue
})
rawValue() // false
value() // false
toggle()
rawValue() // true
value() // true
```
