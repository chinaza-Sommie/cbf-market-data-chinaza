import ArrowUp from '../../assets/arrow-up-solid-full.svg';
import ArrowDown from '../../assets/arrow-down-solid-full.svg';

interface MarketDepthPriceProp {
  price: number;
  direction: 'up' | 'down';
  label: "Bid" | "Ask";
}
export const MarketDepthPrice = ({price, direction, label }: MarketDepthPriceProp) => {
  const arrowDirection = direction === 'up' ? ArrowUp : ArrowDown;

  return (
    <td className={label === "Bid" ? `Price`: `Price Price-reverse`}>
        <div>
            <div>
                <img src={arrowDirection} alt={`${label} direction arrow`} className='Table-arrow-icon'/>
            </div>

            <div> {price}</div>
        </div>
    </td>
  )
}
