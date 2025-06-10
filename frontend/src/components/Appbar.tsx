import { Avatar } from './BlogCard'

const Appbar = () => {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
        <div className='flex flex-col justify-center font-semibold'>
            Lestblogs
        </div>
        <div>
            <Avatar name='vaibhav' size="big"/>
        </div>
    </div>
   )
}

export default Appbar