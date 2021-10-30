import css from './About.module.css';

function About() {
  return (
    <div className={css.AboutContainer}>
      <h2 className={css.AboutCaption}>About the company</h2>
      <ul className={css.AboutDescriptionList}>
        <li className={`${css.AboutDescriptionItem} list`}>
          <p className={css.AboutDescription}>
            Founded in 2019, FreySoft is a global provider of full-cycle
            software development services with headquarters in Kyiv, Ukraine.
            Our objective is to work on innovative projects that matter and
            bring value with the most balanced “personal life” / “work” ratio
            for our team.
          </p>
        </li>

        <li className={`${css.AboutDescriptionItem} list`}>
          <p className={css.AboutDescription}>
            The key areas of our activity include IT staff augmentation, web and
            mobile app development, MVP development for startups, integration &
            automatization, support & maintenance, legacy application
            transformation, UI/ UX product design, and AI-chatbots development.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default About;
