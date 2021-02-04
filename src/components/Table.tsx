import {datum} from '../type'

const Table = (props: {list?: datum[]}) => {
    const { list } = props
    let paginate = true

    if(list && list.length < 5) {
        paginate = false
    }

    const renderList = list?.map((i: datum, index) => {
        return <div key={index}>
            {i.chats_from_autosuggest_count}
        </div>
    })

    return (
        <div>
            {renderList}
            {paginate === true? <div>paginate is a must</div> : null}
        </div>
    )
}

export default Table