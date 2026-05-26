import { createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react'
import { Counter } from '../components/Counter'
import { Navbar } from '../components/Navbar'

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {
    try {
      console.log('[index loader] Fetching visit count...')
      const origin =
        typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
      const apiUrl = `${origin}/api/visit`
      console.log('[index loader] Fetching from:', apiUrl)

      const response = await fetch(apiUrl)
      console.log('[index loader] Response status:', response.status)

      if (!response.ok) {
        console.error('[index loader] Response not OK')
        const errorText = await response.text()
        console.error('[index loader] Error response:', errorText)
        return { count: 0 }
      }

      const r = await response.json()
      console.log('[index loader] Response data:', JSON.stringify(r))

      if (r.body && typeof r.body.count === 'number') {
        console.log('[index loader] Count:', r.body.count)
        return {
          count: r.body.count,
        }
      } else {
        console.error('[index loader] Invalid response format:', r)
        return { count: 0 }
      }
    } catch (error) {
      console.error('[index loader] Error loading visit count:', error)
      console.error(
        '[index loader] Error details:',
        error instanceof Error ? error.message : String(error),
      )
      console.error(
        '[index loader] Error stack:',
        error instanceof Error ? error.stack : 'No stack',
      )

      // Return 0 count on error so the page still loads
      return {
        count: 0,
      }
    }
  },
})

function Home() {
  const data = Route.useLoaderData()
  const audioRef = useRef<HTMLAudioElement>(null)

  const releaseTheMagic = () => {
    audioRef.current?.play()
  }

  return (
    <div
      className="flex flex-col h-screen overflow-hidden bg-gray-700 bg-repeat animate-ltr-linear-infinite"
      style={{ backgroundImage: "url('/img/pipes.png')", backgroundSize: '200px 200px' }}
    >
      <header className="p-2 sm:p-4">
        <Navbar />
      </header>
      <main className="flex-grow -mt-4 sm:-mt-8">
        <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="-mt-20 sm:-mt-40 mb-4 sm:mb-0">
            <img
              alt="Ferglier Gif"
              src="/img/awesome-just-awesome.gif"
              className="max-w-[250px] sm:max-w-[400px] md:max-w-full w-auto h-auto"
            />
          </div>

          <button
            className="p-4 sm:p-6 overflow-hidden text-lg sm:text-xl md:text-2xl font-bold text-white bg-red-500 rounded shadow-2xl hover:bg-purple-400 focus:outline-none focus:ring-2 active:bg-pink-600 transition-colors"
            onClick={releaseTheMagic}
          >
            🪄 MOAR MAGIC
          </button>
        </div>
      </main>
      <footer className="p-2 sm:p-4 relative">
        <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-xs sm:text-sm md:text-base text-gray-100 animate-bounce">
          <Counter count={data.count} />
        </div>
        <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 text-xs sm:text-sm md:text-base text-gray-100 animate-bounce">
          <a
            href="https://github.com/ferglie/fergl.ie"
            target="_blank"
            rel="noreferrer"
          >
            Built with good codes
          </a>
        </div>
      </footer>

      <audio loop ref={audioRef}>
        <source src="/audio/power_of_love.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
