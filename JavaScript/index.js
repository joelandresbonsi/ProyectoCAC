
const monto = document.getElementById("monto");
monto.innerHTML ="$" + 0;


function mostrar(){
  const opcion = document.getElementById("inputCategoria").value; 
    console.log(opcion);
    
    if(opcion == "estudiante"){
        document.getElementById("monto").innerHTML = "$" + (200*0.8);
    }
     if(opcion== "trainee")document.getElementById("monto").innerHTML = "$" + (200*0.5);
     
     if(opcion=="junior"){
        document.getElementById("monto").innerHTML = "$" + (200*0.15);
     }

    
    event.preventDefault();
}


