/** @jsx jsx */
import React from "react"
import {css, jsx} from "@emotion/core"

const style = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: '100%',
})

const Container: React.FC = ({children}) => {
  return (
    <div css={style}>
      {children}
    </div>
  )
}
export default Container
