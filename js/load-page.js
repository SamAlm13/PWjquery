// Leitura do documento html
$(document).ready(function(){

// Monitorar todos os cliques do elemento "a" no html
  $('a').click(function(e){
    e.preventDefault()

   // Variavel local que recebe o atributo href do link
    let page = $(this).attr('href')

    $('.modal-title').empty()
    $('.modal-body').empty()

    switch(page){
    case 'palha': 
      $('.modal-title').append('Tripulação do Chapéu de Palha:')
      $('.modal-body').append(`
      <a href="https://onepiece.fandom.com/wiki/Monkey_D._Luffy"><img class="imgmod" alt="luffy" src="imgP/luffy.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Roronoa_Zoro"><img class="imgmod" alt="zoro" src="imgP/zoro.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Vinsmoke_Sanji"><img class="imgmod" alt="sanji" src="imgP/sanji.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Nami"><img class="imgmod" alt="nami" src="imgP/nami.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Usopp"><img class="imgmod" alt="usopp" src="imgP/usopp.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Tony_Tony_Chopper"><img class="imgmod" alt="chopper" src="imgP/chopper.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Brook"><img class="imgmod" alt="skbrook" src="imgP/skbrook.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Nico_Robin"><img class="imgmod" alt="nico" src="imgP/nico.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Franky"><img class="imgmod" alt="franky" src="imgP/franky.jpg"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Jinbe"><img class="imgmod" alt="jinbe" src="imgP/jinbe.jpg"/></a>`)
      $('#modal-info').modal('show')
    break

    case 'marine': 
      $('.modal-title').append('Superiores da Marine:')
      $('.modal-body').append(`
      <a href="https://onepiece.fandom.com/pt/wiki/Sakazuki"><img class="imgman" alt="akainu" src="imgP/akainu.png"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Issho"><img class="imgman" alt="fujitora" src="imgP/fujitora.png"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Borsalino"><img class="imgman" alt="kizaru" src="imgP/kizaru.png"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Sengoku"><img class="imgman" alt="sengoku" src="imgP/sengoku.png"/></a>
      <a href="https://onepiece.fandom.com/pt/wiki/Monkey_D._Garp"><img class="imgman" alt="garp" src="imgP/garp.png"/></a>`)
      $('#modal-info').modal('show')
    break

    case 'akuma': 
      $('.modal-title').append('Akuma no mi:')
      $('.modal-body').append(`<p>As Akuma no Mi, são frutas encontradas em todo o mundo que, quando consumidas, fornecem a pessoa uma habilidade especial, dependendo do tipo e da variação do próprio fruto. Com apenas uma exceção notável, um indivíduo só pode adquirir os poderes de uma única Akuma no Mi.</p>
      <p>Dizem que as Akuma no Mi são os frutos dos demônios dos mares e que o segredo do seu poder está escondido na Grand Line. Como os encontros com eles são raros (especialmente fora da Grand Line), vários rumores sobre eles surgiram, tornando difícil dizer se algumas coisas são verdade ou ficção; Nami descartou-os como meros mitos até que ela viu a Bara Bara no Mi em ação. As pessoas comuns não sabem nada ou muito pouco sobre o que são ou o que fazem; isso se aplica especialmente a pessoas em países isolados, até mesmo dentro da Grand Line, como em Amazon Lily e o País de Wano, e até a Princesa Shirahoshi da Ilha dos Homens-Peixe, como nenhum deles sabiam sobre as Akuma no Mi, e em vez disso, acreditavam nos poderes conferidos como maldições ou feitiçaria. Por causa de seu poder, se vendido, eles podem valer mais de 100,000,000 de Berries , e os próprios usuários são vendidos a preços de mercado como escravos. Naturalmente, cada Fruta individual tem sua diferença de preço, dependendo dos poderes conferidos, como a Ope Ope no Mi vale 5,000,000,000 de Berries no mercado negro. Existem mais de 100 variedades de Akuma no Mi.</p>`)
      $('#modal-info').modal('show')
    break

    case 'info': 
      $('.modal-title').append('Informações Gerais:')
      $('.modal-body').append(`
      <h4>Informações da Modal:</h4>
      <p> Em cada Janela Modal contém imagens dos membros daquela organização, ao clicar em cada uma será redirecionado a uma página informativa que contém a história e as Informações do personagem selecionado.</p>
      <h4>Temas:</h4>
      <h5>A cada mudança de tema a música e as cores são alteradas de acordo com a organização, lugar ou grupo representado a seguir: </h5>
      <p>O primeiro "Tema dos Piratas", representa a Tripulação de Monkey D. Luffy. Já que Luffy sempre usa um chapéu de palha com uma faixa vermelha e uma camiseta de mesma cor.</p>
      <p>O segundo "Tema da GrandLine" , representa um grande mar que vai de norte a sul no qual é temido por muitos e também chamado de "Cemiterio dos Piratas" pelo motivo de muitos irem para esse lugar e nunca voltarem. Também é muito associado com um lugar sombrio.
      <p>O terceiro "Tema da Marine" , representa a organização que luta contra os piratas também conhecida como "Marinha". Eles tem como objetivo eliminar todos os piratas do mundo.</p>

      <h4>Músicas:</h4>
      <p>One Piece Opening 1 (Tema dos Piratas)</p>
      <p>One Piece OST - Justice (Tema da Marine)</P>
      <p>One Piece Fight music (Tema da GrandLine)</p>

      `)
      $('#modal-info').modal('show')
    break

    default:
    alert('Link invalido')
    }
    
  })
})