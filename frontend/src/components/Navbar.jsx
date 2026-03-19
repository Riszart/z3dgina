import { Link } from "react-router-dom"
import { useState } from "react"
export function Navbar({listSections}) {
  const [isActive, setIsActive] = useState(null)
  return(
    <nav className="flex items-center justify-around h-16 bg-white fixed top-0 left-0 right-0 z-10">
      <div>
        <Link to="/"><h1 className="text-4xl font-extrabold">Z3D-GINA</h1></Link>
      </div>
      <div className=" flex gap-6">
        {listSections.map((item) => (
          <Link key={item.path} to={item.path} className={`px-2 py-1 capitalize font-bold rounded-xl ${isActive === item.path ? 'bg-blue-500 text-white' : 'hover:text-blue-500 transition-colors'}`} onClick={() => setIsActive(item.path)}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="bg-gray-200 p-2 rounded-3xl flex items-center gap-2">
        <button className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full">B</button>
        <input type="text" placeholder="Buscar Producto..." className="pl-2" />
      </div>
    </nav>
  )
}