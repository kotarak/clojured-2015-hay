// START CUSTOM REVEAL.JS INTEGRATION
(function() {
        if( typeof window.addEventListener === 'function' ) {
                var hljs_nodes = document.querySelectorAll( 'pre code' );

                for( var i = 0, len = hljs_nodes.length; i < len; i++ ) {
                        var element = hljs_nodes[i];

                        // trim whitespace if data-trim attribute is present
                        if( element.hasAttribute( 'data-trim' ) && typeof element.innerHTML.trim === 'function' ) {
                                element.innerHTML = element.innerHTML.trim();
                        }

                        // Now escape html unless prevented by author
                        if( ! element.hasAttribute( 'data-noescape' )) {
                                element.innerHTML = element.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;");
                        }

                        // re-highlight when focus is lost (for edited code)
                        element.addEventListener( 'focusout', function( event ) {
                                hljs.highlightBlock( event.currentTarget );
                        }, false );
                }
        }
})();
// END CUSTOM REVEAL.JS INTEGRATION

!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0==n.index}function a(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return y(e)||/no(-?)highlight/.test(e)})[0]}function o(e,t){var n={};for(var r in e)n[r]=e[r];if(t)for(var r in t)n[r]=t[r];return n}function c(e){var t=[];return function r(e,a){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?a+=o.nodeValue.length:1==o.nodeType&&(t.push({event:"start",offset:a,node:o}),a=r(o,a),n(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:o}));return a}(e,0),t}function i(e,r,a){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function c(e){function r(e){return" "+e.nodeName+'="'+t(e.value)+'"'}l+="<"+n(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function i(e){l+="</"+n(e)+">"}function s(e){("start"==e.event?c:i)(e.node)}for(var u=0,l="",f=[];e.length||r.length;){var d=o();if(l+=t(a.substr(u,d[0].offset-u)),u=d[0].offset,d==e){f.reverse().forEach(i);do s(d.splice(0,1)[0]),d=o();while(d==e&&d.length&&d[0].offset==u);f.reverse().forEach(c)}else"start"==d[0].event?f.push(d[0].node):f.pop(),s(d.splice(0,1)[0])}return l+t(a.substr(u))}function s(e){function t(e){return e&&e.source||e}function n(n,r){return RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var i={},s=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");i[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof a.k?s("keyword",a.k):Object.keys(a.k).forEach(function(e){s(e,a.k[e])}),a.k=i}a.lR=n(a.l||/\b[A-Za-z0-9_]+\b/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=n(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=n(a.e)),a.tE=t(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=n(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){u.push(o(e,t))}):u.push("self"==e?a:e)}),a.c=u,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function u(e,n,a,o){function c(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function i(e,t){return r(e.eR,t)?e:e.eW?i(e.parent,t):void 0}function f(e,t){return!a&&r(t.iR,e)}function d(e,t){var n=k.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function p(e,t,n,r){var a=r?"":w.classPrefix,o='<span class="'+a,c=n?"":"</span>";return o+=e+'">',o+t+c}function m(){if(!x.k)return t(j);var e="",n=0;x.lR.lastIndex=0;for(var r=x.lR.exec(j);r;){e+=t(j.substr(n,r.index-n));var a=d(x,r);a?(M+=a[1],e+=p(a[0],t(r[0]))):e+=t(r[0]),n=x.lR.lastIndex,r=x.lR.exec(j)}return e+t(j.substr(n))}function h(){if(x.sL&&!N[x.sL])return t(j);var e=x.sL?u(x.sL,j,!0,E[x.sL]):l(j);return x.r>0&&(M+=e.r),"continuous"==x.subLanguageMode&&(E[x.sL]=e.top),p(e.language,e.value,!1,!0)}function g(){return void 0!==x.sL?h():m()}function b(e,n){var r=e.cN?p(e.cN,"",!0):"";e.rB?(R+=r,j=""):e.eB?(R+=t(n)+r,j=""):(R+=r,j=n),x=Object.create(e,{parent:{value:x}})}function v(e,n){if(j+=e,void 0===n)return R+=g(),0;var r=c(n,x);if(r)return R+=g(),b(r,n),r.rB?0:n.length;var a=i(x,n);if(a){var o=x;o.rE||o.eE||(j+=n),R+=g();do x.cN&&(R+="</span>"),M+=x.r,x=x.parent;while(x!=a.parent);return o.eE&&(R+=t(n)),j="",a.starts&&b(a.starts,""),o.rE?0:n.length}if(f(n,x))throw new Error('Illegal lexeme "'+n+'" for mode "'+(x.cN||"<unnamed>")+'"');return j+=n,n.length||1}var k=y(e);if(!k)throw new Error('Unknown language: "'+e+'"');s(k);for(var x=o||k,E={},R="",L=x;L!=k;L=L.parent)L.cN&&(R=p(L.cN,"",!0)+R);var j="",M=0;try{for(var B,C,I=0;;){if(x.t.lastIndex=I,B=x.t.exec(n),!B)break;C=v(n.substr(I,B.index-I),B[0]),I=B.index+C}v(n.substr(I));for(var L=x;L.parent;L=L.parent)L.cN&&(R+="</span>");return{r:M,value:R,language:e,top:x}}catch(z){if(-1!=z.message.indexOf("Illegal"))return{r:0,value:t(n)};throw z}}function l(e,n){n=n||w.languages||Object.keys(N);var r={r:0,value:t(e)},a=r;return n.forEach(function(t){if(y(t)){var n=u(t,e,!1);n.language=t,n.r>a.r&&(a=n),n.r>r.r&&(a=r,r=n)}}),a.language&&(r.second_best=a),r}function f(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\n/g,"<br>")),e}function d(e,t,n){var r=t?k[t]:n,a=[e.trim()];return e.match(/(\s|^)hljs(\s|$)/)||a.push("hljs"),r&&a.push(r),a.join(" ").trim()}function p(e){var t=a(e);if(!/no(-?)highlight/.test(t)){var n;w.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e;var r=n.textContent,o=t?u(t,r,!0):l(r),s=c(n);if(s.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=i(s,c(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=d(e.className,t,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function m(e){w=o(w,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function g(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function b(t,n){var r=N[t]=n(e);r.aliases&&r.aliases.forEach(function(e){k[e]=t})}function v(){return Object.keys(N)}function y(e){return N[e]||N[k[e]]}var w={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},N={},k={};return e.highlight=u,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=m,e.initHighlighting=h,e.initHighlightingOnLoad=g,e.registerLanguage=b,e.listLanguages=v,e.getLanguage=y,e.inherit=o,e.IR="[a-zA-Z][a-zA-Z0-9_]*",e.UIR="[a-zA-Z_][a-zA-Z0-9_]*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.CLCM={cN:"comment",b:"//",e:"$",c:[e.PWM]},e.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM]},e.HCM={cN:"comment",b:"#",e:"$",c:[e.PWM]},e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("clojure",function(e){var t={built_in:"def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},n="a-zA-Z_\\-!.?+*=<>&#'",r="["+n+"]["+n+"0-9/;:]*",a="[-+]?\\d+(\\.\\d+)?",o={b:r,r:0},c={cN:"number",b:a,r:0},i=e.inherit(e.QSM,{i:null}),s={cN:"comment",b:";",e:"$",r:0},u={cN:"literal",b:/\b(true|false|nil)\b/},l={cN:"collection",b:"[\\[\\{]",e:"[\\]\\}]"},f={cN:"comment",b:"\\^"+r},d={cN:"comment",b:"\\^\\{",e:"\\}"},p={cN:"attribute",b:"[:]"+r},m={cN:"list",b:"\\(",e:"\\)"},h={eW:!0,r:0},g={k:t,l:r,cN:"keyword",b:r,starts:h},b=[g,m,i,f,d,s,p,l,c,u,o];return m.c=[{cN:"comment",b:"comment"},g,h],h.c=b,l.c=b,{aliases:["clj"],i:/\S/,c:b}}),hljs.registerLanguage("clojure-repl",function(){return{c:[{cN:"prompt",b:/^([\w.-]+|\s*#_)=>/,starts:{e:/$/,sL:"clojure",subLanguageMode:"continuous"}}]}});