import { convertPriceInToPoint } from '../components/convertPriceInToPoint'
import { toLocalDate } from '../components/toLocalDate' 

function UsersMonthlyRewards(props) {
    return (
    <>
      <h3> {props.month} {props.year}</h3>
      <table id='customers'>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Transaction ID</th>
            <th>Amount Spent</th>
            <th>Transaction Month</th>
            <th>Transaction Year</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {
            props.sortedDate.map(data => {
              return (
                <tr key={data.transactionId}>
                  <td>{data.customerId}</td>
                  <td>{data.customerName}</td>
                  <td>{data.transactionId}</td>
                  <td>${data.price}</td>
                  <td>{toLocalDate(data)}</td>
                  <td>{props.year}</td>
                  <td>{convertPriceInToPoint(data)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default UsersMonthlyRewards