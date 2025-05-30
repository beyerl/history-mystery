class CreditsPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="padding-x-5">
        <div class="card w-100">
            <h1>Credits</h2>
            <table class="credits-table">
                <tr><td colspan="2" class="dedication">Dedicated to Sonja</td></tr>
                <tr><td>Concept, Programming, Music Production</td><td>Lorenz</td></tr>
                <tr><td>Menu Music</td><td>John Dowland - The Frog Galliard</td></tr>
                <tr><td>Menu Art, Content, Programming</td><td>ChatGPT 4o & 4.1, Copilot</td></tr>
            </table>
            <button id="back-button" class="btn btn-primary btn-block">Back to Main Menu</button>
        </div>
    </div>  
      <style>
        .credits-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 1.1em;
        }
        .credits-table td {
          padding: 10px 8px;
          border-bottom: 1px solid var(--color-gold);
        }
        .credits-table .dedication {
          text-align: center;
          font-weight: bold;
          font-size: 1.2em;
          border-radius: 8px;
          border-bottom: none;
          padding: 16px 8px 10px 8px;
        }
        .credits-table tr:last-child td {
          border-bottom: none;
        }
      </style>
    `;
        this.querySelector('#back-button').addEventListener('click', () => {
            // Go back to start page
            window.location.hash = '#/';
        });
    }
}

customElements.define('credits-page', CreditsPage);