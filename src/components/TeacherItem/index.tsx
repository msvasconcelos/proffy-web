import React from 'react';

import './styles.css';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/17626335?s=460&u=290818106054b128cba2b0e1d69281e212a7cc61&v=4"
          alt="Matheus Vasconcelos"
        />
        <div>
          <strong>Matheus Vasconcelos</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Egestas pretium aenean pharetra magna ac placerat.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsapp} alt="whatsapp" />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
}
