import './Tab.css'
import { Link } from 'react-router-dom'

interface TabProps {
    name: string
}

const Tab = ({ name } : TabProps) => {
    return (
        <Link className='tab' to={`/${name}`}> 
            {name}
        </Link>
    )
}

export default Tab