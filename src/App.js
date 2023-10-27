
import './App.css';
import Categories from './componets/Categories/Categories';
import Courses from './componets/Courses/Courses';
import Header from './componets/Header/Header';
import Herosection from './componets/Herosection/Herosection';
import Main from './componets/Main/Main';
import Work from './componets/Work/Work';


function App() {
  return (
    <div className="App">
     <Header/>
     <Herosection/>
     <Main/>
     <Categories/>
     <Courses/>
     <Work/>
    </div>
  );
}

export default App;
