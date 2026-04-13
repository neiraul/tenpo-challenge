import { formatCurrency, formatDate } from '../utils/format'

export default function TransactionList({ transactions }) {
  return (
    <div className="card">
      <h2>Transacciones</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Id transacción</th>
              <th>Monto</th>
              <th>Comercio</th>
              <th>Tenpista</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => (
              <tr key={item.transactionId ?? `${item.commerce}-${item.transactionDate}`}>
                <td>{item.transactionId}</td>
                <td>{formatCurrency(item.amount)}</td>
                <td>{item.commerce}</td>
                <td>{item.tenpistaName}</td>
                <td>{formatDate(item.transactionDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}