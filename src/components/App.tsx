import SearchBar from './SearchBar'
import {DataContextProvider} from '../context/apiDataContext'

import Result from './Result'
import Footer from './Footer'
import Header from './Header'

const App = () => {
  
  return (
    <div className="App">
      <DataContextProvider>
        <Header/>
        <SearchBar/>
        <Result/>
        <Footer/>
      </DataContextProvider>
    </div>
  );
}

export default App;
