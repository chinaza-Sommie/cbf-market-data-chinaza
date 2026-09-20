import { useEffect, useRef, useState } from 'react'
import '../placeholder/Placeholder.css';
import './MarketDepthTable.css';
import { MarketDepthRow } from '../market-depth/useMarketDepthData';

interface MarketDepthQuantWidthProp {
  widthPercentage: number;
  quantity: number;
  bgColor: string;
}
export const MarketDepthQuantWidth = ({widthPercentage, quantity, bgColor }: MarketDepthQuantWidthProp) => {
  
  return (
    // <td className='Table-quantity'>
    //     <div style={{width: `${widthPercentage}%`, backgroundColor: `${bgColor}`}}>
    //         {quantity}
    //     </div>
    // </td>

    <td style={{textAlign:'center',}}>
        <div className={bgColor === 'blue' ? `Table-quantity-blue-reverse-display Table-quantity` : `Table-quantity`}>
            <div style={{width: `${widthPercentage}%`, backgroundColor: `${bgColor}` , }}>
                {quantity}
            </div>
        </div>
    </td>
  )
}
