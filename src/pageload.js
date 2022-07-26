const pageload = (() => {
  const header = document.createElement("header");

  header.innerHTML = `
    <nav>
        <div class="logo"><h2>Let's eat</h2></div>
        <div class="links">
            <ul class="list">
                <li class="option" data-tab-target="#home">Home</li>
                <li class="option" data-tab-target="#menu">Menu</li>
                <li class="option" data-tab-target="#contact">Contact</li>
            </ul>
        <div>
    </nav>
    `;

  document.querySelector("#content").appendChild(header);
})();

export { pageload };
