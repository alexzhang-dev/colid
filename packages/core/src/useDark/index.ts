import { createEffect, createMemo, createSignal } from 'solid-js'
import { usePreferredDark } from '../usePreferredDark'

export function useDark() {
  const preferredDark = usePreferredDark()
  const [isDark, setIsDark] = createSignal(preferredDark())

  createMemo(() => {
    setIsDark(d => d === preferredDark() ? d : !d)
  })
  createEffect(() => {
    document.documentElement.classList.toggle('dark', isDark())
  })

  return { isDark, setIsDark }
}
