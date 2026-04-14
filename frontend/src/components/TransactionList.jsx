import { useMemo, useState } from 'react'
import { formatCurrency, formatDate } from '../utils/format'

export default function TransactionList({ transactions }) {
  const [filters, setFilters] = useState({
    tenpistaName: '',
    commerce: '',
    transactionDate: '',
  })

  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const matchName = item.tenpistaName
        ?.toLowerCase()
        .includes(filters.tenpistaName.toLowerCase())

      const matchCommerce = item.commerce
        ?.toLowerCase()
        .includes(filters.commerce.toLowerCase())

      const matchDate = filters.transactionDate
        ? item.transactionDate?.slice(0, 10) === filters.transactionDate
        : true

      return matchName && matchCommerce && matchDate
    })
  }, [transactions, filters])

  function handleFilterChange(e) {
    const { name, value } = e.target

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function clearFilters() {
    setFilters({
      tenpistaName: '',
      commerce: '',
      transactionDate: '',
    })
  }

  return (
    <div className="card">
      <div className="list-header">
        <h2>Transacciones</h2>
      </div>

      <div className="filters">
        <input
          className="filter-input"
          type="text"
          name="commerce"
          placeholder="Filtrar por comercio"
          value={filters.commerce}
          onChange={handleFilterChange}
        />
        <input
          className="filter-input"
          type="text"
          name="tenpistaName"
          placeholder="Filtrar por nombre"
          value={filters.tenpistaName}
          onChange={handleFilterChange}
        />
        <input
          className="filter-input"
          type="date"
          name="transactionDate"
          value={filters.transactionDate}
          onChange={handleFilterChange}
        />

        <button type="button" className="clear-button" onClick={clearFilters}>
          Limpiar filtros
        </button>
      </div>

      {filteredTransactions.length === 0 ? (
        <p className="empty-search">No hay transacciones que coincidan con los filtros.</p>
      ) : (
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
              {filteredTransactions.map((item) => (
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
      )}
    </div>
  )
}