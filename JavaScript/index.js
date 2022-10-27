
const monto = document.getElementById("monto");
monto.innerHTML ="$" + 0;


function mostrar(){
  const opcion = document.getElementById("inputCategoria").value; 
    console.log(opcion);
    const cantidad = document.getElementById("inputCity").value;
    

    if(opcion == "estudiante"){
        document.getElementById("monto").innerHTML = "$" + (parseInt(cantidad)*(200-(200*0.8)));
    }else if(opcion== "trainee"){
      document.getElementById("monto").innerHTML = "$" +(parseInt(cantidad)* (200-(200*0.5)));
    }if(opcion=="junior"){
        document.getElementById("monto").innerHTML = "$" + (parseInt(cantidad)*(200-(200*0.15)));
     }else  if(opcion=="..."){
      document.getElementById("monto").innerHTML = "$0";
   }

    
    event.preventDefault();
}


