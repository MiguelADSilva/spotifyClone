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
          <form className="form-group">
            <div className="email-group">
              <label className="email-span">
                Endereço de e-mail ou nome de utilizador
              </label>
              <input
                className="email-input"
                id="email"
                type="text"
                placeholder="Introduza o e-mail ou nome do utilizador"
                data-qa-label="emailInput"
              />
            </div>
            <div className="password-group">
              <label className="password-span">Palavra-passe</label>
              <input
                className="password-input"
                id="password"
                type="password"
                placeholder="Palavra-passe"
                data-qa-label="passwordInput"
              />
            </div>
            <a
              className="resetPassword"
              href="#test"
              id="reset-password-link"
              data-qa-label="resetPasswordLink"
            >
              Esqueceste-te da tua palavra-passe?
            </a>
            <div className="submitForm">
              <div className="memorize">
                <input
                  type="checkbox"
                  className="loginRemember"
                  id="login-remember"
                  data-qa-label="login-remember"
                  name="remember"
                />
                <label for="login-remember">
                  <span className="indicadorRemember"></span>
                  <span className="rememberSpan">Memorizar-me</span>
                </label>
              </div>
              <div className="contentBtnSubmit">
                <button
                  className="btnSubmit"
                  id="login-submit"
                  data-qa-label="login-submit"
                >
                  Iniciar Sessão
                </button>
              </div>
            </div>
          </form>
          <hr className="hrSeparatorForm" />
          <div className="Signup-section">
            <p className="sigupTXT">Não tens conta</p>
            <button
              className="signupBtn"
              id="signup-btn"
              data-qa-label="signup-btn"
            >
              <p className="signupBtntext">Regista-te no Spotify</p>
            </button>
          </div>
        </body>
      </screen>
    );
  }
}
