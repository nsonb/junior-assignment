const MobileRow = (props: {elements: (string | number)[], values: (string | number)[]}) => {
    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '0.1rem',
        fontFamily: 'Courier'
    }

    const valueStyle: React.CSSProperties = {
        width: '60%',
        marginLeft: '5%'
    }

    const elementStyle: React.CSSProperties = {
        width: '30%',
        marginRight: '5%'
    }
    const renderList = props.values.map((e: (string|number), index) => {
        return (
            <div key={e} style={style}>
                <div style={valueStyle}>{e}</div>
                <div style={elementStyle}>{props.elements[index]}</div>
            </div>
        )
    })
    return (
        <div style={{marginBottom: '1.2rem'}}>
            {renderList}
        </div>
    )
}

export default MobileRow