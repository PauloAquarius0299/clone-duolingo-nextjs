import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
}

export const Sidebar = ({className}:Props) => {
  return (
    <div className={cn('flex lg:w-[256px] lg:fixed h-full left-0 top-0 px-4 border-r-2 flex-col',
        className, 
    )}>
        <Link href='/learn'>
         <div className='pt-8 pb-7 flex items-center gap-x-3'>
          <Image src='/mascote.png' height={40} width={40} alt='mascote' />
          <h1 className='text-2xl font-extrabold text-green-500 tracking-wide'>
            Lingo
          </h1>
        </div>
        </Link>
        <div className='flex flex-col gap-y-2 flex-1'>
            <SidebarItem label='Aprender' href='/learn' iconSrc='/learn.svg' />
            <SidebarItem label='Hanking' href='/leaderboard' iconSrc='/learnboard.svg' />
            <SidebarItem label='Missões' href='/quests' iconSrc='/quests.svg' />
            <SidebarItem label='Comprar' href='/shop' iconSrc='/shop.svg' />
        </div>
        <div className='p-4'>
            <ClerkLoading>
                <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
            </ClerkLoading>
            <ClerkLoaded>
                <UserButton afterSignOutUrl='/' />
            </ClerkLoaded>
        </div>
    </div>
  )
}

