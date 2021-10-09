import spark from './spark.png'
const Header = () => {
    return (
        <div className='flex pt-16   px-12'>
            <div className ='  ' >
            
            </div>
            <div className='flex-1  ' >
                <div className="flex ">
                <div className=' flex '>
                    <img src={spark} className=' mr-2  w-10  h-10' alt="logo" />
                </div>
                <h1 className='text-2xl font-semibold'>spark</h1>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-sans     font-bold '>Sign up</h1>
            </div>
        </div>
    )
}
export default Header;