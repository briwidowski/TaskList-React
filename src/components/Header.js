import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
        <h1 style={headingStyle}>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> 
        {/* Passing properties into Button */}

    </header>
  )
}

// Use to catch errors or require a value
Header.propTypes = {
    title: PropTypes.string 
}

// Add styles here to customize elements, or add inline styling
const headingStyle = {
}

// Use .defaultProps to fill in empty called properties
// Header.defaultProps = {
//     title: "filler title"
// }

export default Header