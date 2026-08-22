(function () {
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    closeCart();
    closeNav();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // ===== NAV MOBILE =====
  function closeNav() {
    const nav = document.getElementById('header-nav');
    const toggle = document.getElementById('nav-toggle');
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function initNavToggle() {
    const nav = document.getElementById('header-nav');
    const toggle = document.getElementById('nav-toggle');
    if (!nav || !toggle) return;
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ===== CARRINHO (dados) =====
  const CART_KEY = 'paramar_cart';

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {}
    updateCartCount(cart);
    renderCartDrawer();
  }

  function updateCartCount(cart) {
    const el = document.getElementById('cart-count');
    if (!el) return;
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    el.textContent = total;
  }

  function formatPrice(value) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  window.ParamarCart = {
    add(product) {
      const cart = getCart();
      const existing = cart.find(i => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ ...product, qty: 1 });
      }
      saveCart(cart);
    },
    setQty(id, qty) {
      let cart = getCart();
      if (qty <= 0) {
        cart = cart.filter(i => i.id !== id);
      } else {
        const item = cart.find(i => i.id === id);
        if (item) item.qty = qty;
      }
      saveCart(cart);
    },
    remove(id) {
      saveCart(getCart().filter(i => i.id !== id));
    },
    clear() {
      saveCart([]);
    },
    get: getCart
  };

  // ===== CARRINHO (painel) =====
  let cartOverlay, cartDrawer, cartItems, cartFooter, cartTotal;

  function initCartDrawer() {
    cartOverlay = document.getElementById('cart-overlay');
    cartDrawer = document.getElementById('cart-drawer');
    cartItems = document.getElementById('cart-items');
    cartFooter = document.getElementById('cart-footer');
    cartTotal = document.getElementById('cart-total');

    const toggleBtn = document.getElementById('cart-toggle');
    const closeBtn = document.getElementById('cart-close');
    const checkoutBtn = document.getElementById('cart-checkout');

    if (toggleBtn) toggleBtn.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeCart();
    });

    if (cartItems) {
      cartItems.addEventListener('click', function (e) {
        const id = e.target.closest('[data-id]') ? e.target.closest('[data-id]').dataset.id : null;
        if (!id) return;
        if (e.target.closest('.cart-item__remove')) {
          window.ParamarCart.remove(id);
        } else if (e.target.closest('.cart-item__decrease')) {
          const item = getCart().find(i => i.id === id);
          if (item) window.ParamarCart.setQty(id, item.qty - 1);
        } else if (e.target.closest('.cart-item__increase')) {
          const item = getCart().find(i => i.id === id);
          if (item) window.ParamarCart.setQty(id, item.qty + 1);
        }
      });
    }

    renderCartDrawer();
  }

  function openCart() {
    if (!cartDrawer) return;
    renderCartDrawer();
    cartOverlay.hidden = false;
    cartDrawer.hidden = false;
    document.body.classList.add('modal-open');
  }

  function closeCart() {
    if (!cartDrawer) return;
    cartOverlay.hidden = true;
    cartDrawer.hidden = true;
    document.body.classList.remove('modal-open');
  }

  function renderCartDrawer() {
    if (!cartItems) return;
    const cart = getCart();

    if (!cart.length) {
      cartItems.innerHTML = '<p class="cart-empty">Seu carrinho está vazio. Que tal escolher uma garrafa na vitrine?</p>';
      cartFooter.hidden = true;
      return;
    }

    cartFooter.hidden = false;
    cartFooter.querySelector('.cart-drawer__checkout').hidden = false;
    cartFooter.querySelector('.cart-drawer__note').hidden = false;

    let total = 0;
    cartItems.innerHTML = cart.map(item => {
      total += item.price * item.qty;
      return `
        <div class="cart-item" data-id="${item.id}">
          <img class="cart-item__img" src="${item.img}" alt="${item.name}">
          <div class="cart-item__info">
            <p class="cart-item__name">${item.name}</p>
            <p class="cart-item__price">R$ ${formatPrice(item.price)}</p>
            <div class="cart-item__qty">
              <button type="button" class="cart-item__decrease" aria-label="Diminuir quantidade">&minus;</button>
              <span>${item.qty}</span>
              <button type="button" class="cart-item__increase" aria-label="Aumentar quantidade">+</button>
            </div>
          </div>
          <button type="button" class="cart-item__remove" aria-label="Remover">&times;</button>
        </div>
      `;
    }).join('');

    cartTotal.textContent = 'R$ ' + formatPrice(total);
  }

  function checkout() {
    const cart = getCart();
    if (!cart.length) return;
    window.ParamarCart.clear();
    cartItems.innerHTML = '<p class="cart-empty cart-empty--success">Pedido confirmado! Obrigado por comprar na Paramar.<br>(ambiente de teste, nenhuma cobrança foi feita)</p>';
    cartFooter.hidden = true;
  }

  document.addEventListener('DOMContentLoaded', function () {
    initCartDrawer();
    initNavToggle();
  });
  updateCartCount(getCart());
})();
