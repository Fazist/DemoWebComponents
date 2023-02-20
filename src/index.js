import { html, LitElement } from 'lit';

class TodoApp extends LitElement {
  render() {
    return html`<h1>Todo app</h1>`;
  }
}

customElements.define('todo-app', TodoApp);