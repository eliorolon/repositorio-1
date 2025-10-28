fetch("./data/data.json")
.then((res) => {
    console.log(res);
    if(!res.ok){throw new Error(`error en el fetch: ${res.status} - ${res.statusText}`)}
   return res.json();
})
.then((res) => {
    console.log(res);
    crearVista(res);
})

.catch((error) => {
    console.log("error detectado :" + error)
})

function crearVista(datos){
    let vista =`
        <table>
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>apellido</th>
                    <th>telefono</th>
                    <th>email</th>
                    <th>dirrecion</th>
                </tr>
            </thead>
            <tbody>`;
            datos.forEach((info) => {
                vista += `<tr>
                    <td>${info.nombre}</td>
                    <td>${info.apellido}</td>
                    <td>${info.telefono}</td>
                    <td>${info.mail}</td>
                    <td>${info.direccion}</td>
                </tr>`
            })
                
        ;
vista += ` </tbody> </table>`;
document.querySelector("#salida").innerHTML = vista;
}