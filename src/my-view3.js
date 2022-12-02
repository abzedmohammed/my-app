import { LitElement, html, css } from 'lit-element';

class MyView3 extends LitElement  {
  static get properties() {
		return {
      title: {type : String},
      completed : {type: Boolean},
      todos: {type: Array}
    };
	}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res => res.json())
    .then(todos => {
      console.log(todos);
      this.todos = todos;
    })
  }

  static get styles(){
    return css`
    .main {
      width: 92%;
      height: 90%;
      background-color: #fff;
    }

    .main header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .main header h1 {
      position: relative;
      top: 25px;
      left: 20px;
      width: 110px;
      padding: 10px;
      color: #000;
      background-color: var(--mainColor);
    }

    .main header .color-themes {
      position: relative;
      top: 25px;
      width: 400px;
      height: 50px;
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
    }

    .main header .color-themes button {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
    }

    .main header .color-themes .mag-B {
      background-image: linear-gradient(90deg, #f50057 50%, #bb002f 50%);
    }

    .main header .color-themes .blue-B {
      background-image: linear-gradient(90deg, #1976d2 50%, #004ba0 50%);
    }

    .main header .color-themes .orange-B {
      background-image: linear-gradient(90deg, #ff6d00 50%, #c43c00 50%);
    }

    .main header .color-themes .teal-B {
      background-image: linear-gradient(90deg, #009688 50%, #00675b 50%);
    }

    .main header .color-themes .red-B {
      background-image: linear-gradient(90deg, #b00020 50%, #780000 50%);
    }

    .main header .color-themes .purp-B {
      background-image: linear-gradient(90deg, #673ab7 50%, #320b86 50%);
    }

    .main header .color-themes .green-B {
      background-image: linear-gradient(90deg, #00c853 50%, #009624 50%);
    }

    .main .tasks {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
      position: relative;
      top: 5%;
    }

    .main .tasks div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 10px 0;
      padding: 10px;
      width: 80%;
      height: 60px;
      background-color: #ddd;
      transition: 0.2s;
    }

    .tasks div:hover {
      background-color: #aaa;
    }

    .main .tasks input[type="checkbox"] {
      width: 25px;
      height: 25px;
      background-color: #fff;
      border: 1px solid #777;
      border-radius: 5px;
    }

    .main .tasks label {
      position: relative;
      margin-left: 40px;
      font-weight: bold;
      cursor: pointer;
    }

    .main .tasks img {
      width: 30px;
      height: 30px;
      margin-left: 10px;
      transition: 0.5s;
    }

    .tasks div:hover img {
      margin-left: 25px;
    }

    .main .tasks input[type="checkbox"]:checked + label {
      text-decoration: line-through wavy var(--mainColor);
    }

    .main .tasks input[type="checkbox"]:checked + label,
    .main .tasks input[type="checkbox"]:checked ~ img {
      opacity: 0.7;
    }
    
    `
  }

  themeMag() {
    let labels = this.shadowRoot.querySelectorAll("label")
    for (const label of labels) {
      label.style.color = "#f50057";
    }
  }
  
  themeBlue() {
    let labels = this.shadowRoot.querySelectorAll("label")
    for (const label of labels) {
      label.style.color = "#1976d2";
    }
  }
  
  themeOrange() {
    let labels = this.shadowRoot.querySelectorAll("label")
    for (const label of labels) {
      label.style.color = "#ff6d00";
    }
  }
  
  themeTeal() {
    let labels = this.shadowRoot.querySelectorAll("label")
    for (const label of labels) {
      label.style.color = "#009688";
    }
  }
  
  themeRed() {
    let labels = this.shadowRoot.querySelectorAll("label")
    for (const label of labels) {
      label.style.color = "#b00020";
    }
  }
  
  themePurp() {
    let labels = this.shadowRoot.querySelectorAll("label")
    for (const label of labels) {
      label.style.color = "#673ab7";
    }
  }
  
  themeGreen() {
    let labels = this.shadowRoot.querySelectorAll("label")
    for (const label of labels) {
      label.style.color = "#009624";
    }
  }
  
    
  render() {
    return html`
    <div class="main">
  <header>
    <h1>Tasks</h1>
    <div class="color-themes">
      <button class="mag-B" title="Magenta" @click="${this.themeMag}"></button>
      <button class="blue-B" title="Blue" @click="${this.themeBlue}"></button>
      <button class="orange-B" title="Orange" @click="${this.themeOrange}"></button>
      <button class="teal-B" title="Teal" @click="${this.themeTeal}"></button>
      <button class="red-B" title="Crimson" @click="${this.themeRed}"></button>
      <button class="purp-B" title="Purple" @click="${this.themePurp}"> </button>
      <button class="green-B" title="Green" @click="${this.themeGreen}"> </button>
    </div>
  </header>
  <div class="tasks" id="daily-tasks">
  ${
    this.todos && this.todos.map(todo => {
      this.title = todo.title
      this.completed = todo.completed
      return html`
      <div>
        <input id="${todo.id}" type="checkbox" .checked=${this.completed}>
        <label for="${todo.id}">${this.title}</label>
      </div>
      `
    })
  }    
  </div>
  <br>
    `;
  }
}

customElements.define('my-view3', MyView3);
