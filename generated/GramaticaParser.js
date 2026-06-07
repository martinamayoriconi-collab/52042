// Generated from Gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GramaticaListener from './GramaticaListener.js';
import GramaticaVisitor from './GramaticaVisitor.js';

const serializedATN = [4,1,15,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,4,1,
26,8,1,11,1,12,1,27,1,2,1,2,3,2,32,8,2,1,3,1,3,1,3,3,3,37,8,3,1,4,1,4,1,
4,1,4,1,5,1,5,3,5,45,8,5,1,5,1,5,4,5,49,8,5,11,5,12,5,50,1,5,1,5,1,6,1,6,
1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,66,8,7,3,7,68,8,7,1,7,3,7,71,8,7,
1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,77,0,16,1,0,0,0,2,25,1,0,0,0,4,29,1,0,0,
0,6,36,1,0,0,0,8,38,1,0,0,0,10,42,1,0,0,0,12,54,1,0,0,0,14,70,1,0,0,0,16,
21,3,2,1,0,17,18,5,3,0,0,18,20,3,2,1,0,19,17,1,0,0,0,20,23,1,0,0,0,21,19,
1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,1,0,0,0,24,26,3,4,2,0,25,24,1,0,
0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,3,1,0,0,0,29,31,3,6,3,0,
30,32,3,14,7,0,31,30,1,0,0,0,31,32,1,0,0,0,32,5,1,0,0,0,33,37,5,2,0,0,34,
37,3,8,4,0,35,37,3,10,5,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,7,
1,0,0,0,38,39,5,4,0,0,39,40,3,0,0,0,40,41,5,5,0,0,41,9,1,0,0,0,42,44,5,11,
0,0,43,45,5,15,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,48,1,0,0,0,46,49,3,12,
6,0,47,49,5,2,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,
0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,5,12,0,0,53,11,1,0,0,0,54,55,5,2,0,0,
55,56,5,14,0,0,56,57,5,2,0,0,57,13,1,0,0,0,58,71,5,6,0,0,59,71,5,7,0,0,60,
71,5,8,0,0,61,62,5,9,0,0,62,67,5,1,0,0,63,65,5,13,0,0,64,66,5,1,0,0,65,64,
1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,63,1,0,0,0,67,68,1,0,0,0,68,69,1,
0,0,0,69,71,5,10,0,0,70,58,1,0,0,0,70,59,1,0,0,0,70,60,1,0,0,0,70,61,1,0,
0,0,71,15,1,0,0,0,10,21,27,31,36,44,48,50,65,67,70];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GramaticaParser extends antlr4.Parser {

    static grammarFileName = "Gramatica.g4";
    static literalNames = [ null, null, null, "'|'", "'('", "')'", "'*'", 
                            "'+'", "'?'", "'{'", "'}'", "'['", "']'", "','", 
                            "'-'", "'^'" ];
    static symbolicNames = [ null, "NUMBER", "CHAR", "BARRA", "LPAR", "RPAR", 
                             "MULT", "SUM", "QUES", "LKEY", "RKEY", "LCOR", 
                             "RCOR", "COMA", "BALTA", "EXP" ];
    static ruleNames = [ "regex", "term", "factor", "base", "group", "class", 
                         "range", "quantifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GramaticaParser.ruleNames;
        this.literalNames = GramaticaParser.literalNames;
        this.symbolicNames = GramaticaParser.symbolicNames;
    }



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GramaticaParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.term();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 17;
	            this.match(GramaticaParser.BARRA);
	            this.state = 18;
	            this.term();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GramaticaParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.factor();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2068) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GramaticaParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.base();
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 960) !== 0)) {
	            this.state = 30;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GramaticaParser.RULE_base);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.match(GramaticaParser.CHAR);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.group();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.class_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GramaticaParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(GramaticaParser.LPAR);
	        this.state = 39;
	        this.regex();
	        this.state = 40;
	        this.match(GramaticaParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_() {
	    let localctx = new ClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GramaticaParser.RULE_class);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(GramaticaParser.LCOR);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 43;
	            this.match(GramaticaParser.EXP);
	        }

	        this.state = 48; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 48;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 46;
	                this.range();
	                break;

	            case 2:
	                this.state = 47;
	                this.match(GramaticaParser.CHAR);
	                break;

	            }
	            this.state = 50; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	        this.state = 52;
	        this.match(GramaticaParser.RCOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GramaticaParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(GramaticaParser.CHAR);
	        this.state = 55;
	        this.match(GramaticaParser.BALTA);
	        this.state = 56;
	        this.match(GramaticaParser.CHAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GramaticaParser.RULE_quantifier);
	    var _la = 0;
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.match(GramaticaParser.MULT);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.match(GramaticaParser.SUM);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.match(GramaticaParser.QUES);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.match(GramaticaParser.LKEY);
	            this.state = 62;
	            this.match(GramaticaParser.NUMBER);
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 63;
	                this.match(GramaticaParser.COMA);
	                this.state = 65;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===1) {
	                    this.state = 64;
	                    this.match(GramaticaParser.NUMBER);
	                }

	            }

	            this.state = 69;
	            this.match(GramaticaParser.RKEY);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GramaticaParser.EOF = antlr4.Token.EOF;
GramaticaParser.NUMBER = 1;
GramaticaParser.CHAR = 2;
GramaticaParser.BARRA = 3;
GramaticaParser.LPAR = 4;
GramaticaParser.RPAR = 5;
GramaticaParser.MULT = 6;
GramaticaParser.SUM = 7;
GramaticaParser.QUES = 8;
GramaticaParser.LKEY = 9;
GramaticaParser.RKEY = 10;
GramaticaParser.LCOR = 11;
GramaticaParser.RCOR = 12;
GramaticaParser.COMA = 13;
GramaticaParser.BALTA = 14;
GramaticaParser.EXP = 15;

GramaticaParser.RULE_regex = 0;
GramaticaParser.RULE_term = 1;
GramaticaParser.RULE_factor = 2;
GramaticaParser.RULE_base = 3;
GramaticaParser.RULE_group = 4;
GramaticaParser.RULE_class = 5;
GramaticaParser.RULE_range = 6;
GramaticaParser.RULE_quantifier = 7;

class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_regex;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	BARRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GramaticaParser.BARRA);
	    } else {
	        return this.getToken(GramaticaParser.BARRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitRegex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitRegex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_factor;
    }

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_base;
    }

	CHAR() {
	    return this.getToken(GramaticaParser.CHAR, 0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	class_() {
	    return this.getTypedRuleContext(ClassContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_group;
    }

	LPAR() {
	    return this.getToken(GramaticaParser.LPAR, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	RPAR() {
	    return this.getToken(GramaticaParser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_class;
    }

	LCOR() {
	    return this.getToken(GramaticaParser.LCOR, 0);
	};

	RCOR() {
	    return this.getToken(GramaticaParser.RCOR, 0);
	};

	EXP() {
	    return this.getToken(GramaticaParser.EXP, 0);
	};

	range = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeContext);
	    } else {
	        return this.getTypedRuleContext(RangeContext,i);
	    }
	};

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GramaticaParser.CHAR);
	    } else {
	        return this.getToken(GramaticaParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_range;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GramaticaParser.CHAR);
	    } else {
	        return this.getToken(GramaticaParser.CHAR, i);
	    }
	};


	BALTA() {
	    return this.getToken(GramaticaParser.BALTA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_quantifier;
    }

	MULT() {
	    return this.getToken(GramaticaParser.MULT, 0);
	};

	SUM() {
	    return this.getToken(GramaticaParser.SUM, 0);
	};

	QUES() {
	    return this.getToken(GramaticaParser.QUES, 0);
	};

	LKEY() {
	    return this.getToken(GramaticaParser.LKEY, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GramaticaParser.NUMBER);
	    } else {
	        return this.getToken(GramaticaParser.NUMBER, i);
	    }
	};


	RKEY() {
	    return this.getToken(GramaticaParser.RKEY, 0);
	};

	COMA() {
	    return this.getToken(GramaticaParser.COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GramaticaParser.RegexContext = RegexContext; 
GramaticaParser.TermContext = TermContext; 
GramaticaParser.FactorContext = FactorContext; 
GramaticaParser.BaseContext = BaseContext; 
GramaticaParser.GroupContext = GroupContext; 
GramaticaParser.ClassContext = ClassContext; 
GramaticaParser.RangeContext = RangeContext; 
GramaticaParser.QuantifierContext = QuantifierContext; 
