export function CardCategoria(){
  return(
    <article className="bg-white p-4 rounded-2xl shadow-md aspect-square w-60">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-blue-500 aspect-square w-10"></div><span className="uppercase text-xs font-semibold">120+ productos</span>
      </div>
      <h3 className="text-lg font-bold capitalize mb-2">nombre Categoría</h3>
      <p className="text-gray-600 text-sm mb-4">Descripción de la categoría</p>
      <div className="w-full aspect-video rounded-lg bg-red-100"></div>
    </article>
  )
}