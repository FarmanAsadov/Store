import './App.css'
import Card from './components/card/card';
import list from "./utils/data";


function App() {

  return (
    <>
      <div className="header">
        <h4>Məhsullar</h4>
        <p>
          <span>{list.length}</span>məhsul
        </p>
      </div>
      <div className="container">{
        list.map((item,index) => {
          const { title, price, image } = item;
          return (
            <Card key={index} id={index} title={title} price={price} image={image} />
          );
        })
      }</div>
    </>
  )
}

export default App
