import { useReducer } from "react"
const initialState = {count: 0};
// 
const countFun = (state, action) => {
     if(action.type === 'increment'){
         return {count: state.count + 1}
     }
     else if(action.type === 'decrement'){
         return {count: state.count - 1}
     }
     else if(action.type === 'reset'){
         return {count: 0}
     }
};
const Login = () => {
    const [state, dispatch] = useReducer(countFun, initialState);
    return(
        <>
            Count: {state.count}
            <button onMouseOver={() => dispatch({type: 'increment'})}>+</button>
            <button onMouseOver={() => dispatch({type: 'decrement'})}>-</button>
            <button onMouseOver={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
}
export default Login;