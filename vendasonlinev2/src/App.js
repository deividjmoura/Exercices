import './App.css';
import { useState } from 'react';

function NewLine(){
  let dados = "";
  dados = prompt("Digite os dados")
  const [td, setTd] = useState({dados})
  setTd = td + {dados}
}

function App() {
  return (
    <div className="App">
      <table className="table">
        <tr className="tr">
          <th className="th">Pedido</th> 
          <th className="th"> Nota Fiscal</th>
          <th className="th"> Volumes </th>
          <th className="th"> Hora </th>
          <th className="th"> Itens </th>
          <th className="th"> Trans</th>              
        </tr>    
        <tr className="tr">
        <td className="td"></td>
        <td className="td"></td>
        <td className="td"></td>
        <td className="td"></td>
        <td className="td"></td>
        <td className="td"></td>
        </tr>
        <tr className="tr">
        <td className="td"></td>
        <td className="td"></td>
        <td className="td"></td>
        <td className="td"></td>
        <td className="td"></td>
        <td className="td"></td>
        </tr>
      </table>
      <button onClick={NewLine}>Adicionar dados</button>
    </div>
  );
}

export default App;
