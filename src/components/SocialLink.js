const SocialLink = ({ href, icon, className }) => {
  return (
    <li>
      <a href={href} rel='noreferrer' target='_blank' className={className}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
