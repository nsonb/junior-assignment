import { createContext, useState } from 'react'
import { dataRes } from '../type'
import instance from '../fetch/api'
import { AxiosError, AxiosResponse } from 'axios'

export const DataContext = createContext<ContextType>({})
// using context from react, this DataContext fetches data from the api server and keep the data in its useState
// which in turns can be accessed by the application components. This is an alternative to the traditional redux method
export const DataContextProvider =  (props: props) => {
    const [data, setData] = useState<dataRes | string>()
    const fetchData = (start_date: string, end_date: string, API_KEY: string) => {
        if(start_date !== '' && end_date !== '' && API_KEY !== '') {
            instance.defaults.headers.common['Authorization'] = 'Token ' + API_KEY;
            instance
                .get(`?start_date=${start_date}&end_date=${end_date}`)
                .then((res: AxiosResponse) => {
                    const resData= JSON.parse(JSON.stringify(res.data)) as dataRes
                    setData(resData)
                }).catch((err: AxiosError) => {
                    switch(err.response?.status) {
                        case 401:
                            setData('Unauthorized. Input your provided token')
                            break
                        default:
                            setData('Unknown Error.')
                            break
                    }
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
// custom type for typescript typechecking
type ContextType = {
    data?: dataRes | string
    fetchData?: (start_date: string, end_date: string, API_KEY: string) => void
}