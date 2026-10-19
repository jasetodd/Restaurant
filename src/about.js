function aboutPage() {
  const content = document.querySelector("div#content");
  const aboutPage = document.createElement("div");
  const primary = document.createElement("div");
  const aboutIcon = document.createElement("img");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const secondary = document.createElement("div");
  const h2 = document.createElement("h2");
  const p2 = document.createElement("p");
  const about = document.getElementById("about");
  about.style.cssText = "font-size:1.1rem";

  aboutPage.classList.add("about-page");
  content.append(aboutPage);

  primary.classList.add("primary");
  aboutPage.append(primary);

  aboutIcon.id = "about-icon";
  aboutIcon.src = "https://picsum.photos/200";
  aboutIcon.alt = "A random image";
  primary.append(aboutIcon);

  h1.textContent = "About us";
  primary.append(h1);
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima dolorum voluptatum natus, aliquam, praesentium voluptati vero porro fuga blanditiis eius aperiam? Nostrum ad possimus reprehenderit eaque nulla fuga nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit odio blanditiis s facilis dolore, natus inventore, fuga minima molestias autem nemo deserunt laudantium consectetur a assumenda expli accusamus. Rerum, ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam molestias, minus consequ sapiente alias explicabo neque cumque eaque, veritatis, nam illo rerum? Veniam ratione accusantium ad, repellendus  nisi.";
  primary.append(p);

  secondary.classList.add("secondary");
  aboutPage.append(secondary);

  h2.textContent = "Contact information";
  secondary.append(h2);

  p2.textContent =
    "Email: arealemail@emails.co.uk\n Tel: 0147258324545\nAddress: 123 Real Street\n Real Town\n North East Realton\n RE41 6AL";
  p2.style.whiteSpace = "pre-line";

  secondary.append(p2);
}

export default aboutPage;
