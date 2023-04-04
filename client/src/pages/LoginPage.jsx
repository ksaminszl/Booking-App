export default function LoginPage() {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form action='' className='max-w-md mx-auto'>
          <input type='email' placeholder='your@gmail.com' />
          <input type='password' placeholder='password' />
          <button className='primary'>Login</button>
        </form>
      </div>
    </div>
  );
}
