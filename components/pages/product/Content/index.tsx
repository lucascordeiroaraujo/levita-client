import React from 'react';

import { ContentContainer } from './style';

import { RiDownloadCloudLine } from 'react-icons/ri';

const Content = () => (
  <ContentContainer>
    <span className="category">Cama</span>

    <h1>Cama Fawler Luxo Elétrica - LV 198 PE</h1>

    <p>
      Estrutura do leito confeccionada em tubo retangular, leito em chapa de aço
      perfurada e dobrada, com movimentos fawler, semi-fawler, trendelemburg,
      proclive, flexão de pernas, cardíaco, dorso, vascular, sentado e elevação
      total do leito através de motores elétricos acionados por controle remoto
      a fio, rodas giratórias sendo duas com freios dispostos na diagonal,
      cabeceira e peseira removíveis em polietileno injetado, para choque de
      proteção nos quatro cantos da cama, pintura eletrostática pó (epóxi), após
      tratamento antiferruginoso.
    </p>

    <p>
      LV 198 ST: Cabeceira e peseira removíveis confeccionadas em tubo redondo
      de aço com travessas em tubo redondo de aço.
      <br />
      LV 198 SL: Cabeceira e peseira removíveis em tubo quadrado de aço com
      travessas em tubo redondo de aço e acabamento em cinta de chapa de aço
      inox.
      <br />
      LV 198 LX: Cabeceira e peseira removíveis em tubo quadrado de aço
      revestida em fórmica com acabamento em cinta de chapa de aço inox.
      <br />
      LV 198 PE: Cabeceira e peseira removíveis em polietileno injetado.
      <br />
      LV 198 PU: Cabeceira e peseira removíveis em poliuretano injetado.
      <br />
    </p>

    <h2>OPCIONAIS:</h2>

    <ul>
      <li>Movimento de C.P.R. (Ressuscitação Cardiopulmonar).</li>
      <li>Controle remoto nas grades e supervisor.</li>
      <li>Suporte de soro.</li>
      <li>Colchão D26 / D28 / D33.</li>
      <li>Rodízios de 3" a 10".</li>
      <li>Carenagem Termoplástica.</li>
      <li>Grades em aço inox, epóxi ou polietileno.</li>
      <li>Indicador de ângulo.</li>
      <li>Bateria Auxiliar.</li>
    </ul>

    <p>
      PARA INFORMAÇÕES SOBRE CAPACIDADE DE PESO E DIMENSÕES ENTRAR EM CONTATO
      ATRAVÉS DO E-MAIL:{' '}
      <a href="mailto:comercial@levitamoveis.com.br">
        comercial@levitamoveis.com.br
      </a>{' '}
      OU FONE: <a href="tel:554331544455">43 – 3154.4455</a>
    </p>

    <div className="buttons-actions">
      <button className="download">
        <RiDownloadCloudLine />

        <span>baixar o catálogo</span>
      </button>
    </div>
  </ContentContainer>
);

export { Content };
