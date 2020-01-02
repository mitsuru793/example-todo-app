import React from 'react'

interface Props {
  pageNums: number[]
}

const Pager: React.FC<Props> = (props) => {
  const {pageNums} = props
  const center = Math.round(pageNums.length / 2) - 1
  return (
    <div className="pager">
      <div className="item first">◀</div>
      <div className="numbers">
        {pageNums.map((num) => (
          <div className="item number">{num === center ? `[${num}]` : num}</div>
        ))}
      </div>
      <div className="item last">▶</div>
    </div>
  )
}

export default Pager
