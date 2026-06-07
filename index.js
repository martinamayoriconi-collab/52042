import GramaticaLexer from "./generated/GramaticaLexer.js";
import GramaticaParser from "./generated/GramaticaParser.js";
import { CustomGramaticaListener } from "./CustomGramaticaListener.js";
import { CustomGramaticaVisitor } from "./CustomGramaticaVisitor.js";
import GramaticaErrorListener from './GramaticaErrorListener.js';
import antlr4 from 'antlr4';
import readline from 'readline';
import fs from 'fs';
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

function leerCadena(promptText = 'Ingrese una cadena: ') {
    return Promise.resolve(prompt(promptText));


    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {

    let input;
    try {
        input = fs.readFileSync('input_Valido1.txt', 'utf8');
    } catch (err) {
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }
    let inputStream = antlr4.CharStreams.fromString(input);
    let lexer = new GramaticaLexer(inputStream);
    let tokenStream = new antlr4.CommonTokenStream(lexer);
    let parser = new GramaticaParser(tokenStream);
    const lexerErrorListener = new GramaticaErrorListener();
    const parserErrorListener = new GramaticaErrorListener();
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);
    parser.addErrorListener(parserErrorListener);

    tokenStream.fill();

    if (lexerErrorListener.errors.length === 0) {
        const tree = parser.regex();

        if (parserErrorListener.errors.length === 0) {
            console.log("\nEntrada válida.");
            const cadena_tree = tree.toStringTree(parser.ruleNames);
            console.log(`Árbol de derivación: ${cadena_tree}`);
            const visitor = new CustomGramaticaVisitor();
            const regexString = visitor.visit(tree);
            const regex = new RegExp(regexString);
            const tokens = tokenStream.tokens;
            console.log("Tabla de Lexemas y Tokens:");
            for (const token of tokens) {
                if (token.type !== antlr4.Token.EOF) {
                    console.log(token.text, "->", GramaticaLexer.symbolicNames[token.type]);
                }
            }
            
            console.log(`Expresión regular generada: ${regex}`);
            let respuesta;
            while (true) {
                console.log("\nIngrese Y si quiere probar una cadena o N para salir.");
                respuesta = (await leerCadena()).toUpperCase();
                if (respuesta === "N") {
                    console.log("Saliendo...");
                    break;
                } else if (respuesta === "Y") {
                    console.log("Ingrese una cadena para probar:");
                    let texto = await leerCadena();
                    console.log(texto, "=>", regex.test(texto));
                } else {
                    console.log("Respuesta no válida. Por favor ingrese Y o N.");
                }
            }
        }
    }

    
}   

await main();
