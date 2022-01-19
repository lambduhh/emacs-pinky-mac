// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7827){
var map__7828 = p__7827;
var map__7828__$1 = (((((!((map__7828 == null))))?(((((map__7828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7828):map__7828);
var m = map__7828__$1;
var n = cljs.core.get.call(null,map__7828__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7828__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5739__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5739__auto__)){
var ns = temp__5739__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7830_7862 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7831_7863 = null;
var count__7832_7864 = (0);
var i__7833_7865 = (0);
while(true){
if((i__7833_7865 < count__7832_7864)){
var f_7866 = cljs.core._nth.call(null,chunk__7831_7863,i__7833_7865);
cljs.core.println.call(null,"  ",f_7866);


var G__7867 = seq__7830_7862;
var G__7868 = chunk__7831_7863;
var G__7869 = count__7832_7864;
var G__7870 = (i__7833_7865 + (1));
seq__7830_7862 = G__7867;
chunk__7831_7863 = G__7868;
count__7832_7864 = G__7869;
i__7833_7865 = G__7870;
continue;
} else {
var temp__5739__auto___7871 = cljs.core.seq.call(null,seq__7830_7862);
if(temp__5739__auto___7871){
var seq__7830_7872__$1 = temp__5739__auto___7871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7830_7872__$1)){
var c__4556__auto___7873 = cljs.core.chunk_first.call(null,seq__7830_7872__$1);
var G__7874 = cljs.core.chunk_rest.call(null,seq__7830_7872__$1);
var G__7875 = c__4556__auto___7873;
var G__7876 = cljs.core.count.call(null,c__4556__auto___7873);
var G__7877 = (0);
seq__7830_7862 = G__7874;
chunk__7831_7863 = G__7875;
count__7832_7864 = G__7876;
i__7833_7865 = G__7877;
continue;
} else {
var f_7878 = cljs.core.first.call(null,seq__7830_7872__$1);
cljs.core.println.call(null,"  ",f_7878);


var G__7879 = cljs.core.next.call(null,seq__7830_7872__$1);
var G__7880 = null;
var G__7881 = (0);
var G__7882 = (0);
seq__7830_7862 = G__7879;
chunk__7831_7863 = G__7880;
count__7832_7864 = G__7881;
i__7833_7865 = G__7882;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7883 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7883);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7883)))?cljs.core.second.call(null,arglists_7883):arglists_7883));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7834_7884 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7835_7885 = null;
var count__7836_7886 = (0);
var i__7837_7887 = (0);
while(true){
if((i__7837_7887 < count__7836_7886)){
var vec__7848_7888 = cljs.core._nth.call(null,chunk__7835_7885,i__7837_7887);
var name_7889 = cljs.core.nth.call(null,vec__7848_7888,(0),null);
var map__7851_7890 = cljs.core.nth.call(null,vec__7848_7888,(1),null);
var map__7851_7891__$1 = (((((!((map__7851_7890 == null))))?(((((map__7851_7890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7851_7890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7851_7890):map__7851_7890);
var doc_7892 = cljs.core.get.call(null,map__7851_7891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7893 = cljs.core.get.call(null,map__7851_7891__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7889);

cljs.core.println.call(null," ",arglists_7893);

if(cljs.core.truth_(doc_7892)){
cljs.core.println.call(null," ",doc_7892);
} else {
}


var G__7894 = seq__7834_7884;
var G__7895 = chunk__7835_7885;
var G__7896 = count__7836_7886;
var G__7897 = (i__7837_7887 + (1));
seq__7834_7884 = G__7894;
chunk__7835_7885 = G__7895;
count__7836_7886 = G__7896;
i__7837_7887 = G__7897;
continue;
} else {
var temp__5739__auto___7898 = cljs.core.seq.call(null,seq__7834_7884);
if(temp__5739__auto___7898){
var seq__7834_7899__$1 = temp__5739__auto___7898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7834_7899__$1)){
var c__4556__auto___7900 = cljs.core.chunk_first.call(null,seq__7834_7899__$1);
var G__7901 = cljs.core.chunk_rest.call(null,seq__7834_7899__$1);
var G__7902 = c__4556__auto___7900;
var G__7903 = cljs.core.count.call(null,c__4556__auto___7900);
var G__7904 = (0);
seq__7834_7884 = G__7901;
chunk__7835_7885 = G__7902;
count__7836_7886 = G__7903;
i__7837_7887 = G__7904;
continue;
} else {
var vec__7853_7905 = cljs.core.first.call(null,seq__7834_7899__$1);
var name_7906 = cljs.core.nth.call(null,vec__7853_7905,(0),null);
var map__7856_7907 = cljs.core.nth.call(null,vec__7853_7905,(1),null);
var map__7856_7908__$1 = (((((!((map__7856_7907 == null))))?(((((map__7856_7907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7856_7907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7856_7907):map__7856_7907);
var doc_7909 = cljs.core.get.call(null,map__7856_7908__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7910 = cljs.core.get.call(null,map__7856_7908__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7906);

cljs.core.println.call(null," ",arglists_7910);

if(cljs.core.truth_(doc_7909)){
cljs.core.println.call(null," ",doc_7909);
} else {
}


var G__7911 = cljs.core.next.call(null,seq__7834_7899__$1);
var G__7912 = null;
var G__7913 = (0);
var G__7914 = (0);
seq__7834_7884 = G__7911;
chunk__7835_7885 = G__7912;
count__7836_7886 = G__7913;
i__7837_7887 = G__7914;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5739__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5739__auto__)){
var fnspec = temp__5739__auto__;
cljs.core.print.call(null,"Spec");

var seq__7858 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7859 = null;
var count__7860 = (0);
var i__7861 = (0);
while(true){
if((i__7861 < count__7860)){
var role = cljs.core._nth.call(null,chunk__7859,i__7861);
var temp__5739__auto___7915__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5739__auto___7915__$1)){
var spec_7916 = temp__5739__auto___7915__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7916));
} else {
}


var G__7917 = seq__7858;
var G__7918 = chunk__7859;
var G__7919 = count__7860;
var G__7920 = (i__7861 + (1));
seq__7858 = G__7917;
chunk__7859 = G__7918;
count__7860 = G__7919;
i__7861 = G__7920;
continue;
} else {
var temp__5739__auto____$1 = cljs.core.seq.call(null,seq__7858);
if(temp__5739__auto____$1){
var seq__7858__$1 = temp__5739__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7858__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7858__$1);
var G__7921 = cljs.core.chunk_rest.call(null,seq__7858__$1);
var G__7922 = c__4556__auto__;
var G__7923 = cljs.core.count.call(null,c__4556__auto__);
var G__7924 = (0);
seq__7858 = G__7921;
chunk__7859 = G__7922;
count__7860 = G__7923;
i__7861 = G__7924;
continue;
} else {
var role = cljs.core.first.call(null,seq__7858__$1);
var temp__5739__auto___7925__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5739__auto___7925__$2)){
var spec_7926 = temp__5739__auto___7925__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7926));
} else {
}


var G__7927 = cljs.core.next.call(null,seq__7858__$1);
var G__7928 = null;
var G__7929 = (0);
var G__7930 = (0);
seq__7858 = G__7927;
chunk__7859 = G__7928;
count__7860 = G__7929;
i__7861 = G__7930;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5739__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5739__auto__)){
var msg = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5739__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5739__auto__)){
var ed = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__7931 = cljs.core.conj.call(null,via,t);
var G__7932 = cljs.core.ex_cause.call(null,t);
via = G__7931;
t = G__7932;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5739__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5739__auto__)){
var root_msg = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5739__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5739__auto__)){
var data = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5739__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5739__auto__)){
var phase = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__7935 = datafied_throwable;
var map__7935__$1 = (((((!((map__7935 == null))))?(((((map__7935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7935):map__7935);
var via = cljs.core.get.call(null,map__7935__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__7935__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__7935__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__7936 = cljs.core.last.call(null,via);
var map__7936__$1 = (((((!((map__7936 == null))))?(((((map__7936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7936):map__7936);
var type = cljs.core.get.call(null,map__7936__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__7936__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__7936__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__7937 = data;
var map__7937__$1 = (((((!((map__7937 == null))))?(((((map__7937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7937):map__7937);
var problems = cljs.core.get.call(null,map__7937__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__7937__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__7937__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__7938 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__7938__$1 = (((((!((map__7938 == null))))?(((((map__7938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7938):map__7938);
var top_data = map__7938__$1;
var source = cljs.core.get.call(null,map__7938__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__7943 = phase;
var G__7943__$1 = (((G__7943 instanceof cljs.core.Keyword))?G__7943.fqn:null);
switch (G__7943__$1) {
case "read-source":
var map__7944 = data;
var map__7944__$1 = (((((!((map__7944 == null))))?(((((map__7944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7944):map__7944);
var line = cljs.core.get.call(null,map__7944__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7944__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__7946 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__7946__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7946,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7946);
var G__7946__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7946__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7946__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7946__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7946__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__7947 = top_data;
var G__7947__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7947,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7947);
var G__7947__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7947__$1);
var G__7947__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7947__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7947__$2);
var G__7947__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7947__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7947__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7947__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7947__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__7948 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7948,(0),null);
var method = cljs.core.nth.call(null,vec__7948,(1),null);
var file = cljs.core.nth.call(null,vec__7948,(2),null);
var line = cljs.core.nth.call(null,vec__7948,(3),null);
var G__7951 = top_data;
var G__7951__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__7951,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__7951);
var G__7951__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__7951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__7951__$1);
var G__7951__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__7951__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__7951__$2);
var G__7951__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7951__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7951__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7951__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7951__$4;
}

break;
case "execution":
var vec__7952 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7952,(0),null);
var method = cljs.core.nth.call(null,vec__7952,(1),null);
var file = cljs.core.nth.call(null,vec__7952,(2),null);
var line = cljs.core.nth.call(null,vec__7952,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__7934_SHARP_){
var or__4126__auto__ = (p1__7934_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__7934_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__7955 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__7955__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__7955,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__7955);
var G__7955__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7955__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7955__$1);
var G__7955__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__7955__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__7955__$2);
var G__7955__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__7955__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__7955__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7955__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7955__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7943__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__7959){
var map__7960 = p__7959;
var map__7960__$1 = (((((!((map__7960 == null))))?(((((map__7960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7960):map__7960);
var triage_data = map__7960__$1;
var phase = cljs.core.get.call(null,map__7960__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__7960__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__7960__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7960__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__7960__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__7960__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__7960__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__7960__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__7962 = phase;
var G__7962__$1 = (((G__7962 instanceof cljs.core.Keyword))?G__7962.fqn:null);
switch (G__7962__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7963_7972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7964_7973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7965_7974 = true;
var _STAR_print_fn_STAR__temp_val__7966_7975 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7965_7974);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7966_7975);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7957_SHARP_){
return cljs.core.dissoc.call(null,p1__7957_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7964_7973);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7963_7972);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7967_7976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7968_7977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7969_7978 = true;
var _STAR_print_fn_STAR__temp_val__7970_7979 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7969_7978);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7970_7979);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7958_SHARP_){
return cljs.core.dissoc.call(null,p1__7958_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7968_7977);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7967_7976);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7962__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
