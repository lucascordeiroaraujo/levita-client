import React from 'react';

import { Container } from '~/public/styles/global';

import {
  FooterContainer,
  FooterInfosContainer,
  FooterMapContainer,
  FooterCopyRightContainer,
} from './style';

import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

interface IMapProps {
  googleMapURL: any;
  loadingElement: any;
  containerElement: any;
  mapElement: any;
}

const SiteFooter = () => {
  const defaultCenter = { lat: -23.2704143, lng: -51.2735082 };

  const RegularMap = withScriptjs(
    withGoogleMap(({}: IMapProps) => (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={defaultCenter}
        defaultOptions={{ scrollwheel: false }}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    )),
  );

  const MapElementStyle = { height: '100%' };

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container className="footer-container">
        <strong className="footer-title site-default-title">
          Entre em contato
        </strong>

        <p className="footer-description">
          Com uma equipe multdisciplinar que trabalha constantemente em todo o
          território nacional, a Levita tem como compromisso a fabricação de
          móveis hospitalares de alta qualidade, de praticidade e de conforto,
          atendendo as exigências do mercado.
        </p>

        <FooterInfosContainer>
          <div>
            <FiMapPin />

            <span>Endereço</span>

            <address>
              R. Topázio, 64 - Jd. Cristal
              <br /> Cambé /PR | CEP 86182 715
            </address>
          </div>

          <div>
            <FiPhone />

            <span>Telefone</span>

            <a href="tel:554331544455" title="Ligar">
              43 3154 4455
            </a>

            <a href="tel:08000074455" title="Ligar">
              0800 0074455
            </a>
          </div>

          <div>
            <FiMail />

            <span>E-mail</span>

            <a
              href="mailto:comercial@levitamoveis.com.br"
              title="Enviar e-mail"
              className="email"
            >
              comercial@levitamoveis.com.br
            </a>
          </div>

          <div>
            <FiClock />

            <span>Horário de atendimento</span>

            <strong>
              Segunda à Sexta
              <br /> 8h às 18h
            </strong>
          </div>
        </FooterInfosContainer>
      </Container>

      <FooterMapContainer>
        <RegularMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBE33RCNtTCLS8WmQigIc5zUPHFl_LsVHY"
          loadingElement={<div style={MapElementStyle} />}
          containerElement={<div style={MapElementStyle} />}
          mapElement={<div style={MapElementStyle} />}
        />
      </FooterMapContainer>

      <FooterCopyRightContainer>
        <p>Levita &copy; {currentYear}. Todos os direitos reservados.</p>
      </FooterCopyRightContainer>
    </FooterContainer>
  );
};

export { SiteFooter };
