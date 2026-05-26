export function Navbar() {
  return (
    <nav className="text-base sm:text-lg md:text-xl">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 md:space-x-0">
        <a
          href="https://s.ferg.al/github"
          target="_blank"
          rel="noreferrer"
          className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          <i className="mr-1 fa-brands fa-github" />
          <span className="hidden sm:inline">Github</span>
        </a>
        <a
          href="https://s.ferg.al/mixcloud"
          target="_blank"
          rel="noreferrer"
          className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          <i className="mr-1 fa-brands fa-mixcloud" />
          <span className="hidden sm:inline">Mixcloud</span>
        </a>
        <a
          href="https://s.ferg.al/soundcloud"
          target="_blank"
          rel="noreferrer"
          className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          <i className="mr-1 fa-brands fa-soundcloud" />
          <span className="hidden sm:inline">Soundcloud</span>
        </a>
        <a
          href="https://s.ferg.al/mixes"
          target="_blank"
          rel="noreferrer"
          className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          <i className="mr-1 fa-solid fa-headphones" />
          <span className="hidden sm:inline">Music</span>
        </a>
        <a
          href="https://s.ferg.al/youtube"
          target="_blank"
          rel="noreferrer"
          className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          <i className="mr-1 fa-brands fa-youtube" />
          <span className="hidden sm:inline">YouTube</span>
        </a>
        <a
          href="https://s.ferg.al/mastodon"
          rel="me"
          target="_blank"
          className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          <i className="mr-1 fa-brands fa-mastodon" />
          <span className="hidden sm:inline">Mastodon</span>
        </a>
        <a
          href="https://s.ferg.al/bluesky"
          rel="me"
          target="_blank"
          className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          <i className="mr-1 fa-brands fa-bluesky" />
          <span className="hidden sm:inline">Bluesky</span>
        </a>
      </div>
    </nav>
  )
}
