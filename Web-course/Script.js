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