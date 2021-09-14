export default function Header() {
  return (
    <div>
      <h1>
        oAuth with <a href="http://www.passportjs.org/" target='_blank'>Passport.js</a> and {' '}
        <a href="https://github.com/hoangvvo/next-connect" target='_blank'>next-connect</a>{' '}
        Example
      </h1>

      <h3>Based on <a href="https://github.com/vercel/next.js/tree/canary/examples/with-passport-and-next-connect" target='_blank'>this</a> next-example</h3>
      <h3>Tested with Google, Facebook and Github oAuth providers</h3>
     
    </div>
  )
}
