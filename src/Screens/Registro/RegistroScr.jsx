import React from 'react'

function RegistroScr() {
  return (
    <>
      <h3>Nuevo Usuario</h3>
      <p>*. Aquí podrá darse de alta en el sistema. Ingrese sus datos</p>
      <p><input type="text" placeholder='Nombre Completo' /></p>
      <p><input type="email" placeholder='Email' /></p>
      <p><input type="password" placeholder='Contraseña' /></p>
      <p><button>Registrarse!</button></p>
    </>
  )
}

export default RegistroScr