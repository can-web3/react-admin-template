import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

export default function DeleteModal() {
    const { isOpenDeleteModal, closeDeleteModal, deleteModalTitle, submitDeleteModal } = useContext(GlobalContext)

    return (
        <div className={`${!isOpenDeleteModal && 'hidden'} fixed inset-0 bg-gray-200/40 z-50`}>
            <div className="bg-white text-center w-[590px] max-w-full mx-auto mt-16 p-6">
                <div className="border-2 rounded-full border-red-600 w-[60px] h-[60px] flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-times text-2xl text-red-600"></i>
                </div>
                <h1 className="text-lg text-center font-bold">Silmek istiyor musunuz?</h1>
                <p className="text-center text-gray-600 mt-4">{deleteModalTitle} verisini silmek istiyor musunuz?</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => closeDeleteModal()} className="bg-gray-500 px- py-2 text-white cursor-pointer">İptal</button>
                    <button type="button" onClick={() => submitDeleteModal()} className="bg-red-600 px- py-2 text-white cursor-pointer">Kaldır</button>
                </div>
            </div>
        </div>
    )
}
