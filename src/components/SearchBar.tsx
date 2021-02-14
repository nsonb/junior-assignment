import { FormEvent } from "react"
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/apiDataContext'
import  { useStoredData }  from '../hooks/useStoredData'

const SearchBar = () => {
    const { fetchData } = useContext(DataContext)
    // this component uses the custom hook useStoredData to store user input into localStorage and
    // fetch it on startup
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

    // the component fetches data whenever there is a change in the date or tokens
    // the useEffect uses a timeout to cancel the api request if the user puts in a new input within 1s
    // i.e. the api request is only fired after the user has stopped typing for more than 1s
    useEffect(() => {
        const timeOut = setTimeout(() => {getData()}, 1000)
        return () => {clearTimeout(timeOut)}
    },[startDate, token, endDate])
    
    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        getData()
    }

    // the form prevents date going out of the 2017-05-01 and 2017-06-15 range (as per requested from the assignment)
    // also the input chooses the type= date to allows easier input and typechecking the date
    // it also make sure the start_date never goes over end_date and vice versa
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
                            // this is to get the day month year part of the date without the hassle of the hour-minute part
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
                        placeholder ='Access Token'
                        value ={token}
                            onChange = {(ev) => {
                                setToken(ev.target.value)
                            }}
                    />
                </div>
                <button 
                    onClick={() => {
                        // the reset button allows for fast clearing of the input, wiping them in localStorage also
                        setToken(''); 
                        setStartDate('') ;
                        setEndDate('')}}
                    style= {resetButton}
                    className = 'hover'
                    > Reset
                </button>
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
    maxWidth: '800px'
}

const resetButton : React.CSSProperties = {
    fontFamily: 'Courier',
    textAlign: 'center',
    height: '2.5rem',
    width: '5rem',
    margin: ' 1rem auto'
}

const input: React.CSSProperties = {
    borderRadius: '0.2rem',
    border: '1px solid grey',
    height: '1.4rem',
    fontFamily: 'Courier'
}

const label: React.CSSProperties = {
    width: '100%',
    marginBottom: '0.1rem',
    fontSize: 'small'
}
export default SearchBar