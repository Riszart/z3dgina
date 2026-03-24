import { CardCategoria } from "../components/CardCategoria"
import { CardProducto , CardMasVendidos} from "../components/CardProducto"

export function Home() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen px-5 flex flex-col gap-20 pt-16 pb-30">
        <section className="mt-5 flex items-center justify-center">
          <div className="relative w-full min-h-125 rounded-[18px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center " style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/img/banner.png')` 
          }}>
            <span className="bg-[#3b82f6] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Tu aliado del día a día
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
              Todo lo que necesitas, <span className="text-[#3b82f6]">en un solo lugar</span>
            </h1>
            <p className="text-white text-xl md:text-1xl max-w-3xl opacity-95 leading-relaxed">
              Desde los útiles escolares para los chicos hasta tu helado favorito, un antojo dulce o las compras rápidas para la cena. Somos librería, minimarket, heladería y licores todo listo para ti.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#3b82f6] hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                Explorar Catálogo General
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105">
                Descubrir Ofertas del Mes
              </button>
            </div> */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl capitalize font-bold pb-5">categorias</h2>
          <div className="flex gap-3 justify-center">
            <CardCategoria />
            <CardCategoria />
            <CardCategoria />
            <CardCategoria />
            <CardCategoria />
          </div>
        </section>
        <section>
          <h2 className="text-2xl capitalize font-bold pb-5">mas vendidos</h2>
          <div className="flex gap-3 justify-center">
            <CardMasVendidos />
            <CardMasVendidos />
            <CardMasVendidos />
            <CardMasVendidos />
            <CardMasVendidos />
          </div>
        </section>
      </main>
    </>
  )
}