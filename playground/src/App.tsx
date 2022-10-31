import type { Component } from 'solid-js'
import { createEffect } from 'solid-js'
import { useDark, useToggle } from '@colid/core'

const App: Component = () => {
  const { isDark, setIsDark } = useDark()
  const { value, toggle } = useToggle(isDark, {
    upstreamSetter: setIsDark,
  })
  createEffect(() => {
    // eslint-disable-next-line no-console
    console.log('isDark', isDark())
    // eslint-disable-next-line no-console
    console.log('isDarkValue', value())
  })

  const onclick = () => {
    toggle()
  }

  return (
    <p class="text-4xl text-green-700 text-center py-20">
      Hello <a class="text-pink-600 hover:font-bold hover:border-1" href="https://antfu.me/posts/reimagine-atomic-css" target="atomic-css">Atomic CSS</a>!
      <button onclick={() => onclick()}>11</button>
    </p>
  )
}

export default App
