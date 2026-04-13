import { useQuery } from '@tanstack/react-query'
import { fetchTransactions } from '../api/transactions'

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
    select: (data) => {
      if (Array.isArray(data)) return data
      if (Array.isArray(data?.data)) return data.data
      return []
    },
  })
}