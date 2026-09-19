import { MarketDepthTable } from '../market-depth-table/MarketDepthTable';
import { Placeholder } from '../placeholder/Placeholder';
import { useMarketDepthData } from './useMarketDepthData';

/**
 * TODO
 */
export const MarketDepthFeature = () => {
  const data = useMarketDepthData();

  // Uncomment and open devtools conbsole to inspect data 
  // console.table(data.map((entry) => entry.bidQuantity));
  // console.table(data);
  return (
    <>
      {/* Remove this placeholder. */}
      {/* <Placeholder /> */}
      {/* Insert the MarketDepth component structure here. */}
      {/* <MarketDepthTable data={data} /> */}

      <table>
  <thead>
    <tr>
      <th rowSpan={2}>#</th>
      <th colSpan={2}>Bid</th>
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
      
      <tr key={'0'}>
        <td>{index}</td>
        <td>{row.bidQuantity}</td>
        <td>{row.bid}</td>
        <td>{row.offerQuantity}</td>
        <td>{row.offer}</td>
      </tr>
    ))}
  </tbody>
</table>
    </>
  )
}
