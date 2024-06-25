
import { Link } from "react-router-dom"
import Button from "./Button"

type UserProps = {
  name: string;
  password: string;
}

type HeaderProps = {
  user: UserProps;
  loggedIn: boolean;
  handleDelete: () => void;
}

const Header = ({ user, loggedIn, handleDelete }: HeaderProps) => {
  return  (
    <header>
      <div>
        Header
        <ul>
          <li>
            <Link to="/">
              <Button text="ホーム" buttonColor="#f82553" handler={handleDelete}/>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button text="登録" buttonColor="#2190f8"/>
            </Link>
          </li>
          <li>
            {loggedIn &&
              <Link to="/search">
                <Button text="検索" buttonColor="#49cc5c"/>
              </Link>
            }
          </li>
        </ul>
      </div>

      <div>
        {user && loggedIn &&
          <p>{user.name}さん、こんにちは</p>
        }

        {loggedIn &&
          <div>
            <div className="pulse"></div>
            <Button text="ログアウト" buttonColor="#fb6640"/>
          </div>
        }
      </div>
    </header>
  )
}

export default Header