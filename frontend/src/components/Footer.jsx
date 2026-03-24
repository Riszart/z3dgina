export function Footer(){
  return(
    <footer className="bg-white">
      <section className="flex items-start justify-around p-5 py-15">
        <div className="w-xs flex flex-col gap-4">
          <h3 className="text-lg font-bold">Z3D-GINA</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis sunt incidunt natus voluptas vel doloremque</p>
        </div>
        <div>
          <h3 className="text-lg font-bold capitalize w-xs flex flex-col gap-4">links</h3>
          <ul>
            <li>minimarket</li>
            <li>Libreria</li>
            <li>Bazar</li>
            <li>Licoreria</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold capitalize w-xs flex flex-col gap-4">soporte</h3>
          <ul>
            <li>centro de ayuda</li>
            <li>informacion de envio</li> 
            <li>politica de devoluciones</li>
            <li>contactanos</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold capitalize w-xs flex flex-col gap-4">Contactenos</h3>
          <ul>
            <li>riszart@gmail.com</li>
            <li>+51 987654321</li> 
            <li>ucv 201 lote 25 Zona R</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="border-t border-gray-300 p-4">@2024 todos los derechos reservados</div>
      </section>
    </footer>  
  )
}