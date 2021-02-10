import { Dispatch, SetStateAction, useEffect, useState } from "react"

const Paginate = (props: {dsplayedPage: number, setStartPoint: Dispatch<SetStateAction<number>>}) => {
    const [renderedButton, setRendererButton] = useState<JSX.Element[]>()
    const [currentChosen, setCurrentChosen] = useState(0)

    useEffect(() => {
        let buttons : JSX.Element[] = []
        for(let i = 0; i < props.dsplayedPage; i++){
            buttons.push(
                <button 
                    key={'button'+i} 
                    style={i === currentChosen ? currentButtonStyle : buttonStyle} 
                    className='hover' 
                    onClick={() => {
                        console.log(i);
                        setCurrentChosen(i)
                        props.setStartPoint(i*5)
                }}>
                    {(i+1)}
                </button>
            )
        }
        setRendererButton(buttons)
    }, [props.dsplayedPage, currentChosen, props])
    
    return (
        <div style={{display:'flex', flexDirection: 'row', margin: 'auto', marginTop: '0.5rem', width: 'fit-content'}}>
            <button 
                style={buttonStyle} 
                className={currentChosen === 0 ? 'disable' :'hover' }
                onClick={() => {
                    if(currentChosen !== 0) {
                        let t = currentChosen-1;
                        props.setStartPoint(t*5)
                        setCurrentChosen(t)
                    }
                }}>{'<'}</button>
            {renderedButton}
            <button 
                style={buttonStyle} 
                className={currentChosen === props.dsplayedPage - 1 ? 'disable' :'hover' }
                onClick={() => {
                    if(currentChosen !== props.dsplayedPage - 1) {
                        let t = currentChosen+1;
                        props.setStartPoint(t*5)
                        setCurrentChosen(t)
                    }
                }}>{'>'}</button>
        </div>
    )
}

const buttonStyle: React.CSSProperties = {
    fontFamily: 'Courier',
    fontWeight: 'lighter',
    border: 'none',
    width: '2rem',
    height: '2rem',
    marginRight: '0.2rem',
    borderRadius: '0.3rem'
}

const currentButtonStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontFamily: 'Courier',
    border: 'none',
    width: '2rem',
    height: '2rem',
    marginRight: '0.2rem',
    borderRadius: '0.3rem'
}

export default Paginate