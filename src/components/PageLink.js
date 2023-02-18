const PageLink = ({ id, href, text, childClass }) => {
  return (
    <li key={id}>
      <a href={href} rel='noreferrer' className={childClass}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;
