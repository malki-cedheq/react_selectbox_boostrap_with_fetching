// Projeto: select_box-fetching
// Arquivo: src/components/SelectBoxFetchHooks.js
// Descrição: 
// selectbox child como componente funcional utilizando hooks e fetch
// Autor: Malki-çedheq Benjamim
// Data: 22/01/2023

import React from 'react'
import { SelectBox } from './SelectBox'

const baseURL = "https://jsonplaceholder.typicode.com";

export default function SelectBoxFetchHooks() {

    const [value, setValue] = React.useState('');
    const [collection, setCollection] = React.useState([]);

    React.useEffect(()=> {
        feed_selectbox()
    },[]);

    const feed_selectbox = () => {
        fetch(`${baseURL}/users`)
        .then(
            (response) => response.json() //o conteúdo retorna no response.json()
            )
        .then((res) => setCollection(res))
    }

    const onChangeSelecBox = (event) => {
        setValue(event.target.value)        
        console.log(event.target.value)
    };

    return (
        <div className="container mt-4">
            <h2>React Bootstrap SelectBox feed com Fetch, Hooks</h2>
            <SelectBox
                name='SelectBoxFetchHooks'
                options={collection}
                onChange={onChangeSelecBox}
            />
        </div>
    )   
}