  // Funciones para manejar los modales
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Previene el scroll del body
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura el scroll del body
  }
  
  // Cerrar modal al hacer clic fuera del contenido
  window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
  
  // Cerrar con tecla ESC
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key === 'Escape') {
      const modals = document.getElementsByClassName('modal');
      for (let i = 0; i < modals.length; i++) {
        if (modals[i].style.display === 'block') {
          modals[i].style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      }
    }
  };

      // Crear partículas
      document.addEventListener('DOMContentLoaded', function() {
      const particlesContainer = document.getElementById('particles');
      const particleCount = window.innerWidth < 768 ? 15 : 30;
      
      // Limpiar contenedor primero (por si acaso)
      particlesContainer.innerHTML = '';
      
      for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
      }
    });

    function createParticle(container) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Tamaño aleatorio entre 2px y 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Posición inicial aleatoria en toda la pantalla
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Duración de animación aleatoria (10s a 20s)
      const duration = Math.random() * 10 + 10;
      particle.style.animationDuration = `${duration}s`;
      
      // Retraso inicial aleatorio
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      // Opacidad aleatoria para mayor variedad
      particle.style.opacity = Math.random() * 0.5 + 0.3;
      
      container.appendChild(particle);
    }

    // Optimización del evento resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(adjustParticles, 200);
    });

    function adjustParticles() {
      const particles = document.querySelectorAll('.particle');
      const currentCount = particles.length;
      const newCount = window.innerWidth < 768 ? 15 : 30;
      const particlesContainer = document.getElementById('particles');
      
      if (newCount < currentCount) {
        for (let i = currentCount - 1; i >= newCount; i--) {
          particles[i].remove();
        }
      } else if (newCount > currentCount) {
        const toAdd = newCount - currentCount;
        for (let i = 0; i < toAdd; i++) {
          createParticle(particlesContainer);
        }
      }
    }
    // Carrusel functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');
  const inner = document.querySelector('.carousel-inner');
  const totalSlides = slides.length;
  
  function updateCarousel() {
    inner.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }
  
  function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
  }
  
  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }
  
  // Auto-advance every 5 seconds
  setInterval(() => {
    moveSlide(1);
  }, 5000);


  // Función para alternar la visibilidad del menú en móviles
function toggleNavbar() {
  const navbarLinks = document.getElementById('navbarLinks');
  navbarLinks.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace (para móviles)
document.querySelectorAll('.navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document.getElementById('navbarLinks').classList.remove('active');
    }
  });
});

// Cambiar estilo de la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(17, 17, 17, 0.95)';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.7)';
  } else {
    navbar.style.background = 'linear-gradient(135deg, var(--dark), #222)';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
  }
});


// Contract Copy Functionality
function copyContract() {
  const contractInput = document.getElementById('contractAddress');
  contractInput.select();
  contractInput.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(contractInput.value).then(() => {
    // Change button appearance temporarily
    const copyBtn = document.querySelector('.copy-btn');
    const originalHTML = copyBtn.innerHTML;
    
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    
    setTimeout(() => {
      copyBtn.innerHTML = originalHTML;
      copyBtn.style.background = 'linear-gradient(45deg, var(--primary), var(--secondary))';
    }, 2000);
    
  }).catch(err => {
    console.error('Error copying: ', err);
    // Fallback for older browsers
    try {
      document.execCommand('copy');
      // Show tooltip or other feedback for success
    } catch (e) {
      alert('Copy failed. Please copy manually.');
    }
  });
}