export default function LoggedHome({ displayName, email, provider }) {
  return (
    <div>
      <h2>Hello {displayName} </h2>
      <h3>You are logged using the {provider} oAuth provider</h3>
      <p>Email: {email}</p>
    </div>
  )
}
