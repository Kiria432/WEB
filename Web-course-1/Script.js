// Основные функции для демонстрации
function changeStyle(property, value) {
    const demoResult = document.getElementById('demoResult');
    
    switch(property) {
        case 'background':
            demoResult.style.backgroundColor = value;
            break;
        case 'color':
            demoResult.style.color = value;
            break;
        case 'fontSize':
            demoResult.style.fontSize = value;
            break;
        case 'borderRadius':
            demoResult.style.borderRadius = value;
            document.getElementById('borderRadiusValue').textContent = value;
            break;
    }
    
    updateCodePreview();
}

function changeText() {
    const customText = document.getElementById('customText').value;
    if (customText) {
        const demoResult = document.getElementById('demoResult');
        demoResult.querySelector('p').textContent = customText;
    }
    updateCodePreview();
}

function addShadow() {
    const demoResult = document.getElementById('demoResult');
    demoResult.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    updateCodePreview();
}

function resetDemo() {
    const demoResult = document.getElementById('demoResult');
    
    // Сброс стилей
    demoResult.style = '';
    
    // Сброс значений контролов
    document.getElementById('bgColor').value = '#667eea';
    document.getElementById('textColor').value = '#ffffff';
    document.getElementById('fontSize').value = '20px';
    document.getElementById('borderRadius').value = '10';
    document.getElementById('borderRadiusValue').textContent = '10px';
    document.getElementById('customText').value = '';
    
    // Восстановление исходного текста
    demoResult.innerHTML = `
        <h3>Ваш творческий результат</h3>
        <p>Этот блок - ваша цифровая лаборатория! Используйте панель управления слева, чтобы:</p>
        <ul>
            <li>Изменить цвета и размеры</li>
            <li>Добавить эффекты</li>
            <li>Создать уникальный дизайн</li>
        </ul>
        <p>Каждое изменение - это шаг в мир веб-разработки!</p>
        <div class="code-preview">
            <h4>Код вашего дизайна:</h4>
            <pre id="cssCode">.your-design {
    background: #667eea;
    color: #ffffff;
    font-size: 20px;
    border-radius: 10px;
}</pre>
        </div>
    `;
}

function updateCodePreview() {
    const demoResult = document.getElementById('demoResult');
    const cssCode = document.getElementById('cssCode');
    
    if (cssCode) {
        const styles = `
.your-design {
    background: ${demoResult.style.backgroundColor || '#667eea'};
    color: ${demoResult.style.color || '#ffffff'};
    font-size: ${demoResult.style.fontSize || '20px'};
    border-radius: ${demoResult.style.borderRadius || '10px'};
    box-shadow: ${demoResult.style.boxShadow || 'none'};
}`;
        
        cssCode.textContent = styles;
    }
}

// Функции для интерактивных элементов
function startDemo() {
    alert('Добро пожаловать на профпробы по веб-разработке! Начните экспериментировать с элементами управления.');
}

// Анимации и интерактивность
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления карточек
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Обработчики для карточек технологий
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            const tech = this.getAttribute('data-tech');
            const details = this.querySelector('.tech-details');
            
            // Закрываем все открытые детали
            document.querySelectorAll('.tech-details').forEach(item => {
                if (item !== details) {
                    item.classList.remove('show');
                }
            });
            
            // Переключаем текущие детали
            details.classList.toggle('show');
        });
    });
    
    // Обновление значения для range input
    const borderRadiusInput = document.getElementById('borderRadius');
    const borderRadiusValue = document.getElementById('borderRadiusValue');
    
    borderRadiusInput.addEventListener('input', function() {
        borderRadiusValue.textContent = this.value + 'px';
    });
    
    // Инициализация
    console.log('Веб-сайт для профпроб загружен!');
    console.log('Используйте функции changeStyle(), changeText(), addShadow(), resetDemo()');
});

// Дополнительные utility-функции
function showNotification(message, type = 'info') {
    // Создание уведомления
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    notification.style.background = type === 'error' ? '#e53e3e' : '#38a169';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Автоматическое скрытие
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Глобальные функции для доступа из консоли
window.demoTools = {
    changeBackground: function(color) {
        changeStyle('background', color);
    },
    changeTextColor: function(color) {
        changeStyle('color', color);
    },
    reset: resetDemo
};