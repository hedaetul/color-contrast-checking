const ColorCard = () => {
  return (
    <div className='flex justify-center items-center pt-24 '>
      <div className='flex flex-col gap-4 w-[550px] h-[480px] p-5 bg-white border rounded'>
        <div>
          <label className='text-[14px]'>Text color</label>
          <input
            type='text'
            className='w-full h-10 rounded-lg p-1 border  border-gray-300'
          />
        </div>
        <div>
          <label className='text-[14px]'>Background color</label>
          <input
            type='text'
            className='w-full h-10 rounded-lg p-1 border  border-gray-300'
          />
        </div>
        <div>
          <h3 className='text-[14px]'>Contrast</h3>
          <img src='/rating.png' className='rounded-lg mt-2' />
          <p className='text-[14px] text-gray-600 mt-2'>
            Good contrast for small text (below 18pt) and great contrast for
            large text (above 18pt) or bold above 14pt.
            <a className='text-blue-600 hover:underline' href='#'>
              Click to enhance
            </a>
          </p>
        </div>
      </div>
      <div className=' flex justify-center items-center text-center w-[550px] h-[480px] bg-[#ACC8E5]  rounded'>
        <div className='max-w-[430px]'>
          <h1 className='text-[36px] text-gray-800'>Quote n. 18</h1>
          <p className="text-gray-700 mt-6 mb-4">
            Before I got married I had six theories about bringing up children;
            now I have six children and no theories.
          </p>
          <h2 className="text-gray-950 font-sans/bold">John Wilmot</h2>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
