import { useMemo, useState } from 'react'
import { useCreateTransaction } from '../hooks/useCreateTransaction'
import { validateTransaction } from '../utils/validation'

const initialState = {
  transactionId: '',
  amount: '',
  commerce: '',
  tenpistaName: '',
  transactionDate: '',
}

export default function TransactionForm() {
  const [form, setForm] = useState(initialState)
  const [touched, setTouched] = useState({})
  const { mutate, isPending, error, isSuccess } = useCreateTransaction()

  const errors = useMemo(() => validateTransaction(form), [form])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const nextTouched = {
      transactionId: true,
      amount: true,
      commerce: true,
      tenpistaName: true,
      transactionDate: true,
    }

    setTouched(nextTouched)

    if (Object.keys(errors).length > 0) return

    mutate(
      {
        transactionId: Number(form.transactionId),
        amount: Number(form.amount),
        commerce: form.commerce,
        tenpistaName: form.tenpistaName,
        transactionDate: `${form.transactionDate}:00`,
      },
      {
        onSuccess: () => {
          setForm(initialState)
          setTouched({})
        },
      }
    )
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Nueva transacción</h2>

      <label>
        Id transacción
        <input
          name="transactionId"
          type="number"
          value={form.transactionId}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.transactionId && errors.transactionId && (
          <span className="field-error">{errors.transactionId}</span>
        )}
      </label>

      <label>
        Monto
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.amount && errors.amount && (
          <span className="field-error">{errors.amount}</span>
        )}
      </label>

      <label>
        Comercio
        <input
          name="commerce"
          type="text"
          value={form.commerce}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.commerce && errors.commerce && (
          <span className="field-error">{errors.commerce}</span>
        )}
      </label>

      <label>
        Tenpista
        <input
          name="tenpistaName"
          type="text"
          value={form.tenpistaName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.tenpistaName && errors.tenpistaName && (
          <span className="field-error">{errors.tenpistaName}</span>
        )}
      </label>

      <label>
        Fecha y hora de transacción
        <input
          name="transactionDate"
          type="datetime-local"
          value={form.transactionDate}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.transactionDate && errors.transactionDate && (
          <span className="field-error">{errors.transactionDate}</span>
        )}
      </label>

      <button type="submit" disabled={isPending || Object.keys(errors).length > 0}>
        {isPending ? 'Guardando...' : 'Guardar transacción'}
      </button>

      {error && <p className="submit-error">{error.message}</p>}
      {isSuccess && <p className="submit-success">Transacción creada correctamente.</p>}
    </form>
  )
}