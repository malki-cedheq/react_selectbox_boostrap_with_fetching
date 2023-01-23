// Projeto: select_box-fetching
// Arquivo: App.js
// Descrição: 
// exemplo de uso de selectbox em bootstrap com fectching
// utilizando função fetch e também axios, Hooks e também Props
// Autor: Malki-çedheq Benjamim
// Data: 22/01/2023
import React from 'react'
import SelectBoxFetchProps from './components/SelectBoxFetchProps'
import SelectBoxAxiosProps from './components/SelectBoxAxiosProps'
import SelectBoxFetchHooks from './components/SelectBoxFetchHooks'
import SelectBoxAxiosHooks from './components/SelectBoxAxiosHooks'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  return (
    <>
    <div>
        <h1> Exemplo de uso do selectbox </h1>
    </div>
      <SelectBoxFetchProps />
      <SelectBoxAxiosProps/>
      <SelectBoxFetchHooks/>
      <SelectBoxAxiosHooks/>
    </>
  )
}