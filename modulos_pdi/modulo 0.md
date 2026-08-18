Tarefa 1:
O que é useState? Por que o componente re-renderiza quando ele muda?
o usestate guarda o valor e devolve o valor e uma funcao pra atualizar esse valor, ele muda se usar essa funcao de atualizacao

Tarefa 2:
O que é uma prop? Dê 1 exemplo de quando usaria.
prop é um valor que é passado de pai para filho, por exemplo, quando vc tem um componente que precisa popular um valor dentro dele ou passar uma funçao, vc passa por prop para que seja consumida lá dentro do componente filho

Tarefa 3:
Cole o trecho. Para cada campo: por que aquele tipo? Por que obrigatório ou opcional?

pr https://github.com/lastro-co/casa-da-lais/pull/702/changes
interface BroadcastsTableProps {
/** Categories to render, in display order. The last one may still have more. \*/
categories: BroadcastCategoryView[];
/** Render sticky category headers (the "Todos" tab groups; single tabs don't). _/
showCategoryHeaders: boolean;
/\*\* First category's first page still loading. _/
isInitialLoading: boolean;
/** No broadcasts at all (grand total is 0). \*/
isGlobalEmpty: boolean;
/** Load the next page of the frontier category (near the scroll bottom). _/
onLoadMore: () => void;
/\*\* Per-tab totals for the tab strip (undefined = not yet known). _/
tabCounts: Partial<Record<BroadcastTab, number>>;
onNewDisparo: () => void;
onViewDetails?: (broadcast: BroadcastSummary) => void;
onEdit?: (broadcast: BroadcastSummary) => void;
onCancel?: (broadcast: BroadcastSummary) => void;
onResumeDraft?: (broadcast: BroadcastSummary) => void;
/\*_ Error broadcasts show a "Contate o Suporte" action instead of a retry. _/
onContactSupport?: (broadcast: BroadcastSummary) => void;
activeTab: BroadcastTab;
onTabChange: (tab: BroadcastTab) => void;
typeFilter: BroadcastType | null;
);
}

basicamente definimos obrigatório aquelas props que são necessárias para o funcionamento do componente, usando como exemplo a desse pr, categorias são totalmente necessárias para o funcionamento do componente, afinal se nao souber elas, o componente quebra.

nessa pr temos o tipo broadcastCategoryView que é o array das categorias, os que sao do tipo boolean sao para true/false e os void são para retornos que nao gerarão ação

Tarefa 4:

1. Escreva um loop que percorre uma lista e devolve só os itens que passam numa condição (`for` ou `.filter`).

const numeros = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = numeros.filter(numero => numero % 2 === 0)

2. Escreva uma condicional com **três** saídas possíveis.

const altura = 175

if (altura >= 180) {
console.log("alto")
} else if (altura >= 170) {
console.log("medio")
} else {
console.log("baixo")
}

3. Qual a diferença entre `import { x } from 'y'` e `import x from 'y'`?
   utilizar o import { x } possibilita importar mais de uma coisa daquele local, por exemplo import { x, y, z } from 'abc'

4. Qual a diferença entre `interface Foo {}` e `type Foo = {}`? Quando usaria cada um?
   a interface e o type sao utilizadas para criar formas de objetos, a diferença é que na interface pode declarar mais de uma interface com o mesmo nome, o type nao.

5. Se o pai não passar valor para uma prop **opcional**, o que acontece?
   nao acontece nada, se ela é opcional nao depende de valor para funcionar, nao irá gerar erro

6. O que faz um componente React re-renderizar? Liste todos os gatilhos que você conhece.
   os hooks dele, useffect, useState, useRef, useContext, useRedux

Tarefa 5:
Escreva: 1 parágrafo — em quais itens você teve certeza e em quais chutou.

tarefas que eu tenho certeza: 1, 2, 4

tarefa que eu chutei: 3
