export function setTableHeight() {
  const clientsSection = document.querySelector('.table');
  const offsetTopClients = clientsSection.getBoundingClientRect().top + window.pageYOffset;
  const heightView = document.documentElement.clientHeight;
  const offsetAddBtn = 130;

  const tableHeight = heightView - offsetTopClients - offsetAddBtn;

  clientsSection.style.height = `${tableHeight}px`;
}

