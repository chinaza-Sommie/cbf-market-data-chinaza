import { useEffect, useRef, useState } from 'react';
import { MarketDepthRow } from '../market-depth/useMarketDepthData';
import { MarketDepthQuantityBar } from './MarketDepthQuantWidth';
import ArrowUp from '../../assets/arrow-up-solid-full.svg';
import ArrowDown from '../../assets/arrow-down-solid-full.svg';
import {MarketDepthPrice} from './MarketDepthPrice';

interface MarketTableBodyProp {
  data: MarketDepthRow[];
}
export const MarketTableBody = ({data}: MarketTableBodyProp) => {
    // const[bidPrice, setBidPrice] = useState<number>(0);
    const previousBidPrice = useRef<MarketDepthRow[]>([]);

    useEffect(()=> {
        previousBidPrice.current = data;
    }, [data])

    const checkArrowDirection = (currentIndex: number, currentPrice: number, priceName: string) =>{
        const previousBidPriceData =  previousBidPrice.current[currentIndex];
        if(!previousBidPriceData){
            return null;
        }

        if(priceName.toLocaleLowerCase() === 'bid' && currentPrice >= previousBidPriceData.bid){
            return true;
        }

        if(priceName.toLocaleLowerCase() === 'ask' && currentPrice >= previousBidPriceData.offer){
            return true;
        }
        return false;
    }

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
                <td aria-label={` Price Level Index of ${index}`}>
                  <div className='Price-index'> {index} </div>
                </td>

                {/* bid quantity */}
                <MarketDepthQuantityBar 
                    widthPercentage={getQuantityWidth(row.bidQuantity)} 
                    quantity={row.bidQuantity} 
                    bgColor='blue'
                    label="Bid"
                />
                

                {/* bid price */}
                <MarketDepthPrice 
                    price={row.bid} 
                    direction={checkArrowDirection(index, row.bid, "bid")? "up" : "down"} 
                    label= "Bid"
                />

                {/* offer price */}             
                <MarketDepthPrice 
                    price={row.offer} 
                    direction={checkArrowDirection(index, row.offer, "ask") ? "up" : "down"} 
                    label="Ask"
                 />

                {/* offer quantity */}
                <MarketDepthQuantityBar 
                    widthPercentage={getQuantityWidth(row.offerQuantity)} 
                    quantity={row.offerQuantity} 
                    bgColor={"red"}
                    label="Ask"
                />
                
              </tr>
            ))}
        </tbody>
    </>
  )
}
