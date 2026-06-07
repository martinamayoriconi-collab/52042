import { Parser } from "antlr4";
import GramaticaVisitor from "./generated/GramaticaVisitor.js";
import GramaticaParser from "./generated/GramaticaParser.js";
export class CustomGramaticaVisitor extends GramaticaVisitor {

    visitRegex(ctx) {
        const resultado = ctx.term().map(term => this.visit(term)).join('|');
        return resultado;
    }

    visitTerm(ctx) {
        const resultado = ctx.factor().map(f => this.visit(f)).join('');
        return resultado;
    }


    visitFactor(ctx) {
        let resultado = this.visit(ctx.base());


        if (ctx.quantifier()) {
            resultado += this.visit(ctx.quantifier());
        }
;
        return resultado;
    }


    visitBase(ctx) {

        if (ctx.group()) {
            return this.visit(ctx.group());
        }


        if (ctx.class_()) {
        return this.visit(ctx.class_());
        }


        return ctx.getText();
    }






    // Visit a parse tree produced by GramaticaParser#class.
    visitClass(ctx) {
        return ctx.getText();
    }                                                                                                                                                                                                                                                                          SQ




    // Visit a parse tree produced by GramaticaParser#range.
    visitRange(ctx) {
      return ctx.getText();                                                                
    }




    // Visit a parse tree produced by GramaticaParser#quantifier.
    visitQuantifier(ctx) {
    return ctx.getText();
    }


}