import players from './Players.json'
import './style.css'

function App() {
    return (
        <>
            <h2>Importing JSON data</h2>
            {players.map((player)=>{
                return(
                    <>
                        <div>
                            <br></br>
                            <img src={player.pic} alt=''></img>
                            <h3>{player.name}</h3>
                        </div>
                    </>
                )
            })}
        </>
    )
}
export default App