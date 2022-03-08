import React, { Component } from 'react';

class AddTableForExpense extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {/* <td>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </td> */}
      </table>
    );
  }
}

export default AddTableForExpense;
