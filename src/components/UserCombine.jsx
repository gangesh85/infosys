import { DateSort } from './DateSort'
import Users from './Users'

export function UserCombine() {

  return (
    <>
      <h1>User Monthly Rewards</h1>
      <Users sortedDate={DateSort()} />
      <Users sortedDate={DateSort()} />
      <Users sortedDate={DateSort()} />
    </>
  )
}

export default UserCombine;
