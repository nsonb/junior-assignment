import { DataContext } from '../context/apiDataContext'
import { useContext } from 'react'
import BoxDisplay from './BoxDisplay'
import Table from './Table'

const Result = () => {
    const { data } = useContext(DataContext)
    console.log(data)

    const boxContainer: React.CSSProperties = {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        margin: '5% auto',
        maxWidth: '640px'
    }

    return (
        <div>
            <div style={boxContainer}>
                <BoxDisplay number={data?.total_conversation_count.toString() || ''} title='total conversation count'/>
                <BoxDisplay number={data?.total_user_message_count.toString() || ''} title='total user message count'/>
                <BoxDisplay number={data?.total_visitor_message_count.toString() || ''} title='total visitor message count'/>
            </div>
            
            <Table list = {data?.by_date} displayNumber={5}/>
        </div>
    )
}

export default Result