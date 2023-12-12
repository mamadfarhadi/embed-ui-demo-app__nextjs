interface IAuth {
  grant_type: 'client_credentials'
  scope: 'embed'
  client_id: string
  client_secret: string
}

interface IAuthResponse {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}
