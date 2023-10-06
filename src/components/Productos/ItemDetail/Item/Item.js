import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

export default function Item({id, titulo, imagen, marca, precio, stock}) {
  return (
    <div className='item'>
      <img src={imagen} alt={titulo}/>
      <h3>{titulo}</h3>
      <p>Marca: {marca}</p>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      <p>SKU: {id}</p>
      <ItemCount stock={stock} initial={0} onAdd={(cant) => {console.log("Cantidad agregada: "+cant)}}/>
    </div>
  )
}
