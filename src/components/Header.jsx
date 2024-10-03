import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
  const [hidden, setHidden] = useState(true)
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  )
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return (
    <header>
      <nav className='bg-gray-900 border-b  border-gray-800 px-4 py-4'>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          <Link to='/' className='flex items-center text-white'>
            <img
              src='https://m.media-amazon.com/images/I/618GdyN2PrL._AC_UL320_.jpg'
              alt=''
              className='w-10 h-10 mr-2'
              style={{ borderRadius: '50%', width: '50px' }}
            />

            <span
              className={`text-2xl self-center font-semibold text-green-500`}
            >
              Movie Api
            </span>
          </Link>
          <div id='mobile-nav' className='flex md:order-2 items-center'>
            <button
              onClick={(params) => setDarkMode(!darkMode)}
              className='flex items-center p-2 mr-2 text-gray-300 hover:text-green-500 focus:outline-none'
            >
              {darkMode ? (
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z'></path>
                </svg>
              ) : (
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zM.464 13.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 000 1.414l.706.707a1 1 0 001.414-1.414L3.999 2.343a1 1 0 00-1.415 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </button>
            {/* mobile */}
            <button
              onClick={() => setHidden(!hidden)}
              className='md:hidden text-gray-300 hover:text-green-500 focus:outline-none p-2'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
            {/* pc */}
            <button
              onClick={() => setHidden(!hidden)}
              className='hidden relative md:block'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            {/* search bar pc */}
            <div className='hidden relative md:block'>
              <form
                // onSubmit={handleSubmit}
                className='relative'
              >
                <input
                  type='text'
                  className='block p-2 pl-10 w-full bg-gray-800 text-gray-300 rounded-lg border border-gray-500 focus:border-green-500'
                  placeholder='search...'
                />
                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='w-5 h-5 text-gray-500'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
