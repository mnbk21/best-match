
import { useState } from "react"
import Button from "../components/Button"
import List from "../components/List"
import Loading from "../components/Loading"

export type CandidateProps = {
  firstName: string;
  email: string;
  height: number;
}

const Search = () => {

  const [candidates, setCandidates] = useState<CandidateProps[]>([])
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)

  const getCandidatesData = () => {
    setLoading(true)
    fetch("https://dummyjson.com/users?limit=30")
    .then(res => res.json())
    .then(data => {
      const shuffledData = data.users.sort(() => Math.random() -0.5)
      setCandidates(shuffledData)
      setLoading(false)
      setCount(prevCount => prevCount + 1)
    })
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="search">
      <h2 className="title-page">検索ページ</h2>
      <Button text="候補者を表示" handler={getCandidatesData} buttonColor="#2c7ce5" padding={[6, 40, 6, 40]}/>
      <Button text={count} handler={handleReset} buttonColor="#f8213a" padding={[10, 12, 10, 12]} borderRadius={50}/>
      {loading ? <Loading/> : <List candidates={candidates}/>}
    </div>
  )
}

export default Search