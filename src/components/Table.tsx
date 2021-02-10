import { datum } from '../type'
import Row from './Row'
import Paginate from './Paginate'
import { useEffect, useState } from 'react'

const Table = (props: {list?: datum[], displayNumber: number}) => {
    const { list, displayNumber } = props
    const [ startPoint, setStartPoint] = useState<number>(0)
    const [ displayedList, setDisplayedList ] = useState<datum[]>()

    useEffect(() => {
        let tempList: datum[] = []
        for(let i=startPoint; i<startPoint+displayNumber;i++) {
            if(list) tempList.push(list[i])
        }
        setDisplayedList(tempList)
    }, [list, startPoint])

    const renderPaginate = () => {
        if(list === undefined) {return <div></div>}
        if(list.length < displayNumber) {
            return <div></div>
        } else {
            const dsplayedPage = list.length % displayNumber === 0 ? Number((list.length / displayNumber).toFixed(0)) : Math.floor((list.length / displayNumber)) +1
            return <Paginate dsplayedPage = {dsplayedPage} setStartPoint = {setStartPoint}/>
        }
    }

    const renderList = displayedList?.map((i: datum, index) => {
        
        if(!i) return null
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
            {renderPaginate()}
        </div>
    )
}

export default Table