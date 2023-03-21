import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";



export function Transactions() {
   return   (
      <div>
         <Header />
         <Summary />

      <TransactionsContainer>
         <table>
               <tbody>
                  <tr>
                     <td width="50%">Desenvolvimento de site</td>
                     <td>R$ 12.000,00</td>
                     <td>Venda</td>
                     <td>13/02/2022</td>
                  </tr>
                  <tr>
                     <td width="50%">Lanchão</td>
                     <td>- R$ 50,00</td>
                     <td>Compra</td>
                     <td>13/02/2022</td>
                  </tr>
               
               </tbody>
         </table>
      </TransactionsContainer>
      </div>
   )
}