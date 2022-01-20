import React, { Component } from "react";
import EnumImage from "../../enums/imgs";
import "./login.css";

export default class LoginPage extends Component {
  render() {
    return (
      <screen>
        <header>
          <img src={EnumImage.logo} alt="Spotify Logo" className="logo" />
          <hr className="hrLogo" />
        </header>
        <body>
          <p className="txt-sessao">
            Para continuares, inicia sessão no Spotify
          </p>
          <button href="#" className="btnFacebook">
            <span>
              <img
                src={EnumImage.facebookLogo}
                alt="Facebook Logo"
                className="facebookLogo"
              />
            </span>
            <p className="facebookTxt">Continuar com o Facebook</p>
          </button>
          <button href="#" className="btnApple">
            <span>
              <img
                src={EnumImage.appleLogo}
                alt="Apple Logo"
                className="facebookLogo"
              />
            </span>
            <p className="appleTxt">Continuar com a Apple</p>
          </button>
          <button href="#" className="btnMail">
            <span>
              <img
                src={EnumImage.mailLogo}
                alt="Mail Logo"
                className="facebookLogo"
              />
            </span>
            <p className="mailTxt">Continuar com a Google</p>
          </button>
          <div className="hrdiv">
            <hr className="hrinputs" />
            <span className="hrSpan">ou</span>
            <hr className="hrinputs" />
          </div>
          <form>
            <div></div>
          </form>
        </body>
      </screen>
    );
  }
}
