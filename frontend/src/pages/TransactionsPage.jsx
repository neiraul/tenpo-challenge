import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'
import LoadingState from '../components/LoadingState'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import { useTransactions } from '../hooks/useTransactions'

export default function TransactionsPage() {
  const { data, isLoading, isError, error } = useTransactions()

  return (
    <main className="container">
      <header className="hero">
        <h1>Tenpo Transacciones</h1>
        <p>Registro y visualización de transacciones.</p>
      </header>

      <section className="layout">
        <TransactionForm />

        {isLoading ? (
        <LoadingState />
        ) : isError ? (
        <ErrorState message={error.message} />
        ) : data.length === 0 ? (
        <EmptyState />
        ) : (
        <TransactionList transactions={data} />
        )}
      </section>
    </main>
  )
}