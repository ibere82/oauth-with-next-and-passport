import css from './footer.module.css';

export default function Footer() {
  return (
    <div className={css.container}>
      <div className={css.creditsArea}>
        <p>Developed by <a target='_blank' title="Iberê' s linkedin page" href='https://www.linkedin.com/in/iber%C3%AA-abondanza-kuhlmann-0691b32a/'>Iberê Abondanza Kuhlmann</a></p>
        <p>With colaboration of <a href='https://www.linkedin.com/in/bruna-felippetti-abondanza-mendrone-b59b8b37/' target='_blank'>Bruna Felippetti Abondanza Mendrone</a></p>
        <p>With&nbsp;
          <a target='_blank' title="NextJS" href='https://nextjs.org/'>Next.js,</a>&nbsp;
          <a href="http://www.passportjs.org/">Passport.js</a>&nbsp;and&nbsp;
          <a href="https://github.com/hoangvvo/next-connect">next-connect</a>{' '}
        </p>
        <p>Based on <a href="https://github.com/vercel/next.js/tree/canary/examples/with-passport-and-next-connect" target='_blank'>this</a> next-example</p>
        <p>Icons made by <a target='_blank' href="https://www.freepik.com" title="Freepik">Freepik</a> from <a target='_blank' href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </div>

      <div className={css.iconsContainer}>
        <a
          target='_blank'
          title="Iberê' s linkedin page"
          href='https://www.linkedin.com/in/iber%C3%AA-abondanza-kuhlmann-0691b32a/'>
          <img
            className={css.icons}
            src="/icons/linkedin.png"
            alt="Iberê's linkedin page" />
        </a>

        <a
          target='_blank'
          title="Iberê' s github page"
          href='https://github.com/ibere82'>
          <img
            className={css.icons}
            src="/icons/github.png"
            alt="Iberê's github page" />
        </a>
      </div>
    </div >
  )
}
