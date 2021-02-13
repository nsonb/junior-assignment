import { DataContext } from '../context/apiDataContext'
import { useContext, useRef } from 'react'
import { useContainerDimensions, refElement } from '../hooks/useContainerDimensions'
import BoxDisplay from './BoxDisplay'
import Table from './Table'
import Graph from './Graph'

const Result = () => {
    const { data } = useContext(DataContext)

    const myRef = useRef<HTMLDivElement>(null)
    const { width } = useContainerDimensions(myRef as unknown as refElement)

    const boxContainer: React.CSSProperties = {
        width: '80%',
        display: 'flex',
        flexDirection: width >600 ?'row' : 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2rem auto 1rem',
        maxWidth: '800px'
    }

    if(data === undefined) return <div style = {boxContainer}>No data</div>

    return (
        <div ref={myRef}>
            <div style={boxContainer}>
                <BoxDisplay number={data?.total_conversation_count.toString() || ''} title='total conversation count'/>
                <BoxDisplay number={data?.total_user_message_count.toString() || ''} title='total user message count'/>
                <BoxDisplay number={data?.total_visitor_message_count.toString() || ''} title='total visitor message count'/>
            </div>
            <Graph data = {data?.by_date}/>
            
            <Table list = {data?.by_date} displayNumber={5}/>
           
        </div>
    )
}

export default Result