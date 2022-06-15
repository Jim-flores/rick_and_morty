import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import useLocation from './hooks/useLocation'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [searchLocation, setSearchLocation] = useState()
  const user = useLocation(searchLocation)
  
  return (
    <div className="App">
      <div className='search'>
        <Form setSearchLocation = {setSearchLocation} />
      </div>
      <div className='user'>
        <Location user={user} />
      </div>
      
      <div className='info'>
        {
          user?.residents.map(resident => (
            <ResidentInfo key={resident} resident={resident} />
          ))
        }
      </div>
    </div>
  )
}

export default App
