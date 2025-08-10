import dasnSimeiImage from "@/assets/dasn-simei.jpg";
import dasPaymentImage from "@/assets/das-payment.jpg";
import pixAutomaticoImage from "@/assets/pix-automatico.jpg";
import impostoRendaImage from "@/assets/imposto-renda.jpg";
import atividadeNegociosImage from "@/assets/atividade-pequenos-negocios.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "dasn-simei-prazo-2025",
    title: "Prazo para entrega da DASN-Simei encerra no próximo dia 31 de maio",
    excerpt: "Microempreendedores individuais têm até o final de maio para entregar a declaração anual. Saiba como não perder o prazo e evitar multas.",
    content: `A Declaração Anual do Simples Nacional do Microempreendedor Individual (DASN-SIMEI) é uma obrigação que todo MEI deve cumprir anualmente. O prazo para entrega da DASN-SIMEI 2025, referente ao ano-calendário de 2024, encerra no próximo dia 31 de maio.

## O que é a DASN-SIMEI?

A DASN-SIMEI é uma declaração onde o MEI informa à Receita Federal o valor do faturamento bruto obtido no ano anterior. É através desta declaração que o governo acompanha a evolução dos pequenos negócios e verifica se o MEI está dentro dos limites de faturamento permitidos.

## Como fazer a declaração?

A declaração deve ser feita exclusivamente pela internet, através do Portal do Empreendedor ou pelo aplicativo MEI. O processo é simples e gratuito:

1. Acesse o Portal do Empreendedor
2. Clique em "Declaração Anual de Faturamento"
3. Informe seu CNPJ e código de acesso
4. Preencha o valor do faturamento bruto total do ano
5. Confirme os dados e transmita a declaração

## Multa por atraso

O MEI que não entregar a DASN-SIMEI dentro do prazo ou entregar com informações incorretas estará sujeito a multa de R$ 50,00 ou 2% ao mês sobre o valor dos tributos informados na declaração, prevalecendo o maior valor.

## Limite de faturamento

Para 2024, o limite de faturamento anual para MEI é de R$ 81.000,00. Caso tenha ultrapassado esse valor, será necessário migrar para outra categoria empresarial.`,
    date: "20 de maio de 2025",
    readTime: "5 min",
    author: "Equipe MEI Digital",
    category: "Impostos",
    image: dasnSimeiImage,
    featured: true
  },
  {
    id: "das-abril-prorrogado-2025",
    title: "Prorrogada a data de vencimento dos DAS do Simples e Mei de abril/2025",
    excerpt: "Receita Federal prorroga prazo de pagamento do DAS de abril. Conheça a nova data e como isso impacta o seu negócio.",
    content: `A Receita Federal do Brasil anunciou a prorrogação do prazo para pagamento do Documento de Arrecadação do Simples Nacional (DAS) referente ao mês de abril de 2025. A medida beneficia tanto empresas optantes pelo Simples Nacional quanto Microempreendedores Individuais (MEI).

## Nova data de vencimento

O DAS de abril/2025, que originalmente venceria no dia 20 de maio, foi prorrogado para o dia 20 de junho de 2025. A decisão foi tomada considerando as dificuldades enfrentadas pelos pequenos negócios no período.

## Quem é beneficiado?

A prorrogação vale para:
- Microempreendedores Individuais (MEI)
- Microempresas (ME) optantes pelo Simples Nacional
- Empresas de Pequeno Porte (EPP) optantes pelo Simples Nacional

## Como proceder?

Os contribuintes não precisam tomar nenhuma ação específica. O novo vencimento já será automaticamente refletido nos sistemas da Receita Federal. Para emitir o DAS com a nova data de vencimento:

1. Acesse o Portal do Simples Nacional
2. Selecione a opção "Cálculo e Emissão do DAS"
3. Informe o CNPJ e período de apuração
4. Gere o documento com a nova data de vencimento

## Atenção aos juros

É importante lembrar que, mesmo com a prorrogação, o pagamento após a nova data de vencimento estará sujeito a juros e multa de mora, conforme a legislação vigente.`,
    date: "23 de maio de 2025",
    readTime: "4 min",
    author: "Ana Carolina",
    category: "Impostos",
    image: dasPaymentImage
  },
  {
    id: "pix-automatico-mei-2025",
    title: "PIX Automático: o que MEIs e outras empresas precisam fazer para começar a usar o serviço",
    excerpt: "Nova funcionalidade do PIX promete facilitar pagamentos recorrentes. Entenda como MEIs podem implementar e se beneficiar desta tecnologia.",
    content: `O Banco Central do Brasil lançou oficialmente o PIX Automático, uma nova modalidade que permite pagamentos recorrentes de forma automatizada. Para MEIs e pequenas empresas, essa funcionalidade representa uma oportunidade de melhorar o fluxo de caixa e facilitar o relacionamento com clientes.

## O que é o PIX Automático?

O PIX Automático é uma evolução do PIX tradicional que permite a programação de pagamentos recorrentes, como mensalidades, assinaturas e prestações de serviços. O cliente autoriza uma única vez e os pagamentos são processados automaticamente nas datas programadas.

## Vantagens para MEIs

### Fluxo de caixa previsível
Com pagamentos automáticos, o MEI pode ter maior previsibilidade do fluxo de caixa, facilitando o planejamento financeiro do negócio.

### Redução da inadimplência
Pagamentos automáticos reduzem significativamente o risco de atraso ou esquecimento por parte dos clientes.

### Economia de tempo
Elimina a necessidade de enviar cobranças manualmente ou ficar lembrando clientes sobre vencimentos.

## Como implementar

Para começar a usar o PIX Automático, o MEI precisa:

1. **Verificar com seu banco**: Confirmar se a instituição financeira já oferece o serviço
2. **Atualizar sistemas**: Se usar algum sistema de gestão, verificar se já suporta PIX Automático
3. **Configurar mandatos**: Estabelecer os termos dos pagamentos recorrentes
4. **Orientar clientes**: Explicar o funcionamento e benefícios para os clientes

## Cuidados importantes

- O cliente pode cancelar o mandato a qualquer momento
- É necessário manter comunicação clara sobre valores e datas
- Mudanças de valores precisam de nova autorização do cliente
- Acompanhar regularmente se os pagamentos estão sendo processados

## Regulamentação

O PIX Automático segue todas as diretrizes de segurança do PIX tradicional, com protocolos adicionais para pagamentos recorrentes. O Banco Central garante que o cliente tem total controle sobre suas autorizações.`,
    date: "10 de junho de 2025",
    readTime: "6 min",
    author: "Roberto Silva",
    category: "Tecnologia",
    image: pixAutomaticoImage
  },
  {
    id: "imposto-renda-mei-2025",
    title: "Imposto de Renda 2025: quando um MEI é obrigado a declarar? Entenda as regras",
    excerpt: "Nem todo MEI precisa declarar Imposto de Renda. Conheça as regras e situações em que a declaração é obrigatória para microempreendedores.",
    content: `Uma dúvida comum entre Microempreendedores Individuais é sobre a obrigatoriedade de declarar o Imposto de Renda Pessoa Física. É importante entender que ser MEI não isenta automaticamente da declaração do IR, que segue regras específicas baseadas no faturamento e outras rendas.

## Quando o MEI deve declarar IR?

O MEI deve fazer a declaração do Imposto de Renda quando se enquadrar em pelo menos uma das situações abaixo:

### Limite de rendimentos
Se os rendimentos tributáveis recebidos no ano foram superiores a R$ 30.639,90. Isso inclui:
- Salários (se for CLT além do MEI)
- Aposentadorias e pensões
- Aluguéis recebidos
- Outros rendimentos tributáveis

### Rendimentos isentos
Se recebeu rendimentos isentos superiores a R$ 200.000,00, incluindo a parcela isenta do faturamento como MEI.

### Atividade rural
Se obteve receita bruta anual da atividade rural superior a R$ 153.199,50.

### Bens e direitos
Se possuía bens e direitos de valor superior a R$ 800.000,00 em 31 de dezembro.

### Operações financeiras
Se realizou operações na bolsa de valores ou teve ganhos com vendas de bens.

## Cálculo da parte tributável do MEI

O faturamento do MEI não é totalmente tributável. Existe uma parcela isenta baseada no tipo de atividade:

- **Comércio e indústria**: 8% de isenção
- **Prestação de serviços**: 32% de isenção  
- **Transporte**: 16% de isenção

### Exemplo prático
MEI prestador de serviços com faturamento de R$ 81.000:
- Parcela isenta: R$ 81.000 × 32% = R$ 25.920
- Parcela tributável: R$ 81.000 - R$ 25.920 = R$ 55.080

Como R$ 55.080 > R$ 30.639,90, deve declarar IR.

## Como declarar

Na declaração, o MEI deve:
1. Informar os rendimentos na ficha "Rendimentos Tributáveis Recebidos de PJ"
2. Deduzir a parcela isenta conforme o percentual da atividade
3. Incluir todas as demais fontes de renda

## Documentos necessários

- Declaração Anual do MEI (DASN-SIMEI)
- Relatório Mensal de Receitas Brutas
- Comprovantes de outras rendas
- Informes de rendimentos de bancos e outras fontes

## Dica importante

Mesmo que não seja obrigatório declarar, pode ser vantajoso fazer a declaração para:
- Comprovar renda para financiamentos
- Regularizar situação com a Receita Federal
- Facilitar processos que exijam comprovação de renda`,
    date: "1 de maio de 2025",
    readTime: "7 min",
    author: "Maria Santos",
    category: "Impostos",
    image: impostoRendaImage
  },
  {
    id: "atividade-pequenos-negocios-2025",
    title: "Atividade de pequenos negócios sofre tombo em 12 meses, aponta índice",
    excerpt: "Pesquisa revela queda na atividade de pequenos negócios no último ano. Entenda os fatores que influenciam este cenário e as perspectivas para MEIs.",
    content: `Um estudo recente revelou uma significativa queda na atividade de pequenos negócios no Brasil nos últimos 12 meses. O Índice de Atividade de Pequenos Negócios (IAPN) registrou retração que impacta diretamente Microempreendedores Individuais e pequenas empresas em todo o país.

## Dados do levantamento

Segundo o levantamento conduzido por institutos especializados em economia:

- **Queda de 8,5%** na atividade geral de pequenos negócios
- **Redução de 12%** no faturamento médio dos MEIs
- **Aumento de 15%** no número de negócios inativos
- **Diminuição de 6%** na abertura de novos MEIs

## Principais fatores da queda

### Cenário econômico
A instabilidade econômica nacional e internacional criou um ambiente de incerteza que afeta diretamente o consumo e, consequentemente, os pequenos negócios.

### Alta da inflação
O aumento dos custos de produtos e serviços reduziu o poder de compra dos consumidores, impactando a demanda por produtos e serviços de MEIs.

### Concorrência digital
O crescimento de grandes plataformas digitais e marketplaces criou maior concorrência para pequenos negócios locais.

### Dificuldades de financiamento
O acesso ao crédito permanece um desafio para pequenos empreendedores, limitando investimentos e expansão dos negócios.

## Setores mais afetados

### Comércio varejista
- Queda de 15% nas vendas
- Fechamento de lojas físicas
- Migração forçada para o digital

### Prestação de serviços
- Redução de 10% na demanda
- Maior concorrência por preço
- Dificuldade em manter margens

### Alimentação
- Aumento dos custos de insumos
- Mudanças nos hábitos de consumo
- Competição com delivery

## Estratégias de sobrevivência

### Digitalização
Pequenos negócios que investiram em presença digital apresentaram resistência maior à crise:
- Criação de sites e lojas online
- Uso de redes sociais para marketing
- Implementação de sistemas de delivery

### Diversificação
Empresários que diversificaram produtos e serviços mantiveram melhor estabilidade:
- Novos produtos complementares
- Serviços adicionais
- Parcerias estratégicas

### Gestão financeira
Controle rigoroso de custos e fluxo de caixa foram essenciais:
- Renegociação com fornecedores
- Controle de estoques
- Planejamento financeiro

## Perspectivas para 2025

Apesar do cenário desafiador, especialistas apontam algumas perspectivas positivas:

### Recuperação gradual
Expectativa de melhora econômica gradual no segundo semestre de 2025.

### Novos nichos
Surgimento de oportunidades em áreas como:
- Sustentabilidade
- Tecnologia acessível
- Serviços personalizados

### Apoio governamental
Programas de incentivo e linhas de crédito específicas para pequenos negócios.

## Recomendações para MEIs

1. **Mantenha-se informado** sobre mudanças na legislação e oportunidades
2. **Invista em capacitação** pessoal e profissional
3. **Fortaleça a presença digital** do seu negócio
4. **Monitore o fluxo de caixa** constantemente
5. **Busque parcerias** e redes de apoio
6. **Diversifique** quando possível
7. **Mantenha-se próximo aos clientes** para entender suas necessidades

O momento exige adaptação e resiliência, mas também oferece oportunidades para quem souber se posicionar estrategicamente no mercado.`,
    date: "27 de julho de 2025",
    readTime: "8 min",
    author: "João Pedro",
    category: "Economia",
    image: atividadeNegociosImage
  }, 
  {
   <h1>Débito com a Receita? MEI e Simples Nacional Ganham Mais Poder na Hora de Pagar!</h1>

<h3>O B.O. Fiscal que Virou Oportunidade: A Nova Flexibilidade da Receita Federal</h3>

<p>Como um rio que serpenteia por entre as pedras, o caminho do empreendedor no Brasil nem sempre é linear. Há momentos de calmaria, mas também de corredeiras turbulentas. Uma dessas pedras, para muitos MEIs e empresas do Simples Nacional, sempre foi o débito com a Receita Federal.</p>

<p>Mas eis que surge uma brisa suave: a Receita, em um gesto de rara flexibilidade, oferece agora a possibilidade de parcelar débitos de forma mais autônoma. Chega da máxima cruel do "parcela ou morre"! <strong>A palavra de ordem agora é: você decide.</strong></p>

<hr>

<h3>Flashback Rápido: Entendendo o Simples Nacional e o MEI</h3>

<p>Antes de mergulhar nos detalhes da mudança, vamos revisitar o básico:</p>
<ul>
    <li><strong>Simples Nacional:</strong> Imagine um mosaico onde cada peça é um imposto. O Simples Nacional une esses tributos (federais, estaduais e municipais) em uma única guia, a famosa DAS. O objetivo é simplificar a vida e aliviar a carga para micro e pequenas empresas (ME e EPP).</li>
    <li><strong>MEI (Microempreendedor Individual):</strong> É o Davi moderno enfrentando o Golias da informalidade. Com um CNPJ, acesso a benefícios previdenciários e um regime tributário simplificado, o MEI pavimenta o caminho para a formalização e o crescimento.</li>
</ul>

<p>Ambos são um sopro de esperança, mas as dívidas podem surgir. É nesse cenário que a nova funcionalidade da Receita se revela um verdadeiro farol.</p>

<hr>

<h3>A Grande Novidade: Você no Controle das Parcelas!</h3>

<p>Até então, o parcelamento de débitos era um jogo de cartas marcadas. Agora, a batuta passa para as mãos do empreendedor.</p>

<p><strong>O que mudou?</strong></p>
<ul>
    <li><strong>Autonomia Total:</strong> Pela primeira vez, você pode escolher o número de parcelas, dentro do limite de 60, para quitar seus débitos. Uma decisão estratégica, moldada à sua realidade financeira.</li>
    <li><strong>Valores Mínimos Preservados:</strong> A prudência se mantém. O valor mínimo da parcela continua sendo <strong>R$ 50 para MEIs</strong> e <strong>R$ 300 para empresas do Simples Nacional</strong>.</li>
    <li><strong>Acesso Facilitado:</strong> Todo o processo é online, através do <strong>Portal do Simples Nacional</strong> ou do <strong>e-CAC</strong> (Centro Virtual de Atendimento) da Receita Federal.</li>
    <li><strong>O Benefício Essencial:</strong> Mais fôlego para o caixa e mais tranquilidade. Ao planejar os pagamentos, você evita a inadimplência e o risco de exclusão dos regimes simplificados.</li>
</ul>

<hr>

<h3>O Horizonte: O que Vem por Aí para MEI e Simples Nacional?</h3>

<p>O cenário está em constante transformação. Fique de olho nas próximas mudanças:</p>
<ol>
    <li><strong>Digitalização e Padronização (2025):</strong> MEIs que emitem notas fiscais eletrônicas deverão incluir um código específico (CRT 4) para aprimorar a comunicação e a correção de erros.</li>
    <li><strong>Teto do MEI em Discussão:</strong> A possibilidade de elevar o limite anual de faturamento do MEI de R$ 81 mil para <strong>R$ 130 mil</strong> representa um sopro de esperança para muitos negócios em expansão.</li>
    <li><strong>Reforma Tributária (A Longo Prazo):</strong> A grande reforma, com a criação do IBS e da CBS, terá impacto no Simples Nacional. A transição será gradual (2026 a 2033), e o regime deverá se adaptar.</li>
    <li><strong>Atenção ao Crédito:</strong> O aumento do IOF (Imposto sobre Operações Financeiras) em julho de 2025 pode encarecer o acesso ao crédito.</li>
    <li><strong>Fiscalização Mais Inteligente:</strong> A Receita intensificará a fiscalização, mas usará o Domicílio Tributário Eletrônico para enviar avisos e facilitar a regularização.</li>
</ol>

<hr>

<h3>Conclusão: Mais Liberdade, Mais Responsabilidade</h3>

<p>A nova flexibilidade no parcelamento é um marco. É o reconhecimento da necessidade de empoderar o empreendedor. Use essa ferramenta poderosa para manter a regularidade fiscal e focar no que realmente importa: a prosperidade do seu negócio.</p>

<p>Mas lembre-se: a liberdade exige responsabilidade. Planeje suas parcelas, mantenha-se atualizado e, se necessário, busque o auxílio de um contador. Ele será seu guia no labirinto tributário.</p>

<p><strong>Fonte:</strong> Gov.br</p>
    date: "10 de Agosto de 2025",
    readTime: "5 min",
    author: "Anderson Ramos",
    category: "Impostos",
    image: prazomeiImage
}
];
