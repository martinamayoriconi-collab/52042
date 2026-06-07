import antlr4 from 'antlr4';

export default class GramaticaErrorListener extends antlr4.error.ErrorListener {

    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push({
            recognizer,
            line,
            column,
            msg
        });
        console.log(recognizer.constructor.name);
        if (recognizer.constructor.name === 'GramaticaLexer') {
            console.error(
                `Error lexico en la línea ${line}:${column} -> ${msg}`
            );

        }else if (recognizer.constructor.name === 'GramaticaParser') {
            console.error(
            `Error sintactico en la línea ${line}:${column} -> ${msg}`
            );
        }
    }
}