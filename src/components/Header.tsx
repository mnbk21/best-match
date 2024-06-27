
import { Link } from "react-router-dom"
import headerImg from "../assets/header-img.svg"
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
      <div className="header__inner">
      <img src={headerImg} className="header__inner-img"/>
        <ul>
          <li>
            <Link to="/">
              <Button text="ホーム" buttonColor="#f82553" padding={[3, 30, 3, 30]}/>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button text="登録" buttonColor="#2190f8" padding={[3, 30, 3, 30]}/>
            </Link>
          </li>
          <li>
            {loggedIn &&
              <Link to="/search">
                <Button text="検索" buttonColor="#49cc5c" padding={[3, 30, 3, 30]}/>
              </Link>
            }
          </li>

          <li>
            {loggedIn &&
              <Link to="/search-detailed">
                <Button text="詳細" buttonColor="#cc49a9" padding={[3, 30, 3, 30]}/>
              </Link>
            }
          </li>

        </ul>
      </div>

      <div className="userArea">
        {user && loggedIn &&
          // <p className="userArea__name">{user.name}さん、こんにちは！</p>
          <p className="userArea__name">{user.name}さん</p>
        }
        {loggedIn &&
          <div className="userArea__logout">
            <div className="userArea__pulse"></div>
            <Button text="ログアウト" buttonColor="#fb6640" handler={handleDelete} padding={[3, 30, 3, 30]} textColor="silver"/>
          </div>
        }
      </div>
    </header>
  )
}

export default Header