import { DataFilter } from './DataFilter';

const Rewards = () => {
  const uniqueData = DataFilter()
  return (
    <>
      <h2>Total Rewards</h2>
      <table id='customers'>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Total Reward Points</th>
          </tr>
        </thead>

        <tbody>
          {
            uniqueData.map((data) => {
              return (
                <tr key={data.transactionId}>
                  <td>{data.customerName}</td>
                  <td>{data.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Rewards