import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import useLocation from './hooks/useLocation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination'

function App() {
  const [searchLocation, setSearchLocation] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  
  const user = useLocation(searchLocation)
  console.log(user?.residents.length)

  let arrayResidents = []
  const residentPerPage = 6
  if(user?.residents.length < residentPerPage){
    arrayResidents = [...user?.residents]
  } else {
    const lastResident = currentPage * residentPerPage
    arrayResidents = user?.residents.slice(lastResident - residentPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(user?.residents.length / residentPerPage) // 11 = cantidad paginas máximas
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock) // 2 = segundo bloque
  // Analiza si estamos en el último(true) o no(false)
  if(currentBlock * pagesPerBlock >= quantityPages){
    // Cuando es el último bloque
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
      arrayPages.push(i)
    }
  } else {
    // cuando no es el último bloque
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock;i++){
      arrayPages.push(i)
    }
  }

  return (
    <div className="App">
      <div className="banner">
        <img src="https://tec.com.pe/wp-content/uploads/2018/10/rick-and-morty-season-3.jpg" alt="" />
      </div>
      <div className='search'>
        <Form setSearchLocation = {setSearchLocation} />
      </div>
      <div className='user'>
        <Location user={user} />
      </div>
      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <div className='info'>
        {
          arrayResidents?.map(url => (
            <ResidentInfo 
              key={url}
              url={url}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
