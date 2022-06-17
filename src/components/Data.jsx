import {useEffect, useState} from "react";
import Pokemon from "./Pokemon";

function Data(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((res)=>res.json())
            .then((result)=>setData(result.results));
    }, []);


    return<>
        {
            data.map((pokemon, i)=> <Pokemon key={i} pokemon={pokemon}/>)
        }
        </>;
}
export default Data;