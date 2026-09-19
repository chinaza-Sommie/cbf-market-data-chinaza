import { useState } from 'react'
import '../placeholder/Placeholder.css';
import { MarketDepthRow } from '../market-depth/useMarketDepthData';

interface MarketDepthTableProp {
  data: MarketDepthRow[];
}
export const MarketDepthTable = ({data}: MarketDepthTableProp) => {
  
  return (
    <div className="Placeholder" style={{border: "1px solid red"}}>
      
      <div className="Placeholder-buttonContainer" style={{border: "1px solid red"}}>
        <table>
          <thead style={{border: "1px solid red"}}>
            <tr >
              <th rowSpan={2} style={{border: "1px solid red"}}> #</th>
              <th colSpan={2} style={{border: "1px solid red"}} >Bid</th>
              <th colSpan={2}>Offer</th>
            </tr>
            <tr>
              <th>Quantity</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              
              <tr key={index}>
                <td>{index}</td>
                <td>{row.bidQuantity}</td>
                <td>{row.bid}</td>
                <td>{row.offerQuantity}</td>
                <td>{row.offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
