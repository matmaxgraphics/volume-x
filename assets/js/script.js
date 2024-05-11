function classToggle() {
  const navItems = document.querySelectorAll(".navbar__items");
  navItems.forEach((navItem) => navItem.classList.toggle("navbar__ToggleShow"));
}

const navbarLink = document.querySelector(".navbar__Link-toggle");
navbarLink.addEventListener("click", classToggle);



function copyToClipboard() {
  const walletAddress = document.querySelector('.volx-address');

  if (walletAddress) {
    const textarea = document.createElement('textarea');
    textarea.value = walletAddress.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textarea.value);

    document.body.removeChild(textarea);

    alert('Copied to clipboard: ' + walletAddress.textContent);
  } else {
    console.error('Span element not found.');
  }
}