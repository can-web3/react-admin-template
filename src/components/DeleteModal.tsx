import { useState } from "react"

export default function DeleteModal({
    title=null
}) {
    const [isOpen, setIsOpen] = useState(true) 

    return (
        <div className={`${!title && !isOpen && 'hidden'} fixed inset-0 bg-gray-200/40 z-50`}>
            <div className="bg-white text-center w-[590px] max-w-full mx-auto mt-16 p-6">
                <div className="border-2 rounded-full border-red-600 w-[60px] h-[60px] flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-times text-2xl text-red-600"></i>
                </div>
                <h1 className="text-lg text-center font-bold">Silmek istiyor musunuz?</h1>
                <p className="text-center text-gray-600 mt-4">{title} verisini silmek istiyor musunuz?</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => setIsOpen(false)} className="bg-gray-500 px- py-2 text-white cursor-pointer">İptal</button>
                    <button type="button" className="bg-red-600 px- py-2 text-white cursor-pointer">Kaldır</button>
                </div>
            </div>
        </div>
    )
}
