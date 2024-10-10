import "./NavLinks.css";

function NavLinks({ label, href, onClick }) {
  return (
    <li key={href}>
      <a href={href} onClick={onClick}>
        {label}
      </a>
    </li>
  );
}

export default NavLinks;
