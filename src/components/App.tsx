import { useEffect } from 'react';
import giosg_api from '../fetch/giosg_api'
import Header from './Header'
import { dataRes} from '../type'

const App = () => {
  useEffect(() => {
    giosg_api.get().then((res: any) => {
      const resData= JSON.parse(JSON.stringify(res.data)) as dataRes
      console.log(resData)
    })
  })
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
