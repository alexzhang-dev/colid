import { createEffect, createMemo, createSignal } from 'solid-js'
import { usePreferredDark } from '../usePreferredDark'

export function useDark() {
  const [isDark, setIsDark] = createSignal(false)
  const preferredDark = usePreferredDark()

  createMemo(() => {
    setIsDark(preferredDark())
  })
  createEffect(() => {
    document.documentElement.classList.toggle('dark', isDark())
  })

  return { isDark, setIsDark }
}
