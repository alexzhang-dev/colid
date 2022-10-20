import { describe, expect, test } from 'vitest'
import { useDark } from '.'

describe('useDark', () => {
  test('toggle dark', () => {
    const { isDark, setIsDark } = useDark()
    expect(isDark()).toBe(false)
    setIsDark(s => !s)
    expect(isDark()).toBe(true)
  })
})
