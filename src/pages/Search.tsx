
import { useState } from "react"
import Button from "../components/Button"
import List from "../components/List"

export type CandidateProps = {
  firstName: string;
  email: string;
  height: number;
  // CandidateProps: string;
}

const Search = () => {

  const [candidates, setCandidates] = useState<CandidateProps[]>([])

  const getCandidatesData = () => {
    fetch("https://dummyjson.com/users?limit=30")
    .then(res => res.json())
    .then(data => {
      setCandidates(data.users)
      console.log(data.users)
    })
  }

  return (
    <div className="search">
      <h2>検索ページ</h2>
      <Button text="候補者を表示" handler={getCandidatesData} buttonColor="#2c7ce5" padding={[6, 40, 6, 40]}/>
      <List candidates={candidates}/>
    </div>
  )
}

export default Search