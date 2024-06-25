
import Button from "../components/Button"

type RegisterProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegister: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Register = ({ handleChange, handleRegister }: RegisterProps) => {
  return (
    <>
      <h2>登録ページ</h2>
      <form onSubmit={handleRegister}>
        <input onChange={handleChange} type="text" name="name" placeholder="ユーザーネーム" required />
        <input onChange={handleChange} type="text" name="password" placeholder="パスワード" required />
        <Button text="登録" buttonColor="#2190f8" padding={[5, 200, 5, 200]} />
      </form>
    </>
  )
}

export default Register