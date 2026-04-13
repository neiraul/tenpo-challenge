const API_URL = import.meta.env.VITE_API_URL

export async function fetchTransactions() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('No se pudieron obtener las transacciones')
  }

  return response.json()
}

export async function createTransaction(transaction) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.message || 'No se pudo crear la transacción')
  }

  return data
}