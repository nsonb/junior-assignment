import SearchBar from './SearchBar'
import Body from './Body'
import {DataContextProvider} from '../context/apiDataContext'

const App = () => {
  
  return (
    <div className="App">
      <DataContextProvider>
        <SearchBar/>
        <Body/>
      </DataContextProvider>
    </div>
  );
}

export default App;
