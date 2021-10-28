import css from './Container.module.css';
function Container({ children }) {
  return <div className={css.PageWrapper}>{children}</div>;
}

export default Container;
