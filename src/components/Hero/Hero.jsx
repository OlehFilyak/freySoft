import css from './Hero.module.css';
function Hero() {
  return (
    <section className={css.Hero}>
      <div className={css.InfoOffer}>
        <h1 className={css.Caption}>
          We’ve got the job for you<span>!</span>
        </h1>
        <p className={css.Description}>
          We offer experienced IT specialists to be involved in ground-breaking
          digital projects and IT novices to develop skills in our perspective
          workplace.
        </p>
      </div>
    </section>
  );
}

export default Hero;
