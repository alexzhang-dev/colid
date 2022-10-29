import { createSignal } from 'solid-js'
import { describe, expect, test } from 'vitest'
import { useToggle } from '.'

describe('useToggle', () => {
  test('toggle', () => {
    const { value, setValue, toggle } = useToggle(true)
    expect(value()).toBe(true)
    setValue(false)
    expect(value()).toBe(false)
    toggle()
    expect(value()).toBe(true)
    setValue(false)
    expect(value()).toBe(false)
    setValue(v => !v)
    expect(value()).toBe(true)
    toggle()
    expect(value()).toBe(false)
  })

  test('toggle accessor', () => {
    const [rawVal] = createSignal(false)
    const { value, setValue, toggle } = useToggle(rawVal())
    expect(value()).toBe(false)
    toggle()
    expect(value()).toBe(true)
    setValue(false)
    expect(value()).toBe(false)
    setValue(v => !v)
    expect(value()).toBe(true)
    toggle()
    expect(value()).toBe(false)
  })
})
