import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,text}) => {
    
    const onClick = () => {
        console.log('You have clicked')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text = {text} onClick = {onClick}/>
        </header>

    )
}

Header.defaultProps = {
    title : 'Task Tracker',

}

Header.propTypes = {
    title : PropTypes.number.isRequired,
}


export default Header
