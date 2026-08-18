Tarefa 1:
as modificacoes que acontecem no estado só serão refletidas após a re-renderizacao, ou seja, se voce passa um valor de uma variavel para dentro do estado, e modifica ela algumas vezes sempre se baseando na variavel passada, o retorno nao será todas as modificacoes feitas baseadas na variavel e sim só a ultima, pois nao foi re-renderizado para fazer varias modificacoes e ela se somarem.

Tarefa 2:
O resultado deve ser um calculo no corpo do render, o useState atualizado por useEffect criaria renderizaçoes extras ao multiplicar a lista, correndo alto risco de desincronização

Tarefa 3:

1. código está em teste.tsx
2. o useEffect estava sincronizando o total com o items
3. é desnecessario pq total já é um valor dependente de items, se temos os items temos o total, o effect estava fazendo um trabalho que nao era preciso, estava fazendo o state renderizar mais de 1 vez desnecessariamente

Tarefa 4:

2. ele nao atualiza pq está tratando do valor no mesmo snapshot.
3. o react le o valor do snapshot, o push adiciona um item em items, porém o react nao atualiza, ele compara o items atual com o items recebido, e como nao teve re-renderizacao, ele nao atualizou o valor, ou seja, o valor do items que ele tenta passar no setItems(items); ainda é o mesmo do items lido no inicio.
4. pq assim o react consegue atualizar a lista já comparando, ele valida se a lista inicial é diferente da lista atual com o item adicionado, chegando na conclusão que é diferente, e assim acontece o re-render atualizando o valor

Tarefa 5:
``function List({ items }) {
const [isReverse, setIsReverse] = useState(false);
const [selection, setSelection] = useState(null);

// Better: Adjust the state while rendering
const [prevItems, setPrevItems] = useState(items);
if (items !== prevItems) {
setPrevItems(items);
setSelection(null);
}
// ...
}```

1. o que é **estado**: isReverse, selection e prevItems são estados.
2. o que é **derivado** (calculado): o prevItem é calculado sempre pra comparar a lista atual com a anterior, mudando o selection
3. o que (se algo) precisa **ajustar** quando outra coisa muda: a lista de items muda a orientação calculada a partir de items e isReverse
