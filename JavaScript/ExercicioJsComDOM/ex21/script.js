function addAttributeToElement(element, attributeName, attributeValue) {
    const selectedElement = document.querySelector(element);
    selectedElement.setAttribute(attributeName, attributeValue);
  }

  addAttributeToElement('#titulo', 'class', 'vermelho');