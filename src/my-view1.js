import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-dialog/paper-dialog.js';


class MyView1 extends LitElement {

  static get properties(){
    return {
      username : {type : String},
      email : {type : String},
      phone : {type: Number},
      obj: {type: Object}
    }
  }

  closeDialog(){
    this.addEventListener("click", () => {
      this.shadowRoot.getElementById("userDataDialog").close();
    })
  }

  handleUserData(){  
    this.username = this.shadowRoot.getElementById("username").value;
    this.email = this.shadowRoot.getElementById("email").value;
    this.phone = this.shadowRoot.getElementById("phone").value;
    this.addEventListener("click", () => {
      this.obj = {
        username: this.username,
        email: this.email,
        phone: this.phone
      }
      console.log(this.obj);
      this.shadowRoot.getElementById("userDataDialog").open();
    })
  }

  logData(e){
    e.preventDefault()
    console.log("Submited");
  }

  static get styles(){
    return css`
    .container {
      padding: 30px;
      margin-top: 30px;
      border: 3px solid #000;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      background-color: #d9d9d9;
     }

     .input-div{
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
     }

     .input-div input{
      width: 400px;
      height: 30px;
      border-radius: 8px;
     }

     button{
      width: 90px;
      height: 30px;
      border-radius: 8px;
      background: green;
      color: #FFFFFF;
      cursor: pointer;
     }

    `
  }

  render() {
    return html`
      <div class="container">
        <center>
          <form class="form">
            <div class="input-div">
            <label for="username">Name</label>
              <input id="username" .value="${this.username || ""}" type="text" class="input is-primary" placeholder="eg. John Doe" />
            </div>

            <div class="input-div">
            <label for="email">Email</label>
              <input required id="email" .value="${this.email || ""}" type="email" class="" placeholder="eg. jon_d@user.com" />
            </div>

            <div class="input-div">
            <label for="phone">Phone Number</label>
              <input id="phone" .value="${this.phone || ""}" type="tel" class="" placeholder="eg. 071234598" />
            </div>

            <div class="submit-div">
              <button type="button" @click="${this.handleUserData}" class="button is-success is-small">Submit</button>
            </div>
          </form>

          <paper-dialog id='userDataDialog'>
              <h2>User Info</h2>
              <p>Name: ${this.username || "No Name Provided"}</p>
              <p>Email: ${this.email || "No email Provided"}</p>
              <p>Number: ${this.phone || "No phone number Provided"}</p>
              <div class="buttons">
                <button type="button" @click="${this.closeDialog}">Close</button>
              </div>
          </paper-dialog>

        </center>
      </div>
    `;
  }
}

customElements.define('my-view1', MyView1);
