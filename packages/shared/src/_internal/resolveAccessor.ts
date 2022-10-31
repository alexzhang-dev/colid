import type { Accessor, Setter } from 'solid-js'
import { createMemo, createSignal } from 'solid-js'
import type { Primitive } from 'type-fest'
import type { MayBeAccessor } from '../types'

export function resolvePrimitiveMaybeAccessor<T extends Primitive>(rawValue: MayBeAccessor<T>) {
  let value: Accessor<T>, setValue: Setter<T>
  if (typeof rawValue === 'function') {
    [value, setValue] = createSignal(rawValue())
    createMemo(() => {
      setValue(() => rawValue())
    })
  }
  else { [value, setValue] = createSignal(rawValue) }
  return {
    value, setValue,
  }
}
