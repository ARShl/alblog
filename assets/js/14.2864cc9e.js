(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{351:function(t,s,a){t.exports=a.p+"assets/img/31.7a410964.jpeg"},420:function(t,s,a){"use strict";a.r(s);var e=a(56),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《javascript-悟道》-读书笔记1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《javascript-悟道》-读书笔记1"}},[t._v("#")]),t._v(" 《Javascript 悟道》 读书笔记1")]),t._v(" "),e("img",{attrs:{src:a(351)}}),t._v(" "),e("p",[t._v("  浏览器禁用了非安全域的 navigator.clipboard 对象。安全域包括本地访问与开启TLS安全认证的地址，如 https 协议的地址、127.0.0.1 或 localhost 。")]),t._v(" "),e("hr"),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("数组是被等分成许多小块的连续内存段，每个小块都与一个整数关联，可以通过该整数快速访问对应的小块。如果不考虑性能，数组能做的事，对象基本都能做。")]),t._v(" "),e("li",[t._v("数组几乎就是对象，它们仅有四处不同。1数组有一个神奇的length属性。这种神奇的设定可以让Javascript数组假装自己“真的是数组”。2数组对象都继承自Array.prototype,该原型比Object.prototype多了一些更实用的函数。3数组与对象的写法不同。4虽然javascript眼中的数组和对象几乎一样，但json眼中它们很不一样。如果要判断一个值是不是数组，得使用Array.isArray(value)。")]),t._v(" "),e("li",[t._v("lastIndexOf函数与indexOf类似，只不过前者是从后往前搜索的。与indexOf一样，它也用-1来代表搜索失败。includes函数与indexOf类似，只不过前者不返回序数，而是返回boolean。")]),t._v(" "),e("li",[t._v("reduce函数用于将数组的值归纳为单个值。Javascript中并没有一个像reduceRight一样可以你需要遍历的方法。如果你想逆序遍历，可以先调用reverse方法，但这个函数具有破坏性，无法用在冻结数组中。")]),t._v(" "),e("li",[t._v("Object.freeze是作用于值的，而const则作用于变量。")]),t._v(" "),e("li",[t._v("我不推荐使用switch,if完全可以实现switch可以实现的所有逻辑，甚至可以写的更为紧凑。我们可以用对象来代替switch语句。为不同的case在对象中挂载函数，并在函数里实现该case需要运行的逻辑即可。")])])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" my_little_result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" my_little_object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("case_expression"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("ul",[e("li",[t._v("case_expression会从你的对象中选择对应的函数去执行。如果case_expression并未匹配到符合的函数，那么上面的代码就会触发异常。上面的代码还有一个问题，就是它与this绑定在了一起，所以有潜在的安全隐患。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);