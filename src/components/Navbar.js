import logo from '../images/logo.svg';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <PageLinks parentClass='nav-links' childClass='nav-link' />

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink id={link.id} className='nav-icon' {...link} />;
          })}
        </ul>
      </div>
    </nav>
  );
};