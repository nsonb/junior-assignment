import { FormEvent } from "react"
import React from 'react'

const Header = () => {
    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
    }
    return (
        <div style={style}>
            <form onSubmit={onSubmit} style={{margin: 'auto'}}>
                <div>
                    <label>Start Date</label>
                    <input name='start_date' type="date" placeholder="yyyy-mm-dd" min='2017-05-01' max='2017-06-15'/>
                    <label>End Date</label>
                    <input name='end_date' type="date" placeholder="yyyy-mm-dd" min='2017-05-01' max='2017-06-15'/>
                </div>
                <label>Token</label>
                <input name='token'/>
                <button className='hover'>Submit</button>
            </form>
        </div>
    )
}

const style: React.CSSProperties = {
    display: 'flex'
}

export default Header