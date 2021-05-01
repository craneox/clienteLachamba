var mensaje

function ini(){
    mensaje = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">'+
'<Body>' +
    '<BuscarEmpleadoRequest xmlns="http://www.example.com/lachamba">' +
        '<cargo>'+ document.getElementById('cargo').value +'</cargo>' +
    '</BuscarEmpleadoRequest>' +
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
        //document.getElementById('res').value = resul(response.data);
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
