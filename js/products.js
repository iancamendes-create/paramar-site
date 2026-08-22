(function () {
  const PRODUCTS = [
    // ===== GINS =====
    {
      id: 'paramana-london',
      name: 'Paramana London Dry Gin',
      category: 'Gins',
      volume: '700ml',
      price: 86.90,
      description: 'Seco, cítrico e herbal, o clássico da casa, feito para uma gin-tônica que dura até o último raio de sol.',
      img: 'paramana-london-garrafa.jpg',
      imgHover: 'paramana-london-drink.jpg'
    },
    {
      id: 'paramana-isle',
      name: 'Paramana Isle',
      category: 'Gins',
      volume: '700ml',
      price: 86.90,
      description: 'Notas tropicais e frescor de ilha num gin que carrega a Baía de Todos os Santos em cada dose.',
      img: 'paramana-isle-garrafa.jpg',
      imgHover: 'paramana-isle-drink.jpg'
    },
    {
      id: 'paramana-limao-siciliano',
      name: 'Paramana Limão Siciliano',
      category: 'Gins',
      volume: '700ml',
      price: 86.90,
      description: 'Limão siciliano em alta voltagem, cítrico e vibrante, pede gelo grande e casca generosa.',
      img: 'paramana-limao-siciliano-garrafa.jpg',
      imgHover: 'paramana-limao-siciliano-drink.jpg'
    },
    {
      id: 'paramana-frutas-vermelhas',
      name: 'Paramana Frutas Vermelhas',
      category: 'Gins',
      volume: '700ml',
      price: 84.90,
      description: 'Morango, framboesa e amora numa base de gin, doce na medida certa para taças que colorem a tarde.',
      img: 'paramana-frutas-vermelhas-garrafa.jpg',
      imgHover: 'paramana-frutas-vermelhas-drink.jpg'
    },
    {
      id: 'gin-vies',
      name: 'Gin Viés',
      category: 'Gins',
      volume: '700ml',
      price: 70.00,
      description: 'Gin urbano de rótulo vermelho e botânicos marcantes, presença garantida em qualquer roda.',
      img: 'gin-vies-garrafa.jpg',
      imgHover: 'gin-vies-hover.jpg'
    },
    {
      id: 'gin-beefeater',
      name: 'Gin Beefeater',
      category: 'Gins',
      volume: '700ml',
      price: 89.90,
      description: 'London Dry clássico, botânicos equilibrados e um caráter de zimbro que atravessa gerações.',
      img: 'gin-beefeater-garrafa.jpg',
      imgHover: 'gin-beefeater-hover.jpg'
    },
    {
      id: 'gin-beefeater-limao-siciliano',
      name: 'Gin Beefeater Limão Siciliano',
      category: 'Gins',
      volume: '700ml',
      price: 94.00,
      description: 'A tradição Beefeater com um sopro cítrico de limão siciliano, refrescante do início ao fim.',
      img: 'gin-beefeater-limao-siciliano-garrafa.jpg',
      imgHover: 'gin-beefeater-limao-siciliano-hover.jpg'
    },
    {
      id: 'gin-tanqueray',
      name: 'Gin Tanqueray',
      category: 'Gins',
      volume: '750ml',
      price: 104.90,
      description: 'Destilado quatro vezes com os melhores botânicos do mundo, o gin que virou ícone em Londres.',
      img: 'gin-tanqueray-garrafa.jpg',
      imgHover: 'gin-tanqueray-hover.jpg'
    },
    {
      id: 'gin-tanqueray-sevilla',
      name: 'Gin Tanqueray Sevilla',
      category: 'Gins',
      volume: '750ml',
      price: 110.00,
      description: 'Laranjas amargas de Sevilha encontram o London Dry clássico, cítrico, complexo, inconfundível.',
      img: 'gin-tanqueray-sevilla-garrafa.jpg',
      imgHover: 'gin-tanqueray-sevilla-hover.jpg'
    },
    {
      id: 'gin-gordons',
      name: "Gin Gordon's",
      category: 'Gins',
      volume: '750ml',
      price: 84.50,
      description: 'O London Dry mais premiado do mundo, zimbro em primeiro plano, frescor que nunca sai de moda.',
      img: 'gin-gordons-garrafa.jpg',
      imgHover: 'gin-gordons-hover.jpg'
    },
    {
      id: 'gin-intencion',
      name: 'Gin Intención',
      category: 'Gins',
      volume: '900ml',
      price: 40.00,
      description: 'Entrada suave e botânicos discretos, para descobrir o universo gin sem exagero.',
      img: 'gin-intencion-garrafa.jpg',
      imgHover: 'gin-intencion-hover.jpg'
    },
    {
      id: 'gin-intencion-strawberry',
      name: 'Gin Intención Strawberry',
      category: 'Gins',
      volume: '900ml',
      price: 40.00,
      description: 'A leveza do Intención com doçura de morango, fácil de beber, fácil de gostar.',
      img: 'gin-intencion-strawberry-garrafa.jpg',
      imgHover: 'gin-intencion-strawberry-hover.jpg'
    },

    // ===== VODKAS =====
    {
      id: 'saints-bay-original',
      name: "Vodka Saints' Bay Original",
      category: 'Vodkas',
      volume: '700ml',
      price: 50.00,
      description: 'Pura e direta, com leveza que combina com maré alta, a vodka de bússola da casa.',
      img: 'saints-bay-original-garrafa.jpg',
      imgHover: 'saints-bay-original-hover.jpg'
    },
    {
      id: 'saints-bay-maca-verde',
      name: "Vodka Saints' Bay Maçã Verde",
      category: 'Vodkas',
      volume: '750ml',
      price: 55.00,
      description: 'Frescor cítrico com um toque de maçã verde, saborizada para drinks com cor e personalidade.',
      img: 'saints-bay-maca-verde-garrafa.jpg',
      imgHover: 'saints-bay-maca-verde-hover.jpg'
    },
    {
      id: 'saints-bay-laranja-pessego',
      name: "Vodka Saints' Bay Laranja e Pêssego",
      category: 'Vodkas',
      volume: '750ml',
      price: 55.00,
      description: 'Doçura de pêssego e viço de laranja num só gole, a versão mais tropical da linha.',
      img: 'saints-bay-laranja-pessego-garrafa.jpg',
      imgHover: 'saints-bay-laranja-pessego-hover.jpg'
    },
    {
      id: 'vodka-absolut',
      name: 'Vodka Absolut',
      category: 'Vodkas',
      volume: '750ml',
      price: 119.00,
      description: 'Vodka sueca de pureza absoluta, destilada a partir de trigo de inverno, base perfeita para qualquer coquetel.',
      img: 'vodka-absolut-garrafa.jpg',
      imgHover: 'vodka-absolut-hover.jpg'
    },
    {
      id: 'vodka-skyy',
      name: 'Vodka Skyy',
      category: 'Vodkas',
      volume: '980ml',
      price: 70.00,
      description: 'Vodka americana quadruplamente destilada, suave, limpa, sem arestas.',
      img: 'vodka-skyy-garrafa.jpg',
      imgHover: 'vodka-skyy-hover.jpg'
    },

    // ===== CACHAÇAS =====
    {
      id: 'maria-guarda-classica',
      name: 'Cachaça Maria da Guarda Clássica',
      category: 'Cachaças',
      volume: '700ml',
      price: 99.90,
      description: 'Leve, transparente, tradicional, feita para a caipirinha perfeita de verão.',
      img: 'maria-guarda-classica-garrafa.jpg',
      imgHover: 'maria-guarda-classica-drink.jpg'
    },
    {
      id: 'maria-guarda-amburana',
      name: 'Cachaça Maria da Guarda Amburana',
      category: 'Cachaças',
      volume: '750ml',
      price: 97.90,
      description: 'Dourada e encorpada, envelhecida em amburana, pede copo baixo, gelo grande e conversa longa.',
      img: 'maria-guarda-amburana-garrafa.jpg'
    },
    {
      id: 'cachaca-ypioca',
      name: 'Cachaça Ypioca com Palha Ouro',
      category: 'Cachaças',
      volume: '965ml',
      price: 59.90,
      description: 'Envelhecida, com toque adocicado, tradição baiana engarrafada, perfeita numa caipirinha ou pura.',
      img: 'cachaca-ypioca-garrafa.jpg'
    },

    // ===== LICORES =====
    {
      id: 'licor-itacare-fire',
      name: 'Licor Fino Itacaré Fire',
      category: 'Licores',
      volume: '700ml',
      price: 74.90,
      description: 'Licor fino com picância e calor na medida, para drinks que pedem um toque ousado.',
      img: 'licor-itacare-fire-garrafa.jpg',
      imgHover: 'licor-itacare-fire-hover.jpg'
    },
    {
      id: 'licor-itacare-triple-sec',
      name: 'Licor Fino Itacaré Triple Sec',
      category: 'Licores',
      volume: '700ml',
      price: 84.90,
      description: 'Cítrico, seco e versátil, o triple sec que dá liga a margaritas e coquetéis clássicos.',
      img: 'licor-itacare-triple-sec-garrafa.jpg',
      imgHover: 'licor-itacare-triple-sec-hover.jpg'
    },
    {
      id: 'licor-itacare-limoncello',
      name: 'Licor Fino Itacaré Limoncello',
      category: 'Licores',
      volume: '700ml',
      price: 84.90,
      description: 'Limão siciliano concentrado num licor doce e perfumado, puro gelado ou em coquetéis de verão.',
      img: 'licor-itacare-limoncello-garrafa.jpg',
      imgHover: 'licor-itacare-limoncello-hover.jpg'
    },

    // ===== WHISKIES =====
    {
      id: 'whisky-chanceler',
      name: 'Whisky Chanceler',
      category: 'Whiskies',
      volume: '1L',
      price: 60.00,
      description: 'Whisky nacional suave, para o ritual simples do fim de tarde, puro, com gelo ou num highball.',
      img: 'whisky-chanceler-garrafa.jpg',
      imgHover: 'whisky-chanceler-hover.jpg'
    },
    {
      id: 'whisky-white-horse',
      name: 'Whisky White Horse',
      category: 'Whiskies',
      volume: '1L',
      price: 80.00,
      description: 'Blend escocês equilibrado, amadeirado e macio, clássico para quem gosta de whisky sem complicação.',
      img: 'whisky-white-horse-garrafa.jpg',
      imgHover: 'whisky-white-horse-hover.jpg'
    },

    // ===== COQUETÉIS PRONTOS =====
    {
      id: 'paramana-negroni',
      name: 'Paramana Negroni',
      category: 'Coquetéis prontos',
      volume: '700ml',
      price: 129.00,
      description: 'O clássico italiano engarrafado com a assinatura Paramana, pronto pra servir com gelo grande e twist de laranja.',
      img: 'paramana-negroni-garrafa.jpg',
      imgHover: 'paramana-negroni-drink.jpg'
    },
    {
      id: 'gula-fit-gin-spritz',
      name: 'Güla Fit Gin Spritz',
      category: 'Coquetéis prontos',
      volume: '269ml',
      price: 28.00,
      description: 'Gin spritz leve e pronto para beber, poucas calorias, todo o sabor, direto da lata pro copo com gelo.',
      img: 'gula-fit-gin-spritz-garrafa.jpg',
      imgHover: 'gula-fit-gin-spritz-hover.jpg'
    }
  ];

  const CATEGORY_ORDER = ['Gins', 'Vodkas', 'Cachaças', 'Licores', 'Whiskies', 'Coquetéis prontos'];
  const IMG_BASE = 'assets/images/produtos/';

  function formatPrice(value) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function addToCart(product, btn) {
    if (!window.ParamarCart) return;
    window.ParamarCart.add({ id: product.id, name: product.name, price: product.price, img: IMG_BASE + product.img });
    if (btn) {
      const original = btn.textContent;
      btn.textContent = 'Adicionado ✓';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 1200);
    }
  }

  function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    CATEGORY_ORDER.forEach(category => {
      const items = PRODUCTS.filter(p => p.category === category);
      if (!items.length) return;

      const heading = document.createElement('h3');
      heading.className = 'product-category';
      heading.textContent = category;
      grid.appendChild(heading);

      const row = document.createElement('div');
      row.className = 'product-row';

      items.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.dataset.id = product.id;

        const media = document.createElement('div');
        media.className = 'product-card__media';

        const imgBottle = document.createElement('img');
        imgBottle.src = IMG_BASE + product.img;
        imgBottle.alt = product.name;
        imgBottle.loading = 'lazy';
        imgBottle.className = 'product-card__img product-card__img--base';
        media.appendChild(imgBottle);

        if (product.imgHover) {
          card.classList.add('has-hover');
          const imgDrink = document.createElement('img');
          imgDrink.src = IMG_BASE + product.imgHover;
          imgDrink.alt = product.name + ', outro ângulo';
          imgDrink.loading = 'lazy';
          imgDrink.className = 'product-card__img product-card__img--hover';
          media.appendChild(imgDrink);
        }

        card.appendChild(media);

        const body = document.createElement('div');
        body.className = 'product-card__body';
        body.innerHTML = `
          <p class="product-card__volume">${product.volume}</p>
          <h4 class="product-card__name">${product.name}</h4>
          <p class="product-card__desc">${product.description}</p>
          <div class="product-card__footer">
            <span class="product-card__price">R$ ${formatPrice(product.price)}</span>
            <button type="button" class="btn btn--primary btn--small product-card__buy" data-id="${product.id}">Levar essa garrafa</button>
          </div>
        `;
        card.appendChild(body);
        row.appendChild(card);
      });

      grid.appendChild(row);
    });

    grid.addEventListener('click', function (e) {
      const buyBtn = e.target.closest('.product-card__buy');
      if (buyBtn) {
        const product = PRODUCTS.find(p => p.id === buyBtn.dataset.id);
        if (product) addToCart(product, buyBtn);
        return;
      }
      const card = e.target.closest('.product-card');
      if (card) {
        const product = PRODUCTS.find(p => p.id === card.dataset.id);
        if (product) openModal(product);
      }
    });

    initTouchImageCycle();
  }

  // Em telas sem hover (celular/tablet), alterna as fotos automaticamente
  // já que não existe passar o mouse por cima para trocar a imagem.
  function initTouchImageCycle() {
    if (!window.matchMedia || !window.matchMedia('(hover: none)').matches) return;
    const cards = document.querySelectorAll('.product-card.has-hover');
    cards.forEach(function (card) {
      setInterval(function () {
        card.classList.toggle('is-showing-hover');
      }, 2500);
    });
  }

  // ===== MODAL DE PRODUTO =====
  let modalOverlay, modal, modalImg, modalCategory, modalName, modalVolume, modalDesc, modalPrice, modalBuy, modalClose;
  let currentModalProduct = null;

  function initModal() {
    modalOverlay = document.getElementById('product-modal-overlay');
    modal = document.getElementById('product-modal');
    if (!modalOverlay || !modal) return;
    modalImg = document.getElementById('product-modal-img');
    modalCategory = document.getElementById('product-modal-category');
    modalName = document.getElementById('product-modal-name');
    modalVolume = document.getElementById('product-modal-volume');
    modalDesc = document.getElementById('product-modal-desc');
    modalPrice = document.getElementById('product-modal-price');
    modalBuy = document.getElementById('product-modal-buy');
    modalClose = document.getElementById('product-modal-close');

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
    modalBuy.addEventListener('click', function () {
      if (currentModalProduct) addToCart(currentModalProduct, modalBuy);
    });
  }

  function openModal(product) {
    if (!modal) return;
    currentModalProduct = product;
    modalImg.src = IMG_BASE + product.img;
    modalImg.alt = product.name;
    modalCategory.textContent = product.category;
    modalName.textContent = product.name;
    modalVolume.textContent = product.volume;
    modalDesc.textContent = product.description;
    modalPrice.textContent = 'R$ ' + formatPrice(product.price);
    modalBuy.textContent = 'Levar essa garrafa';
    modalBuy.disabled = false;
    modalOverlay.hidden = false;
    modal.hidden = false;
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    if (!modal) return;
    modalOverlay.hidden = true;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    currentModalProduct = null;
  }

  window.PARAMAR_PRODUCTS = PRODUCTS;
  document.addEventListener('DOMContentLoaded', function () {
    initModal();
    renderProducts();
  });
})();
