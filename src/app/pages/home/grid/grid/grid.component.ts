import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

  hobby = [
    { nome: 'JUMBOS',
      imagem: 'assets/cards/aro.png',
      imagem1: 'assets/cards/cascudos/cascudo1.svg',
      imagem2: 'assets/cards/cascudos/cascudo2.svg',
      imagem3: 'assets/cards/cascudos/cascudo3.svg',
      imagem4: 'assets/cards/cascudos/cascudo4.svg',
      imagem5: 'assets/cards/cascudos/cascudo5.svg',
      imagem6: 'assets/cards/cascudos/cascudo6.svg',
      descricao: 'O aquarismo Jumbo é uma vertente do hobby que se destaca por focar na criação de peixes de grande porte, como Aruanãs, Oscar Fish (Astronodus ocellatus), arraias de água doce e grandes bagres, como a Pirarara e o Pintado. No Brasil, essa modalidade é particularmente popular devido à rica biodiversidade de espécies nativas de grande porte, muitas das quais são altamente valorizadas entre aquaristas de todo o mundo.\n O aquarismo Jumbo exige um planejamento cuidadoso, principalmente por conta das necessidades específicas dessas espécies em termos de espaço e alimentação. Por exemplo, peixes como as Aruanãs e os Oscars podem crescer bastante, necessitando de aquários grandes, geralmente com capacidade superior a 500 litros. Além disso, o comportamento desses peixes, que podem ser predadores e territorialistas, exige uma atenção especial na escolha dos companheiros de tanque e no layout do aquário.\n Outro ponto crucial é a alimentação. Peixes Jumbo têm uma dieta carnívora ou onívora, o que pode incluir peixes menores, crustáceos e ração de alta qualidade. O equilíbrio entre proteínas e nutrientes é essencial para garantir um crescimento saudável e evitar problemas como obesidade ou deficiências nutricionais.\n A criação de arraias de água doce, outro destaque dessa modalidade, também requer um ambiente aquático específico, com substrato adequado e espaço no fundo do aquário para que possam se movimentar livremente. Além disso, esses animais têm preferências alimentares que podem incluir pequenos invertebrados e peixes, o que exige uma alimentação variada e rica em proteínas.\n Um dos desafios do aquarismo Jumbo é garantir a filtragem adequada, já que esses peixes maiores produzem uma quantidade significativa de resíduos, o que pode impactar a qualidade da água. Sistemas de filtragem potentes, juntamente com uma rotina de manutenção frequente, são fundamentais para manter o ambiente saudável.\n No Brasil, a popularidade dessa modalidade se deve não apenas à abundância de espécies nativas de grande porte, como o Pirarucu, mas também ao entusiasmo dos aquaristas brasileiros por recriar habitats naturais em larga escala. Aquários Jumbo frequentemente se assemelham a grandes biomas aquáticos, proporcionando um ambiente mais próximo do natural para essas espécies impressionantes.'},

    { nome: 'CASCUDOS',
      imagem: 'assets/cards/cascudo.png',
      imagem1: 'assets/cards/cascudos/cascudo1.svg',
      imagem2: 'assets/cards/cascudos/cascudo2.svg',
      imagem3: 'assets/cards/cascudos/cascudo3.svg',
      imagem4: 'assets/cards/cascudos/cascudo4.svg',
      imagem5: 'assets/cards/cascudos/cascudo5.svg',
      imagem6: 'assets/cards/cascudos/cascudo6.svg',
      descricao: 'No mundo do aquarismo, os plecos ou cascudos, membros da família Loricariidae, são bastante populares, não apenas pela sua aparência única, mas também pelos mitos em torno de seus hábitos alimentares. Esses peixes, conhecidos por seus corpos revestidos por placas ósseas que lembram uma armadura, possuem uma função mais específica no ecossistema do aquário do que apenas limpar o fundo, como é frequentemente dito.\n Esses peixes são iliófagos, ou seja, se alimentam principalmente de algas, matéria vegetal e restos orgânicos, mas não de dejetos. Muitas espécies de cascudos desenvolvem um comportamento de raspagem, utilizando sua boca em forma de ventosa para fixar-se em superfícies e raspar algas, que são sua principal fonte de alimento. No aquarismo, isso pode criar a impressão de que estão limpando o aquário, quando na verdade eles estão se alimentando de algas e biofilmes, não de sujeira ou detritos.\n Apesar disso, é importante destacar que os cascudos não são capazes de realizar a limpeza completa de um aquário. Eles precisam de uma dieta balanceada, que pode incluir alimentos à base de vegetais, como pepinos, abobrinhas e ração específica para peixes de fundo, que complementam a dieta natural de algas. Sem uma alimentação adequada, eles podem sofrer de desnutrição, uma vez que as algas e restos presentes no aquário geralmente não são suficientes para suprir suas necessidades nutricionais.\n Adicionalmente, alguns aquaristas mantêm espécies maiores de cascudos, como o Hypostomus plecostomus (pleco comum), que podem crescer bastante e, em aquários pequenos, acabam ficando inadequados. Portanto, é fundamental considerar o tamanho final desses peixes ao escolher o aquário onde serão mantidos.\n Outro aspecto interessante é que os plecos também podem ajudar a controlar o crescimento excessivo de algas, mas essa tarefa não deve ser vista como a solução principal para a limpeza do aquário. Manutenção regular, trocas de água e um sistema de filtragem adequado são essenciais para garantir a saúde e o equilíbrio do ambiente.\n No geral, os plecos são fascinantes para o hobby de aquarismo, mas devem ser vistos como peixes que demandam cuidados específicos, tanto em termos de alimentação quanto em espaço, para que possam viver de maneira saudável. Alguns exemplares de plecos:'},

    { nome: 'BETTAS',
      imagem: 'assets/cards/betta.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph'},

    { nome: 'KINGUIOS',
      imagem: 'assets/cards/kinguio.png',
      descricao: 'LoLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph' },

    { nome: 'AFRICANOS',
      imagem: 'assets/cards/africano.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph' },

    { nome: 'DISCOS',
      imagem: 'assets/cards/disco.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph' },

    { nome: 'MARINHOS',
      imagem: 'assets/cards/marinho.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph' },

    { nome: 'CRUSTÁCEOS',
      imagem: 'assets/cards/camarao.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph' },

    { nome: 'ASIÁTICOS',
      imagem: 'assets/cards/asiaticos.png',
      descricao: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi at lorem aliquam gravida. Ut at viverra lacus. Mauris aliquet vehicula sapien, ac faucibus lectus maximus in. Curabitur volutpat lacus ut nunc suscipit, sit amet facilisis nisi pulvinar. Suspendisse potenti. Aliquam a eros venenatis, consequat arcu at, scelerisque tortor. Fusce ac sem sapien. Duis at consectetur felis, ac consequat ex. Integer ornare ph' }
  ];

}
