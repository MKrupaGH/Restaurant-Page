const homePage = (() => {
  const home = document.createElement("div");
  home.innerHTML = `
          <div id="home" class="active" data-tab-content>
            <div class="home-layout">
              <div class="welcome">
                  <div class="text">Come on down for some delicious cuisine!</div>
                  <div class="smaller-text">Cheap & Tasty</div>
                  <div class="menu-link" data-tab-target="#menu">Order Now!</div>
              </div>
              <div class="short-info">
                  Mon-Thurs: <span>8am-8pm</span>
                  <br>
                  Fri-Sun: <span><br>8am-11pm</span>
              </div>
            </div>
          </div>
    `;

  document.querySelector("#content").appendChild(home);
})();

export { homePage };
