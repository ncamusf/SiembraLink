class Usuarios{
    constructor(nombre,apellido,edad,rut,id){
        this.nombre_completo = nombre+' '+apellido;
        this.edad = edad;
        this.rut = rut;
        this.id = id; //string
        this.valoracion = "No Valorizado";
    }
    mostrar_valoracion()
    {
        //llama a valor
        return null
    }
}

class Empleado extends Usuarios{
    //faltan herencias de usuario
    constructor(
        nombre,
        apellido,
        edad,
        rut,
        id,
        valoracion,
        foto,
        ubicacion,
        gananciaMensual,
        aptitudes_para_trabajos,
        disponibilidad,
        numeroTelefonico,
        mail,
        numeroTrabajos,
        descripcion
    ){
        super(nombre,apellido,edad,rut,id,valoracion);
        this.foto = foto;
        this.numeroTelefonico = numeroTelefonico;
        this.ubicacion = ubicacion; //string
        this.gananciaMensual = gananciaMensual; //float
        this.aptitudes_para_trabajos = aptitudes_para_trabajos; //string
        this.disponibilidad = disponibilidad;
        this.mail = mail; //string
        this.numeroTrabajos = numeroTrabajos;
        this.descripcion = descripcion;
    }
    //en este caso agregé el id_empleado (cumple la misma función que trabajo)
    postular_trabajo(id_trabajo, id_empleado) {
        return null;
      // quizas puede haber una función directa para postular despues de recibir los id.
    }
    // una vez conseguidos los id puede ser que postular sea un metodo aparte
  
    valorar_empleador(id_trabajo, id_empleador) {
      //quizas no es necesario el id_trabajo, quizas sirve para dar una categorización de las valoraciones por empleo y bla bla bla.
        return null;
      //quizas necesita un get para el id de empleador.
    }
    aceptar_trabajo(id_trabajo, id_empleado) {
        return null
    }
    rechazar_trabajo(id_trabajo, id_empleado) {
        //Elimina la id del empleado en el empleo y manda una notificacion
        return null
    }
}
export default Empleado;
class Empresa extends Usuarios {
    constructor(nombre,apellido,edad,rut,id,valor,compañia,empleos_que_ofrece,id_empleador){
        super(nombre,apellido,edad,rut,id,valor);
        this.compañia = compañia; //string
        this.empleos_que_ofrece = empleos_que_ofrece; //string ; quizas empleos que ofrece es otra clase a parte con los distintos nombres y ID de cada uno de los empleo que ofrece.
        this.id_empleador = id_empleador; //string ; //puede haber una función para generara los ID
    }
    crear_empleo() {
      return null;
    }
    valorar_empleado(id_empleado, id_trabajo) {
      return null;
    }
  }


//tengo una duda con respecto a horario y dia de pago, por que uno es int y otro string, ejemplo por que dia de pago no es un string tambien.

class Empleo {
    // compañia debería ser una herencia de empleador, arreglar ese tema.
    constructor(
      nombre,
      compañia,
      descripcion,
      pago,
      ubicacion,
      horario,
      cantidad_postulantes,
      postulantes,
      trabajadores,
      id
    ) {
      this.max_postulantes = max_postulantes;
      this.nombre = nombre; //string
      this.compañia = compañia; //string
      this.descripcion = descripcion; //string
      this.pago = pago; //int
      this.ubicacion = ubicacion; //string
      this.horario = horario; //string
      this.postulantes = postulantes //Array de ids
      this.trabajadores = trabajadores //Array de ids de personas acepatadas
      this.cantidad_postulantes = cantidad_postulantes; //int
      this.id = id; //string
      //no se si agregar el id_trabajo a esta parte en vez de dejarla solo como función. Si no me equvioco deberia estar acá tambien
    }
    // Getter
    get numero_postulantes() {
      return console.log(this.postulantes.length);
    }
    cerrar_trabajo() {
      return null;
    }
    // Método, ver como se puede hacer bien en caso de ser necesario, que tenga un contador de todos los trabajos.
    numeroTrabajos() {
      return null;
    }
}

  // hacer getter y setter para cuando se use pago pues es privado.
class Paga {
    constructor(estado, valor, metodo_pago, descripcion, dia_de_pago) {
        //descripción es herencia de empleo, agregarla como tal
        this.estado = estado; //string
        this.valor = valor; //float
        this.metodo_pago = metodo_pago; //string
        this.descripcion = descripcion; //string
        this.dia_de_pago = dia_de_pago; //int
    }
    verificar_pago() {
      return null;
    }
    pagar() {
      return null;
    }
  }
  

