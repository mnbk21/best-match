
import { type CandidateProps } from "../pages/Search"
import { type CandidatePropsD } from "../pages/SearchDetailed"

type ListProps<T> = {
  candidates: T[];
}

function List<T extends CandidateProps | CandidatePropsD>({ candidates }: ListProps<T>){
  return(
    <div className="list-container">
      {candidates.map((candidate, index) => {
        if("firstName" in candidate){
          return(
            <div key={index}>
              <p>名前: {candidate.firstName}</p>
              <p>メール: {candidate.email}</p>
              <p>身長: {candidate.height}</p>
            </div>
          )
        } else if ("picture" in candidate){	
          return (	
          <div key={index}>	
            <img src={candidate.picture.large}/>	
            <p>名前: {candidate.name.first}</p>	
            <p>年齢: {candidate.dob.age}</p>	
            <p>電話: {candidate.phone}</p>	
          </div> 	
          )	
        }	
      })}	
    </div>
  )
}

export default List