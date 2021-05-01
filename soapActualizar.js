var mensaje

function ini(){
    mensaje = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">'+
'<Body>' +
    '<ActualizarEmpleadoRequest xmlns="http://www.example.com/lachamba">' +
        '<id>'+ document.getElementById('id').value +'</id>' +
        '<correo>'+ document.getElementById('correo').value +'</correo>' +
        '<cargo>'+ document.getElementById('cargo').value +'</cargo>' +
        '<salario_mensual>'+ document.getElementById('salario').value +'</salario_mensual>' +
        '<hora_entrada>'+ document.getElementById('entrada').value +'</hora_entrada>' +
        '<hora_salida>'+ document.getElementById('salida').value +'</hora_salida>' +
    '</ActualizarEmpleadoRequest>' +
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
        window.alert(resul(response.data));
        alert(resul(response.data));
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