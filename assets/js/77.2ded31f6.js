(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{530:function(t,a,s){t.exports=s.p+"assets/img/1.5db18cc1.jpeg"},611:function(t,a,s){"use strict";s.r(a);var e=s(56),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git的回退以及合并什么的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git的回退以及合并什么的"}},[t._v("#")]),t._v(" git的回退以及合并什么的")]),t._v(" "),e("img",{attrs:{src:s(530),width:"100%"}}),t._v(" "),e("p",[t._v("  有时候不小心合并了别的分支中的commit.我们需要回退某些提交记录。可以通过reset来操作，reset 会回退到指定commit。这种方式会删除记录，我们最好使用revert命令来操作")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("git revert commit_a "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目中去除commit_a")]),t._v("\ngit revert commit_a commit_b "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目中去除commit_a commit_b")]),t._v("\ngit revert commit_a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit_z "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目中去除commit_a到commit_z之间的提交记录")]),t._v("\n")])])]),e("p",[t._v("  想将commit_a重新合并进项目，我们可以使用cherry-pick,cherry-pick也可以用来合并其他分支的commit记录。他的写法与revert类似。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("git cherry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pick commit_a "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目中合并commit_a")]),t._v("\ngit cherry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pick commit_a commit_b "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目中合并commit_a commit_b")]),t._v("\ngit cherry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pick commit_a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit_z "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目中合并commit_a到commit_z之间的提交记录")]),t._v("\n")])])]),e("p",[t._v("  删除分支的写法，git branch -d testA.删除线上分支的写法git push origin --delete testA.")]),t._v(" "),e("p",[t._v("  上面的图真不错，很有家庭的气息。加油！")])])}),[],!1,null,null,null);a.default=r.exports}}]);