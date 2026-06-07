Construccion de un Analizador con ANTLR4 y JavaScript
Tema: 25914_14
Se proporciona una gramática de notación EBNF que describe un lenguaje específico. 
Utilizando ANTLR4 con JavaScript, implemente un analizador que procese un archivo de entrada input.txt con código fuente 
escrito en dicho lenguaje.

Gramática en EBNF

regex = term [“|” regex ]
term = {factor}+
factor = base [quantifier]
base = char | group | class
group = “(“ regex “)”
class = “[“ “^”? {range | char}+ “]”
range = char “-” char
quantifier = “*” | “+” | “?” | “{“ number [ “,” [number]] “}”
char = ? cualquier carácter excepto metacaracteres ?

El analizador deberá realizar las siguientes tareas:

1 Análisis léxico y sintáctico: realizar el análisis léxico y sintáctico sobre el código fuente e informar si la entrada es correcta o contiene errores. En caso de errores, indicar la línea en la que ocurren y la causa del problema.
2. Tabla de lexemas-tokens: Generar una tabla que contenga los lexemas y sus respectivos tokens reconocidos durante el análisis léxico.
3. Árbol de análisis sintáctico: Construir y mostrar el árbol de análisis sintáctico concreto de la entrada. Puede representarse en forma de texto.
4. Interpretación: Traducir el código fuente al lenguaje javascript y ejecutarlo como lo haría un intérprete básico.

El desarrollo debe entregarse cumpliendo las pautas para la entrega establecidas en el documento Pautas de trabajo para analizador.

Ejemplo de código
(a|b)[0-9]+c?

Traduccion JavaScript
const regex = /(a|b)[0-9]+c?/;

El codigo en este repositorio realiza todas esas pautas a partir de la gramatica dada.
Importante:

Para implementar todos los inputs solicitados (2 validos y 2 invalidos) vaya cambiando el campo de la linea 28 del index.js con valor actual "input_Valido1.txt" por los distintos inputs
input_Valido1.txt
input_Valido2.txt
input_Invalido1.txt
input_Invalido2.txt

Si los inputs fallan le pedira que ingrese uno por consola 

Ademas a la hora de implementar el regex ya traducido le pedira que ingrese una cadena la cual resultara en true o false segun la gramatica del input.

Requisitos para Clonar el proyecto
Node JS v24.15.0
NPM 11.12.1
Visual Studio Code (Con extension ANTLR4) 1.123.0
6a44c352bd24569c417e530095901b649960f9f8
x64
Git git version 2.54.0.windows.1

Procedimiento para clonar el proyecto

Abre la PowerShell(Terminal) de visual studio code y escribe

git clone https://github.com/martinamayoriconi-collab/52042.git

Si tu salida termina en Resolving deltas: 100% (12/12), done.

Ahora pon:

cd 52042

y

code .

Con eso deberia abrirle el proyecto editable en el visual studio code de su dispositivo.
