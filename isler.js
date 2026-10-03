const briefForm = document.querySelector("#brief-form");

briefForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const isTurkish = document.documentElement.lang === "tr";
  const type = document.querySelector("#brief-type").value;
  const details = document.querySelector("#brief-about").value.trim();
  const message = isTurkish
    ? `Merhaba Eren, ${type.toLocaleLowerCase("tr-TR")} için bilgi almak istiyorum.${details ? `\n\nProje hakkında: ${details}` : ""}`
    : `Hi Eren, I'd like to discuss a ${type.toLowerCase()} project.${details ? `\n\nA few details: ${details}` : ""}`;

  window.open(`https://wa.me/905050143797?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
