import Avatar from '../img/eu.png';
import '../styles/components/sidebar.sass';
const SideBar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Eric Rodrigues"/>
        <p className="title">Engenheiro de Software</p>
        <p>redes sociais</p>
        <p>informações de contato</p>
        <a href="" className="btn">
            Download currículo
        </a>
    </aside>;
}

export default SideBar