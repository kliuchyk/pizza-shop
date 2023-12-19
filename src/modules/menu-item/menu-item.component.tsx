export function MenuItem() {
  return (
    <div className='w-96 shadow-xl rounded-2xl'>
      <div className='relative mb-8'>
        <img
          className='object-cover object-center w-full h-[15rem] rounded-t-2xl'
          src='/assets/pizza/manhattan.jpeg'
          alt='pizza slice'
        />
        <span className='absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]'>
          555g
        </span>
      </div>
    </div>
  );
}
