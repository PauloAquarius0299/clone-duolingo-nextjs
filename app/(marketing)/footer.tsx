import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src='/uk.svg' alt='english' height={32} width={40} className='mr-4 rounded-md' />
          Inglês
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src='/sp.png' alt='spain' height={32} width={40} className='mr-4 rounded-md' />
          Espanhol
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src='/it.svg' alt='italy' height={32} width={40} className='mr-4 rounded-md' />
          Italiano
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src='/fr.png' alt='french' height={32} width={40} className='mr-4 rounded-md' />
          Francês
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src='/jp.png' alt='japan' height={32} width={40} className='mr-4 rounded-md' />
          Japonês
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src='/gr.svg' alt='german' height={32} width={40} className='mr-4 rounded-md' />
          Alemão
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src='/no.png' alt='norway' height={32} width={40} className='mr-4 rounded-md' />
          Norueguês
        </Button>
      </div>
    </div>
  )
}

export default Footer