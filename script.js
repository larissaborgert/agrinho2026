// ========================================
// SCROLL SMOOTH E NAVEGAÇÃO
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// EFEITO DE SCROLL NA NAVEGAÇÃO
// ========================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ========================================
// TOGGLE CHECKLIST
// ========================================
function toggleCheck(element) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    
    if (checkbox.checked) {
        element.classList.add('checked');
    } else {
        element.classList.remove('checked');
    }
    
    // Persistir dados no localStorage
    saveChecklistData();
}

// ========================================
// SALVAR DADOS DO CHECKLIST
// ========================================
function saveChecklistData() {
    const checklistItems = [];
    document.querySelectorAll('.checklist-item').forEach((item, index) => {
        checklistItems.push({
            index: index,
            checked: item.querySelector('input[type="checkbox"]').checked
        });
    });
    localStorage.setItem('checklistData', JSON.stringify(checklistItems));
}

// ========================================
// CARREGAR DADOS DO CHECKLIST
// ========================================
function loadChecklistData() {
    const saved = localStorage.getItem('checklistData');
    if (saved) {
        const checklistItems = JSON.parse(saved);
        checklistItems.forEach(item => {
            const checkboxes = document.querySelectorAll('.checklist-item');
            if (checkboxes[item.index]) {
                const checkbox = checkboxes[item.index].querySelector('input[type="checkbox"]');
                checkbox.checked = item.checked;
                if (item.checked) {
                    checkboxes[item.index].classList.add('checked');
                }
            }
        });
    }
}

// ========================================
// VALIDAÇÃO E SUBMIT DO FORMULÁRIO
// ========================================
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    // Validação simples
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    if (!isValid) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Validação de email
    const emailInput = form.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Por favor, insira um email válido!');
        emailInput.style.borderColor = '#e74c3c';
        return;
    }
    
    // Simular envio
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
        inputs.forEach(input => {
            input.style.borderColor = '#ddd';
        });
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
}

// ========================================
// ANIMAÇÃO AO ENTRAR NA VIEWPORT
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards e outros elementos
document.querySelectorAll('.card, .solution-card, .impact-item, .checklist-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ========================================
// CONTADOR ANIMADO (estatísticas)
// ========================================
function animateCounters() {
    const stats = document.querySelectorAll('.stat h4');
    
    stats.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/\d/g, '').trim();
        
        if (number) {
            const target = number;
            const increment = Math.ceil(target / 50);
            let current = 0;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = text;
                    clearInterval(counter);
                } else {
                    stat.textContent = current + suffix;
                }
            }, 20);
        }
    });
}

// Executar animação de contadores quando a seção entra em vista
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = true;
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadChecklistData();
    console.log('🌱 Agro Forte - Futuro Sustentável');
    console.log('Site carregado com sucesso!');
});

// ========================================
// BOTÃO DE DOWNLOAD (Guia Completo)
// ========================================
document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('📄 Guia Completo\n\nEste recurso será disponibilizado em breve. Deixe seu email na seção de contato para receber atualizações!');
    });
});

// ========================================
// SCROLL TO TOP
// ========================================
let scrollBtn = null;

window.addEventListener('scroll', () => {
    if (!scrollBtn) {
        scrollBtn = createScrollToTopButton();
    }
    
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

function createScrollToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '⬆️ Voltar ao Topo';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #2d7a3e 0%, #4a9d5f 100%);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        display: none;
        z-index: 99;
    `;
    
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'translateY(-5px)';
        btn.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
    });
    
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });
    
    document.body.appendChild(btn);
    return btn;
}

// ========================================
// FEEDBACK DE HOVER EM BOTÕES
// ========================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// MOBILE MENU RESPONSIVO
// ========================================
function addMobileMenuToggle() {
    const header = document.querySelector('.header .container');
    const nav = document.querySelector('.nav');
    
    // Só adicionar se for mobile
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                display: none;
            `;
            
            toggle.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
            });
            
            header.appendChild(toggle);
        }
    }
}

window.addEventListener('resize', addMobileMenuToggle);
addMobileMenuToggle();

// ========================================
// ANALYTICS SIMPLES
// ========================================
window.addEventListener('load', () => {
    const visitedBefore = localStorage.getItem('siteVisited');
    if (!visitedBefore) {
        localStorage.setItem('siteVisited', true);
        localStorage.setItem('firstVisit', new Date().toLocaleString('pt-BR'));
    }
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`📊 Seção visualizada: ${entry.target.id || 'sem ID'}`);
                }
            });
        });
        observer.observe(section);
    });
});
