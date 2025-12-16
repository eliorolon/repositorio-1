import "dotenv/config";

import express from "express"

document.querySelector("#enviar").addEventListener("click", function () {
    
    const nombre = document.getElementById("NOMBRE").value;
    const dni = document.getElementById("DNI").value;
    const telefono = document.getElementById("TELEFONO").value;
    const resultado = document.getElementById("resultados");

    if (NOMBRE.value == "" || DNI.value == "" || TELEFONO.value === "")  {
        resultado.textContent = "❌ Debes completar todos los campos";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = "✅ Datos enviados correctamente";
    resultado.style.color = "green";
});