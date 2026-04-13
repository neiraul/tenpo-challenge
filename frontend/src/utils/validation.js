export function validateTransaction(values) {
  const errors = {}

  if (!values.transactionId) {
    errors.transactionId = 'El id de transacción es obligatorio'
  }

  if (values.amount === '') {
    errors.amount = 'El monto es obligatorio'
  } else if (Number(values.amount) <= 0) {
    errors.amount = 'El monto debe ser mayor a 0'
  }

  if (!values.commerce.trim()) {
    errors.commerce = 'El comercio es obligatorio'
  }

  if (!values.tenpistaName.trim()) {
    errors.tenpistaName = 'El nombre del tenpista es obligatorio'
  }

  if (!values.transactionDate) {
    errors.transactionDate = 'La fecha y hora es obligatorio'
  } else {
    const selectedDate = new Date(values.transactionDate)
    const now = new Date()

    if (selectedDate > now) {
      errors.transactionDate = 'La fecha no puede ser futura'
    }
  }

  return errors
}