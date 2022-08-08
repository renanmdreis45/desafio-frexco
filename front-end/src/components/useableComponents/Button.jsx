import React from  'react'
import '../../App.css'


const Button =({ addItem}) => <button onClick={addItem} type="button" class="btn btn-success">Adicionar ao carrinho</button>

export default Button