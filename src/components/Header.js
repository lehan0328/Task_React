import PropTypes from "prop-types"
const Header = ({title}) => {
  return (
    <header>
    <h1 style = {headingStyle}>{title}</h1>
    </header>
  )
}
Header.defultProps = {
    title: "Task Tracker"
}
Header.prototype = {
    title:PropTypes.string,
}
const headingStyle = {
    color:"red",backgroundColor:"black"
}

export default Header