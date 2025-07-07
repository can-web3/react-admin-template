import { Link, Outlet } from "react-router-dom";
import NavbarUserDropdown from "../components/NavbarUserDropdown";
import DeleteModal from "../components/DeleteModal";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
        {/* delete modal */}
        <DeleteModal />

        {/* sidebar */}
        <div className="w-[240px] h-screen border-r-1 border-gray-200">
            <Link to='/' className="h-[80px] flex items-center justify-center text-white text-xl text-center block border-b border-gray-200">
                <img 
                    src="https://nextjs.spruko.com/bootstrap/page/nowa-ts/preview/assets/images/brand-logos/desktop-logo.png" 
                    className="mx-auto"
                    alt=""
                    />
            </Link>

            <ul className="flex flex-col gap-4 p-4 my-2">
                <li>
                    <Link to='/admin' className="flex gap-2 items-center hover:text-emerald-600">
                        <span>Kontrol Paneli</span>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/kategoriler' className="flex gap-2 items-center hover:text-emerald-600">
                        <span>Kategoriler</span>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/urunler' className="flex gap-2 items-center hover:text-emerald-600">
                        <span>Ürünler</span>
                    </Link>
                </li>
            </ul>
        </div>

        {/* header and main */}
        <div className="w-full min-h-screen">
            <div className="h-[80px] border-b-1 border-gray-200 flex justify-end p-4">
                <NavbarUserDropdown />
            </div>

            <main className="h-full bg-gray-100 p-4">
                <Outlet />
                
            </main>
        </div>
    </div>
  )
}
