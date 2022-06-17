function Pokemon({pokemon}){
    return(
    <>
        <table style={
            {
                fontSize: 12+'px'
            }
        }>
            <tr style={
                {
                    color: "blueviolet"
                }
            }>
                <th>pokemon Name</th>
                <th>URL of toy</th>
            </tr>
            <tr style={
                {
                    textDecoration: "none",
                    color: "deeppink",

                }
            }>
                <td>{pokemon.name}</td>
                <td><a href={pokemon.url}>{pokemon.url}</a></td>
            </tr>
        </table>
    </>

        )
}
export default Pokemon;