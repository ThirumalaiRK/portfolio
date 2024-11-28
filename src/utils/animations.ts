export const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '50px',
    }
  );

  document.querySelectorAll('.section-fade-in, .scroll-fade').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleScroll = () => {
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-speed') || '0.5';
      const offset = window.pageYOffset * parseFloat(speed);
      el.style.setProperty('--scroll-offset', `${offset}px`);
    });
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
};

export const initMouseParallax = (element: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    element.style.transform = `
      perspective(1000px)
      rotateY(${x * 10}deg)
      rotateX(${-y * 10}deg)
      translateZ(20px)
    `;
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'none';
  });
  
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', () => {});
  };
};