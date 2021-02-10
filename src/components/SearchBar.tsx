import { FormEvent } from "react"
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/apiDataContext'
import  { useStoredData }  from '../hooks/useStoredData'

const SearchBar = () => {
    const { fetchData } = useContext(DataContext)
    const [startDate, setStartDate] = useStoredData('start_date','')
    const [endDate, setEndDate] = useStoredData('end_date','')
    const [token, setToken] = useStoredData('token','')

    const getData = () => {
        if(fetchData !== undefined) fetchData(
            startDate, 
            endDate, 
            token
        )
    }

    useEffect(getData, [startDate, token, endDate])
    
    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        getData()
    }

    return (
        <div style={style}>
            <form onSubmit={onSubmit} style={{margin: 'auto', display: 'flex', flexDirection: 'column', width: '80%'}}>
                <div style={inputSegment}>
                    <label style={label}>Start Date</label>
                    <input
                        style={input}
                        name='start_date' 
                        type="date" 
                        placeholder="yyyy-mm-dd" 
                        min='2017-05-01' 
                        max={endDate || '2017-06-15'}
                        value ={startDate}
                        onChange = {(ev) => {
                            const newDate = new Date(ev.target.value)
                            setStartDate(newDate.toISOString().split("T")[0])
                        }}
                    />
                </div>
                <div style={inputSegment}>
                    <label style={label}>End Date</label>
                    <input 
                        style={input}
                        name='end_date' 
                        type="date" 
                        placeholder="yyyy-mm-dd" 
                        min={startDate || '2017-05-01'} 
                        max='2017-06-15'
                        value ={endDate}
                        onChange = {(ev) => {
                            const newDate = new Date(ev.target.value)
                            setEndDate(newDate.toISOString().split("T")[0])
                        }}
                    />
                </div>
                <div style={inputSegment}>
                    <label style={label}>Token</label>
                    <input 
                        style={input}
                        name='token'
                        value ={token}
                            onChange = {(ev) => {
                                setToken(ev.target.value)
                            }}
                    />
                </div>
            </form>
        </div>
    )
}

const style: React.CSSProperties = {
    display: 'flex',
    height: '16%',
    marginTop: '0.3rem',
    marginBottom: '0.6rem'
}

const inputSegment: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '0.5rem',
    width: '90%',
    maxWidth: '640px'
}

const input: React.CSSProperties = {
    borderRadius: '0.2rem',
    border: '1px solid grey',
    height: '1.4rem'
}

const label: React.CSSProperties = {
    width: '100%',
    marginBottom: '0.1rem',
    fontSize: 'small'
}
export default SearchBar