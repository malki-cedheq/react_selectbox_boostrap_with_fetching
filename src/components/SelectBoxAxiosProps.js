// Projeto: select_box-fetching
// Arquivo: src/components/SelectBoxAxiosProps.js
// Descrição: 
// selectbox child como componente utilizando props e axios
// Autor: Malki-çedheq Benjamim
// Data: 22/01/2023

import axios from "axios";
import React from 'react'
import { SelectBox } from './SelectBox'

const baseURL = "https://jsonplaceholder.typicode.com";

export default class SelectBoxAxiosProps extends React.Component {
    constructor() {
        super()
        this.state = {
        collection: [],
        value: '',
        }
    }
    componentDidMount() {
        axios.get(`${baseURL}/users`)
        .then(        
            (response) => response.data //o conteúdo retorna no response.data
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
                <h2>React Bootstrap SelectBox feed com Axios, Props</h2>
                <SelectBox
                    name='SelectBoxAxiosProps'
                    options={this.state.collection}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}