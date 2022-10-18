import { createEffect, createMemo, createSignal } from 'solid-js'
import { usePreferredDark } from '../usePreferredDark'

export function useDark() {
  const [dark, setDark] = createSignal(false)
  const preferredDark = usePreferredDark()

  createMemo(() => {
    setDark(preferredDark())
  })
  createEffect(() => {
    document.documentElement.classList.toggle('dark', dark())
  })

  return [dark, setDark] as const
}
