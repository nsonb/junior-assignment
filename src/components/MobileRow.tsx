// this component display the same information as the Row component but is optimized
// for mobile views, and require more input information:
// values[] take in the value that need to be displayed and valuesName[] take in the name of the values 

const MobileRow = (props: {values: (string | number)[], valuesName: (string | number)[]}) => {
    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '0.1rem',
        fontFamily: 'Courier'
    }

    const firstStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '0.1rem',
        fontFamily: 'Courier',
        backgroundColor: 'beige'
    }

    const valueStyle: React.CSSProperties = {
        width: '60%',
        marginLeft: '5%'
    }

    const elementStyle: React.CSSProperties = {
        width: '30%',
        marginRight: '5%'
    }

    // the styling of each of the elements is dependant on their index
    const renderList = props.valuesName.map((e: (string|number), index) => {
        return (
            <div key={e} style={index !== 0 ? style : firstStyle}>
                <div style={valueStyle}>{e}</div>
                <div style={elementStyle}>{props.values[index]}</div>
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