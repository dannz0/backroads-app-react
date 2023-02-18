import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

export const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' childClass='footer-link' />

      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink id={link.id} className='footer-icon' {...link} />;
        })}
      </ul>

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
