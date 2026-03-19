import './App.css'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'

function App() {
  const linkExel = []

  const routerNav = [
    { name: 'abarrotes', path: '/abarrotes', link:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=0&single=true&output=csv' },
    { name: 'bebidas', path: '/bebidas', link:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=1144800282&single=true&output=csv' },
    { name: 'dulces', path: '/dulces' },
    { name: 'heladeria', path: '/heladeria' },
    { name: 'libreria', path: '/libreria' },
    { name: 'animales', path: '/animales' },
    // { name: 'tecnologias', path: '/tecnologias' },
    { name: 'bazar', path: '/bazar' },
    { name: 'licoreria', path: '/licoreria' }
  ]
  const marcas = [
    { name: 'marca 1', path: '/marca1' },
    { name: 'marca 2', path: '/marca2' },
    { name: 'marca 3', path: '/marca3' },
    { name: 'marca 4', path: '/marca4' },
    { name: 'marca 5', path: '/marca5' }  
  ]
  const categorySection = [
    { name: 'category 1', path: '/category1' },
    { name: 'category 2', path: '/category2' },
    { name: 'category 3', path: '/category3' },
    { name: 'category 4', path: '/category4' },
    { name: 'category 5', path: '/category5' }  
  ]

  useEffect(()=>{
    async function dowloandData(){ 
      const URL_CSV_CATEGORIAS= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=0&single=true&output=csv'
      
      const respuestaCategoria = await new Promise((res, rej)=>{
        Papa.parse(URL_CSV_CATEGORIAS, {
          download: true,
          header: true,
          complete: (results) => {
            res(results.data)
          },
          error: (err) => {rej(err)
          }
        })
      })
      setcategoria(respuestaCategoria)

  	  const URL_CSV_PRODUCTOS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=1144800282&single=true&output=csv'
      const product = await new Promise((res,rej)=>{
        Papa.parse(URL_CSV_PRODUCTOS, {
          download: true,
          header: true,
          complete: (results) => {
            res(results.data)
          },
          error: (err) => {rej(err)}
        })
      })
      setproductos(product.filter((p)=>p.stock === "1"))
    }
    dowloandData()
  },[])

  return (
    <div className='bg-[#f8fafc]'>
      <BrowserRouter>
        <Navbar listSections={routerNav} />
        <Routes>
          {routerNav.map((item) => (
            <Route key={item.path} path={item.path} element={<Shop brandList={marcas} category={categorySection}/>} />
          ))}
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
