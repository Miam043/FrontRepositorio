/*
export const createDocument = (userId, token, document) => {
  return fetch('http://localhost:4000/api/documentos/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: document
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('token')) {
     return localStorage.getItem('token');
  }
    return false;
}

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    next();
    return fetch('http://localhost:4000/api/documentos/', {
      method: 'GET',
    })
      .then(response => {
          console.log('signout',response);
      })
      .catch( err => console.log(err));
  }
}
*/