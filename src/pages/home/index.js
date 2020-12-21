import React from 'react';
import './home.css';

import { BiMessageDetail } from "../../../node_modules/react-icons/bi";
import { MdImportContacts } from "../../../node_modules/react-icons/md";
import { GoLaw } from "../../../node_modules/react-icons/go";

import sobreImgOne from '../../media/lapse.jpg';
import sobreImgTwo from '../../media/estudo.jpg';
import sobreImgThree from '../../media/livrovelho.jpg';

import WppIco from '../../components/wppIco';
import Footer from '../../components/footer';

/*  sobre - serviços - contatos */

function Home(){

/*     const images = [sobreImgOne, sobreImgTwo, sobreImgThree]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            index === 2 ? setIndex(0) : setIndex(index + 1)
        }, 5000)
    }, [index]); */

    return(
        <div id="home-container">

            <div id="crossfade">
                <img clasName="sobre-img" src={sobreImgOne} alt="" />
                <img className="sobre-img" src={sobreImgTwo} alt="" />
                <img className="sobre-img" src={sobreImgThree} alt="" />
            </div>

            <div id="home-sobre" className="block-text">
                <p className="p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu 
                    lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant 
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at 
                    risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, 
                    felis ut adipiscing.
                </p>
                <p className="p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu 
                    lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant 
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at 
                    risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, 
                    felis ut adipiscing.
                </p>
            </div>

            <div className="bg-image" id="contato-img">
                <div className="block-icon" id="top-icon">
                    <BiMessageDetail
                        id="first"
                        size={100}
                        color={'#821b1b'}
                    />
                </div>

                <div className="block-icon" id="mid-icon">
                    <MdImportContacts
                        size={100}
                        color={'#821b1b'}
                    />
                </div>

                <div className="block-icon" id="bot-icon">
                    <GoLaw
                        size={100}
                        color={'#821b1b'}
                    />
                </div>
            </div>
            <div id="home-contato" className="block-text">
                <p className="p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu 
                    lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant 
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at 
                    risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, 
                    felis ut adipiscing.
                </p>
                <p className="p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu 
                    lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant 
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at 
                    risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, 
                    felis ut adipiscing.
                </p>
            </div>
            
            <WppIco />
            <Footer />
        </div>
    );
};

export default Home;