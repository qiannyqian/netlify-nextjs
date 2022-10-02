import Link from 'next/link';

const NavItem = ({ text, href, active, target }) => {
  return (
    <Link href={href}>
      <a
        className={`nav__item ${active ? 'active' : ''}`}
        target={target ? '_blank' : null}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
