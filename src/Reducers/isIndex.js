import { initialState } from "./initialState";
export const answredIndex = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_INDEX':
            const matchedObj =  state.filter(p => p.Que === action.payload.Que );
            
            if(matchedObj.length !== 0){
                matchedObj.map((o)=>{
                    o.SltAns = action.payload.SltAns;
                })
            //    const updatedObj = state.filter(o => o.Que === matchedObj.Que);
            //    updatedObj.SltAns = action.payload.SltAns;
                return [...state]
            }
            return (
                [...state, action.payload]
            )
        default:
            return state
    }
}