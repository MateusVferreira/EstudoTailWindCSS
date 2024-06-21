import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play,} from 'lucide-react'

export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <HomeIcon />
              home
            </a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <Search />
              search
            </a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
              <Library />
              your library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className=" text-sm text-zinc-400 hove:text-zinc-400"> Playlist 1</a>
            <a href="" className=" text-sm text-zinc-400 hove:text-zinc-400"> Playlist 1</a>
            <a href="" className=" text-sm text-zinc-400 hove:text-zinc-400"> Playlist 1</a>
            <a href="" className=" text-sm text-zinc-400 hove:text-zinc-400"> Playlist 1</a>
            <a href="" className=" text-sm text-zinc-400 hove:text-zinc-400"> Playlist 1</a>
            <a href="" className=" text-sm text-zinc-400 hove:text-zinc-400"> Playlist 1</a>
            <a href="" className=" text-sm text-zinc-400 hove:text-zinc-400"> Playlist 1</a>

         </nav>
        </aside>
    )

}