import { useEffect, useRef, useState } from 'react'
import '../placeholder/Placeholder.css';
import './MarketDepthTable.css';
import { MarketDepthRow } from '../market-depth/useMarketDepthData';
import { MarketDepthQuantWidth } from './MarketDepthQuantWidth';

interface MarketTableBodyProp {
  data: MarketDepthRow[];
}
export const MarketTableBody = ({data}: MarketTableBodyProp) => {
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
    <>
        <tbody>
            {data.map((row, index) => (
              
              <tr key={index} >
                <td>
                  <div> {index} </div>
                </td>

                {/* bid quantity */}
                <MarketDepthQuantWidth widthPercentage={getQuantityWidth(row.bidQuantity)} quantity={row.bidQuantity} bgColor='blue' />
                

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
                <td>
                  <div> {row.offer} </div>
                </td>

                {/* offer quantity */}
                <MarketDepthQuantWidth widthPercentage={getQuantityWidth(row.offerQuantity)} quantity={row.offerQuantity} bgColor={"red"}/>
                
              </tr>
            ))}
        </tbody>
    </>
  )
}
