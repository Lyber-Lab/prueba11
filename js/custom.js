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
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Tamaño aleatorio entre 3px y 8px
      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Posición aleatoria
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.bottom = `-${size}px`;
      
      // Duración de animación aleatoria
      const duration = Math.random() * 20 + 10;
      particle.style.animationDuration = `${duration}s`;
      
      // Retraso aleatorio
      particle.style.animationDelay = `${Math.random() * 10}s`;
      
      particlesContainer.appendChild(particle);
    }
  });

  // Ajustar dinámicamente el número de partículas al cambiar el tamaño de la ventana
  window.addEventListener('resize', function() {
    const particles = document.querySelectorAll('.particle');
    const currentCount = particles.length;
    const newCount = window.innerWidth < 768 ? 15 : 30;
    
    if (newCount < currentCount) {
      // Eliminar partículas extras
      for (let i = currentCount - 1; i >= newCount; i--) {
        particles[i].remove();
      }
    } else if (newCount > currentCount) {
      // Añadir partículas adicionales
      const particlesContainer = document.getElementById('particles');
      const toAdd = newCount - currentCount;
      
      for (let i = 0; i < toAdd; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${size}px`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
      }
    }
  });

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