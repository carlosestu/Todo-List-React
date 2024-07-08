import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);

const CustomAlert = () => {
  return MySwal.fire({
    html: (
      <div>
        <div className='deleteTitle'>
          <h2>Delete</h2>
        </div>
        <div className='pregunta' id='pregunta'>
          <p>¿Quieres eliminar esta tarea?</p>
        </div>
        <div className='pregunta'>
          <button className='aceptarDelete' onClick={() => MySwal.clickConfirm()}>Sí</button>
          <button className='rechazarDelete' onClick={() => MySwal.close()}>No</button>
        </div>
      </div>
    ),
    showConfirmButton: false,
    showCancelButton: false,
  });
};

export default CustomAlert;