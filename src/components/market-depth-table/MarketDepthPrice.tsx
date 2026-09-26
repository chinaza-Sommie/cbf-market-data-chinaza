

interface MarketDepthPriceProp {
  widthPercentage: number;
  quantity: number;
  bgColor: string;
}
export const MarketDepthPrice = ({widthPercentage, quantity, bgColor }: MarketDepthPriceProp) => {
  
  return (
    <td style={{textAlign:'center',}}>
        <div className={bgColor === 'blue' ? `Table-quantity-blue-reverse-display Table-quantity` : `Table-quantity`}>
            <div style={{width: `${widthPercentage}%`, backgroundColor: `${bgColor}` , }}>
                {quantity}
            </div>
        </div>
    </td>
  )
}
