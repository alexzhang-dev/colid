import type { Component } from 'solid-js'
import { useDark } from '@colid/core'
import { createEffect } from 'solid-js'

const App: Component = () => {
  const [dark] = useDark()
  createEffect(() => {
    // eslint-disable-next-line no-console
    console.log('dark mode: ', dark())
  })
  return (
    <p class="text-4xl text-green-700 text-center py-20">
      Hello <a class="text-pink-600 hover:font-bold hover:border-1" href="https://antfu.me/posts/reimagine-atomic-css" target="atomic-css">Atomic CSS</a>!
    </p>
  )
}

export default App
