var mensaje

function ini(){
    mensaje = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">'+
'<Body>' +
    '<NuevoEmpleadoRequest xmlns="http://www.example.com/lachamba">' +
        '<nombre>'+ document.getElementById('nombre').value +'</nombre>' +
        '<apellido_paterno>'+ document.getElementById('paterno').value +'</apellido_paterno>' +
        '<apellido_materno>'+ document.getElementById('materno').value +'</apellido_materno>' +
        '<correo>'+ document.getElementById('correo').value +'</correo>' +
        '<cargo>'+ document.getElementById('cargo').value +'</cargo>' +
        '<salario_mensual>'+ document.getElementById('salario').value +'</salario_mensual>' +
        '<hora_entrada>'+ document.getElementById('entrada').value +'</hora_entrada>' +
        '<hora_salida>'+ document.getElementById('salida').value +'</hora_salida>' +
    '</NuevoEmpleadoRequest>' +
'</Body>' +
'</Envelope>'
}
function soap(){
    ini()
    axios.post('http://localhost:8080/ws/esquema', mensaje,{
        headers : {
            'Content-Type' : 'text/xml',
            'SOAPAction' : '',
        }
    })
    .then(function(response){
        console.log(response.data);
        document.getElementById('res').value = resul(response.data);
        window.alert(resul(response.data));
    })
    .catch(err => console.log(err))
}

function resul(rXml){
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(rXml, "text/xml");
    var resultado = xmlDoc.getElementsByTagName("ns2:respuesta")[0].childNodes[0].nodeValue;
    console.log(resultado);
    return resultado;
}