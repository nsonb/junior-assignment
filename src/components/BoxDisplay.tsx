const BoxDisplay = (props: {number: string, title: string}) => {
    const container: React.CSSProperties = {
        width: '100%',
        margin: '1%'
    }
    return (
        <div style={container}>
            <div>{props.title}</div>
            <div>{props.number}</div>  
        </div>
    )
}

export default BoxDisplay