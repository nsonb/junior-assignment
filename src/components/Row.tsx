const Row = (props:{elements: (string | number)[], bold: boolean}) => {
    const style: React.CSSProperties = {
        display: 'flex',
        width: '100%',
        height: props.bold? 'fit-content': '2rem',
        fontSize: 'smaller',
        fontFamily: 'Courier',
        fontWeight: props.bold? 'bold': 'normal',
        marginBottom: '0.2rem',
        marginTop: '0.2rem'
    }

    const firstRowElement: React.CSSProperties = {
        width: '15%',
        textAlign: 'center',
    }

    const rowElement: React.CSSProperties = {
        width: '28.33%',
        textAlign: 'center'
    }
    const renderedRow = props.elements.map((e: string | number, index) => {
        if(index === 0) return <div style={firstRowElement} key={e+index.toString()}>{e}</div>
        return <div style={rowElement} key={e+index.toString()}>{e}</div>
    })
    return(
        <div style = {style}>
            {renderedRow}
        </div>
    )
}

export default Row