// Projeto: select_box-fetching
// Arquivo: src/components/SelectBox.js
// Descrição: 
// selectbox parente como componente utilizando props
// Autor: Malki-çedheq Benjamim
// Data: 22/01/2023

import React from 'react'
export const SelectBox = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}><strong>{props.name}</strong></label>
    <select
      className="form-control"
      name={props.name}
      onChange={props.onChange}
    >
      <option defaultValue>Escolha uma opção</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
)