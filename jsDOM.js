// Вспомогательная функция для управления состоянием кнопок отмены
function toggleResetButton(buttonId, enabled) {
    const button = document.querySelector(buttonId);
    button.disabled = !enabled;
}

// Задание 1: Скрытие и показ текста
const toggleHeading = document.querySelector('#toggleHeading');
const toggleButton = document.querySelector('#toggleButton');
const resetToggleButton = document.querySelector('#resetToggleButton');
const originalDisplay = toggleHeading.style.display;

toggleButton.addEventListener('click', () => {
    if (toggleHeading.style.display === 'none') {
        toggleHeading.style.display = originalDisplay || 'block';
        toggleButton.textContent = 'Скрыть';
    } else {
        toggleHeading.style.display = 'none';
        toggleButton.textContent = 'Показать';
    }
    toggleResetButton('#resetToggleButton', true);
});

resetToggleButton.addEventListener('click', () => {
    toggleHeading.style.display = originalDisplay || 'block';
    toggleButton.textContent = 'Скрыть';
    toggleResetButton('#resetToggleButton', false);
});

// Задание 2: Изменение стиля элемента
const colorParagraph = document.querySelector('#colorParagraph');
const colorButton = document.querySelector('#colorButton');
const resetColorButton = document.querySelector('#resetColorButton');
const originalColor = colorParagraph.style.color;

colorButton.addEventListener('click', () => {
    colorParagraph.style.color = 'blue';
    toggleResetButton('#resetColorButton', true);
});

resetColorButton.addEventListener('click', () => {
    colorParagraph.style.color = originalColor;
    toggleResetButton('#resetColorButton', false);
});

// Задание 3: Динамическое изменение текста
const changeTextHeading = document.querySelector('#changeTextHeading');
const changeTextButton = document.querySelector('#changeTextButton');
const resetTextButton = document.querySelector('#resetTextButton');
const originalText = changeTextHeading.textContent;

changeTextButton.addEventListener('click', () => {
    changeTextHeading.textContent = 'Привет, мир!';
    toggleResetButton('#resetTextButton', true);
});

resetTextButton.addEventListener('click', () => {
    changeTextHeading.textContent = originalText;
    toggleResetButton('#resetTextButton', false);
});

// Задание 4: Поиск и изменение элементов по классу
const changeDescriptionsButton = document.querySelector('#changeDescriptionsButton');
const resetDescriptionsButton = document.querySelector('#resetDescriptionsButton');
const descriptionElements = document.querySelectorAll('.description');
const originalDescriptions = Array.from(descriptionElements).map(el => el.textContent);

changeDescriptionsButton.addEventListener('click', () => {
    descriptionElements.forEach(element => {
        element.textContent = 'Измененный текст';
    });
    toggleResetButton('#resetDescriptionsButton', true);
});

resetDescriptionsButton.addEventListener('click', () => {
    descriptionElements.forEach((element, index) => {
        element.textContent = originalDescriptions[index];
    });
    toggleResetButton('#resetDescriptionsButton', false);
});

// Задание 5: Работа с querySelectorAll
const changeAllDescriptionsButton = document.querySelector('#changeAllDescriptionsButton');
const resetAllDescriptionsButton = document.querySelector('#resetAllDescriptionsButton');
const allDescriptions = document.querySelectorAll('.description');
const originalAllDescriptions = Array.from(allDescriptions).map(el => el.textContent);

changeAllDescriptionsButton.addEventListener('click', () => {
    allDescriptions.forEach((element, index) => {
        element.textContent = `Новый текст ${index + 1}`;
    });
    toggleResetButton('#resetAllDescriptionsButton', true);
});

resetAllDescriptionsButton.addEventListener('click', () => {
    allDescriptions.forEach((element, index) => {
        element.textContent = originalAllDescriptions[index];
    });
    toggleResetButton('#resetAllDescriptionsButton', false);
});

// Задание 6: Добавление нового элемента в DOM
const addElementButton = document.querySelector('#addElementButton');
const removeLastElementButton = document.querySelector('#removeLastElementButton');
const newElementsContainer = document.querySelector('#newElementsContainer');

addElementButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    newElementsContainer.appendChild(newParagraph);
    toggleResetButton('#removeLastElementButton', newElementsContainer.children.length > 0);
});

removeLastElementButton.addEventListener('click', () => {
    if (newElementsContainer.lastChild) {
        newElementsContainer.removeChild(newElementsContainer.lastChild);
    }
    toggleResetButton('#removeLastElementButton', newElementsContainer.children.length > 0);
});

// Задание 7: Удаление элемента
const removeElementButton = document.querySelector('#removeElementButton');
const restoreElementButton = document.querySelector('#restoreElementButton');
const elementsToRemoveContainer = document.querySelector('#elementsToRemoveContainer');
let removedElement = null;

removeElementButton.addEventListener('click', () => {
    const firstDescription = elementsToRemoveContainer.querySelector('.description');
    if (firstDescription) {
        removedElement = firstDescription;
        elementsToRemoveContainer.removeChild(firstDescription);
        toggleResetButton('#restoreElementButton', true);
    }
});

restoreElementButton.addEventListener('click', () => {
    if (removedElement) {
        // Восстанавливаем элемент на его исходную позицию
        const firstDescription = elementsToRemoveContainer.querySelector('.description');
        if (firstDescription) {
            elementsToRemoveContainer.insertBefore(removedElement, firstDescription);
        } else {
            elementsToRemoveContainer.appendChild(removedElement);
        }
        removedElement = null;
        toggleResetButton('#restoreElementButton', false);
    }
});