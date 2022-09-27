let nota1 = parseInt(prompt("ingresa tu primer nota", 0));

while( isNaN( nota1 ) ){
	nota1 = parseInt(prompt('Introduce un numero',0));  
}

let nota2 = parseInt(prompt("ingresa tu segunda nota", 0));

while( isNaN( nota2 ) ){
	nota2 = parseInt(prompt('Introduce un numero',0));  
}

let promedio = (nota1 + nota2)/2;

if(promedio >= 6){
    alert("Tu promedio es " + promedio + " y estas aprobado")
}else{
    alert("Tu promedio es " + promedio + " y estas desaprobado")
}