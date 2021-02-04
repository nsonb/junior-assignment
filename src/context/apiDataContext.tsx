import { createContext, useState } from 'react'
import { dataRes} from '../type'
import instance from '../fetch/giosg_api'

export const DataContext = createContext<ContextType>({})

export const DataContextProvider =  (props: props) => {
    const [data, setData] = useState<dataRes>()

    const fetchData = (start_date: string, end_date: string, API_KEY: string) => {
        if(start_date !== '' && end_date !== '' && API_KEY !== '') {
            instance.defaults.headers.common['Authorization'] = 'Token ' + API_KEY;
            console.log(start_date)
            instance
                .get(`?start_date=${start_date}&end_date=${end_date}`)
                .then((res: any) => {
                    const resData= JSON.parse(JSON.stringify(res.data)) as dataRes
                    setData(resData)
                }).catch((err: Error) => {
                    console.log(err)
                })
        }
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