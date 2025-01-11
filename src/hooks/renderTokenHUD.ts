import RenamerApplication from "../view/RenamerApplication";

export default function renderTokenHUD(hud, html) {
    if (!game.user.isGM || hud.object.document.actorLink) { return; }

    html[0].querySelector(".control-icon[data-action=\"config\"]")
      .insertAdjacentHTML("beforebegin", `
        <div class="control-icon" data-action="token-name">
          <i class="fas fa-person"></i>
        </div>
      `);
    
    const tokenDocuments = game.canvas.tokens.controlled.filter((token) => !token.document.actorLink).map((token) => token.document)
    const tokenNameButton = html.find(".control-icon[data-action=\"token-name\"]");
    tokenNameButton.on("click", async (event) => 
    {
      event.preventDefault();
      new RenamerApplication({ props: { documents: tokenDocuments } }).render(true, { focus: true });
    });
}