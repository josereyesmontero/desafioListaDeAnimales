class Propietario{
    constructor(nombre_dueno, direccion, telefono){
        this._nombre = nombre_dueno;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número
        telefónico de contacto es: ${this._telefono}`
    }
}

class Animal extends Propietario{
    constructor(nombre_dueno, direccion, telefono,tipo){
        super(nombre_dueno, direccion, telefono)
        this._tipo = tipo;
    }
    get tipo(){
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal{
    constructor(nombre_dueno, direccion, telefono,tipo, nombre_mascota,enfermedad){
        super(nombre_dueno, direccion, telefono,tipo)
        this._nombre_mascota = nombre_mascota;
        this._enfermedad = enfermedad;
    }
    get nombre_mascota(){
        return this._nombre_mascota;
    }
    set nombre_mascota(nuevo_nombre_mascota){
        _nombre_mascota = nuevo_nombre_mascota;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(nueva_enfermedad){
        _enfermedad = nueva_enfermedad;
    }
}

let formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var prop = document.getElementById('propietario').value;
    var tel = document.getElementById('telefono').value;
    var dir = document.getElementById('direccion').value;
    var nomb = document.getElementById('nombreMascota').value;
    var tip = document.getElementById('tipo').value;
    var enf = document.getElementById('enfermedad').value;

    if(tip === "gato"){
        var Gato = new Mascota(prop,dir,tel,tip,nomb,enf);
        resultado.innerHTML = `<li>${Gato.datosPropietario()}.</li>
        <li>${Gato.tipo}, mientras que el nombre de la mascota es: ${Gato.nombre_mascota}, y
        la enfermedad es: ${Gato.enfermedad}.</li> `;
    } else if(tip === "perro"){
        var Perro = new Mascota(prop,dir,tel,tip,nomb,enf);
        resultado.innerHTML = `<li>${Perro.datosPropietario()}.</li>
        <li>${Perro.tipo}, mientras que el nombre de la mascota es: ${Perro.nombre_mascota}, y
        la enfermedad es: ${Perro.enfermedad}.</li>`;
    } else if(tip === "conejo"){
        var Conejo = new Mascota(prop,dir,tel,tip,nomb,enf);
        resultado.innerHTML = `<li>${Conejo.datosPropietario()}.</li>
        <li>${Conejo.tipo}, mientras que el nombre de la mascota es: ${Conejo.nombre_mascota}, y
        la enfermedad es: ${Conejo.enfermedad}.</li>`;
    }

});


let boton = document.getElementById('limpiar');

boton.addEventListener('click',()=>{
    event.preventDefault();
    document.querySelector('form').reset();
    resultado.innerHTML = ' ';
});