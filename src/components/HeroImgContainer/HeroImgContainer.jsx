import css from './HeroImgContainer.module.css';
import Container from '../Container';

function HeroImgContainer() {
  return (
    <div className={css.Container}>
      <div className={css.CommonItemWrapper}>
        <ul className={css.ItemsWrapper1}>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage1} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage2} list`}
          ></li>
          <li
            className={`${css.BackgroundImage}  ${css.BackgroundImage3} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage4} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage5} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage6} list`}
          ></li>
        </ul>

        <ul className={css.ItemsWrapper2}>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage7} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage8} list`}
          ></li>
          <li className={`${css.BackgroundImage} ${css.BackgroundImage9} list`}>
            <a href="/all-roles" className={`${css.SeeAllRolesLink} link`}>
              See All Roles
            </a>
          </li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage10} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage11} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage12} list`}
          ></li>
        </ul>

        <ul className={css.ItemsWrapper3}>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage13} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage14} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage15} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage16} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage17} list`}
          ></li>
          <li
            className={`${css.BackgroundImage} ${css.BackgroundImage18} list`}
          ></li>
        </ul>
        <Container>
          <a href="./all-roles">
            <button type="button" className={css.SeeAllRolesBtn}>
              See All Roles
            </button>
          </a>
        </Container>
      </div>
    </div>
  );
}

export default HeroImgContainer;
