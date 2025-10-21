/* document.querySelector("#timeOut").addEventListener("click", () => {
    console.log(1);
    console.log(2);
    setTimeout(() => { console.log(3) }, 2000);
    console.log(4);
    console.log(5);
    setTimeout(() => { console.log(6) }, 1000)
    console.log(7);
});

// Promesas

const promesa1 = new Promise(() => { });
console.log(promesa1);

const promesa2 = new Promise((resolve, reject) => {
    resolve("promesa resuelta");
});
console.log(promesa2);

const promesa3 = new Promise((resolve, reject) => {
    reject("promesa rechazada");
});
console.log(promesa3);

const promesa4 = new Promise((res, rej) => {
    setTimeout(() => { rej("error") }, 6000)
});
console.log(promesa4);

promesa4.then((resp) => { console.log(resp) })
.catch((error) => { console.log(error) })
.finally(() => { console.log("proceso de promesa 4 fanlizado") })
 */

/* let num = 7;

console.log("✔️​ inicio de proceso")

const promesa5 = new Promise((res, rej) => {
    setTimeout(() => {
        num += 3;
        console.log("​✅​ suma terminada")
        res(num)
    }, 5000)
})

promesa5.then((resp) => {console.log(resp)})

console.log("☣️​ estado de num: ", num )

 */

/* const promesa6 = () => {
   return new Promise ((res, rej) => {
    console.log("inicio de proceso");
    setTimeout(() => {
        let numAleatorio = Math.random();
        console.log("numero: ", numAleatorio);
        let exito = numAleatorio > 0.5;
        if(exito){
            res("tarea completada");
        } else{
            rej("❌​ la tarea se a rechazado")
        }
    }, 2000)
   }
   )}

   promesa6().then((resp) => {console.log(resp)})
   .catch((error) => {console.log(error)})
   .finally(() =>{console.log("Proceso terminado ​✅​")}) */

// async await

const promesa7 = new Promise((res, rej) => {
    setTimeout(() => {
        //res("proceso exitoso ​✅")
        res("se acepto")
    }, 3000)
})

async function leerPromesa7(){
    try {
        console.log(await promesa7)
    } catch (error) {
        console.log("error: ", error);
    } finally {
        console.log("proceso completado ​✅")
    }
}

leerPromesa7();