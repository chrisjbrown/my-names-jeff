import RenamerApplication from "../view/RenamerApplication";

export default function renderTokenHUD(hud, html) {
    if (!game.user.isGM || hud.object.document.actorLink) { return; }
    
    const token = hud.object;
    html[0].querySelector(".control-icon[data-action=\"config\"]")
      .insertAdjacentHTML("beforebegin", `
        <div class="control-icon" data-action="token-name">
          <i class="fas fa-person"></i>
        </div>
      `);
    
    const tokenNameButton = html.find(".control-icon[data-action=\"token-name\"]");
    
    tokenNameButton.on("click", async (event) => 
    {
      event.preventDefault();
      new RenamerApplication({ props: { document: token.document } }).render(true, { focus: true });
    });
}