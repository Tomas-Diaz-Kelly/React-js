import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListConteiner/itemListContainer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Hola bienvenidos a Baobab'}/>
      
    </div>
  );
}

export default App;
