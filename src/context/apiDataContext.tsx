import {createContext, useState} from 'react'
import { dataRes} from '../type'
import giosg_api from '../fetch/giosg_api'

export const DataContext = createContext<ContextType>({})

export const DataContextProvider =  (props: props) => {
    const [data, setData] = useState<dataRes>()

    const fetchData = () => {
        giosg_api.get().then((res: any) => {
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
    fetchData?: () => void
}