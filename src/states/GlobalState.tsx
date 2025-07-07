import { useReducer } from 'react'
import GlobalReducer from '../reducers/GlobalReducer'
import GlobalContext from '../contexts/GlobalContext'

const GlobalState = ({children}) => {
    const initialState = {
        isOpenDeleteModal: false,
        deleteModalTitle: '',
        deleteModalApi: null
    }

    const [state, dispatch] = useReducer(GlobalReducer, initialState)

    const openDeleteModal = (title, deleteModalApi) => {
        dispatch({
            type: 'OPEN_DELETE_MODAL',
            deleteModalTitle: title,
            deleteModalApi: deleteModalApi
        })
    }

    const closeDeleteModal = () => {
        dispatch({
            type: 'CLOSE_DELETE_MODAL'
        })
    }

    const submitDeleteModal = async () => {
        // const res = await axiosADmi
    }

    return (
        <GlobalContext.Provider value={{
            isOpenDeleteModal: state.isOpenDeleteModal,
            deleteModalTitle: state.deleteModalTitle,
            deleteModalApi: state.deleteModalApi,
            openDeleteModal,
            closeDeleteModal,
            submitDeleteModal
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState