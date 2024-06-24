
import { Link } from "react-router-dom"
import Button from "./Button"

const Header = () => {
  return  (
    <header>
      <div>
        Header
        <ul>
          <li>
            <Link to="/">
              <Button text="ホーム" buttonColor="#f82553"/>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button text="登録" buttonColor="#2190f8"/>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <Button text="検索" buttonColor="#49cc5c"/>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header