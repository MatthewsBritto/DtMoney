import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

/* 
   Por que um componente renderiza ? 

   -Hooks changed (mudou estado, context, reducer)
   -Props changed (mudou propriedades)
   -Parent rendered (componente pai renderizou)

   Qual o fluxo de renderização normal?

   1- React recria o HTML da interface do componente
   2- Compara a versão do HTML recriado com a anterior
   3- Se algo mudou ele reescreve o HTML na tela

   O fluxo de renderização com o Memo:

   0- Hookes changed || Props changed (deep comparison)
   0.1 - Comparar com a versão anterior dos hooks e props
   0.2 - Caso tenha mudado, se iniciar a nova renderização



*/

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: searchFormInputs) {
    await fetchTransactions(data.query)

    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
