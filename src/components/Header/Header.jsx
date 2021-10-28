import css from './Header.module.css';
import logo from './logo.svg';

function Header() {
  return (
    <header className={css.Header}>
      <nav className={css.Navigation}>
        <img src={logo} alt="logo" className={css.HeaderLogo} />
        <ul className={css.PageList}>
          <li className={`${css.PageListLink} list`}>
            <a href="/company" className={css.PageLink}>
              Company
            </a>
          </li>

          <li className={`${css.PageListLink} list`}>
            <a href="/services" className={css.PageLink}>
              Services
            </a>
          </li>

          <li className={`${css.PageListLink} list`}>
            <a href="/blog" className={css.PageLink}>
              Blog
            </a>
          </li>

          <li className={`${css.PageListLink} list`}>
            <a
              href="/career"
              className={`${css.PageLink}  ${css.CurrentPageLink}`}
            >
              Career
            </a>
          </li>
        </ul>
        <button type="button" className={css.ButtonContactUs}>
          Contact Us
        </button>

        <a href="tel:+380992084199" className={css.Icons}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 15.4998C18.75 15.4998 17.55 15.2998 16.43 14.9298C16.08 14.8198 15.69 14.8998 15.41 15.1698L13.21 17.3698C10.38 15.9298 8.06 13.6198 6.62 10.7898L8.82 8.57976C9.1 8.30976 9.18 7.91976 9.07 7.56976C8.7 6.44976 8.5 5.24976 8.5 3.99976C8.5 3.44976 8.05 2.99976 7.5 2.99976H4C3.45 2.99976 3 3.44976 3 3.99976C3 13.3898 10.61 20.9998 20 20.9998C20.55 20.9998 21 20.5498 21 19.9998V16.4998C21 15.9498 20.55 15.4998 20 15.4998ZM12 2.99976V12.9998L15 9.99976H21V2.99976H12Z"
              fill="white"
            />
          </svg>
        </a>

        <button
          type="button"
          className={`${css.ButtonNavigationMenu} ${css.Icons}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 4H20V6H4V4ZM4 11H20V13H4V11ZM20 18H4V20H20V18Z"
              fill="white"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
