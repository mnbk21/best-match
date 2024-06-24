
type RegisterProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegister: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Register = ({handleChange, handleRegister}: RegisterProps) => {
  return (
    <>
      <h2>登録ページ</h2>
      <form onSubmit={handleRegister}>
        <input onChange={handleChange} type="text" name="name" placeholder="ユーザーネーム" required />
        <input onChange={handleChange} type="text" name="password" placeholder="パスワード" required />
        <button>登録</button>
      </form>
    </>
  )
}

export default Register