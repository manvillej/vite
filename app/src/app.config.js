

const apiConfig = () => {
  const config = {}
  if (import.meta.env.DEV) {
    config.serviceNowHeaders = new Headers({
      'Authorization':'Basic ' + btoa(import.meta.env.VITE_SERVICENOW_DEVELOPMENT_AUTH),
      'Content-Type':'application/json',
      'Accept':'application/json',
    })
  } else {
    /* does not work yet
    config.headers = {
      "X-userToken": window.servicenowUserToken
    }*/
  }
  
  return config
}

export { apiConfig }