const homePage = (() => {
  const home = document.createElement("main");
    home.classList.add("home")
  home.innerHTML = `
        <div class="welcome">
            <div class="text">Come on down for some delicious cuisine!</div>
            <div class="smaller-text">Cheap & Tasty</div>
            <div class="menu-link"><a href="#menu">Order Now!</a></div>

        </div>
        <div class="short-info">
            Mon-Thurs: <span>8am-8pm</span>
            <br>
            Fri-Sun: <span><br>8am-11pm</span>
        </div>

    `;

  document.querySelector("#content").appendChild(home);
})();

export { homePage };
