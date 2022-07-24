import React from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from './data'
function Invoice() {
    let params=useParams()
    let invoice=getOne(parseInt(params.id))
    
  return (
<main style={{padding: "1rem"}}>
    <h2>Total amaount:{invoice.amount}</h2>
    <h2>Invoice has provide due:{invoice.due}</h2>
    <h2>{invoice.name} has Number {invoice.number}</h2>

</main>
    

    )
}

export default Invoice