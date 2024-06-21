import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play,} from 'lucide-react'
import { Sidebar} from './components/Sidebar'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/10 group rounded flex item-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" width={104} height={104}  alt='capa do album full fighters' />
              <strong>Wating Light</strong>
              <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 size-10 mt-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex item-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" width={104} height={104}  alt='capa do album full fighters' />
              <strong>Wating Light</strong>
              <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 size-10 mt-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex item-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" width={104} height={104}  alt='capa do album full fighters' />
              <strong>Wating Light</strong>
              <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 size-10 mt-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex item-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" width={104} height={104}  alt='capa do album full fighters' />
              <strong>Wating Light</strong>
              <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 size-10 mt-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex item-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" width={104} height={104}  alt='capa do album full fighters' />
              <strong>Wating Light</strong>
              <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 size-10 mt-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex item-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/album.jpg" width={104} height={104}  alt='capa do album full fighters' />
              <strong>Wating Light</strong>
              <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 size-10 mt-2 invisible group-hover:visible">
                <Play />
              </button>
            </a>

          </div>

          <h2 className='font-semibold text-3xl mt-10'>Made For Mateus Vinicius Ferreira</h2>

          <div className='grid grid-cols-8'>
            <a className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <img src="/album.jpg" className='w-full' width={104} height={104}  alt='capa do album full fighters' />
                <strong>Banda Aleatoria</strong>
                <span className='text-xs text-zinc-500'> descr asdfouhjas dfsad </span>
            </a>
            <a className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <img src="/album.jpg" className='w-full' width={104} height={104}  alt='capa do album full fighters' />
                <strong>Banda Aleatoria</strong>
                <span className='text-xs text-zinc-500'> descr asdfouhjas dfsad </span>
            </a>
            <a className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <img src="/album.jpg" className='w-full' width={104} height={104}  alt='capa do album full fighters' />
                <strong>Banda Aleatoria</strong>
                <span className='text-xs text-zinc-500'> descr asdfouhjas dfsad </span>
            </a>
            <a className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <img src="/album.jpg" className='w-full' width={104} height={104}  alt='capa do album full fighters' />
                <strong>Banda Aleatoria</strong>
                <span className='text-xs text-zinc-500'> descr asdfouhjas dfsad </span>
            </a>
            <a className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <img src="/album.jpg" className='w-full' width={104} height={104}  alt='capa do album full fighters' />
                <strong>Banda Aleatoria</strong>
                <span className='text-xs text-zinc-500'> descr asdfouhjas dfsad </span>
            </a>
            
          </div>
          
        </main>
        </div>
        <Footer />
    </div>
  )
}
