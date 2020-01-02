import React from "react"
import {User} from "../../Domain/User"

interface Props {
  loginUser: User,
}

const Header: React.FC<Props> = (props) => {
  const {loginUser} = props
  return (
    <header>
      <div className="loginUser">
        <div className="name">
          <span>{loginUser.name}</span>
        </div>
        <img src={loginUser.imagePath} alt={loginUser.name}/>
      </div>
    </header>
  )
}
export default Header
