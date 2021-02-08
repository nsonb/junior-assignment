const BoxDisplay = (props: {number: string, title: string}) => {
    const container: React.CSSProperties = {
        width: '80%',
        margin: 'auto',
        marginBottom: '0.5rem',
        maxWidth: '12rem',
        height: '6rem',
        border: 'solid grey 1px',
        borderRadius: '0.2rem'
    }

    const ttle: React.CSSProperties = {
        textAlign: 'center',
        fontFamily: 'Courier',
        marginTop: '0.2rem'
    }

    const nmber: React.CSSProperties = {
        fontSize: '3rem',
        textAlign: 'center',
        fontFamily: 'Courier'
    }
    return (
        <div style={container}>
            <div style={ttle}>{props.title}</div>
            <div style={nmber}>{props.number}</div>  
        </div>
    )
}

export default BoxDisplay