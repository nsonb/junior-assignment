import { DataContext } from '../context/apiDataContext'
import { useContext, useRef } from 'react'
import { useContainerDimensions, refElement } from '../hooks/useContainerDimensions'
import BoxDisplay from './BoxDisplay'
import Table from './Table'
import Graph from './Graph'

const Result = () => {
    const { data } = useContext(DataContext)
    // the custom hook useContainerDimensions returns the current width of the elements, which allows
    // for changes of the elements size to adapt to screen size. This is an alternative method to 
    // design responsive website instead of using the usual media querry and css
    const myRef = useRef<HTMLDivElement>(null)
    const { width } = useContainerDimensions(myRef as unknown as refElement)
    console.log(width)
    // elements are optimized to screensize
    const boxContainer: React.CSSProperties = {
        width: '80%',
        display: 'flex',
        flexDirection: width >=600 || width === 0?'row' : 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2rem auto 1rem',
        maxWidth: '800px'
    }
    // handling different cases of data being responed from the server
    if(data === undefined) return <div style = {boxContainer}>No data</div>

    // if data type is string, it means that there is an error being sent from the server and there needs
    // to be a notification for the user.
    // one case that is important and is taken care of in this case is mistyping or missing token
    if(typeof data === 'string') return <div style = {boxContainer}>{data}</div>

    // the data obtained from context is passed down to the table component to render out the information
    return (
        <div>
            <div style={boxContainer} ref={myRef}>
                <BoxDisplay number={data?.total_conversation_count.toString() || ''} title='total conversation count'/>
                <BoxDisplay number={data?.total_user_message_count.toString() || ''} title='total user message count'/>
                <BoxDisplay number={data?.total_visitor_message_count.toString() || ''} title='total visitor message count'/>
            </div>
            <div style={{fontFamily: 'Courier', margin: 'auto', width: '80%', maxWidth: '800px', minWidth: '320px'}}>Data Visualization</div>
            <Graph data = {data?.by_date}/>
            <Table list = {data?.by_date} displayNumber={5}/>
           
        </div>
    )
}

export default Result