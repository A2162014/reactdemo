// import players from './Players.json'
// import './style.css'

// function App() {
//     return (
//         <>
//             <h2>Importing JSON data</h2>
//             {players.map((player) => {
//                 return (
//                     <>
//                         <div>
//                             <br></br>
//                             <img src={player.pic} alt=''></img>
//                             <h3>{player.name}</h3>
//                         </div>
//                     </>
//                 )
//             })}
//         </>
//     )
// }
// export default App

// import { createStore } from 'redux'
import { legacy_createStore as createStore } from 'redux'

const initialState = "Hello Redux"
const reducer = (state = initialState, action) => {
    return state
}

const store = createStore(reducer)

console.log(store.getState())

function App() {
    return (
        <div>
            <h1>Redux</h1>
            <h3>{store.getState()}</h3>
        </div>
    )
}

export default App