import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/60573155?s=460&u=86cfeb9a11d851329a2f51299d3c35f552fcb0e1&v=4" alt="HállanCosta" />
        <div>
          <strong>Hállan da Silva Costa</strong>
          <span>Desenvolvimento Web/Mobile</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de web development samurai jedai.
        <br />
        Apaixonado por desenvolver aplicações que solta misseís diretamente da NASA.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;