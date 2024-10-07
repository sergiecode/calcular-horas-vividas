function horasVividas(fechaNacimiento) {
    const ahora = new Date();
    const nacimiento = new Date(fechaNacimiento);
    
    // Diferencia en milisegundos
    const diferencia = ahora - nacimiento;
    
    // Convertir la diferencia a horas (1 hora = 1000 milisegundos * 60 segundos * 60 minutos)
    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    
    return `¡Has vivido aproximadamente ${horas.toLocaleString()} horas hasta ahora!`;
  }
  
  // Ejemplo de uso
  const miCumpleaños = '1989-10-07';  // Cambia la fecha por la tuya
  console.log(horasVividas(miCumpleaños));