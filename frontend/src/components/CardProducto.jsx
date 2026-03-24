export function CardProducto({producto}){
  return(
    <article className="bg-white overflow-hidden w-full flex flex-col gap-2 rounded-2xl border border-gray-200">
      <div className="w-full aspect-square bg-amber-200"></div>
      <div className="p-2">
        <h3 className="font-bold uppercase text-blue-500 text-xs">{producto.marca}</h3>
        <h4 className="capitalize font-extrabold text-lg text-slate-900">{producto.nombre}</h4>
        <div className="mt-5 flex justify-between items-center gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase">Precio</span>
            <span className="text-[#1e293b] font-extrabold text-xl">
              S./ {producto.precio}
            </span>
          </div>

          <button 
            onClick={() => agregarAlCarrito(producto)}
            className="flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-blue-600 active:scale-95 text-white font-bold py-3 px-4 rounded-2xl transition-all shadow-md hover:shadow-blue-200 w-full sm:w-auto"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="text-sm">Agregar</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export function CardMasVendidos(){
  return(
    <article className="aspect-square w-60 flex flex-col gap-2">
      <div className="w-full aspect-square rounded-2xl bg-red-100"></div>
      <div>
        <h3 className="font-bold capitalize">mochila</h3>
        <p className="text-blue-500 font-extrabold"> <span>S./</span> 45</p>
      </div>
    </article>
  )
}