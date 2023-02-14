import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <ThemeToggle />
        <NavBar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
