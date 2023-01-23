# Exemplos de uso do SelectBox com Props e Hooks, Fetch e Axios

## Requisitos
    NodeJS versão +16
## Utilizando o repositório
1. Criar a arquitetura da aplicação React

```
git clone https://github.com/malki-cedheq/react_selectbox_boostrap_with_fetching.git
```

2. Instalando as dependências

```
npm install
```

3. Inicializar o servidor, no diretório raiz

```
npm start
```

## Criando aplicação do Zero

1. Criar a arquitetura da aplicação React

```
npx create-react-app select_box-fetching
```

2. Navegar ao diretório raiz

```
   cd select_box-fetching
```

3. Instalar dependências

```
npm install bootstrap
npm install axios
```

4. Editar App.js

```
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  return (
    <>

    <>
  )
}
```

5. Navegar ao diretório source

```
   cd src
```

6. Criar o diretório components

```
   mkdir components
```

7. Navegar ao diretório components

```
   cd components
```

8. Criar o component SelectBox.js

```
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
```

9. Criar o component SelectBoxFetchProps.js

Este componente alimenta o SelecBox utilizando fetch, usa props

```
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
```

10. Criar o component SelectBoxAxiosProps.js

Este componente realiza alimenta o SelecBox utilizando axios, usa props

```
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
```

11. Criar o component SelectBoxFetchHooks.js

Este componente realiza alimenta o SelecBox utilizando fetch, usa hooks

```
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
```

12. Criar o component SelectBoxAxiosHooks.js

Este componente realiza alimenta o SelecBox utilizando axios, usa hooks

```
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
```

13. Atualizar o App.js, no diretório raiz

```
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
```

14. Inicializar o servidor, no diretório raiz

```
npm start
```
