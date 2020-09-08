import React from 'react';
import QRCode from 'qrcode.react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfosHeader from '../components/InfosHeader';
import ProfileData from '../components/ProfileData';
import '../style/AuxiliarStyle.css';

function Profile() {
  return (
    <div>
      <Header title="Configurações" />
      <InfosHeader />
      <QRCode value="https://fusion-med.herokuapp.com/prontuario/" className="QRcode" fgColor="#6E1C70" />
      <div className="home-content">
        <ProfileData image="profile.jpeg" title="Minha Conta" />
        <ProfileData image="notfication.png" title="Notificações" />
        <ProfileData image="privacy.png" title="Privacidade e Segurança" />
        <ProfileData image="help.jpeg" title="Preciso de Ajuda" />
        <ProfileData image="profile.jpeg" title="Acessibilidade" />
        <ProfileData image="shareIcon.svg" title="Compartilhe" />
      </div>
      <Footer />
    </div>
  )
}

export default Profile;
