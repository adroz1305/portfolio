const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  },
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 80, 320)}ms`;
  observer.observe(element);
});

const emailUser = ["adrien", "ozon285"].join("");
const emailDomain = ["gmail", "com"].join(".");
const email = `${emailUser}@${emailDomain}`;
const phone = ["07", "82", "59", "91", "34"].join(" ");

const emailInline = document.querySelector("#contact-email-inline");
const emailButton = document.querySelector("#contact-email-button");
const phoneLink = document.querySelector("#contact-phone");

if (emailInline) {
  emailInline.href = `mailto:${email}`;
  emailInline.textContent = email;
}

if (emailButton) {
  emailButton.href = `mailto:${email}`;
  emailButton.textContent = email;
}

if (phoneLink) {
  phoneLink.href = `tel:${phone.replace(/\s+/g, "")}`;
  phoneLink.textContent = phone;
}
