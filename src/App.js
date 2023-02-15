import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import BookContextProvider from "./context/BookContext";


function App() {
  return (
    <div className="App">
          <BookContextProvider>
             <NavBar />
             <BookList  />
          </BookContextProvider>
    </div>
  );
}

export default App;
