import './App.css'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import Papa from 'papaparse'

function App() {

  const [ sectionData, setSectionData] = useState({})

  const [productos, setproductos] = useState({
    abarrotes: [],
    bebidas: [],
    dulceria: [],
    heladeria: [],
    libreria: [],
    animales: [],
    bazar: [],
    licoreria: []
  })

  const routerNav = [
    { name: 'abarrotes', path: '/abarrotes', linkExel:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=0&single=true&output=csv'},
    { name: 'bebidas', path: '/bebidas', linkExel:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=1144800282&single=true&output=csv'},
    { name: 'dulceria', path: '/dulceria' ,linkExel:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=1516410772&single=true&output=csv'},
    { name: 'heladeria', path: '/heladeria' ,linkExel:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=1259932215&single=true&output=csv'},
    { name: 'libreria', path: '/libreria' ,linkExel:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=752832780&single=true&output=csv'},
    { name: 'animales', path: '/animales' ,linkExel:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=659971055&single=true&output=csv'},
    { name: 'bazar', path: '/bazar' ,linkExel:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=992366675&single=true&output=csv'},
    { name: 'licoreria', path: '/licoreria' ,linkExel:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQi12Lp16DTbV4PFmQZtDHN4-1aDpcAWVPdtHNE-drdgOrjJuVtWlrfftb6SbT0mM55uQ4OLq2Hycpg/pub?gid=1801494361&single=true&output=csv'}
  ]

  useEffect(()=>{
    routerNav.forEach((obj)=>{
      const originalKey = obj.linkExel
      const sectionName = obj.name

      async function dowloandData(){ 
        const respuesta = await new Promise((res, rej)=>{
          Papa.parse(originalKey, {
            download: true,
            header: true,
            complete: (results) => {
              const categoria = [...new Set(results.data.map((i)=>i.marca))]
              const brand = [...new Set(results.data.map((i)=>i.categoria))]

              setSectionData((prev)=>({
                ...prev,
                [sectionName]:{
                  products:results.data,
                  category: categoria,
                  brand: brand
                }
              }))
            },
            error: (err) => {rej(err)
            }
          })
        })
      }
      dowloandData()
    })
  },[])

  const getUnicos = (data, llave) => {
    if (!data) return [];
    const unicos = [...new Set(data.map(item => item[llave]).filter(Boolean))];
    return unicos.map(nombre => ({ name: nombre, path: `/${nombre.toLowerCase()}` }));
  }

  return (
    <div className='bg-[#f8fafc]'>
      <BrowserRouter>
        <Navbar listSections={routerNav} />
        <Routes>
          {routerNav.map((item) => (
            <Route 
              key={item.path} 
              path={item.path} 
              element={<Shop 
                brandList={sectionData[item.name]?.brand || []} 
                category={sectionData[item.name]?.category || []} 
                data={sectionData[item.name]?.products || []} />} />
          ))}
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
