import React from  'react';
import './footer.css';

import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

function Footer() {

    return (

        <div id="footer-container">
            <div id="label-container">
                <div className="label">
                    <SiWhatsapp
                        size={25}
                        color={'#b00c0c'}
                        className={'label-ico'}
                    />
                    <span className="margear">(83) 9 9822-7653</span>
                </div>

                <div className="label">
                    <HiOutlineMailOpen
                        size={30}
                        color={'#b00c0c'}
                        className={'label-ico'}
                    />
                    <span className="margear">claudenir.lopes@hotmail.com</span>
                </div>

                <div className="label">
                    <MdLocationOn
                        size={30}
                        color={'#b00c0c'}
                        className={'label-ico'}
                    />
                    <span>
                        <a
                            className="address"
                            href="https://www.google.com/maps/place/R.+do+Prado,+169+-+Centro,+Patos+-+PB,+58700-515/@-7.0304233,-37.2801616,17z/data=!3m1!4b1!4m8!1m2!2m1!1sRua+do+Prado,+169,+Edificio+IMP%C3%89RIO+GS,+Sala+407,+Centro,+Patos-PB,+58700-010!3m4!1s0x7af603f23aafd01:0xc67f414a023047eb!8m2!3d-7.0304233!4d-37.2779729"
                            target="_blank"
                            rel="noreferrer">
                                Veja nosso endereço
                        </a>
                    </span>
                </div>
            </div>

            <div id="map-container">
                <iframe
                    title="Localização"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.820076232344!2d-37.28016158522649!3d-7.030423294921871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7af603f23aafd01%3A0xc67f414a023047eb!2sR.%20do%20Prado%2C%20169%20-%20Centro%2C%20Patos%20-%20PB%2C%2058700-515!5e0!3m2!1spt-BR!2sbr!4v1608576395115!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="250"
                    margin="0"
                    frameborder="0"
                    allowfullscreen="true"
                    aria-hidden="false"
                    tabindex="0"
                />
            </div>

            <div className="address-label">
                <p className="small-address-text">Rua do Prado, 169, Edificio IMPÉRIO GS, Sala 407, Centro, Patos-PB, 58700-010</p>
            </div>
        </div>

    );

;}

export default Footer;

