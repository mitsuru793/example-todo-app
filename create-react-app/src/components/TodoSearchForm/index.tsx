import React from "react"

interface SelectItem {
  value: string,
  label: string,
}

interface SelectItems {
  keyword: SelectItem[],
  to: SelectItem[],
  from: SelectItem[],
}

const searchList: SelectItems = {
  keyword: [
    {
      value: 'created',
      label: 'Created',
    },
    {
      value: 'updated',
      label: 'Updated',
    },
  ],
  to: [
    {
      value: 'deer',
      label: 'Deer',
    },
    {
      value: 'Panda',
      label: 'Panda',
    },
  ],
  from: [
    {
      value: 'deer',
      label: 'Deer',
    },
    {
      value: 'Panda',
      label: 'Panda',
    },
  ],
}

const SelectBox: React.FC<{
  label: string,
  choices: SelectItem[]
}> = (props) => {
  const {label, choices} = props
  return (
    <div className="search-item">
      <span className="label">{label}</span>
      <select name="keyword">
        {choices.map((choice) => (
          <option value={choice.value}>{choice.label}</option>
        ))}
      </select>
    </div>
  )
}

const TodoSearchForm: React.FC = () => {
  return (
    <div className="search-item keyword">
      <span className="label">Search</span>
      <input type="text"/>
      <SelectBox label="Sort" choices={searchList.keyword}/>
      <SelectBox label="To" choices={searchList.to}/>
      <SelectBox label="From" choices={searchList.from}/>
    </div>
  )
}
export default TodoSearchForm
