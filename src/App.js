import './App.css';
import ItemTable from './components/ItemTable';
import Basket from './components/Basket';
import { useState } from 'react';

function App() {
  const [basket, setBasket] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  return (
    <div className="App">
      <ItemTable basket={basket} setBasket={setBasket} basketTotal={basketTotal} setBasketTotal={setBasketTotal}/>
      <Basket basket={basket} setBasket={setBasket} basketTotal={basketTotal} setBasketTotal={setBasketTotal}/>
    </div>
  );
}

export default App;
