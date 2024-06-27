
import { Link } from "react-router-dom"
import Button from "../components/Button"

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-text">Welcome to BESTMATCH!</h1>
      <p>ベストマッチを見つけよう</p>
      <Link to="/register">
        <Button text="スタート" buttonColor="#2dc84d" padding={[7, 80, 7, 80]} textColor="yellow"/>
      </Link>
    </div>
  )
}

export default Home