/*
Challenge

Usando Streams crea una función en Node que reciba una cadena de texto y la convierta en camel case usando streams.

"hola como estas"
"holaComoEstas"

¿Que quiero?

Una función stringToCamelCase() que cuando reciba un string cualquiera lo convierta en CameCase, usando Streams.

El proceso para hacerlo realidad.

1. Recibo una cadena de texto.
2. Detecto los separadores: espacios en blanco o guiones que separan las palabras.
3. A la primera letra de la palabra que está a la derecha del separador la paso a mayusculas.
4. Creo un nuevo string donde elimino el separador.
5. Retorno la nueva cadena de texto.

Una vez hecho esto creare un WritableStream desde donde consumire los datos y los devolveré transformados.

*/
