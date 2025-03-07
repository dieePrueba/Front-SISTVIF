import Navbar_dashboard from '../../../pages/components/Navbar_dashboard'

const DashboardBibliotecaAdmin = ({children}) => {



    return (
        <div>
            <Navbar_dashboard />
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="bg-gray-800 text-white w-30 flex-shrink-0">
                    <div className="p-3">
                        <h1 className=" font-bold"><a href='/acreditacion/landing'>Biblioteca </a></h1>
                    </div>
                    <ul>
                        <li className="p-4 hover:bg-gray-700 cursor-pointer  text-sm"><a href="/biblioteca/seleccion/autores" >Registro obras</a></li>
                        <li className="p-4 hover:bg-gray-700 cursor-pointer text-sm"><a href="/biblioteca/lista/obras_autores" >Todas las obras</a></li>
                        <li className="p-4 hover:bg-gray-700 cursor-pointer text-sm"><a href="/biblioteca/Autores" >Autores</a></li>
                        <li className="p-4 hover:bg-gray-700 cursor-pointer text-sm"><a href="/biblioteca/ubicacion/obras" >Ubicaciones</a></li>
                        <li className="p-4 hover:bg-gray-700 cursor-pointer text-sm"><a href="/biblioteca/categoria/obras" >Categoria</a></li>
                        <li className="p-4 hover:bg-gray-700 cursor-pointer text-sm"><a href="/biblioteca/tipo/obras" >Tipos obras</a></li>
                        <li className="p-4 hover:bg-gray-700 cursor-pointer text-sm"><a href="" >Prestamos</a></li>
                        
                        {/* Agrega más elementos de menú según sea necesario */}
                    </ul>
                </div>
                {/* Main Content */}
                <div className="flex-1">
                    <div className="p-4">
                        
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardBibliotecaAdmin