import { Link } from "react-router-dom";

export default function SectionHeader({
  title,
  btnPath=null
}) {
  return (
    <div className="flex justify-between items-center gap-2 mb-3">
        <h1 className="text-lg">{title}</h1>

        { btnPath && (
          <Link 
            to={btnPath}
            className="btn-primary"
            >
              <i className="fas fa-plus"></i>
              Ekle
          </Link>
        ) }
      </div>
  )
}
