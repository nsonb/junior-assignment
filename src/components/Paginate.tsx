import { Dispatch, SetStateAction, useEffect, useState } from "react"

const Paginate = (props: {dsplayedPage: number, setStartPoint: Dispatch<SetStateAction<number>>}) => {
    const [renderedButton, setRendererButton] = useState<JSX.Element[]>()
    useEffect(() => {
        let buttons : JSX.Element[] = []
        for(let i = 0; i < props.dsplayedPage; i++){
            buttons.push(
                <button key={'button'+i} style={{margin:'auto'}} className='hover' onClick={() => {console.log(i);props.setStartPoint(i*5)}}>
                    {(i+1)}
                </button>
            )
        }
        setRendererButton(buttons)
    }, [props.dsplayedPage])
    
    return (
        <div style={{margin:'auto'}}>
            {renderedButton}
        </div>
    )
}

export default Paginate