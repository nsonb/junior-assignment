import { DataContext } from '../context/apiDataContext'
import { useContext } from 'react'
import BoxDisplay from './BoxDisplay'

const Body = () => {
    const { data } = useContext(DataContext)
    console.log(data)

    return (
        <div>
            <BoxDisplay number={data?.total_conversation_count.toString() || ''} title='total conversation count'/>
            <BoxDisplay number={data?.total_user_message_count.toString() || ''} title='total user message count'/>
            <BoxDisplay number={data?.total_visitor_message_count.toString() || ''} title='total visitor message count'/>
        </div>
    )
}

export default Body