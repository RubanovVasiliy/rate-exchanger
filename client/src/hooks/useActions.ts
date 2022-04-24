import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {AuthActionCreators} from "../store/reducers/auth/action-creators"


const allActionsCreators = {
    ...AuthActionCreators
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionsCreators, dispatch)
}