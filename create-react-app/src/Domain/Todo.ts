import {User} from "./User"

export interface Todo {
  text: string,
  fromUser: User,
  toUser: User,
}
