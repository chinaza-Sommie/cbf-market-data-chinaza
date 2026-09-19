import { useEffect, useRef, useState } from 'react'
import '../placeholder/Placeholder.css';
import './MarketDepthTable.css';
import { MarketDepthRow } from '../market-depth/useMarketDepthData';

interface MarketDepthTableProp {
  data: MarketDepthRow[];
}
export const MarketDepthTable = ({data}: MarketDepthTableProp) => {
  // const[bidPrice, setBidPrice] = useState<number>(0);
  // const previousBidPrice = useRef<number>(0);


  const getMaximumLength = Math.max( ...data.map(row => row.bidQuantity), ...data.map(row => row.offerQuantity));
    

  const getQuantityWidth = (quantity: number) => {
    if(quantity === 0) {
      return 0;
    }
    return (quantity / getMaximumLength ) * 100;
  }
  return (
    <div className="Placeholder Table" >
      
      <div className="Placeholder-buttonContainer" >
        <table>
          <thead>
            <tr id='Table-mainHeader'>
              <th > </th>
              <th colSpan={2} style={{border: "1px solid red"}} >Bid</th>
              <th colSpan={2}>Ask</th>
            </tr>
            <tr id='Table-subHeader'>
              <th></th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              
              <tr key={index} >
                <td>
                  <div> {index} </div>
                </td>
                {/* bid quantity */}
                <td className='Table-quantity'>
                  <div style={{width: `${getQuantityWidth(row.bidQuantity)}%`}}>
                    {row.bidQuantity}
                  </div>
                </td>

                {/* bid price */}
                <td className='Price'>
                  <div>
                    <div>
                    up
                  </div>
                  <div >
                    {row.bid}
                  </div>
                  </div>
                </td>

                {/* offer price */}
                <td>{row.offer}</td>

                {/* offer quantity */}
                <td className='Table-quantity'>
                  <div style={{width: `${getQuantityWidth(row.offerQuantity)}%`, backgroundColor:"red"}}>
                    {row.offerQuantity}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
