// Projeto: select_box-fetching
// Arquivo: src/components/SelectBoxAxiosHooks.js
// Descrição: 
// selectbox child como componente funcional utilizando Hooks e axios
// Autor: Malki-çedheq Benjamim
// Data: 22/01/2023

import axios from "axios";
import React from 'react'
import { SelectBox } from './SelectBox'

const baseURL = "https://jsonplaceholder.typicode.com";

export default function SelectBoxAxiosHooks() {

    const [value, setValue] = React.useState('');
    const [collection, setCollection] = React.useState([]);

    React.useEffect(()=> {
        feed_selectbox()
    },[]);

    const feed_selectbox = () => {
        axios.get(`${baseURL}/users`)
        .then(        
            (response) => response.data //o conteúdo retorna no response.data
            )
        .then((res) => setCollection(res))
    }

    const onChangeSelecBox = (event) => {
        setValue(event.target.value)        
        console.log(event.target.value)
    };

    return (
        <div className="container mt-4">
            <h2>React Bootstrap SelectBox feed com Axios, Hooks</h2>
            <SelectBox
                name='SelectBoxAxiosHooks'
                options={collection}
                onChange={onChangeSelecBox}
            />
        </div>
    )   
}