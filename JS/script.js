// コンセプトのフェードイン
const fadeSections = document.querySelectorAll('.concept, .worries, .about, .features, .works, .contact .voice .plan');

if (fadeSections.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  }, {
    threshold: 0.3
  });

  fadeSections.forEach((section) => {
    observer.observe(section);
  });
}


// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const globalNav = document.querySelector('.global-nav');
const navLinks = document.querySelectorAll('.global-nav a');

if (hamburger && globalNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open');
    globalNav.classList.toggle('is-open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      globalNav.classList.remove('is-open');
    });
  });
}

// お客様の声フェードイン
const voiceSection = document.querySelector('.voice');

if (voiceSection) {
  const voiceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        voiceSection.classList.add('is-show');
      }
    });
  }, {
    threshold: 0.2
  });

  voiceObserver.observe(voiceSection);
}

// 料金プラン：スマホ用フェードイン
const planSection = document.querySelector('.plan');

if (planSection) {
  const planObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        planSection.classList.add('is-show');
      }
    });
  }, {
    threshold: 0.2
  });

  planObserver.observe(planSection);
}

// FAQアコーディオン：1つだけ開く
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('is-open');
      }
    });

    item.classList.toggle('is-open');
  });
});

// 架空LP用：CTAクリック時の案内
const demoButtons = document.querySelectorAll('.js-demo-alert');

demoButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('こちらは架空商品のLPです。お問い合わせフォームは現在準備中です。');
  });
});