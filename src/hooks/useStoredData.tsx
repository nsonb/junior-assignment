import {useState, useEffect} from 'react'

export const useStoredData = (type: string, defaultValue?: string) => {
    type useStoredDataRes = [
        data: string,
        setCurrentData: (value: string) => void
    ]
    const [data, setData] = useState<string>(defaultValue || '')

    useEffect (() => {
        try {
            setData(window.localStorage.getItem(type) || '' )
        } catch(err) {
            console.log(err)
        }
        
    }, [])

    useEffect(() => {
        try {
            window.localStorage.setItem(type, data)
        } catch(err) {
            console.log(err)
        }
        
    }, [data])

    const setCurrentData = (value: string) =>{
        setData(value)
    }

    const returned: useStoredDataRes = [data, setCurrentData]

    return returned
}


