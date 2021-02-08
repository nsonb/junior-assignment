import SearchBar from './SearchBar'
import Result from './Result'
import {DataContextProvider} from '../context/apiDataContext'

const App = () => {
  
  return (
    <div className="App">
      <DataContextProvider>
        <SearchBar/>
        <Result/>
      </DataContextProvider>
    </div>
  );
}

export default App;
