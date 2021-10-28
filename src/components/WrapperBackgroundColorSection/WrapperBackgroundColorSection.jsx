// import css from './WrapperBackgroundColorSection.module.css';
function WrapperBackgroundColorSection({ color, children }) {
  return <div style={{ backgroundColor: `${color}` }}>{children}</div>;
}

export default WrapperBackgroundColorSection;
