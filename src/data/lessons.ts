export interface LessonTrack {
  id: string;
  tapNumber: number;
  partNumber: string;
  label: string;
  title: string;
  summary: string;
  fullText: string;
  references?: string;
  url: string | null;
  filename: string;
}

export const WELCOME_SPEECH_TEXT =
  "Bem-vindo ao Catecismo Júnior online da Igreja Metodista Unida. Esta é uma iniciativa de acessibilidade e inclusão, especialmente preparada para os nossos irmãos e irmãs em Cristo com deficiência visual. Por favor, não toque em nada de momento para ouvir o Prefácio. Pode tocar no ecrã para mudar de lição de acordo com o número de toques e também pode tocar no ecrã 21 vezes para descarregar todos os ficheiros de áudio. Para utilizar os ficheiros de forma offline, dirija-se à sua igreja local. Se tiver um iPhone, a equipa da sua igreja poderá ajudá-lo a configurar atalhos de Siri para abrir cada lição. Para telemóveis Android, a equipa da sua igreja local irá automatizar o processo para que possa abrir os ficheiros de áudio reais do projeto de forma simples e sem complicações. O catecismo é composto pela parte 0 do Prefácio, e pelas lições da parte 1 até à parte 20. Se quiser ouvir novamente estas instruções, toque no ecrã 22 vezes. Em nome do Pai, do Filho e do Espírito Santo. Ámen.";

export const PREFACES: LessonTrack[] = [
  {
    id: "0",
    tapNumber: 0,
    partNumber: "0",
    label: "Parte 0",
    title: "Prefácio",
    summary: "Introdução doutrinária do Catecismo da Igreja Metodista Unida.",
    fullText:
      "Prefácio. Catecismo é o ensino das doutrinas cristãs ou o livro que reúne, formula e explica o conjunto dos elementos essenciais da fé cristã. A palavra catecismo é de origem grega e podemos encontrá-la no texto do Novo Testamento, no Evangelho de Lucas, capítulo 1, versículo 4, na Carta aos Romanos, capítulo 2, versículo 18, e em 1 Coríntios, capítulo 14, versículo 19, referida ao ensino de doutrinas. A preocupação com o ensino vem desde os primeiros tempos da igreja. A partir do século dezasseis, surgem catecismos da Igreja Católica Romana, da Igreja Ortodoxa e das Igrejas Protestantes. Pretende-se com este documento apresentar uma declaração tão clara quanto possível da fé cristã. Espera-se que este seja, antes de mais, um instrumento de base para a preparação de novos membros da igreja, podendo ser utilizado por jovens, adultos ou grupos de estudo para um mais profundo e renovado conhecimento sobre a fé. Pode ser um meio acessível de informar pessoas, em especial jovens, que procuram a igreja e não compreendem a tradicional linguagem cristã. Para facilitar a sua compreensão, usou-se o método de perguntas e respostas. Neste, são abordados assuntos que falam de Deus, a Lei de Deus, o Homem, Pecado, Evangelho, Jesus Cristo, Vida Cristã, o Cristão, Adorar e Orar, Credo e os Sacramentos. Esta abordagem está organizada de uma forma sequencial, com vista a moldar a fé daqueles que precisam do caminho para alcançar a salvação em Jesus Cristo. Não se pretende que esta exposição seja exaustiva, nem que seja o único modo de compreender e ensinar a fé cristã, nem que encerre esse ensino. A verdadeira aprendizagem é aquela que se realiza ao longo da vida e é nesse processo que somos desafiados ao discipulado de Jesus Cristo. Este livro serve também, na sua segunda parte, de orientação para os cristãos que querem ser membros efetivos da Igreja Metodista Unida. De um modo geral, todas as famílias conhecidas no mundo têm a sua própria história e traços característicos que as diferenciam umas das outras. O mesmo se aplica no campo denominacional e de fé. O povo chamado Metodista faz parte de um grupo cristão que, seguindo os ideais de João Wesley, marcha em direção ao encontro e reencontro permanente com o seu Senhor e Salvador Jesus Cristo. Por isso, todo aquele que pretende ser membro efetivo desta família metodista deve, antes de tudo, conhecer a igreja metodista em geral e, em particular, a Igreja Metodista Unida. Daí que preparamos este manual para ser apreendido por aqueles que pretendem conhecer e pertencer à família metodista unida. Estamos convictos de que as pessoas que pretendem ser recebidas como membros efetivos foram batizadas. Se ainda não o fizeram, devem primeiramente ser instruídas para o batismo. Depois, poderão estudar para serem recebidas como membros efetivos. Procurou-se conjugar as várias partes do catecismo com a experiência daqueles que atualmente querem ser membros da igreja. A subcomissão: André Ney Barrule, Alfredo Chamusso, Arnaldo Numbora Júnior, Grácio Mapate, Reverendo Dinis Armando (Presidente), Reverendo Diogo J. Inguane (Superintendente Distrital de Maputo Leste). 2007 a 2011.",
    url: "/audio/Catecismo Junior Parte 0 - Prefacio.mp3",
    filename: "Catecismo Junior Parte 0 - Prefacio.mp3",
  },
];

export const CATECHISM_LESSONS: LessonTrack[] = [
  {
    id: "1",
    tapNumber: 1,
    partNumber: "1",
    label: "Parte 1",
    title: "Deus",
    summary: "Deus Criador, Pai de todos nós, eterno, bom e justo.",
    fullText:
      "Deus. No fim desta lição, o catecúmeno deverá saber quem é Deus, quais são as suas características e qual é a relação existente entre Deus e o homem. Iniciaremos o estudo do catecismo aprendendo a conhecer Deus. Todos nós já temos ouvido falar em Deus, e mais do que uma vez perguntamos quem é Ele. Deus é o Criador do universo e Pai de todos nós. Deus nos criou para povoar o universo, por isso somos filhos de Deus, e como todos nós somos filhos do mesmo Pai, nós todos somos irmãos. O nosso pequeno progresso moral não nos permite saber qual é a natureza íntima de Deus. Entretanto, sabemos que Ele é perfeito e enche completamente o universo. Nós estamos em Deus e Ele em nós. Deus não se mostra, mas se revela pelas suas obras. Podemos adorá-Lo em qualquer lugar: nas cidades ou nos desertos, nos mares ou nas florestas, nos palácios ou nas cabanas. Sendo Deus um Espírito, é pelo pensamento que devemos adorá-Lo. Também pelas boas obras podemos adorar a Deus, porque as boas obras que praticamos são um ato de adoração a Deus. Deus governa o universo por meio de suas sábias e imutáveis leis. Conhece até os nossos mais escondidos atos e pensamentos e provê nossas necessidades. Deus é eterno: não teve princípio e não terá fim. Deus é único: há um só Deus. Deus é bom: ama todas as suas criaturas com o mesmo amor. Deus é justo: todos somos iguais diante de Deus. Ele dá a cada um de nós exatamente o que merecemos, a cada um segundo suas obras. Referência: Cuidado de Deus para connosco: Salmo 23 e 121, Mateus 6:25-34.",
    references: "Salmo 23, Salmo 121, Mateus 6:25-34",
    url: "/audio/Catecismo Junior Parte 1 - Deus.mp3",
    filename: "Catecismo Junior Parte 1 - Deus.mp3",
  },
  {
    id: "2",
    tapNumber: 2,
    partNumber: "2",
    label: "Parte 2",
    title: "O Homem",
    summary: "O homem como criatura de Deus à Sua imagem e semelhança.",
    fullText:
      "O Homem. Nesta lição pretende-se que o catecúmeno conheça as principais características do ser humano como criatura de Deus, suas diferenças e semelhanças com outras criaturas do reino animal. No último dia da criação, disse Deus: 'Façamos o homem à nossa imagem, conforme a nossa semelhança' (Génesis 1:26). Então Ele terminou seu trabalho com um toque pessoal: Deus formou o homem do pó e deu-lhe vida, compartilhando do seu próprio fôlego (Génesis 2:7). Desta forma, o homem é o único de entre toda a criação de Deus que tem uma parte material, corpo, e outra imaterial, alma, espírito. Em termos bem simples, ter a imagem e semelhança de Deus significa que o homem foi feito para se parecer com Deus. A imagem de Deus refere-se à parte imaterial do homem: ela separa o homem do mundo animal, dá-lhe domínio sobre os outros animais (Génesis 1:28) e capacita-o a ter comunhão com seu Criador. É uma semelhança mental, moral e social. O homem tem a capacidade de raciocinar, falar e distinguir entre o bem e o mal. Por outro lado, o homem se assemelha aos animais porque tem corpo que nasce, cresce, reproduz-se e morre, como o corpo dos animais. É diferente destes porque tem a capacidade de raciocinar, falar e distinguir entre o bem e o mal. Tem também consciência e deseja conhecer Deus. A consciência é a voz que ouvimos no nosso íntimo, que nos aconselha a praticar o bem e nos censura quando praticamos o mal. A consciência foi-nos dada por Deus. A parte imaterial do homem, a alma, não acaba com a morte do corpo e vive eternamente. O dever de todo o homem é obedecer à vontade de nosso Pai celestial. Referências: O homem deseja conhecer a Deus (Salmo 8). Os homens são filhos de Deus quando são guiados pelo Espírito de Deus (Romanos 8:14).",
    references: "Génesis 1:26-28, Génesis 2:7, Salmo 8, Romanos 8:14",
    url: "/audio/Catecismo Junior Parte 2 - O Homen.mp3",
    filename: "Catecismo Junior Parte 2 - O Homen.mp3",
  },
  {
    id: "3",
    tapNumber: 3,
    partNumber: "3",
    label: "Parte 3",
    title: "Os Dez Mandamentos da Lei de Deus",
    summary: "O código de conduta do cristão entregue a Moisés.",
    fullText:
      "Os Dez Mandamentos da Lei de Deus. No fim desta lição o catecúmeno deverá saber qual é o código de conduta do cristão. Deverá também saber que o cristianismo implica relação vertical com Deus e relação transversal com o próximo. Os Dez Mandamentos é o nome dado ao conjunto de leis que foram originalmente escritas em tábuas de pedra sob a inspiração de Deus e entregues ao patriarca Moisés para promulgá-las. Encontramos primeiramente os Dez Mandamentos em Êxodo 20:2-17. Eles estão repetidos em Deuteronómio 5:6-21 usando palavras similares. Estes mandamentos resumem a lei dada por Deus ao povo de Israel por meio de Moisés. Eles consistem em mandamentos do amor a Deus (os quatro primeiros) e ao próximo (os outros seis). Traçam o caminho de uma vida liberta da escravidão do pecado. Ao seguir os Dez Mandamentos, o cristão cumpre com os preceitos de Deus. Prólogo: 'Eu sou o Senhor teu Deus, que te tirei da terra do Egipto, da casa de servidão'. 1. Não terás outros deuses diante de mim. 2. Não farás para ti imagem de escultura nem alguma semelhança do que há em cima nos céus, nem em baixo na terra, nem nas águas debaixo da terra. Não te curvarás a elas nem as servirás, porque Eu, o Senhor teu Deus, sou Deus zeloso, que visito toda a maldade dos pais nos filhos até à terceira e quarta geração daqueles que me aborrecem, e faço misericórdia em milhões de anos aos que me amam e guardam os meus mandamentos. 3. Não tomarás o nome de Deus em vão, porque o Senhor não terá por inocente o que tomar o seu nome em vão. 4. Lembra-te do dia do sábado para o santificares. Seis dias trabalharás e farás toda a tua obra, mas ao sétimo dia é o sábado do Senhor teu Deus. Não farás nenhuma obra, nem tu, nem o teu filho, nem a tua filha, nem o teu servo, nem a tua serva, nem o teu animal, nem o estrangeiro que está dentro das tuas portas. Porque em seis dias fez o Senhor os céus e a terra, o mar e tudo o que neles há, e ao sétimo dia descansou. Portanto abençoou o Senhor o dia do sábado e o santificou. 5. Honra teu pai e tua mãe para que se prolonguem os teus dias na terra que o Senhor teu Deus te dá. 6. Não matarás. 7. Não adulterarás. 8. Não furtarás. 9. Não dirás falso testemunho contra o teu próximo. 10. Não cobiçarás a casa do teu próximo, não cobiçarás a mulher do teu próximo, nem o seu servo, nem a sua serva, nem o seu boi, nem o seu jumento, nem coisa alguma do teu próximo. Referências: Os Dez Mandamentos da Lei de Deus: Êxodo 20:2-17, Deuteronómio 5:6-21.",
    references: "Êxodo 20:2-17, Deuteronómio 5:6-21",
    url: "/audio/Catecismo Junior Parte 3 - Os Dez Mandamentos Da Lei De Deus.mp3",
    filename: "Catecismo Junior Parte 3 - Os Dez Mandamentos Da Lei De Deus.mp3",
  },
  {
    id: "4",
    tapNumber: 4,
    partNumber: "4",
    label: "Parte 4",
    title: "O Pecado",
    summary: "O pecado como alheamento de Deus e suas consequências.",
    fullText:
      "O Pecado. Ao fim desta lição o catecúmeno deverá saber o que é pecado, quais são as suas consequências e efeitos, e quem peca. Pecado é a condição de alheamento de Deus que afeta toda a humanidade. Pecados são ações, palavras e pensamentos específicos que derivam da nossa condição pecadora e que negam a presença, o poder e o propósito de Deus. O pecado impede o efeito da graça divina. Corrompe as nossas relações com Ele e uns com os outros, com o mundo onde vivemos e connosco próprios. O efeito do pecado é discórdia onde Deus pretendia harmonia. O pecado corrompe o nosso relacionamento com Deus, uns com os outros, connosco mesmo e com toda a criação. O resultado primário do pecado é a escravidão, é muito mais que simples transgressão. Não somente nos aliena de Deus, como também nos leva ao cativeiro da incerteza e perdição. O pecado é um atentado perigoso contra o ambiente vital: não polui somente a nós, mas todos os aspetos da nossa existência, todas as estruturas da vida humana e da sociedade no seu todo. Todas as pessoas pecam. Referências: O pecado denigre a nossa moralidade (Marcos 7:21-23). O salário do pecado é a morte (Romanos 6:23). O pecado corrompe o nosso relacionamento com Deus (Tiago 4:1-3). O pecado nos torna injustos (1 João 1:8, 5:17). Todas as pessoas pecam (Romanos 3:23, Salmo 51).",
    references:
      "Marcos 7:21-23, Romanos 6:23, Tiago 4:1-3, 1 João 1:8, 5:17, Romanos 3:23, Salmo 51",
    url: "/audio/Catecismo Junior Parte 4 - O Pecado.mp3",
    filename: "Catecismo Junior Parte 4 - O Pecado.mp3",
  },
  {
    id: "5",
    tapNumber: 5,
    partNumber: "5",
    label: "Parte 5",
    title: "O Evangelho",
    summary: "A Boa Nova da salvação e da graça em Cristo Jesus.",
    fullText:
      "O Evangelho. Esta lição pretende ensinar ao catecúmeno o que é Evangelho, a graça de Deus e a salvação. A palavra Evangelho significa boa nova. A boa nova é que Deus atuou decisivamente em Jesus Cristo para lidar com a nossa condição pecadora, isto é, Ele agiu para nos salvar. Deus oferece-nos o seu amor, perdão, aceitação e nova vida em Cristo. Deus, o Pai, mandou o Seu Filho para a salvação do mundo. Jesus disse: 'Eu vim para que tenham a vida e a tenham em abundância. Porque o Filho do homem veio para salvar o que se havia perdido'. Salvação é o perdão do nosso pecado, libertação da culpa e a dádiva de vida nova em Cristo. É um processo que começa agora, dá-nos vitória sobre a morte e é completado com Deus nos céus. Podemos ter certeza da nossa salvação através do seguinte: Pelas promessas que nos são feitas na Bíblia; pela certeza interior que nos é dada pelo Espírito Santo; pela evidência nas nossas ações da operação de Deus dentro de nós; e no encorajamento mútuo dos companheiros cristãos. Deus, como oferta gratuita, converte-nos pela sua graça, fazendo-nos passar de rebeldes a amigos. Ele coloca-nos em boa relação consigo próprio, dá-nos nova vida em Cristo e faz de nós o seu povo santo por meio do Espírito Santo. Nós recebemos a sua dádiva quando voltamos para Ele arrependidos e pomos a nossa confiança em Jesus Cristo crucificado e ressurgido por nós. Referências: Jesus veio para nos trazer vida em abundância (João 10:10). Jesus veio para salvar o que se havia perdido (Lucas 19:10). O que fazer para se salvar: Atos 3:19, 16:30-34.",
    references: "João 10:10, Lucas 19:10, Atos 3:19, Atos 16:30-34",
    url: "/audio/Catecismo Junior Parte 5 - O Evangelho.mp3",
    filename: "Catecismo Junior Parte 5 - O Evangelho.mp3",
  },
  {
    id: "6",
    tapNumber: 6,
    partNumber: "6",
    label: "Parte 6",
    title: "Jesus Cristo",
    summary: "O Messias, Sua crucificação, ressurreição e a Grande Comissão.",
    fullText:
      "Jesus Cristo. O catecúmeno deverá ao fim desta lição conhecer Jesus Cristo e a sua missão na Terra. Deverá também saber sobre a morte e ressurreição de Jesus. A palavra Cristo vem do grego Christos que significa Ungido, comparada ao termo hebraico Messias. Jesus é o Cristo porque n'Ele toda a plenitude de Deus habita, e através d'Ele Deus reconciliou todas as coisas (Colossenses 1:19-20). Jesus é o Messias esperado que, tendo nascido como homem, libertou a humanidade. A missão de Cristo foi proclamar a boa nova do Reino de Deus, chamar as pessoas para vir e viver neste reino mediante um arrependimento dos pecados para entrar numa vida obediente à sua vontade. Jesus veio para revelar Deus à humanidade, e para conseguir isto Ele compartilhou a nossa vida humana morrendo numa humilhante e cruel cruz de madeira. Porém Deus trouxe-O de novo à vida, ressuscitando-O dos mortos. Ele venceu a morte e abriu a oportunidade de acesso ao Reino de Deus para todos os que se arrependem e creem n'Ele. Jesus Cristo sofreu a morte e ressuscitou por nós, para que possamos viver para Ele. Os dirigentes do povo odiaram Jesus porque Ele os censurava por causa da sua maldade. Também tiveram inveja d'Ele por causa da simpatia que o povo tinha por Ele. Foi traído por Judas, sendo falsamente acusado perante o sumo sacerdote. Ele padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado. Morreu orando pelos seus inimigos dizendo: 'Pai, perdoa-lhes, porque não sabem o que fazem'. Enquanto agonizava na cruz, Jesus disse sete frases que foram: 'Pai, perdoa-lhes porque não sabem o que fazem'. Dirigindo-se a um dos pecadores que fazia a sua confissão disse: 'Hoje estarás comigo no paraíso'. 'Mulher, eis o teu filho', João, 'eis a tua mãe', entregava a mãe ao seu discípulo João. 'Eli, Eli, lamá sabactâni?', que significa 'Meu Deus, meu Deus, por que Me abandonaste?'. 'Tenho sede'. 'Está consumado'. 'Pai, nas Tuas mãos entrego a Minha alma'. Mal acabou de pronunciar estas últimas palavras, morreu. Após ter sido crucificado na sexta-feira santa e descido para o lugar dos mortos, no terceiro dia, domingo da Páscoa de manhã, ressuscitou. Jesus ressuscitou no domingo, ao terceiro dia após a sua morte. Este dia é chamado Dia do Senhor e é observado por muitos cristãos no lugar do sábado, observado pelos judeus. A Páscoa recorda-nos o dia da ressurreição de Jesus Cristo. Ele continuou a ser visto: pelas mulheres no sepulcro, por dois discípulos a caminho de Emaús, pelos discípulos na ausência de Tomé, por todos os discípulos e na sua ascensão aos céus. Quando ia partir de volta para os céus, Jesus deu o Grande Comissionamento dizendo: 'É-me dado todo o poder no céu e na terra. Portanto ide, ensinai todas as nações, batizando-as em nome do Pai, do Filho e do Espírito Santo' (Mateus 28:19-20).",
    references: "Colossenses 1:19-20, Mateus 28:19-20, Lucas 24:1-53",
    url: "/audio/Catecismo Junior Parte 6 - Jesus Cristo.mp3",
    filename: "Catecismo Junior Parte 6 - Jesus Cristo.mp3",
  },
  {
    id: "7",
    tapNumber: 7,
    partNumber: "7",
    label: "Parte 7",
    title: "O Espírito Santo",
    summary: "O Espírito Santo e Suas obras na santificação e testemunho.",
    fullText:
      "O Espírito Santo. Nesta lição o catecúmeno fica a conhecer o Espírito Santo e as suas obras. Deus perdoa os nossos pecados, purifica os nossos corações e nos enche de Espírito Santo. O Espírito Santo torna-se nosso amigo e nos faz compreender que somos filhos de Deus, aconselhando-nos e fortalecendo-nos em casos de tentação e ajudando-nos a viver na santidade. O Espírito Santo obriga-nos a servir outras pessoas, a testemunhar de Cristo e a desenvolver o seu reino. Referências: Atos 2:1-13, Joel 2:28.",
    references: "Atos 2:1-13, Joel 2:28, João 14:26",
    url: "/audio/Catecismo Junior Parte 7 - O Espirito Santo.mp3",
    filename: "Catecismo Junior Parte 7 - O Espirito Santo.mp3",
  },
  {
    id: "8",
    tapNumber: 8,
    partNumber: "8",
    label: "Parte 8",
    title: "O Cristão",
    summary: "O que é ser cristão, o discipulado e a conversão.",
    fullText:
      "O Cristão. Nesta lição ensina-se o catecúmeno a saber o que é um cristão, o que é o arrependimento e o que é a conversão. Cristãos são aqueles que: acreditam que Deus se revelou a Si próprio em Jesus Cristo; aceitam Jesus Cristo como seu Senhor e Salvador pessoal; vivem em comunhão com Deus e no poder do Espírito Santo; tomam o seu lugar na comunidade da Igreja de Cristo. Um cristão é chamado por Deus para confiar e seguir a Jesus Cristo, para se manter na sua companhia, para aprender com as suas palavras e ações, e partilhar da sua missão, no poder do Espírito Santo, na companhia de outros cristãos. Todas as pessoas são chamadas por Deus ao arrependimento, para confiar e seguir a Jesus Cristo, para aprender dos seus feitos e palavras, bem como para co-participarem na missão de redenção. Neste processo de seguir e aprender do mestre Jesus, nós tornamo-nos seus discípulos, que através do Espírito Santo e na companhia de outros cristãos, proclamamos ao mundo a salvação que há em Cristo Jesus mediante a fé. A isto se chama o discipulado cristão. Arrependimento é a mudança completa do caminho pecaminoso e decisão, pela fé, de receber Jesus Cristo como Senhor e Salvador pessoal. É a mudança completa e total do rumo da vida para seguir a vontade de Deus.",
    references: "Romanos 10:9-10, 2 Coríntios 5:17, Mateus 16:24",
    url: "/audio/Catecismo Junior Parte 8  - O Cristao.mp3",
    filename: "Catecismo Junior Parte 8  - O Cristao.mp3",
  },
  {
    id: "9",
    tapNumber: 9,
    partNumber: "9",
    label: "Parte 9",
    title: "Vida Cristã",
    summary: "Princípios da vida no Espírito, a Regra Áurea e o Credo Social.",
    fullText:
      "Vida Cristã. Nesta lição pretende-se que o catecúmeno aprenda os princípios da vida cristã e conheça o Reino de Deus e os seus mandamentos. O catecúmeno deverá também conhecer a regra áurea. A vida nova é a vida no poder do Espírito Santo, vivida por aqueles que Deus fez herdeiros do seu reino mediante a obra salvífica de Jesus. O Reino de Deus é o seu governo legítimo sobre todas as coisas que Ele fez, no presente reconhecido inteiramente apenas por aqueles que o aceitaram em Jesus Cristo. No fim, o governo de Deus será reconhecido por todos e estabelecido definitivamente quando Ele julgar toda a raça humana através de Jesus Cristo. Fazendo tudo por gratidão a Deus pelo seu amor por nós, revelado sobretudo em Jesus Cristo, nós cumprimos a vontade de Deus pelo poder do Espírito Santo que Ele nos deu. Deus guia-nos a partir de dentro, através do Espírito Santo, alertando a nossa consciência. Ele guia-nos através da Bíblia quando estudamos os seus ensinamentos. Ele nos guia através da fraternidade cristã, pelos conselhos dos amigos e quando, diariamente, somos chamados a responder a situações e acontecimentos. Ele nos guia em especial quando procuramos ser imitadores de Cristo. O desejo de Deus para nós é que a sua lei seja escrita na nossa vontade, para que a nossa motivação para agir venha de dentro. Através dos Dez Mandamentos, que aprendemos nas primeiras aulas, Deus ensina-nos como responder à sua graça: amando-O acima de todas as coisas e amando o nosso próximo como a nós mesmos. Jesus aplicava-os não apenas às nossas ações exteriores, mas também às intenções e pensamentos íntimos, revelando as suas profundas exigências. Ele condenou a injustiça, a luxúria, o ódio, o orgulho e a ansiedade. Ele também ensinou que a fé em Deus significa mais do que obedecer aos mandamentos: é entregarmo-nos inteiramente em confiança a Ele. Jesus resumiu os Dez Mandamentos na regra áurea: 'Amarás o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento. Amarás o teu próximo como a ti mesmo'. Ele também disse: 'Um novo mandamento vos dou: que vos ameis uns aos outros; como Eu vos amei, que também vós vos ameis uns aos outros'. Mostramos o nosso amor a Deus quando O adoramos e O servimos com alegria, fé e obediência. Nós amamos o nosso próximo como a nós próprios, fazendo tudo o que gostaríamos que ele nos fizesse. Jesus mostrou que tal amor pode significar morrer pelos outros. O nosso próximo é qualquer pessoa que encontramos ou a quem podemos manifestar o nosso amor. Não há limites de cor, raça, religião ou geografia para aqueles a quem podemos mostrar o nosso amor. A lei de Deus revela a sua vontade. Jesus Cristo cumpriu em perfeito amor a vontade do Pai. Ele dá-nos poder para fazermos o mesmo pelo seu exemplo e pela sua presença em nós através do Espírito Santo. Assim, ser cristão é ser semelhante a Cristo. As crenças dos cristãos encontram-se na Bíblia e, de forma resumida, nos chamados credos, declarações de fé da Igreja. A Igreja usa dois credos que datam dos primeiros séculos da sua história: o Credo dos Apóstolos da igreja ocidental e o Credo Niceno da igreja do Oriente. A Igreja Metodista adotou ainda o Credo Social, de acordo com a doutrina do seu fundador, John Wesley (ver Livro de Disciplina da Igreja Metodista Unida, edição da Conferência Central de África 2008, parágrafo 106). O Credo dos Apóstolos é assim chamado porque resume o ensino dos apóstolos de Jesus e porque se acredita que remonta ao seu tempo. Tem sido usado na igreja ocidental desde os primeiros tempos no ensino daqueles que são preparados para a admissão na igreja. Referências: Romanos 8:1-14, Gálatas 5:22.",
    references: "Romanos 8:1-14, Gálatas 5:22, João 13:34",
    url: "/audio/Catecismo Junior Parte 9 - Vida Crista.mp3",
    filename: "Catecismo Junior Parte 9 - Vida Crista.mp3",
  },
  {
    id: "10",
    tapNumber: 10,
    partNumber: "10",
    label: "Parte 10",
    title: "O Nosso Credo",
    summary: "O Credo Apostólico, Niceia e a confissão da Santíssima Trindade.",
    fullText:
      "O Nosso Credo. O catecúmeno aprenderá as bases da fé cristã e o Credo Apostólico. O Credo de Niceia foi formulado no Concílio de Niceia em 325 AD. Aquilo que nós agora chamamos o Credo Niceno foi formulado em 381 AD no Concílio de Constantinopla e autorizado no Concílio de Calcedónia em 451 AD. Este credo pode ser usado no culto dominical metodista de comunhão e é também usado nos serviços de comunhão de outras igrejas. O Credo Apostólico diz o seguinte: 'Creio em Deus Todo-Poderoso, Criador do céu e da terra; e em Jesus Cristo, seu Filho unigénito, nosso Senhor; o qual foi concebido por obra e graça do Espírito Santo, nasceu da Maria Virgem, padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; ao terceiro dia ressuscitou dos mortos, subiu ao céu, está sentado à mão direita de Deus Pai Todo-Poderoso, de onde há de vir para julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Universal, na comunhão dos santos, na remissão dos pecados, na ressurreição do corpo e na vida eterna. Ámen.' Como se pode ver, o Credo está dividido em três partes que são: A primeira parte: 'Creio em Deus Pai', fala de Deus e da criação de tudo. A segunda parte: 'Creio em Jesus Cristo', fala de Cristo e da salvação do homem. A terceira parte: 'Creio no Espírito Santo', fala do Espírito Santo e das suas obras. Assim declaramos que cremos em Deus Triúno: Pai, Filho e Espírito Santo, que é a doutrina da Trindade.",
    references: "Concílio de Niceia 325 AD, Credo Apostólico",
    url: "/audio/Catecismo Junior Parte 10 - O Nosso Credo.mp3",
    filename: "Catecismo Junior Parte 10 - O Nosso Credo.mp3",
  },
  {
    id: "11",
    tapNumber: 11,
    partNumber: "11",
    label: "Parte 11",
    title: "Adorar e Orar",
    summary: "O louvor a Deus e a Oração do Senhor com suas sete petições.",
    fullText:
      "Adorar e Orar. Nesta lição pretende-se que o catecúmeno conheça os conceitos de adorar e orar, assim como a diferença entre eles. Adorar é orar a nossa mente a Deus, cantando, orando, rendendo glória a Deus e lendo a sua Palavra. Adoramos a Deus glorificando-O porque nos convencemos de que não podemos viver sem Ele. A adoração a Deus pode ser feita em todo o lugar onde estejamos. Podemos adorar a Deus a todo o momento: com o nosso coração praticando as obras de misericórdia, com a nossa presença na igreja quando o povo de Deus se reúne. Adorar manifesta uma relação direta com Deus. Orar é dar a conhecer a Deus o que o nosso coração deseja, segundo a sua vontade. Orar é falar com Deus, é comunicar-se com Ele convicto de que Ele ouve e que responderá no momento certo, segundo a sua vontade e graça. Precisamos de orar porque fomos criados para sermos amigos de Deus e fomos reconciliados com Ele em Jesus Cristo. A oração é a expressão natural desta relação de amor com Deus, nosso Pai celeste. Oramos a Deus porque confiamos n'Ele e queremos fazer a sua vontade em todas as coisas. Oramos porque dependemos d'Ele e procuramos a sua condução, força e consolo. O próprio Jesus orava com frequência e ensinou os seus discípulos a fazerem o mesmo. Deus nos responde quando oramos devidamente, mas nem sempre responde imediatamente ou de modo que esperamos. Ou Ele responde-nos e nós não temos noção de que essa é a sua resposta. E podemos ser nós o meio pelo qual Deus responde às nossas orações e às dos outros. O cristão deve orar todos os dias, nas horas determinadas e noutros momentos em que for necessário. As nossas orações devem incluir o seguinte: Adoração: nós louvamos e adoramos a Deus pelo que Ele é. Confissão: nós vimos a Deus em contrição, admitindo o que somos e buscando o seu perdão. Intercessão: nós pedimos a Deus em favor dos outros. Petição: nós oramos a Deus acerca das nossas necessidades e preocupações. Ação de graças: nós damos graças a Deus por tudo aquilo que Ele nos tem dado, especialmente pela nossa salvação. Meditação: nós refletimos tranquilamente na natureza de Deus e acerca daquilo que Ele tem feito, e esperamos que Ele fale connosco. Jesus deu-nos a oração que chamamos Oração do Senhor ou o Pai Nosso, que podemos usar como oração ou modelo para as nossas próprias orações. A Oração do Senhor diz: 'Pai nosso que estás nos céus, santificado seja o Teu nome. Venha o Teu reino, seja feita a Tua vontade, assim na terra como no céu. O pão nosso de cada dia nos dá hoje. Perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores. Não nos deixes cair em tentação, mas livra-nos do mal, porque Teu é o reino, o poder e a glória para sempre. Ámen.' A Oração do Senhor divide-se em três partes que são: Introdução, sete pedidos e louvor. Orar no nome de Cristo é orar com autoridade, como aqueles que Ele salvou e reconciliou com Deus. Orar no Seu nome implica também aquilo que pedimos e o que Ele pediria por nós, isto é, está de acordo com a sua vontade à qual submetemos o nosso pedido. Referências: A Oração do Senhor: Mateus 6:5-8, 8:13.",
    references: "Mateus 6:5-13, Lucas 11:1-4",
    url: "/audio/Catecismo Junior Parte 11 - Adorar e Orar.mp3",
    filename: "Catecismo Junior Parte 11 - Adorar e Orar.mp3",
  },
  {
    id: "12",
    tapNumber: 12,
    partNumber: "12",
    label: "Parte 12",
    title: "Os Sacramentos",
    summary: "O Santo Batismo e a Santa Ceia do Senhor como meios de graça.",
    fullText:
      "Os Sacramentos. No final desta lição o catecúmeno deverá conhecer quais são os sacramentos, em que consistem, qual o seu significado e quem participa deles. Os sacramentos são meios de graça. São símbolos que nos foram dados por Jesus a fim de nos servirem de auxílio para recebermos a sua graça e para a firmeza do desejo de purificação dos nossos corações. Sacramentos revelam e proclamam o que Deus fez pelo mundo em Jesus Cristo e distribuem o seu benefício pela comunidade dos crentes. São sinais da nossa fidelidade a Deus. Os sacramentos são dois: o batismo e a ceia do Senhor, Santa Ceia. O batismo aponta para a vida a ser vivida. Proclama a graça que, na nossa condição de desamparados, nos foi mostrada em Cristo pelo Pai, o perdão e purificação do pecado. É o fim da velha vida do pecado na associação do batismo com a morte de Cristo e o renascimento por meio do Espírito Santo para a nova vida em Cristo. Significa ser recebido na amizade de Cristo por Ele. A água do batismo simboliza o sangue purificador de Jesus Cristo e o segundo nascimento pelo Espírito Santo. Pelo batismo a pessoa é introduzida como membro da Igreja de Cristo. Para isso é necessário crer em Jesus Cristo e tornar-se nova criatura pela obra do Espírito Santo. O batismo torna-nos confiantes de que Cristo nos recebeu no Seu reino e é símbolo de purificação dos nossos corações. O batismo insere-nos no povo de Deus, proclama para nós a salvação prometida por Deus e a participação na chamada sacerdotal dos seus filhos. No ato do batismo comprometemo-nos a levar uma vida de retidão cristã e a obedecer aos mandamentos de Deus. A Santa Ceia é a recordação da paixão do Senhor, que padeceu e morreu para nos salvar. Na Ceia do Senhor, Jesus Cristo está presente e dá-se a Si mesmo ao Seu povo como seu Senhor e Salvador. Ao comerem o pão e beberem o vinho, mediante o poder do Espírito Santo, eles recebem-no pela fé e ação de graças. Dão graças com toda a Igreja pelo sacrifício feito por Cristo de Si próprio uma só vez e por todos na cruz. Na Ceia do Senhor serve-se o pão e o vinho a fim de nos lembrar que Jesus entregou o seu corpo e derramou o seu sangue por nossa causa. A Ceia do Senhor incita-nos a nos criticarmos por causa dos nossos pecados e convertermo-nos. Conduz-nos também à compreensão de que Jesus é o nosso Salvador e que, na verdade, Ele estará connosco (1 Coríntios 11:23-29). Participam na Ceia do Senhor todos os membros da família cristã, os que foram batizados em nome do Pai, do Filho e do Espírito Santo.",
    references: "1 Coríntios 11:23-29, Mateus 28:19",
    url: "/audio/Catecismo Junior Parte 12 - Os Sacramentos.mp3",
    filename: "Catecismo Junior Parte 12 - Os Sacramentos.mp3",
  },
  {
    id: "13",
    tapNumber: 13,
    partNumber: "13",
    label: "Parte 13",
    title: "Compromisso dos que vão ser Batizados",
    summary: "Os votos solenes de renúncia ao pecado e admissão na Igreja.",
    fullText:
      "Compromisso dos que vão ser batizados. Concluídos os estudos, certamente você ficou, deve ser batizado na igreja para que se torne membro dela. É este o compromisso que deve ser assumido por aqueles que são crentes em Jesus Cristo e em Deus. Oficiante: Estás, estais, arrependido, arrependidas, dos teus, vossos, pecados? Resposta: Sim, por obra e graça do Espírito Santo. Oficiante: Prometes, reiais, renunciar a todo o pecado e guardar obedientemente os mandamentos de Deus? Resposta: Sim, prometo, ajudando-me o Senhor. Oficiante: Confessas, ais, aceitar Jesus Cristo como Senhor e teu, vosso, Salvador pessoal? Prometes fidelidade ao Seu reino? Resposta: Sim, confesso e prometo. Oficiante: Queres, reiais, ser batizado, batizada, nesta fé, integrando-te, vos, na Igreja de Jesus Cristo? Resposta: Sim, é este o meu desejo. Oficiante: Prometes, reiais, segundo a graça que te, vos, foi dada, viver uma vida cristã e sempre permanecer membro fiéis, fiéis, da Santa Igreja de Cristo? Resposta: Eu o farei com a ajuda do Senhor.",
    references: "Livro de Disciplina da Igreja Metodista Unida",
    url: "/audio/Catecismo Junior Parte 13 - Compromiso dos Que Vao Ser Baptizados .mp3",
    filename: "Catecismo Junior Parte 13 - Compromiso dos Que Vao Ser Baptizados .mp3",
  },
  {
    id: "14",
    tapNumber: 14,
    partNumber: "14",
    label: "Parte 14",
    title: "A Igreja",
    summary: "O que é a Igreja, o sacerdócio universal e o calendário litúrgico.",
    fullText:
      "A Igreja. Esta lição visa dar ao catecúmeno informação sobre o que é a igreja, qual é o seu trabalho, e quem executa o trabalho da igreja. Dá também uma breve noção do calendário litúrgico. Como todos os membros da igreja partilham do privilégio e da responsabilidade do acesso direto a Deus, todos são chamados a trazer a relação pessoal com Ele e a orar por todos. Isto é, o sacerdócio de todos os crentes ou ministério geral de todos os cristãos. O ministério da igreja é exercido quando os cristãos respondem à chamada de Deus, obedecem e usam os dons que o Espírito Santo lhes deu. Algumas chamadas são marcadas por atos de ordenação da igreja, quando aqueles cujas vocações foram provadas são confiados à ajuda de Deus. Entre eles está o ministério ordenado para a palavra e os sacramentos. Quer a sua chamada tenha sido ou não reconhecida por ordenação, todos os cristãos partilham do serviço para o qual a igreja é chamada. A igreja tem dias festivos ao longo do ano. Estes são: Natal, dia em que se celebra o nascimento de Jesus Cristo; Domingo de Ramos, dia em que se celebra a entrada triunfal de Jesus em Jerusalém; Sexta-feira Santa, Paixão de Cristo; Páscoa, dia da ressurreição de Jesus Cristo; Ascensão, dia em que Jesus subiu aos céus; Pentecostes, dia da descida do Espírito Santo, formação da igreja em Jerusalém. Estes dias estão indicados no calendário litúrgico e estão centrados na vida terrena de Jesus Cristo, o cabeça da igreja.",
    references: "1 Pedro 2:9, 1 Coríntios 12:4-11, Efésios 4:11-16",
    url: "/audio/Catecismo Junior Parte 14 - A Igreja.mp3",
    filename: "Catecismo Junior Parte 14 - A Igreja.mp3",
  },
  {
    id: "15",
    tapNumber: 15,
    partNumber: "15",
    label: "Parte 15",
    title: "Igreja Metodista",
    summary: "John Wesley, o Grupo Santo de Oxford e a herança metodista.",
    fullText:
      "Igreja Metodista. Esta lição pretende dar aos catecúmenos noções básicas do metodismo, suas origens e características específicas. O movimento metodista foi fundado por John Wesley. Este era um clérigo da Igreja da Inglaterra (Anglicana), filho de um padre também da mesma igreja, Samuel Wesley, e de Susana Wesley. No dia 24 de Maio de 1738, John Wesley experimentou uma mudança espiritual e um aquecimento especial no seu coração, que o fez sentir-se renovado na sua fé em Jesus Cristo. O movimento metodista surgiu de um grupo de estudantes da Universidade de Oxford, na Inglaterra, que foi chamado de 'Grupo Santo' por outros estudantes, pois se tinham dedicado a Cristo e queriam viver um padrão cristão de vida, orando, lendo a Bíblia, jejuando e ajudando os necessitados. Organizavam a sua vida de maneira metódica, em dias e horas próprias, daí a serem chamados de metodistas. O metodismo é um movimento cristão nascido na Inglaterra, cujos membros se organizavam numa vida regrada, metódica, obedecendo a um padrão de vida cristã de acordo com as Sagradas Escrituras, em plano de trabalho bem estruturado, em dias e horas próprias para cada ação: oração, leitura bíblica, meditação, apoio aos necessitados, estudos, entre outros aspetos. Os metodistas têm resumido a sua mensagem no seguinte: Todos necessitam de ser salvos; Todos podem ser salvos; Todos podem saber que estão salvos. Os metodistas têm forte convicção do conceito da graça preveniente, acreditam na necessidade da salvação de toda a humanidade, bem como na convicção de que todos devem ser salvos e que todos podem saber que estão, somente mediante a fé em Cristo Jesus, nosso Senhor e Salvador. Todo o mundo constitui uma única paróquia, na qual o metodista se prontifica a proclamar as maravilhas do Reino de Deus. Existem algumas características tradicionais do povo chamado metodista, que incluem: A importância de uma vida santificada, dirigida por uma mentalidade que aspira à perfeição e um coração evangelicamente aquecido; A sustentação permanente de que o propósito da conversão cristã não é somente o paraíso, mas sim o testemunho através de uma vida de justiça, amor e misericórdia neste mundo; A ênfase da importância da música na adoração e no ensino das verdades cristãs; A importância de combinar a pregação e o testemunho com a adoração sacramental (Ceia do Senhor e Batismo); A importância de expressar a gratidão a Deus ao prestar serviço à igreja; O desenvolvimento e divisão da comunidade em pequenos grupos (classes) para instrução, cuidado pastoral e intimidade; A importância da conexionalidade, ligando comunidades locais ao distrito, às conferências (distrital, anual, central, jurisdicional e geral) e à comunidade metodista mundial.",
    references: "Aldersgate 1738, 2 Timóteo 3:16-17",
    url: "/audio/Catecismo Junior Parte 15 - Igreja Metodista.mp3",
    filename: "Catecismo Junior Parte 15 - Igreja Metodista.mp3",
  },
  {
    id: "16",
    tapNumber: 16,
    partNumber: "16",
    label: "Parte 16",
    title: "Igreja Metodista Unida",
    summary: "História em Moçambique, ministérios, conexionalidade e o símbolo da Cruz e Chama.",
    fullText:
      "Igreja Metodista Unida. Nesta lição são dadas ao catecúmeno noções sobre a história da Igreja Metodista Unida em Moçambique, direitos e deveres dos membros, organização da igreja, e símbolo oficial da igreja e seu significado. A Igreja Metodista Unida surgiu da união da Igreja Metodista Episcopal com a Igreja Evangélica dos Irmãos Unidos. Em Moçambique, a Igreja Metodista Unida surgiu assim: Em 1884, o Bispo Missionário para África, William Taylor, que tinha como sua meta desenvolver a Igreja Metodista de sustento próprio, iniciou uma grande digressão evangélica. Partindo da Libéria, veio a Angola em 1885. Em 1890, o Bispo Taylor enviou, a pedido deste, o Reverendo Doutor E. H. Richards, que anteriormente pertencera à Igreja American Board, para trabalhar em Moçambique, no trabalho que ele mesmo iniciara. O Reverendo Richards é quem implantou a Igreja Metodista Episcopal em Moçambique. A Igreja Metodista Episcopal em Moçambique atravessou o seu período de expansão mais frutífero, recrutando membros, construindo escolas, hospitais e confirmando-se como uma das mais dinâmicas e prestigiadas igrejas do país. Isto resultou na ordenação no ministério metodista em Moçambique dos primeiros pastores africanos e nacionais: Tizore Navess e Mutimuna Chicovela, em 1905. Em Setembro de 1964, é consagrado o primeiro bispo moçambicano, o Reverendo Bispo Escrivão Anglaze Zunguze, que se aposentou em 1976. Foi sucedido pelo Reverendo Bispo Almeida Penicela, e este por sua vez foi sucedido pelo Reverendo Bispo João Somane Machado, em 1988. A partir de 2008, a líder da Igreja Metodista Unida em Moçambique é a Reverenda Bispa Joaquina Filipe Nhanala. Pode ser recebido membro efetivo da Igreja Metodista Unida todo aquele que for batizado em qualquer denominação cristã, que aceita os princípios metodistas, prometendo viver uma vida cristã genuína e aceita a orientação do Espírito Santo na sua vida, e promete sustentar a igreja pela sua presença, seus bens, seu esforço e suas orações. Em geral, os deveres do membro da Igreja Metodista são: Participar nos cultos e seus programas; Testemunhar de Cristo em casa, na igreja e no mundo; Estudar as Sagradas Escrituras e praticar a oração; Promover a fraternidade cristã; Exercer uma mordomia responsável dos seus dons e bens em apoio à missão da igreja; Conhecer bem a disciplina da igreja e casar pela igreja. A Igreja Metodista Unida é conexional, estruturando-se em classes, igrejas locais, cargos pastorais, distritos eclesiásticos, conferências anuais, conferências centrais (ou jurisdicionais nos Estados Unidos) e conferência geral. Também organiza grupos de pessoas para tarefas da sua missão segundo as idades, onde encontramos: Crianças (Estrela), Sociedade Metodista Unida de Jovens (SMAJE), Sociedade Metodista Unida de Jovens Adultos (SMAJA), Sociedade Metodista Unida de Mulheres (SMAM), Organização de Homens Metodistas Unidos (OAM). É através destas sociedades e organizações que a igreja atinge os vários elementos da sociedade para os trazer a Jesus Cristo como seus discípulos. O símbolo oficial da Igreja Metodista Unida é uma chama dupla e uma cruz latina vazia. Este símbolo ou logotipo da Igreja Metodista Unida é a marca da igreja, que pode ser utilizada livremente para identificar toda e qualquer igreja local, instituição, publicação, material ou presença da Igreja Metodista. A história deste símbolo é bastante significativa para o povo chamado metodista. Sua criação começou nos Estados Unidos em 1968, quando as duas igrejas, Metodista Episcopal e Evangélica dos Irmãos Unidos, se fundiram, formando a Igreja Metodista Unida. Nesse ano, um concílio da nova igreja, a Metodista Unida, nomeou uma equipa liderada por Edward J. Mikula para criar uma marca oficial para a nova denominação que surgira a partir desta fusão. Este grupo decidiu que: a) Qualquer símbolo que fosse criado deveria carregar alguma expressão de calor como aquela que John Wesley sentiu em seu coração na Rua Aldersgate, aquando da sua experiência religiosa em 24 de Maio de 1738. Por isso é que a equipa liderada por Mikula assumiu o emblema que contém a cruz vazia, lembrando o Cristo ressurreto, e a chama lembrando aquele calor especial no coração de John Wesley aquando da sua experiência. A chama é dupla, representando as duas igrejas que se uniram. Além disso, o simbolismo do emblema nos relaciona com Deus, o Pai, através da segunda e terceira pessoas da Santíssima Trindade: o Cristo (cruz) e o Espírito Santo (chama).",
    references: "Livro de Disciplina da Igreja Metodista Unida, Conferência Central de África",
    url: "/audio/Catecismo Junior Parte 16 - Igreja Metodista Unida.mp3",
    filename: "Catecismo Junior Parte 16 - Igreja Metodista Unida.mp3",
  },
  {
    id: "17",
    tapNumber: 17,
    partNumber: "17",
    label: "Parte 17",
    title: "Mordomia Cristã",
    summary: "Administração fiel da vida, do tempo, dos dons e dos bens para a glória de Deus.",
    fullText:
      "Mordomia Cristã. Nesta lição são dadas ao catecúmeno noções sobre a mordomia cristã nas suas várias vertentes. Mordomia cristã é a aceitação ou reconhecimento do privilégio de termos uma conduta coerente em relação aos bens materiais e espirituais que nos foram dados pelo Senhor, de acordo com os ideais cristãos. Mordomo é a pessoa a quem uma outra confia uma parte dos seus bens para que os guarde e os utilize de forma a satisfazer o dono, reservando-lhe uma parte. O mordomo é administrador de todos os bens do seu Senhor. Mordomo cristão é aquele que reconhece que em Cristo vivemos, nos movemos e existimos. Sabe que não pertence a si mesmo, porque foi comprado com o preço do sangue de Cristo derramado na cruz por seus pecados. Reconhece a Deus como seu Senhor e vive para Ele. Toda a vida do cristão (personalidade, tempo, talento, influência, bens materiais, o seu todo enfim) é dedicada a Cristo. Nós, os cristãos, aprendemos que Deus é o Criador de todas as coisas que existem na Terra, e que Ele é o Dono da nossa própria vida. Isso faz com que sejamos mordomos de tudo o que temos e também da nossa vida. Como crentes em Cristo, estamos sob a graça e não sob a lei. Portanto, temos a motivação e o padrão mais elevado e antigo, que é a mordomia dos bens. Pela mordomia dos bens, o cristão é encorajado a tornar-se dizimista, a proceder às ofertas e a ajudar os necessitados (2 Coríntios 8:5), pois nós e as nossas possessões pertencemos ao Senhor (1 Coríntios 6:19-20, 10:31, 2 Coríntios 8:5). O mordomo, ou seja, a pessoa que administra os bens, deve fazê-lo com fidelidade e lealdade, repartindo-os de acordo com as Escrituras Sagradas. A motivação no uso de tudo o que possuímos deve ser para a glória de Deus (1 Coríntios 10:31). Passamos a vida a repetir: 'Não tenho tempo'. Se nos pedem alguma coisa, lá vem a célebre desculpa: 'Se eu pudesse, mas não tenho tempo'. Mais importante do que quantos anos é a maneira como vives esse tempo que Deus te empresta. O que é o tempo? Definição difícil de se dar de forma totalmente compreensível. Eclesiastes 3:1-8 nos diz: 'Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu'. Devemos fazer bem tudo o que temos que fazer e que esteja ao nosso alcance. O tempo que agora usamos mal, mesmo que nos arrependamos de o ter feito, jamais o vamos poder recuperar. Devemos gastar o nosso tempo em coisas que nos levam à edificação espiritual. John Wesley esclarece com muita propriedade como o cristão deve gastar o seu tempo, já que prioritariamente procura salvar vidas, daí que diz: 'Gastem o tempo e sejam gastos nessa obra'. Através da nossa presença nos trabalhos da igreja, nossas ofertas e nosso dízimo.",
    references: "1 Coríntios 6:19-20, 1 Coríntios 10:31, 2 Coríntios 8:5, Eclesiastes 3:1-8",
    url: "/audio/Catecismo Junior Parte 17 - Mordomo.mp3",
    filename: "Catecismo Junior Parte 17 - Mordomo.mp3",
  },
  {
    id: "18",
    tapNumber: 18,
    partNumber: "18",
    label: "Parte 18",
    title: "O Dízimo",
    summary:
      "Fundamentos bíblicos, dez mandamentos do dízimo e dimensões religiosa, social e missionária.",
    fullText:
      "O Dízimo. Nesta lição ensina-se ao catecúmeno o significado e a importância do dízimo na relação com Deus, assim como as várias dimensões do mesmo. 1. O que diz a Bíblia sobre o dízimo: A palavra dízimo é encontrada pela primeira vez em Génesis 14:18-20, onde Abraão oferece a Deus um décimo de todos os seus bens, em agradecimento pela assistência de Deus nas lutas contra os inimigos. O dízimo deve brotar da gratidão, do reconhecimento de que Deus é o Senhor de tudo. Se tenho, é porque Ele me deu. Em Hebreus 7:4 está escrito: 'Considerai, pois, quão grande é aquele a quem até o patriarca Abraão deu o dízimo dos seus mais ricos espólios'. Abraão, nosso pai na fé, entregou o dízimo. Quem de nós se pode auto-isentar? 2. O que é o dízimo: Deuteronómio 14:22-26: 'Pôr-as-às à parte o dízimo de todo o fruto de tuas sementeiras, de tudo o que teu campo produzir cada ano'. É o dízimo destinado à peregrinação, à Casa do Senhor. Deus exige o dízimo e os primogénitos (Deuteronómio 12:11-14, 14:28). O dízimo deve ser levado à comunidade onde vivo, de que participo e onde celebro a fé. Não posso administrar o dízimo para mim mesmo: que a mão esquerda não saiba o que deu a direita (Mateus 6:3). Fazer uma cesta de alimentos e dar aos pobres é caridade, e não dízimo. O dízimo estabelece um princípio de fidelidade entre a criatura e seu Criador (Deuteronómio 26:12-13, Génesis 28:20-22, Levítico 27:30-32). Malaquias 3:8-9: aqui está o verdadeiro sentido do dízimo. Deus pede o dízimo para que não falte nada na casa de ninguém. Oração da oferta: 'Recebe, Senhor, minha oferta. Não é uma esmola, porque não és mendigo; não é uma contribuição, porque não precisas; não é o resto que me sobra que Te ofereço. Esta importância representa, Senhor, meu reconhecimento, meu amor, pois, se tenho, é porque me deste. Ámen.' 3. Meus 10 Mandamentos do Dízimo: Primeiro: Sou dizimista porque amo a Deus e amo o meu próximo (2 Coríntios 9:7). Segundo: Sou dizimista porque reconheço que tudo recebo de Deus (Salmo 23). Terceiro: Sou dizimista porque minha gratidão a Deus me leva a devolver um pouco do muito que recebo (Lucas 17:11-19). Quarto: Sou dizimista porque aceito como palavra de Deus o que leio na Bíblia; sei que o dízimo é fonte de bênção (Malaquias 3:10, Lucas 21:1-4). Quinto: Sou dizimista porque creio e confio em Deus Pai (Mateus 6:25-31). Sexto: Sou dizimista porque o ato de partilhar irá matando o meu egoísmo (Lucas 12:16-21, 1 Pedro 4:8). Sétimo: Sou dizimista porque creio na vida cristã em comunidade (Mateus 18:20). Oitavo: Sou dizimista porque Deus, o único Pai rico, não quer ninguém passando necessidades (Mateus 25:40). Nono: Sou dizimista porque gosto de viver em liberdade e alegria (João 14:1-5, Mateus 25:34). Décimo: Sou dizimista porque quero ver minha comunidade crescer e minha igreja testemunhar o evangelho de Jesus no mundo (Mateus 28:19-20). 4. As três dimensões do dízimo: 4.1 Dimensão religiosa do dízimo: O dízimo deve ser uma opção que liberta e ajuda no processo de salvação para com Deus. 4.2 Dimensão social do dízimo: O dízimo acolhe o pobre, a viúva, o indigente, o peregrino e o estrangeiro. À medida que acolhemos o necessitado, acolhemos o próprio Cristo (Mateus 25:42-45). 4.3 Dimensão missionária do dízimo: O dízimo capacita a comunidade a preparar e enviar pregadores, catequistas e missionários para evangelizarem em todos os lugares.",
    references: "Génesis 14:18-20, Malaquias 3:8-10, Mateus 6:25-34, 2 Coríntios 8:1-3, 9:7",
    url: "/audio/Catecismo Junior Parte 18 - O Dizimo.mp3",
    filename: "Catecismo Junior Parte 18 - O Dizimo.mp3",
  },
  {
    id: "19",
    tapNumber: 19,
    partNumber: "19",
    label: "Parte 19",
    title: "A Bíblia",
    summary:
      "A Palavra inspirada por Deus, tradução de João Ferreira de Almeida e estrutura canónica.",
    fullText:
      "A Bíblia. Esta lição pretende dar a conhecer ao catecúmeno uma informação geral sobre a Bíblia Sagrada, sua autoria, sua tradução e sua composição. A Bíblia é a coleção de livros gradualmente compilados, na qual está relatado como Deus agiu no meio e através do seu povo e lhe falou. Os escritos expressaram-se de acordo com a sua linguagem, cultura e situação histórica, e por variadas formas todos davam testemunho da sua fé em Deus. A Bíblia documenta a auto-revelação de Deus, de forma suprema em Jesus Cristo, e é um meio através do qual Ele continua a revelar-se a Si próprio, pelo Espírito Santo. Bíblia Sagrada é a revelação de Deus à humanidade. É a definição canónica mais curta da Bíblia. Tudo o que Deus tem preparado para o homem, bem como o que Ele requer do homem, e tudo o que o homem precisa saber espiritualmente da parte d'Ele quanto à sua redenção e felicidade eterna, está revelado na Bíblia. Tudo o que o homem tem a fazer é tomar a palavra de Deus e apropriar-se dela pela fé. O autor da Bíblia é Deus, seu real intérprete é o Espírito Santo e seu assunto central é o Senhor Jesus Cristo. O homem deve ler a Bíblia para ser sábio, crer na Bíblia para ser salvo e praticar a Bíblia para ser santo ou santificado. A coleção completa dos livros divinamente inspirados constituindo a Bíblia é chamada de Cânon. A Bíblia Sagrada é considerada por muitos como um livro de leitura difícil. Difícil porque é antigo, foi escrito por orientais, que têm uma mentalidade bem diferente da greco-romana, da qual nós descendemos. Diversos foram os seus escritores, que viveram entre os anos 1200 antes de Cristo a 100 depois de Cristo. Isso, sem levar em conta que foi escrita em línguas hoje inexistentes ou totalmente modificadas, como o hebraico, o grego e o aramaico, facto este que dificulta enormemente uma tradução, pois muitas vezes não se encontram palavras adequadas, mas vale a pena fazer um esforço e lê-la. Sobre a tradução feita por João Ferreira Annes d'Almeida: João Ferreira de Almeida nasceu em 1628, próximo a Lisboa. Convertido ao protestantismo, iniciou a tradução da Bíblia aos 17 anos, mas perdeu o seu primeiro manuscrito e reiniciou o seu trabalho em 1648. Conhecia hebraico e grego e utilizou-se de vários manuscritos dessas línguas para compor a sua tradução. Em 1676, foi concluída a tradução do Novo Testamento, que só viria a ser publicada em 1681, na Holanda, por problemas de revisão. Quando ocorreu a sua morte em 1691, já havia traduzido o Velho Testamento até ao livro do profeta Ezequiel. Seu trabalho foi continuado pelo pastor Jacobus op den Akker, de Batávia, em 1748. Cinco anos depois, em 1753, foi impressa a primeira Bíblia em português, completa, em dois volumes. Estrutura da Bíblia: A Bíblia divide-se em duas partes, a saber: Antigo Testamento, com 39 livros; Novo Testamento, com 27 livros. A primeira tradução da Bíblia Sagrada para o Xitswa foi feita por Mutimunene Chicovela, que a traduziu do inglês no final do século dezanove. Antigo Testamento: O Antigo Testamento conta a história do povo de Israel. Essa história retrata a fé do povo e descreve a vida religiosa dos israelitas. Os autores destes livros escreveram o que Deus fez por eles como povo e como eles deveriam adorá-Lo em resposta ao Seu amor. Os livros do Antigo Testamento formam cinco grupos que abrangem conteúdos semelhantes e seguem a mesma ordem cronológica em que se acham na Bíblia. Novo Testamento: Os livros do Novo Testamento foram escritos pelos discípulos de Jesus Cristo. Eles queriam que outros ouvissem a respeito da nova vida que é possível através da morte e ressurreição de Jesus. Da mesma forma que o Antigo Testamento, o Novo Testamento também está dividido em grupos de conteúdo semelhante, quer pelos assuntos tratados, quer pelos autores ou pelos objetivos.",
    references: "2 Timóteo 3:16-17, Salmo 119:105, Hebreus 4:12",
    url: "/audio/Catecismo Junior Parte 19 - A Biblia.mp3",
    filename: "Catecismo Junior Parte 19 - A Biblia.mp3",
  },
  {
    id: "20",
    tapNumber: 20,
    partNumber: "20",
    label: "Parte 20",
    title: "Compromisso dos Membros Efetivos",
    summary: "A confirmação dos votos do pacto batismal e a recepção em plena comunhão.",
    fullText:
      "Compromisso dos membros efetivos. Oficiante: Confirmais na presença de Deus e desta congregação os votos contidos no pacto batismal? Resposta: Sim, confirmo. Oficiante: Confessais aceitar a Jesus Cristo como Senhor e vosso Salvador pessoal? Resposta: Sim, confesso. Oficiante: Buscareis sempre a comunhão de seu povo para auxiliar o vosso crescimento em graça e santidade diante de Deus e dos homens? Resposta: Sim, com a graça de Deus.",
    references: "Livro de Disciplina da Igreja Metodista Unida",
    url: "/audio/Catecismo Junior Parte 20 - Compromisso Dos Membros Efectivos.mp3",
    filename: "Catecismo Junior Parte 20 - Compromisso Dos Membros Efectivos.mp3",
  },
];
