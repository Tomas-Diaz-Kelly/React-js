import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListConteiner/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';



function App() {
  return (
    <div className="App">


      <NavBar />
      <ItemListContainer greeting={'Hola bienvenidos a Baobab'}/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
