const { I } = inject();

module.exports = {

  fields: {
    email: "#Email",
    password: "#Password"
  },

  buttons: {
    logIn: "input[class='button-1 login-button']",
  },
  
  async login (email, password) {
    I.click(this.fields.email);
    I.fillField(this.fields.email, email);
    I.click(this.fields.password);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.logIn);
  }
  
}
