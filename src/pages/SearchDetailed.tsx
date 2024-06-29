
import { useState } from "react"
import Button from "../components/Button"
import List from "../components/List"
import Loading from "../components/Loading"

export type CandidatePropsD = {
  picture: {
    large: string;
  }
  name: {
    first: string;
  }
  dob: {
    age: number;
  }
  phone: string;
}

const SearchDetailed = () => {

  const [candidatesD, setCandidatesD] = useState<CandidatePropsD[]>([])
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)

  const getCandidatesData = () => {
    setLoading(true)
    fetch("https://randomuser.me/api/?results=12")
    .then(res => res.json())
    .then(data => {
      setCandidatesD(data.results)
      setLoading(false)
      setCount(prevCount => prevCount + 1)
    })
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="search">
      <h2 className="title-page">検索ページ（詳細）</h2>
      <Button text="候補者を表示" handler={getCandidatesData} buttonColor="#2c7ce5" padding={[6, 40, 6, 40]}/>
      <Button text={count} handler={handleReset} buttonColor="#f8213a" padding={[10, 12, 10, 12]} borderRadius={50}/>
      {loading ? <Loading/> : <List candidates={candidatesD}/>}
    </div>
  )
}

export default SearchDetailed