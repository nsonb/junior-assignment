import Header from './Header'
import Body from './Body'
import {DataContextProvider} from '../context/apiDataContext'

const App = () => {
  
  return (
    <div className="App">
      <DataContextProvider>
        <Header/>
        <Body/>
      </DataContextProvider>
    </div>
  );
}

export default App;
