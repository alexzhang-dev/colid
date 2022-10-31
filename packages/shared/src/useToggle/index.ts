import type { Setter } from 'solid-js'
import { createMemo } from 'solid-js'
import type { MayBeAccessor } from '../types'
import { resolvePrimitiveMaybeAccessor } from '../_internal/resolveAccessor'

export const useToggle = (initialValue: MayBeAccessor<boolean> = false, options?: {
  upstreamSetter: Setter<boolean>
}) => {
  const { value, setValue } = resolvePrimitiveMaybeAccessor<boolean>(initialValue)
  const toggle = () => {
    setValue(v => !v)
  }
  if (options?.upstreamSetter) {
    createMemo(() => {
      options.upstreamSetter(value())
    })
  }
  return {
    value, toggle,
  }
}
