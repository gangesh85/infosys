import { useContext } from 'react';
import { PriceToPoint } from './PriceToPoint';
import { userDataContext } from '../App';
import { ToLocalDate } from './ToLocalDate';

const Transaction = () => {
    const userData = useContext(userDataContext)
    
    return (
        <>
            <h2>All Transaction</h2>
            <table id='customers'>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Purchase Date</th>
                        <th>Produced Purchased</th>
                        <th>Price</th>
                        <th>Rewards</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userData.map((data) => {
                            return (
                                <tr key={data.transactionId}>
                                    <td >{data.transactionId}</td>
                                    <td>{data.customerId}</td>
                                    <td>{data.customerName}</td>
                                    <td>{<ToLocalDate data={data} />}</td>
                                    <td>{data.producedPurchased}</td>
                                    <td>${data.price}</td>
                                    <td><PriceToPoint data={data} /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Transaction