const pageload = (() => {
  const header = document.createElement("header");

  header.innerHTML = `
    <nav>
        <div class="logo"><h2>Let's eat</h2></div>
        <div class="links">
            <ul class="list">
                <li class="option"><a href="#home">Home</a></li>
                <li class="option"><a href="#menu">Menu</a></li>
                <li class="option"><a href="#contact">Contact</a></li>
            </ul>
        <div>
    </nav>
    `;

  document.querySelector("#content").appendChild(header);
})();

export { pageload };
