import { createContext, useState } from 'react'
import { dataRes} from '../type'
import instance from '../fetch/giosg_api'

export const DataContext = createContext<ContextType>({})

export const DataContextProvider =  (props: props) => {
    const [data, setData] = useState<dataRes>()

    const fetchData = (start_date: string, end_date: string, API_KEY: string) => {
        instance.defaults.headers.common['Authorization'] = 'Token ' + API_KEY;
        instance.get(`?start_date=${start_date}&end_date=${end_date}`).then((res: any) => {
            const resData= JSON.parse(JSON.stringify(res.data)) as dataRes
            setData(resData)
        })
    }

    return(
        <DataContext.Provider value ={{data, fetchData}}>
            {props.children}
        </DataContext.Provider>
        
    )
}

interface props {
    children: React.ReactNode
}

type ContextType = {
    data?: dataRes
    fetchData?: (start_date: string, end_date: string, API_KEY: string) => void
}