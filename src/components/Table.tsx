import { datum } from '../type'
import { useEffect, useState, useRef } from 'react'
import { useContainerDimensions, refElement } from '../hooks/useContainerDimensions'
import Row from './Row'
import Paginate from './Paginate'
import MobileRow from './MobileRow'

const Table = (props: {list?: datum[], displayNumber: number}) => {
    const { list, displayNumber } = props
    const [ startPoint, setStartPoint] = useState<number>(0)
    const [ displayedList, setDisplayedList ] = useState<datum[]>()

    const myRef = useRef<HTMLDivElement>(null)
    const { width } = useContainerDimensions(myRef as unknown as refElement)

    useEffect(() => {
        let tempList: datum[] = []
        for(let i=startPoint; i<startPoint+displayNumber;i++) {
            if(list) tempList.push(list[i])
        }
        setDisplayedList(tempList)
    }, [list, startPoint, displayNumber])

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
        return width < 380 ? 
            <MobileRow 
                key={i.date.toString()+'..'+index} 
                elements = {[i.date.toString(), i.conversation_count, i.missed_chat_count, i.visitors_with_conversation_count]}
                values={['Date', 'Conversation Count', 'Missed Chat Count', 'Visitors with conversation count']}/> 
            :<Row
                key={i.date.toString()+'..'+index}
                bold= {false} 
                elements = {[i.date.toString(), i.conversation_count, i.missed_chat_count, i.visitors_with_conversation_count]} />
    })

    const style: React.CSSProperties = {
        width: '100%',
        maxWidth: '800px',
        margin: 'auto'
    }

    const desktopStyle: React.CSSProperties = {
        marginTop: '0.5rem', 
        marginBottom: '0.2rem', 
        height: width<380 ? 'fit-content' :(displayNumber*2).toString()+'rem'  
    }

    return (
        <div style ={style} ref={myRef}>
            {width < 380? null : <Row elements={['Date', 'Conversation Count', 'Missed Chat Count', 'Visitors with conversation count']} bold = {true}/>}
            
            <div style={desktopStyle}>
                {renderList}
            </div>
            {renderPaginate()}
        </div>
    )
}

export default Table