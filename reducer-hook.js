import { useReducer } from 'React';


//reducer : logics
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return state + 1;
        default:
            return state;
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, 0);

    const incRed = () => {
        dispatch({ type: 'inc' })
    }

    return (
        <div className='App'>
            <center>
                <h1 className='text-white mt-5' > Counter {count}</h1>
                <button className='btn btn-warning mt-3' onClick={incRed}>Increment</button>
            </center>
        </div>

    )
}