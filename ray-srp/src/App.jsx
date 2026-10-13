import { useState, useCallback } from 'react'
import Home from './screens/Home.jsx'
import Loading from './screens/Loading.jsx'
import SRP from './screens/SRP.jsx'

const initialScreen = () => {
  const h = window.location.hash.replace('#', '')
  return ['home', 'loading', 'srp'].includes(h) ? h : 'home'
}

export default function App() {
  const [screen, setScreen] = useState(initialScreen) // 'home' | 'loading' | 'srp'

  const go = useCallback((next) => setScreen(next), [])

  const search = useCallback(() => {
    setScreen('loading')
    setTimeout(() => setScreen('srp'), 1600)
  }, [])

  return (
    <div className="stage">
      <div className="phone">
        {screen === 'home' && <Home onSearch={search} />}
        {screen === 'loading' && <Loading />}
        {screen === 'srp' && <SRP onBack={() => go('home')} />}
      </div>
    </div>
  )
}
