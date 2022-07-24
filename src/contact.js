const contactPage = (() => {
  const contact = document.createElement("main");
  contact.classList.add("contact");

  contact.innerHTML = `
        <div class="contact-page">
            <h1>Contact us<h1>
            <div class="contact-info">
                    <div class="us">
                        <h3 class="title">Find us</h3>
                        <h3>1203 Grove Street, San Andreas, GTA 22343<h3>
                    </div>
                    <div class="us">
                        <h3 class="title">Contact us</h3>
                        <h3>+48 999 888 777<h3>
                    </div>
                    <div class="us">
                        <h3 class="title">Message us</h3>
                        <form action="" id="formtest">
                            <input type="text" id="full-name" name="full-name" placeholder="Full Name">
                            <input type="email" id="email" name="email" placeholder="Email">
                            <textarea name="message" form="formtest" placeholder="Type your message"></textarea>
                            <input type="submit" value="Send">
                        </form>
                    </div>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8706.34196315874!2d15.814940504346666!3d52.240939859915585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47067c9cf132dd45%3A0xbf701eb0701b185d!2sZb%C4%85szynek!5e0!3m2!1spl!2spl!4v1658685232663!5m2!1spl!2spl" 
                width="600" 
                height="450" 
                style="border:5px solid white; border-radius:20px" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        <div>
    `;

  document.querySelector("#content").appendChild(contact);
})();

export { contactPage };
