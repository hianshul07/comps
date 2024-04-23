const DropDown = ({options}) => {
  
  const renderedOptions = options.map(option => {
    return (
      <div>{option.label}</div>
    )
  })

  return (
    <div key={options.label}>{renderedOptions}</div>
  )
}
export default DropDown