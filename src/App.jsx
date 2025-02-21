import { useState } from 'react'
import {Header} from './components/Header/Header'
import {Title} from './components/Title/Title'
import {Hero} from './components/Hero/Hero'
import {ScrollArrow} from './components/ScrollArrow/ScrollArrow'
import {SearchSection} from './components/SearchSection/SearchSection'
import './App.css'

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogout = () => {
    setIsLogged(false);
  }
  
  const handleEmailSubmit = () => {
    setIsLogged(true);
  }

  return (
    <div className='min-h-screen bg-[#B7E2F3]'> 
      <main className='container mx-auto px-4 pt-24 pb-12'>
        <section className='bg-[#B7E2F3]'>
          <Header isLogged={isLogged} onLogout={handleLogout} />
        </section>
        <section className='max-w-4xl mx-auto'>
          <Title /> 
          <Hero  onEmailSubmit={handleEmailSubmit} isLogged={isLogged}/> 
          <ScrollArrow />
        </section>

        <section className='h-screen w-full bg-[#B7E2F3]'>
          <SearchSection />
        </section>
       
      </main>


    </div>
  )
}

export default App
