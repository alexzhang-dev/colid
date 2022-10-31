import type { Accessor } from 'solid-js'

export type MayBeAccessor<T> = T | Accessor<T>
