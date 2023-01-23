// Projeto: select_box-fetching
// Arquivo: src/components/SelectBoxFetchUseProps.js
// Descrição: 
// selectbox child como componente utilizando props e fetch
// Autor: Malki-çedheq Benjamim
// Data: 22/01/2023

import React from 'react'
import { SelectBox } from './SelectBox'

const baseURL = "https://jsonplaceholder.typicode.com";

export default class SelectBoxFetchProps extends React.Component {
    constructor() {
        super()
        this.state = {
        collection: [],
        value: '',
        }
    }
    componentDidMount() {
        fetch(`${baseURL}/users`)
        .then(
            (response) => response.json() //o conteúdo retorna no response.json()
            )
        .then((res) => this.setState({ collection: res }))
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