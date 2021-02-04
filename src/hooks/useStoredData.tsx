import {useState, useEffect} from 'react'

export const useStoredData = (type: string, defaultValue?: string) => {
    type useStoredDataRes = [
        data: string,
        setCurrentData: (value: string) => void
    ]
    const [date, setDate] = useState<string>(defaultValue || '')

    useEffect (() => {
        try {
            setDate(window.localStorage.getItem(type) || '' )
        } catch(err) {
            console.log(err)
        }
        
    }, [])

    useEffect(() => {
        try {
            window.localStorage.setItem(type, date)
        } catch(err) {
            console.log(err)
        }
        
    }, [date])

    const setCurrentDate = (value: string) =>{
        setDate(value)
    }

    const returned: useStoredDataRes = [date, setCurrentDate]

    return returned
}


