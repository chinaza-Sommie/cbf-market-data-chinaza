import { useEffect, useRef, useState } from 'react';
import { MarketDepthRow } from '../market-depth/useMarketDepthData';
import { MarketDepthQuantWidth } from './MarketDepthQuantWidth';
import ArrowUp from '../../assets/arrow-up-solid-full.svg';
import ArrowDown from '../../assets/arrow-down-solid-full.svg';

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
                <td>
                  <div className='Price-index'> {index} </div>
                </td>

                {/* bid quantity */}
                <MarketDepthQuantWidth 
                    widthPercentage={getQuantityWidth(row.bidQuantity)} 
                    quantity={row.bidQuantity} 
                    bgColor='blue'  
                />
                

                {/* bid price */}
                <td className='Price'>
                    <div>
                        <div>
                           {checkArrowDirection(index, row.bid, "bid") ? (
                            // <ArrowUp/>'
                                <img src={ArrowUp} alt="Price increased Arrow" className='Table-arrow-icon'/>
                           ): (
                                <img src={ArrowDown} alt="Price decreased Arrow" className='Table-arrow-icon'/>
                           )}
                        </div>
                        <div >
                            {row.bid}
                        </div>
                    </div>
                </td>

                {/* offer price */}
                <td className='Price Price-reverse'>
                    <div>
                        <div>
                           {checkArrowDirection(index, row.offer, "ask") ? (
                                <img src={ArrowUp} alt="Price increased Arrow" className='Table-arrow-icon'/>
                           ): (
                                <img src={ArrowDown} alt="Price decreased Arrow" className='Table-arrow-icon'/>
                           )}
                        </div>
                        <div >
                            {row.offer}
                        </div>
                    </div>
                </td>

                {/* offer quantity */}
                <MarketDepthQuantWidth widthPercentage={getQuantityWidth(row.offerQuantity)} quantity={row.offerQuantity} bgColor={"red"}/>
                
              </tr>
            ))}
        </tbody>
    </>
  )
}
