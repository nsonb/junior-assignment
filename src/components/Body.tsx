import { DataContext } from '../context/apiDataContext'
import {useContext} from 'react' 

const Body = () => {
    const { data } = useContext(DataContext)
    console.log(data)

    return (
        <div>
            I am body
        </div>
    )
}

export default Body