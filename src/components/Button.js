import PropTypes from 'prop-types'

const Button = ({text , color, onClick}) => {
    return <button onClick = {onClick} class = 'btn'>{text}</button>
}

Button.propTypes= {

    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func.isRequired
}

export default Button
