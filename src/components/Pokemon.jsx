function Pokemon({pokemon}){
    return(
    <>
            <tr style={
                {
                    textDecoration: "none",
                    color: "deeppink",
                }
            }>
                <td>{pokemon.name}</td>
                <td><a href={pokemon.url}>{pokemon.url}</a></td>
            </tr>

    </>

        )
}
export default Pokemon;