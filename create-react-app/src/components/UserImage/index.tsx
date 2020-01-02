import React from "react"

interface Props {
  userName: string,
  userImagePath: string,
  text: string
}

const UserImage: React.FC<Props> = (props) => {
  const {userName, userImagePath, text} = props
  return (
    <div className="user-image">
      <span className="item-label">{text}</span>
      <img src={userImagePath} alt={userName}/>
    </div>
  )
}
export default UserImage
