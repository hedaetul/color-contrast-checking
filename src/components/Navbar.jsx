const Navbar = () => {
  return (
    <>
      <div className='mt-5 mx-6 flex justify-between items-center'>
        <div>
          <img className='cursor-pointer' src='/logo.svg' />
        </div>
        <div className='flex gap-6'>
          <h3 className='cursor-pointer hover:text-blue-600'>Tools</h3>
          <h3 className='cursor-pointer text-pink-600'>GoPro</h3>
          <span className='w-[1.15px] h-7 bg-gray-300' />
          <button className='cursor-pointer bg-blue-500 px-4 py-1 rounded-md text-white tracking-tighter'>
            Sign in
          </button>
        </div>
      </div>
      <div className=' m-auto place-self-center mt-4 w-11/12 h-[1px] bg-gray-300' />
    </>
  );
};

export default Navbar;
