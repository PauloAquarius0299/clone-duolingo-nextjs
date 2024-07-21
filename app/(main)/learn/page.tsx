import { FreedWrapper } from "@/components/FreedWrapper"
import StickyWrapper from "@/components/StickyWrapper"
import { Header } from "./header"
import UserProgress from "@/components/UserProgress"

const LearnPage = () => {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress 
        activeCourse={{title: 'Inglês', imageSrc: '/uk.svg'}}
        hearts={5}
        points={100}
        hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FreedWrapper>
        <Header title='Inglês' />
      </FreedWrapper>
    </div>
  )
}

export default LearnPage