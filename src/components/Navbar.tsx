import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b-1 border-gray-200">
        <div className="container py-4 flex items-center justify-between">
            <div>
                <Link to='/'>
                    <img src="https://nextjs.spruko.com/bootstrap/page/nowa-ts/preview/assets/images/brand-logos/desktop-logo.png" alt="" />
                </Link>
            </div>

            <ul className="flex items-center gap-3">
                <li>
                    <Link to='/giris-yap' className="btn-outline-primary">Giriş Yap</Link>
                </li>

                <li>
                    <Link to='/kayit-ol' className="btn-primary">Kayıt Ol</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}
