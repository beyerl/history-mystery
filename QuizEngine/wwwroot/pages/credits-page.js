import { translationService } from '../business-logic/translation-service.js';
import { configService } from '../business-logic/config-service.js';

class CreditsPage extends HTMLElement {
    connectedCallback() {
        const t = (key) => translationService.t(key);
        const credits = configService.credits;
        const escapeHtml = (text) => String(text)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const dedicationRow = credits.dedication
            ? `<tr><td colspan="2" class="dedication">${escapeHtml(credits.dedication)}</td></tr>`
            : '';
        const rows = (credits.rows || [])
            .map(row => `<tr><td>${escapeHtml(row.label)}</td><td>${escapeHtml(row.value)}</td></tr>`)
            .join('');
        this.innerHTML = `
      <div class="padding-x-5">
        <div class="card w-100">
            <h1>${t('credits.title')}</h1>
            <table class="credits-table">
                ${dedicationRow}
                ${rows}
            </table>
            <button id="back-button" class="btn btn-primary btn-block">${t('common.backToMainMenu')}</button>
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