import { Header } from '@/components/Header'
import { Preview } from '@/components/Preview'

export default function Home() {
  return (
    <main className='text-slate-600'>
      <Header>
        <h1 className='text-xl '>
          <span className='font-semibold text-cyan-600'>CV</span>-Generator
        </h1>
      </Header>
      <main className='flex min-h-screen flex-col items-center justify-between px-2 py-5 sm:px-24 sm:py-10 h-screen'>
        <Preview />
      </main>
    </main>
  )
}
