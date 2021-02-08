import {datum} from '../type'
import Row from './Row'

const Table = (props: {list?: datum[]}) => {
    const { list } = props
    let paginate = true

    if(list && list.length < 5) {
        paginate = false
    } else {
        
    }

    const renderList = list?.map((i: datum, index) => {
        return <Row bold= {false} elements = {[i.date.toString(), i.conversation_count, i.missed_chat_count, i.visitors_with_conversation_count]} key={i.date.toString()+'..'+index}/>
        
    })

    const style: React.CSSProperties = {
        width: '100%',
        maxWidth: '640px',
        margin: 'auto'
    }

    return (
        <div style ={style}>
            <Row elements={['Date', 'Conversation Count', 'Missed Chat Count', 'Visitors with conversation count']} bold = {true}/>
            <div style={{marginTop: '0.5rem', marginBottom: '0.2rem'}}>
                {renderList}
            </div>
            {paginate === true? <div>paginate is a must</div> : null}
        </div>
    )
}

export default Table