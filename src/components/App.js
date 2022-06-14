import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [gregsData, setGregsData] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => {setGregsData(data)})
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer data={gregsData} />[]
    </div>
  );
}
export default App;
