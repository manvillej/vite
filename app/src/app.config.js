

const apiConfig = () => {
  const config = {}
  if (process.env.NODE_ENV === 'development') {
    config.serviceNowHeaders = new Headers({
      'Authorization':'Basic ' + btoa(process.env.SERVICENOW_DEVELOPMENT_AUTH),
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