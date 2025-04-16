export function createAccordionSection(event) {
  const accordionSection = document.createElement('details');
  accordionSection.classList.add('accordion-section');

  const accordionTitle = document.createElement('summary');
  accordionTitle.classList.add('accordion-title');
  accordionTitle.innerHTML = `<strong>${event.title}</strong><span class="display-none"> - ${event.year}</span>`;

  const accordionContent = document.createElement('div');
  accordionContent.classList.add('accordion-content');
  accordionContent.innerHTML = `<p><strong>Description:</strong> ${event.description}</p>`;

  // Create up and down buttons
  const upButton = document.createElement('button');
  upButton.textContent = '🔼 Up';
  upButton.classList.add('arrow-button', 'up-button');
  upButton.addEventListener('click', () => moveAccordionItem(accordionSection, 'up'));

  const downButton = document.createElement('button');
  downButton.textContent = '🔽 Down';
  downButton.classList.add('arrow-button', 'down-button');
  downButton.addEventListener('click', () => moveAccordionItem(accordionSection, 'down'));

  // Append buttons to the accordion section
  accordionTitle.appendChild(upButton);
  accordionTitle.appendChild(downButton);
  accordionSection.appendChild(accordionTitle);
  accordionSection.appendChild(accordionContent);

  // Append the new accordion section to the container
  const eventAccordion = document.getElementById('eventAccordion');
  eventAccordion.appendChild(accordionSection);

  // Hide buttons for all other sections except the last one
  const allSections = eventAccordion.querySelectorAll('.accordion-section');
  allSections.forEach((section, index) => {
    const buttons = section.querySelectorAll('.arrow-button');
    buttons.forEach(button => {
      button.style.display = index === allSections.length - 1 ? 'inline-block' : 'none';
    });
  });

  return accordionSection;
}

export function moveAccordionItem(item, direction) {
  const eventAccordion = document.getElementById('eventAccordion');
  const sibling = direction === 'up' ? item.previousElementSibling : item.nextElementSibling;

  if (sibling) {
    if (direction === 'up') {
      // Swap the positions of the current item and its sibling
      eventAccordion.insertBefore(item, sibling);
    } else {
      eventAccordion.insertBefore(sibling, item);
    }
  }
}
