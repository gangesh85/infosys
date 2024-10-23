import { useMemo } from 'react';
import { getMonth } from '../components/getMonth';
import { filterDataByMonth } from '../components/filterDataByMonth';
import { SortByDate } from '../components/SortByDate'
import { useApi } from '../services/api';
import Users from './Users'

export function UserCombine() {
  const { data, loading, error } = useApi()
  const memoValue = useMemo(() => data, [data])
  const sortedDate = SortByDate(memoValue)
  const { latest, secondlatest, thirdlatest, } = getMonth(sortedDate)
  const latestData = filterDataByMonth(sortedDate, latest.monthIndex, latest.year)
  const secondLatestData = filterDataByMonth(sortedDate, secondlatest.monthIndex, secondlatest.year)
  const thirdLatestData = filterDataByMonth(sortedDate, thirdlatest.monthIndex, thirdlatest.year)

  if (error) {
    return <h3>ErrorMessage : {error}</h3>
  }
  if (loading) {
    return <h3>Loading..</h3>
  }

  return (
    <>
      <h2>User Monthly Rewards</h2>
      <Users sortedDate={thirdLatestData} month={thirdlatest.month} year={thirdlatest.year} />
      <Users sortedDate={secondLatestData} month={secondlatest.month} year={secondlatest.year} />
      <Users sortedDate={latestData} month={latest.month} year={latest.year} />
    </>
  )
}

export default UserCombine;
