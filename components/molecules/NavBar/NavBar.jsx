import styles from './navbar.module.css';
import ProfileArea from '../../atoms/ProfileArea';

export default function NavBar({ userProps: { logged, email, photo, displayName },enabled }) {

  return (
    <nav>
      <div className={styles.navbarContainer}>

        <div className={styles.title}>
          <h1><a style={{color:'inherit'}}href='/'>POC oAuth in Next.js</a></h1>
           </div>

        <ProfileArea
          icon={logged && photo ? photo : '/user.png'}
          alt={logged ? displayName : 'user icon'}
          handle={() => location.href = logged ? "./api/logout" : "./login"}
          buttonLabel={logged ? 'Logout' : 'Login'}
          buttonEnabled={enabled}
          bottomText={email}
        />
      </div>
    </nav >
  );
};
