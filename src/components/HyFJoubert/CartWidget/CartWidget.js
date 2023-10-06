import React from 'react'
import { BiCart } from "react-icons/bi";
import './styles.css'

export default function CartWidget() {
  return (
    <div className='cartWidget'>
      <BiCart/><p>0</p>
    </div>
  )
}
