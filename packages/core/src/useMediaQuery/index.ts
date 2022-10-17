import { createSignal, onCleanup, onMount } from 'solid-js'

export function useMediaQuery(query: string, window: Window) {
  const isSupport = 'matchMedia' in window && typeof window.matchMedia === 'function'

  const [matches, setMatches] = createSignal(false)

  let mediaQuery: MediaQueryList | undefined

  const update = () => {
    if (!isSupport)
      return

    mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    if ('addEventListener' in mediaQuery)
      mediaQuery.addEventListener('change', update)
    else
      // @ts-expect-error deprecated API
      mediaQuery.addListener(update)
  }

  onMount(() => {
    update()

    onCleanup(() => {
      if ('removeEventListener' in window) {
        window.removeEventListener('change', update)
      }
      else {
        // @ts-expect-error deprecated API
        window.removeListener(update)
      }
    })
  })

  return matches
}
