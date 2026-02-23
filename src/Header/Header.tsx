import Tab from './Tab/Tab'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Tab name='Home'/>
            <Tab name='Tasks'/>
        </div>
    )
}

export default Header