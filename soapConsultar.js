var mensaje

function ini(){
    mensaje = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">'+
'<Body>' +
    '<EmpleadosRegistradosRequest xmlns="http://www.example.com/lachamba"/>' +
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
    })
    .catch(err => console.log(err))
}

function resul(rXml){
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(rXml, "text/xml");
    //var resultado = xmlDoc.getElementsByTagName("ns2:id")[0].childNodes[0].nodeValue;
    console.log(resultado);
    return resultado;
    //tableCreate();
}

/*function tableCreate(id, nombre){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(var i = 0; i < 3; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl);
}*/