export default function HighLevelDoc() {
  return (
    <div>
      <h2>Steps to test:</h2>

      <h3>oAuth provider credentials</h3>
      <ol>
        <li>Sign up or sign in to your google, facebook or github developer account, at least one of these;</li>
        <li>Create your app and get your credentials;</li>
        <li>Insert your credentials on the .env file;</li>
        <li>After this, the login button on top of this page will be enabled;</li>
        <li>If you want to add another oauth provider, see the documentation on /lib/oauthProvidersConfig.js;</li>
      </ol>
      <h3>Sign up</h3>
      <ol>
        <li>Click Login and choose your oauth provider to login;</li>
        <li>Accept the terms in the provider dashboard;</li>
        <li>You will be authenticated and redirected home;</li>
      </ol>
      <h3>Sign in</h3>
      <ol>
        <li>Click Login and choose your oauth provider to login;</li>
        <li>If you have already done the authorization in your dashboard provider, you will be automaticly logged in;</li>
      </ol>
    </div>
  )
}
