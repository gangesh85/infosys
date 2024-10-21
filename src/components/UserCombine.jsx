import { DateSort } from './DateSort'
import Users from './Users'

const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const time = new Date("2023-12-01")
const month = monthName[time.getMonth()]
const year = time.getFullYear()

export function UserCombine() {
  const sortedDate = DateSort()

  function filteredData(targetDate = month) {
    sortedDate.filter(item => {
      const itemDate = new Date(item.purchaseDate);
      return itemDate >= targetDate;
    });
  }


  return (
    <>
      <h2>User Monthly Rewards</h2>
      <Users sortedDate={sortedDate} month={month} year={year} />
    </>
  )
}

export default UserCombine;
