import { PriceToPoint } from '../components/PriceToPoint'
import { ToLocalDate } from '../components/ToLocalDate'
import { TransactionYear } from '../components/TransactionYear'

function Users(props) {
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
            <th>Transaction Date</th>
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
                  <td>{<ToLocalDate data={data} />}</td>
                  <td>{<TransactionYear data={data} />}</td>
                  <td>{<PriceToPoint data={data} />}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Users