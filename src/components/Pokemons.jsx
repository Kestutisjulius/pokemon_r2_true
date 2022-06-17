import Pokemon from "./Pokemon";
import Data from "./Data";

function Pokemons(){
    return(
        <>
            <table>
            <tr style={
                {
                    color: "blueviolet"
                }
            }>
                <th>pokemon Name</th>
                <th>URL of toy</th>
            </tr>
            <Data/>
            </table>
        </>
    )
}
export default Pokemons;