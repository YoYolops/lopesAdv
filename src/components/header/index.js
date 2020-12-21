import React, { Component } from 'react';
import './header.css';

import { FaBars } from "../../../node_modules/react-icons/fa";
import { IoIosCloseCircleOutline } from "../../../node_modules/react-icons/io";


class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            bar_visible: true,
            exit_visible: false
        }
    }

    handleClickMenu = () => {
        this.setState({
            bar_visible: !this.state.bar_visible,
            exit_visible: !this.state.exit_visible
        })
    }


    render () {

        return (
            <header className='Card'>
                <a href="/home">
                    <div className="Logo"></div>
                </a>

                <button className="burguer-button">
                    <FaBars onClick={this.handleClickMenu}
                        size={40}
                        color={'#821b1b'}
                        className={this.state.bar_visible ? 'active-ico' : 'unactive-ico'}
                    />

                    <IoIosCloseCircleOutline onClick={this.handleClickMenu}
                        size={50}
                        color={'#821b1b'}
                        className={this.state.exit_visible ? 'active-ico' : 'unactive-ico'}
                    />
                </button>
                <div className={this.state.exit_visible ? 'menu-active' : 'menu-disable'}>
                    <ul className='Menu'>
                        <li><a className="nav-link" href="/">Sobre</a></li>
                        <li><a className="nav-link" href="/">Contato</a></li>
                        <li><a className="nav-link" href="/">Serviços</a></li>
                        <li><a className="nav-link" href="/autoatendimento">Auto Atendimento</a></li>
                    </ul>
                </div>
            </header>
        );
    };

};

export default Header;