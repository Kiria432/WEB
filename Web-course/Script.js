function changeBackground() {
    const color = document.getElementById('bgColor').value;
    document.getElementById('demoResult').style.backgroundColor = color;
}
function changeTextColor() {
    const color = document.getElementById('textColor').value;
    document.getElementById('demoResult').style.color = color;
}
function changeFontSize() {
    const size = document.getElementById('fontSize').value;
    document.getElementById('demoResult').style.fontSize = size;
        }

        function changeText() {
            const text = document.getElementById('customText').value;
            if (text) {
                document.getElementById('demoResult').querySelector('p').textContent = text;
            }
        }

        // Добавляем интерактивность при загрузке
        document.addEventListener('DOMContentLoaded', function() {
            // Анимация появления элементов
            const elements = document.querySelectorAll('.tech-card, .control-group, .opportunity-item');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });
        // Добавьте этот скрипт в конец body или в отдельный JS-файл
document.addEventListener('DOMContentLoaded', function() {
    const techCards = document.querySelectorAll('.tech-card');
    
    techCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
});
// Функция для изменения стилей
function changeStyle(property, value) {
    const demoResult = document.getElementById('demoResult');
    demoResult.style[property] = value;
    updateCssCode();
}

// Функция для обновления значения скругления
function updateBorderRadiusValue(value) {
    document.getElementById('borderRadiusValue').textContent = value + 'px';
    changeStyle('borderRadius', value + 'px');
}

// Функция для изменения текста
function changeText() {
    const customText = document.getElementById('customText').value;
    if (customText) {
        const demoResult = document.getElementById('demoResult');
        demoResult.innerHTML = `
            <h3>Ваш творческий результат</h3>
            <p>${customText}</p>
            <div class="code-preview">
                <h4>Код вашего дизайна:</h4>
                <pre id="cssCode">${getCssCode()}</pre>
            </div>
        `;
    }
}

// Функция для добавления тени
function addShadow() {
    const demoResult = document.getElementById('demoResult');
    demoResult.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    updateCssCode();
}

// Функция для сброса
function resetDemo() {
    const demoResult = document.getElementById('demoResult');
    demoResult.style = '';
    document.getElementById('bgColor').value = '#667eea';
    document.getElementById('textColor').value = '#ffffff';
    document.getElementById('fontSize').value = '20px';
    document.getElementById('borderRadius').value = '10';
    document.getElementById('borderRadiusValue').textContent = '10px';
    document.getElementById('customText').value = '';
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

// Функция для получения CSS кода
function getCssCode() {
    const demoResult = document.getElementById('demoResult');
    return `.your-design {
    background: ${demoResult.style.background || '#667eea'};
    color: ${demoResult.style.color || '#ffffff'};
    font-size: ${demoResult.style.fontSize || '20px'};
    border-radius: ${demoResult.style.borderRadius || '10px'};
    ${demoResult.style.boxShadow ? `box-shadow: ${demoResult.style.boxShadow};` : ''}
}`;
}

// Функция для обновления CSS кода
function updateCssCode() {
    const cssCodeElement = document.getElementById('cssCode');
    if (cssCodeElement) {
        cssCodeElement.textContent = getCssCode();
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Обновляем значение скругления при загрузке
    const borderRadiusSlider = document.getElementById('borderRadius');
    if (borderRadiusSlider) {
        updateBorderRadiusValue(borderRadiusSlider.value);
    }
});