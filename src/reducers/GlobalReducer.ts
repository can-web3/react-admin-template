const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_DELETE_MODAL":
      return {
        ...state,
        isOpenDeleteModal: true,
        deleteModalTitle: action.deleteModalTitle,
        deleteModalApi: action.deleteModalApi
      }

    case "CLOSE_DELETE_MODAL":
      return {
        ...state,
        isOpenDeleteModal: false,
        deleteModalTitle: null,
        deleteModalApi: null
      }
  
    default:
        return state;
  }
}

export default GlobalReducer