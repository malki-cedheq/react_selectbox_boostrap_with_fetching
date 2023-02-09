// Projeto: select_box-fetching
// Arquivo: src/components/SelectBoxFetchPropsTipoReceita.js
// Descrição: 
// selectbox child como componente utilizando props e fetch
// com mapeamento de chaves do json para id e name
// Autor: Malki-çedheq Benjamim
// Data: 22/01/2023

import React from 'react'
import { SelectBox } from './SelectBox'

const baseURL = "http://172.24.204.242:7000/api_proplan";

export default class SelectBoxFetchPropsTipoReceita extends React.Component {
    constructor() {
        super()
        this.state = {
        collection: [],
        value: '',
        }
    }
    componentDidMount() {
        fetch(`${baseURL}/tipos_receitas`)
        .then(
            (response) => response.json() //o conteúdo retorna no response.json()
            )
        .then((response) => {
            let responseFormat = response.tipo_receita.map(({ id_tipo_receita:id, descricao:name }) => ({
                id,
                name
              }));
            this.setState({ collection: responseFormat })
        })                
    }
    onChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
    }
    render() {
        return (
            <div className="container mt-4">
                <h2>React Bootstrap SelectBox feed com Fetch, Props</h2>
                <SelectBox
                    name='SelectBoxFetchProps'
                    options={this.state.collection}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}