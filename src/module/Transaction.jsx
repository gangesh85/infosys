import { useEffect, useState } from 'react';
import { PriceToPoint } from '../components/PriceToPoint';
import { ToLocalDate } from '../components/ToLocalDate';
import { useApi } from '../services/api';


function Transaction() {
    const { data, loading, error } = useApi()
    const [userData, setUserData] = useState()
    
    useEffect(() => {
        setUserData(data)
    },[data])
    
    if (error) {
        return <h3>ErrorMessage: {error}</h3>
    }
    if (loading) {
        return <h3>Loading..</h3>
    }
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