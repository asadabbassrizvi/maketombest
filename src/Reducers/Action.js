import { SELECTED_ANSWER } from "./Constant";
import { IS_LOGGED_USER } from "./Constant";
import { IS_INDEX } from "./Constant";
export const userSelectedA = (action) =>{
    return {
        type: SELECTED_ANSWER,
        payload:action
    }
}
export const isLoggesU = (action) =>{
    return {
        type:IS_LOGGED_USER,
        payload:action
    }
}
export const isIndex =(action) =>{
    return( {
        type:IS_INDEX,
        payload:action
    })
}