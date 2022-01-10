
const initState={
    count:0
}

export const numberReducer=(state=initState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {...state,count:state.count+action.payload}
            case "DECREMENT":
                return {...state,count:state.count-1}
    
        default:
            return state
    }
}