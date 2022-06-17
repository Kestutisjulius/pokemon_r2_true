import Data from "./Data";

function Pokemons(){
    return(

            <table>
                <thead>
                <tr style={{color: "blueviolet"}}>
                    <th>pokemon Name</th>
                    <th>URL of toy</th>
                </tr>
                </thead>
            <Data/>
                    <tfoot>
                <tr style={{color: 'black'}}>
                   <td>end</td>
                   <td>no more data</td>
                </tr>
                    </tfoot>
            </table>

    )
}
export default Pokemons;