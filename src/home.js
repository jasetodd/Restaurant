function homePage(params) {
  const content = document.querySelector("div#content");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const home = document.getElementById("home");
  home.style.cssText = "font-size:1.1rem";
  img.src =
    "/Restaurant/assets/traditional-salad-with-pieces-medium-rare-grilled-ahi-tuna-sesame-with-fresh-vegetable-salad-rice-plate.jpg";
  h1.textContent = "Fancy Restaurant. Ooh la la";
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae itaque,facere corrupti obcaecati quasi et, aliquid accusantium sed quos nisi non, sapiente repudiandae. Enim, sit exercitationem quae aspernatur ipsam vitae.";

  div.classList.add("about");
  content.append(img);
  content.append(div);
  div.append(h1);
  div.append(p);
}

export default homePage;
