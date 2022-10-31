import { createSignal } from 'solid-js'
import type { MayBeAccessor } from '../types'

export const useToggle = (initialValue: MayBeAccessor<boolean> = false) => {
  const [value, setValue] = createSignal(initialValue)
  const toggle = () => setValue(v => !v)

  return { value, setValue, toggle }
}
