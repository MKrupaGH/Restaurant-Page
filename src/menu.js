const menuPage = (() => {
  const menu = document.createElement("main");
  menu.classList.add("menu");
  menu.innerHTML = `
        <div class="menu-page">
            <h1>Menu</h1>
            <div class="dishes">
                <div class="dish">
                    <img src="./assets/burger.jpg"/>
                    <div class="info">
                        <div class="name-price"11>
                            <h4>Green Hamburger: <span>5$</span><h4>
                        </div>
                        <div class="ingredients">
                            <p>Buns, patty, tomato, onions, lettuce and our secret family sauce</p>
                        </div>
                    </div>
                </div>
                <div class="dish">
                    <img src="./assets/burger.jpg" alt="" width="50" height="50" />
                    <div class="info">
                        <div class="name-price"11>
                            <h4>Green Hamburger: <span>5$</span><h4>
                        </div>
                        <div class="ingredients">
                            <p>Buns, patty, tomato, onions, lettuce and our secret family sauce</p>
                        </div>
                    </div>
                </div>
                <div class="dish">
                    <img src="./assets/burger.jpg" alt="" width="50" height="50" />
                    <div class="info">
                        <div class="name-price"11>
                            <h4>Green Hamburger: <span>5$</span><h4>
                        </div>
                        <div class="ingredients">
                            <p>Buns, patty, tomato, onions, lettuce and our secret family sauce</p>
                        </div>
                    </div>
                </div>
                <div class="dish">
                    <img src="./assets/burger.jpg" alt="" width="50" height="50" />
                    <div class="info">
                        <div class="name-price"11>
                            <h4>Green Hamburger: <span>5$</span><h4>
                        </div>
                        <div class="ingredients">
                            <p>Buns, patty, tomato, onions, lettuce and our secret family sauce</p>
                        </div>
                    </div>
                </div>
                <div class="dish">
                    <img src="./assets/burger.jpg" alt="" width="50" height="50" />
                    <div class="info">
                        <div class="name-price"11>
                            <h4>Green Hamburger: <span>5$</span><h4>
                        </div>
                        <div class="ingredients">
                            <p>Buns, patty, tomato, onions, lettuce and our secret family sauce</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.querySelector("#content").appendChild(menu);
})();

export { menuPage };
