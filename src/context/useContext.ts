import { useContext } from "react"
import { StoreContext } from "."
import { ContextParams } from "../../types"

export const useContextMode = () => {
    const context = useContext(StoreContext) as ContextParams;
    
    if(!context){
        throw new Error('user Context must be used within');
    }
    
    return context
}
