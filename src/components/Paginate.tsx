import { Dispatch, SetStateAction, useEffect, useState } from "react"

// the component takes in the dsplayedPage and setStartPoint to render out a pagination segment for the table
// dsplayedPage is the already calculated number of pages passed down from the parent component
// setStartPoint is the function that sets the current displayed page in the parent component
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
                        // when the number button is clicked, the user is taken to the corresponding numbered page
                        // and the style for the button is changed to notify the users which page they are on
                        setCurrentChosen(i)
                        props.setStartPoint(i*5)
                }}>
                    {(i+1)}
                </button>
            )
        }
        setRendererButton(buttons)
    }, [props.dsplayedPage, currentChosen, props])

    // if there is only one page, this component will send displaying page 1 of 1 instead
    if(props.dsplayedPage === 1) return <div style={pageOf}>Page 1 of {props.dsplayedPage}</div>

    return (
        <div style={{display:'flex', flexDirection: 'row', margin: 'auto', marginTop: '0.5rem'}} className='fit-content'>
            <button 
                style={buttonStyle} 
                className={currentChosen === 0 ? 'disable' :'hover' }
                onClick={() => {
                    if(currentChosen !== 0) {
                        // when the button is pressed, the user is taken back one page.
                        // the button is disable when the current displayed button is at index 0 (button 1)
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
                        // when the button is pressed, the user is taken to the next page.
                        // the button is disable when the current displayed button is at maximum index (highes button number)
                        let t = currentChosen+1;
                        props.setStartPoint(t*5)
                        setCurrentChosen(t)
                    }
                }}>{'>'}</button>
        </div>
    )
}

// styling
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
    borderRadius: '0.3rem',
    backgroundColor: 'beige',
    color: 'darkred'
}

const pageOf: React.CSSProperties = {
    fontFamily: 'Courier',
    margin: 'auto',
    textAlign: 'center'
}

export default Paginate