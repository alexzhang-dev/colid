import { createSignal } from 'solid-js'
import { describe, expect, test } from 'vitest'
import { useToggle } from '.'

describe('useToggle', () => {
  test('toggle', () => {
    const { value, toggle } = useToggle(true)
    expect(value()).toBe(true)
    toggle()
    expect(value()).toBe(false)
  })

  test('receive accessor as param', () => {
    const [rawVal] = createSignal(false)
    const { value, toggle } = useToggle(rawVal())
    expect(value()).toBe(false)
    toggle()
    expect(value()).toBe(true)
  })

  test.skip('accessor effect', () => {
    const [rawVal, setRawVal] = createSignal(false)
    const { value, toggle } = useToggle(rawVal)
    expect(value()).toBe(false)
    setRawVal(true)
    expect(value()).toBe(true)
    toggle()
    expect(value()).toBe(false)
    expect(rawVal()).toBe(false)
  })
})
