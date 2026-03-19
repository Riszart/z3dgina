import { CardProducto } from "../components/CardProducto";
import { Link } from "react-router-dom";

export function Shop({brandList, category}) {
  const locationPage = window.location.pathname.slice(1).replace('/', ' > ')
  return (
    <>
      <div className="h-16"></div>
      <header className=" flex items-center justify-between p-6">
        <h1 className="text-2xl font-extrabold ml-10 uppercase tracking-widest text-blue-500 bg-white border rounded-2xl px-4 py-2">{locationPage}</h1>
        <div className="text-md mr-10 bg-white p-2 rounded-2xl border border-gray-200">
          <Link to="/">Inicio</Link>  {' > '} <span className="capitalize">{`${locationPage}`}</span> 
        </div>
      </header>
      <div className=" grid grid-cols-[250px_1fr] gap-6 px-6 h-full">
        <aside className="">
          <section className="bg-white rounded-2xl p-6 flex flex-col gap-6 border border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="capitalize text-xl font-bold">filtrar</h2>
              <button className="text-sm text-blue-500 capitalize font-semibold">limpiar filtros</button>
            </div>
            <section>
              <p className="uppercase font-bold text-gray-400 pb-4">categoria - libreria</p>
              {category.map((item) => {
                return(
                  <div key={item.name}>
                    <label className="flex items-center gap-3 group cursor-pointer py-1">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 transition-all cursor-pointer"
                      />
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </span>
                    </label>
                  </div>
                )
              })}
            </section>
            <section>
            <p className="uppercase font-bold text-gray-400 pb-4">price</p>
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="range" 
                  className="w-full border-gray-300 text-blue-600 focus:ring-blue-500 transition-all cursor-pointer"
                />
              </label>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">0 </span>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">50</span>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">100</span>
              </div>
            </div>
            </section>
            <section>
              <p className="uppercase font-bold text-gray-400 pb-4">marcas</p>
              {brandList.map((item) => {
                return(
                  <div key={item.name}>
                    <label className="flex items-center gap-3 group cursor-pointer py-1">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 transition-all cursor-pointer"
                      />
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </span>
                    </label>
                  </div>
                )
              })}
            </section>
          </section>
          <section></section>
        </aside>
        <main className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6  w-full">
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
        </main>
      </div>
      <div className=" h-16"></div>
    </>
  )
}