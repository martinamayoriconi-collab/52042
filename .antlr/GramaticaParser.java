// Generated from c:/Users/martina/Documents/1. Facultad/2do año/Sintaxis y Semantica de Lenguajes/Analizador 52042/Gramatica.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class GramaticaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NUMBER=1, CHAR=2, BARRA=3, LPAR=4, RPAR=5, MULT=6, SUM=7, QUES=8, LKEY=9, 
		RKEY=10, LCOR=11, RCOR=12, COMA=13, BALTA=14, EXP=15;
	public static final int
		RULE_regex = 0, RULE_term = 1, RULE_factor = 2, RULE_base = 3, RULE_group = 4, 
		RULE_class = 5, RULE_range = 6, RULE_quantifier = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"regex", "term", "factor", "base", "group", "class", "range", "quantifier"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'|'", "'('", "')'", "'*'", "'+'", "'?'", "'{'", "'}'", 
			"'['", "']'", "','", "'-'", "'^'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NUMBER", "CHAR", "BARRA", "LPAR", "RPAR", "MULT", "SUM", "QUES", 
			"LKEY", "RKEY", "LCOR", "RCOR", "COMA", "BALTA", "EXP"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Gramatica.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GramaticaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RegexContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public List<TerminalNode> BARRA() { return getTokens(GramaticaParser.BARRA); }
		public TerminalNode BARRA(int i) {
			return getToken(GramaticaParser.BARRA, i);
		}
		public RegexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regex; }
	}

	public final RegexContext regex() throws RecognitionException {
		RegexContext _localctx = new RegexContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_regex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			term();
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BARRA) {
				{
				{
				setState(17);
				match(BARRA);
				setState(18);
				term();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TermContext extends ParserRuleContext {
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(25); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(24);
				factor();
				}
				}
				setState(27); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 2068L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FactorContext extends ParserRuleContext {
		public BaseContext base() {
			return getRuleContext(BaseContext.class,0);
		}
		public QuantifierContext quantifier() {
			return getRuleContext(QuantifierContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_factor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			base();
			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 960L) != 0)) {
				{
				setState(30);
				quantifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BaseContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(GramaticaParser.CHAR, 0); }
		public GroupContext group() {
			return getRuleContext(GroupContext.class,0);
		}
		public ClassContext class_() {
			return getRuleContext(ClassContext.class,0);
		}
		public BaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_base; }
	}

	public final BaseContext base() throws RecognitionException {
		BaseContext _localctx = new BaseContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_base);
		try {
			setState(36);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CHAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(33);
				match(CHAR);
				}
				break;
			case LPAR:
				enterOuterAlt(_localctx, 2);
				{
				setState(34);
				group();
				}
				break;
			case LCOR:
				enterOuterAlt(_localctx, 3);
				{
				setState(35);
				class_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GroupContext extends ParserRuleContext {
		public TerminalNode LPAR() { return getToken(GramaticaParser.LPAR, 0); }
		public RegexContext regex() {
			return getRuleContext(RegexContext.class,0);
		}
		public TerminalNode RPAR() { return getToken(GramaticaParser.RPAR, 0); }
		public GroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_group; }
	}

	public final GroupContext group() throws RecognitionException {
		GroupContext _localctx = new GroupContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_group);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(LPAR);
			setState(39);
			regex();
			setState(40);
			match(RPAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ClassContext extends ParserRuleContext {
		public TerminalNode LCOR() { return getToken(GramaticaParser.LCOR, 0); }
		public TerminalNode RCOR() { return getToken(GramaticaParser.RCOR, 0); }
		public TerminalNode EXP() { return getToken(GramaticaParser.EXP, 0); }
		public List<RangeContext> range() {
			return getRuleContexts(RangeContext.class);
		}
		public RangeContext range(int i) {
			return getRuleContext(RangeContext.class,i);
		}
		public List<TerminalNode> CHAR() { return getTokens(GramaticaParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(GramaticaParser.CHAR, i);
		}
		public ClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class; }
	}

	public final ClassContext class_() throws RecognitionException {
		ClassContext _localctx = new ClassContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_class);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(LCOR);
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXP) {
				{
				setState(43);
				match(EXP);
				}
			}

			setState(48); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(48);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(46);
					range();
					}
					break;
				case 2:
					{
					setState(47);
					match(CHAR);
					}
					break;
				}
				}
				setState(50); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CHAR );
			setState(52);
			match(RCOR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RangeContext extends ParserRuleContext {
		public List<TerminalNode> CHAR() { return getTokens(GramaticaParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(GramaticaParser.CHAR, i);
		}
		public TerminalNode BALTA() { return getToken(GramaticaParser.BALTA, 0); }
		public RangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_range; }
	}

	public final RangeContext range() throws RecognitionException {
		RangeContext _localctx = new RangeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			match(CHAR);
			setState(55);
			match(BALTA);
			setState(56);
			match(CHAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QuantifierContext extends ParserRuleContext {
		public TerminalNode MULT() { return getToken(GramaticaParser.MULT, 0); }
		public TerminalNode SUM() { return getToken(GramaticaParser.SUM, 0); }
		public TerminalNode QUES() { return getToken(GramaticaParser.QUES, 0); }
		public TerminalNode LKEY() { return getToken(GramaticaParser.LKEY, 0); }
		public List<TerminalNode> NUMBER() { return getTokens(GramaticaParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(GramaticaParser.NUMBER, i);
		}
		public TerminalNode RKEY() { return getToken(GramaticaParser.RKEY, 0); }
		public TerminalNode COMA() { return getToken(GramaticaParser.COMA, 0); }
		public QuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantifier; }
	}

	public final QuantifierContext quantifier() throws RecognitionException {
		QuantifierContext _localctx = new QuantifierContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_quantifier);
		int _la;
		try {
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MULT:
				enterOuterAlt(_localctx, 1);
				{
				setState(58);
				match(MULT);
				}
				break;
			case SUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(59);
				match(SUM);
				}
				break;
			case QUES:
				enterOuterAlt(_localctx, 3);
				{
				setState(60);
				match(QUES);
				}
				break;
			case LKEY:
				enterOuterAlt(_localctx, 4);
				{
				setState(61);
				match(LKEY);
				setState(62);
				match(NUMBER);
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMA) {
					{
					setState(63);
					match(COMA);
					setState(65);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NUMBER) {
						{
						setState(64);
						match(NUMBER);
						}
					}

					}
				}

				setState(69);
				match(RKEY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000fI\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u0014\b\u0000\n\u0000\f\u0000"+
		"\u0017\t\u0000\u0001\u0001\u0004\u0001\u001a\b\u0001\u000b\u0001\f\u0001"+
		"\u001b\u0001\u0002\u0001\u0002\u0003\u0002 \b\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0003\u0003%\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0003\u0005-\b\u0005\u0001"+
		"\u0005\u0001\u0005\u0004\u00051\b\u0005\u000b\u0005\f\u00052\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0003\u0007B\b\u0007\u0003\u0007D\b\u0007\u0001\u0007\u0003\u0007G\b"+
		"\u0007\u0001\u0007\u0000\u0000\b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0000"+
		"\u0000M\u0000\u0010\u0001\u0000\u0000\u0000\u0002\u0019\u0001\u0000\u0000"+
		"\u0000\u0004\u001d\u0001\u0000\u0000\u0000\u0006$\u0001\u0000\u0000\u0000"+
		"\b&\u0001\u0000\u0000\u0000\n*\u0001\u0000\u0000\u0000\f6\u0001\u0000"+
		"\u0000\u0000\u000eF\u0001\u0000\u0000\u0000\u0010\u0015\u0003\u0002\u0001"+
		"\u0000\u0011\u0012\u0005\u0003\u0000\u0000\u0012\u0014\u0003\u0002\u0001"+
		"\u0000\u0013\u0011\u0001\u0000\u0000\u0000\u0014\u0017\u0001\u0000\u0000"+
		"\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015\u0016\u0001\u0000\u0000"+
		"\u0000\u0016\u0001\u0001\u0000\u0000\u0000\u0017\u0015\u0001\u0000\u0000"+
		"\u0000\u0018\u001a\u0003\u0004\u0002\u0000\u0019\u0018\u0001\u0000\u0000"+
		"\u0000\u001a\u001b\u0001\u0000\u0000\u0000\u001b\u0019\u0001\u0000\u0000"+
		"\u0000\u001b\u001c\u0001\u0000\u0000\u0000\u001c\u0003\u0001\u0000\u0000"+
		"\u0000\u001d\u001f\u0003\u0006\u0003\u0000\u001e \u0003\u000e\u0007\u0000"+
		"\u001f\u001e\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 \u0005"+
		"\u0001\u0000\u0000\u0000!%\u0005\u0002\u0000\u0000\"%\u0003\b\u0004\u0000"+
		"#%\u0003\n\u0005\u0000$!\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000"+
		"\u0000$#\u0001\u0000\u0000\u0000%\u0007\u0001\u0000\u0000\u0000&\'\u0005"+
		"\u0004\u0000\u0000\'(\u0003\u0000\u0000\u0000()\u0005\u0005\u0000\u0000"+
		")\t\u0001\u0000\u0000\u0000*,\u0005\u000b\u0000\u0000+-\u0005\u000f\u0000"+
		"\u0000,+\u0001\u0000\u0000\u0000,-\u0001\u0000\u0000\u0000-0\u0001\u0000"+
		"\u0000\u0000.1\u0003\f\u0006\u0000/1\u0005\u0002\u0000\u00000.\u0001\u0000"+
		"\u0000\u00000/\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u000020\u0001"+
		"\u0000\u0000\u000023\u0001\u0000\u0000\u000034\u0001\u0000\u0000\u0000"+
		"45\u0005\f\u0000\u00005\u000b\u0001\u0000\u0000\u000067\u0005\u0002\u0000"+
		"\u000078\u0005\u000e\u0000\u000089\u0005\u0002\u0000\u00009\r\u0001\u0000"+
		"\u0000\u0000:G\u0005\u0006\u0000\u0000;G\u0005\u0007\u0000\u0000<G\u0005"+
		"\b\u0000\u0000=>\u0005\t\u0000\u0000>C\u0005\u0001\u0000\u0000?A\u0005"+
		"\r\u0000\u0000@B\u0005\u0001\u0000\u0000A@\u0001\u0000\u0000\u0000AB\u0001"+
		"\u0000\u0000\u0000BD\u0001\u0000\u0000\u0000C?\u0001\u0000\u0000\u0000"+
		"CD\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EG\u0005\n\u0000\u0000"+
		"F:\u0001\u0000\u0000\u0000F;\u0001\u0000\u0000\u0000F<\u0001\u0000\u0000"+
		"\u0000F=\u0001\u0000\u0000\u0000G\u000f\u0001\u0000\u0000\u0000\n\u0015"+
		"\u001b\u001f$,02ACF";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}