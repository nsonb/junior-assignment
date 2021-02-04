import { FormEvent } from "react"
import React, { useContext, useState } from 'react'
import { DataContext } from '../context/apiDataContext'

const Header = () => {
    const { fetchData } = useContext(DataContext)
    const [startDate, setStartDate] = useState<string>('2017-05-01')
    const [endDate, setEndDate] = useState<string>('2017-06-15')
    const [token, setToken] = useState<string>('38ab33b9f32a3478555d1e06189d50f01a872966')

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        if(fetchData !== undefined) fetchData(startDate, endDate, token)
    }

    return (
        <div style={style}>
            <form onSubmit={onSubmit} style={{margin: 'auto'}}>
                <div>
                    <label>Start Date</label>
                    <input 
                        name='start_date' 
                        type="date" 
                        placeholder="yyyy-mm-dd" 
                        min='2017-05-01' 
                        max='2017-06-15'
                        value ={startDate}
                        onChange = {(ev) => {
                            const newDate = new Date(ev.target.value)
                            setStartDate(newDate.toISOString().split("T")[0])
                        }}
                    />
                    <label>End Date</label>
                    <input 
                        name='end_date' 
                        type="date" 
                        placeholder="yyyy-mm-dd" 
                        min='2017-05-01' 
                        max='2017-06-15'
                        value ={endDate}
                        onChange = {(ev) => {
                            const newDate = new Date(ev.target.value)
                            setEndDate(newDate.toISOString().split("T")[0])
                        }}
                    />
                </div>
                <label>Token</label>
                <input 
                    name='token'
                    value ={token}
                        onChange = {(ev) => {
                            setToken(ev.target.value)
                        }}
                />
                <button className='hover'>Submit</button>
            </form>
        </div>
    )
}

const style: React.CSSProperties = {
    display: 'flex'
}

export default Header