const BoxDisplay = (props: {number: string, title: string}) => {
    return (
        <div>
            <div>{props.number}</div>
            <div>{props.title}</div>
        </div>
    )
}

export default BoxDisplay