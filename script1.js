const greetingEl = document.querySelector('.greeting');

setTimeout(() => {
  const script = document.createElement('script');
  script.type = 'module';
  script.src = './script.js';

  document.body.appendChild(script);

  document.body.removeChild(greetingEl);
}, 3500);
