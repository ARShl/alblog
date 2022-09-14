(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{350:function(v,_,t){v.exports=t.p+"assets/img/1.d6b0c875.jpeg"},592:function(v,_,t){"use strict";t.r(_);var p=t(56),s=Object(p.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("h1",{attrs:{id:"重构-读书笔记1"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#重构-读书笔记1"}},[v._v("#")]),v._v(" 重构 读书笔记1")]),v._v(" "),p("img",{attrs:{src:t(350)}}),v._v(" "),p("hr"),v._v(" "),p("p",[v._v("  重构技术就是以微小的步伐修改程序。如果你犯下错误，很容易便可发现它。")]),v._v(" "),p("p",[v._v("  完成提炼函数手法后，我会看看提炼出来的函数，看是否能进一步提升其表达能力。一般我做的第一件事就是给一些变量改名，使它们更简洁，比如讲thisAmount重命名为result。")]),v._v(" "),p("p",[v._v("  重构前，查找play变量的代码在每次循环中只执行了一次，而重构后却执行了3词。这次改动还不太可能对性能有严重影响，即便真的有所影响，后续再对一段结构良好的代码进行性能调优，也容易得多。移除局部变量的好处就是做提炼时会简单得多，因为需要操心的局部作用于变少了。")]),v._v(" "),p("p",[v._v("  尽管将函数变量改变成函数声明也是一种重构手法，但我既未为此手法命名，也为将它纳入重构名录。我对提炼得到的函数名称不很满意--format未能清晰地描述其作用。formatAsUSD很表意，但又很长，特别它仅是小范围地被用在一个字符串模版中。所以改成了usd。")]),v._v(" "),p("p",[v._v("  好的命名十分重要，但往往并非唾手可得。只有恰如其分的命名，才能彰显出将大函数分解成小函数的价值。有了好的名称，我就不必通过阅读函数来了解其行为。但要一次把名取好并不容易，因此我会使用当下能想到最好的那个。如果稍后想到更好的，我就会毫不犹豫的换掉它。")]),v._v(" "),p("p",[v._v("  如果有人说他们的代码在重构过程中有一两天时间不可用，基本上可以确定，他们在做的事不是重构。重构与性能优化有很多相似之处：两者都需要修改代码，并且两者都不会改变程序的整体功能。两者的差别在于其目的：重构事未了让代码更容易理解，更易于修改。这可能使程序运行的更快，也可能使程序运行的更慢。在性能优化时，我只关心让程序运行的更快，最终得到的代码可能更难理解和维护，对此我有心理准备。")]),v._v(" "),p("p",[v._v("  使用重构技术开发软件时，我把自己的时间分配给两种截然不同的行为：添加新功能和重构。添加新功能时，我不应该修改既有代码，只管添加新功能。通过添加测试并让测试正常运行，我可以衡量自己的工作进度。重构时我就不能再添加功能，只管调整代码的结构。此时我不应该添加任何测试（除非发现先前遗漏的东西），只在绝对必要（用以处理接口变化）时才修改测试。")]),v._v(" "),p("p",[v._v("  消除重复代码，我就可以确定所有事物和行为在代码中只表述一次，这正是优秀设计的根本。编程的核心就在于准确说出我想要的。然而别忘了，除了计算机外，源码还有其他读者：几个月之后可能会有另一位程序员尝试读我的代码并对其做一些修改。对于代码的理解，可以帮我找到bug。如果对代码进行重构，我就可以深入理解代码的所作所为，并立即把新的理解反映在代码之中。")]),v._v(" "),p("p",[v._v("  需要添加新功能时，内部质量良好的软件让我可以很容易找到在哪里修改，如何修改。良好的模块划分使我只需要理解代码库的一小部分，就可以做出修改。20年前，行业的陈规认为：良好的设计必须在开始编程之前完成，因为一旦开始编写代码，设计就只会逐渐腐败。重构改变了这个图景。现在我们可以改善已有的设计。")]),v._v(" "),p("p",[v._v("  重构的最佳时机就在添加新功能之前。在动手添加新功能之前，我会看看现有的代码库，此时经常会发现：如果对代码结构做一点微调，我的工作会容易得多。")]),v._v(" "),p("p",[v._v("  预备性重构，帮助理解的重构，捡垃圾式的重构都是见机行事的：我并不专门安排一段时间来重构，而是添加功能或修复bug的同时顺便重构。这是我自然的编程流的一部分。不管是添加功能海生修复bug,重构对我当下的任务有帮助，而且让我未来的工作更轻松。这是一件很重要又常被误解的事：重构不是与编程割裂的行为。肮脏的代码必须重构，但漂亮的代码也需要很多重构。")]),v._v(" "),p("p",[v._v("  该怎么跟经理说重构的事？很多经理和客户不具备理解设计耐久性假说的意识，他们不理解代码库的健康对生产率的影响。这种情况下，我会给团队一个较争议的建议，不要告诉经理！")]),v._v(" "),p("p",[v._v("  软件开发者都是专业人士。我们的工作就是尽可能快速创造出高效软件。我的经验告诉我，对于快速创造软件，重构可带来巨大帮助。如果需要添加新功能，而原本设计却又使我无法方便的修改，我发现先重构再添加新功能会更快些。")]),v._v(" "),p("p",[v._v("  听起来我好像一直在提倡重构，但确实有一些不值得重构的情况。如果我看见一块凌乱的代码，但并不需要修改它，那么我就不需要重构它。如果丑陋的代码能被隐藏在一个api之下，我就可以容忍它继续保持丑陋。另一种情况是，如果重写比重构还容易，就别重构了。")]),v._v(" "),p("p",[v._v("  重构的唯一目的就是让我们开发更快，用更少的工作量创造更大的价值。有一种情况确实需要权衡取舍。我有时会看到一个大规模的重构很有必要进行，而马上要添加的功能非常小，这时我会更愿意先把新功能加上，然后再做这次大规模重构。")]),v._v(" "),p("p",[v._v("  有些人试图用整洁的代码，良好的工程实践之类道理理由来论证重构的必要性，我认为这是个陷阱。重构的意义不在于把代码库打磨得闪闪发光，而是纯粹经济角度出发的考量。我们之所以重构，因为它能让我们更快，添加功能更快，修复bug更快。一定要随时记住这一点，与别人交流时也要不断强调这一点。重构应该总是攸经济利益驱动。程序员，经理和客户约理解这一点，好的设计那条曲线就会越经常出现。")]),v._v(" "),p("p",[v._v("  改变不仅仅是修改名字而已。如果你想不出一个好名字，说明背后很可能潜藏着更深的设计问题。为一个恼人的名字所付出的纠结，常常能推动我们对代码进行精简。")]),v._v(" "),p("p",[v._v("  如果你在一个以上的地点看到相同的代码结构，那么可以肯定：设法将它们合而为一，程序会变得更好。一旦有重复代码存在，阅读这些重复的代码时你就必须加倍仔细，留意其间细微的差异。如果要修改重复代码，你必须找出所有的副本来修改。")]),v._v(" "),p("p",[v._v("  我们遵循这样一条原则：每当感觉需要以注释来说明点什么的时候，我们就把需要说明的东西写进一个独立函数中，并以其用途命名。条件表达式和循环常常也是提炼的信号。你可以使用分解条件表达式来处理条件表达式。对于庞大的switch语句，其中的每个分支都应该通过提炼函数编程独立的函数调用。如果有多个switch语句基于同一个条件进行分支选择，就应该使用以多态取代条件表达式。")]),v._v(" "),p("p",[v._v("  良药与毒药的区别在于剂量。有少量的全局数据或许无妨，但数量越多，处理的难度就会指数上升。即便只是少量的数据，我们也愿意将它封装起来，这是在软件演化过程中应对变化的关键所在。")]),v._v(" "),p("p",[v._v("  如果可变数据的值能在其他地方计算出来，这就是一个特别刺鼻的坏味道。它不仅会造成困扰，bug和加班，而且毫无必要。消除这种坏味道的办法很简单，使用以查询取代派生变量即可。")]),v._v(" "),p("p",[v._v("  将总是一起变化的东西放在一块儿。数据和引用这些数据的行为总是一起变化的，但也有例外。如果例外出现，我们就搬移那些行为，保持变化只在一地发生。策略模式和访问者模式使你得以啊轻松修改函数的行为，因为它们将少量需被覆写的行为隔离开来，当然也付出了多一层间接性的代价。")]),v._v(" "),p("p",[v._v("  两个类中相同的字段，许多函数签名中相同的参数。这些总是绑在一起出现的数据真应该拥有属于它们自己的对象。首先找出这些数据以字段形式出现的地方，运用提炼类将它们提炼到一个独立对象中。然后将注意力转移到函数签名上，运用引入参数对象或保持对象完整为它瘦身。一个好的评判办法是：删掉众多数据中的一项。")]),v._v(" "),p("p",[v._v("  字符串是这种坏味道的最佳培养皿，比如，电话号码不只是一串字符。一个体面的类型，至少能包含一致的显示逻辑，在用户界面上撒需要显示时可以使用。")]),v._v(" "),p("p",[v._v("  重复的switch的问题在于：每当你想增加一个选择分支时，必须找到所有的switch,并逐一更新。多态给了我们对抗这种黑暗力量的武器，使我们得到更优雅的代码库。")]),v._v(" "),p("p",[v._v("  我们可以使用以管道取代循环来让这些老古董退休。我们发现，管道操作如（filter和map)可以帮助我们更快看清被处理的元素以及处理它们的动作。")]),v._v(" "),p("p",[v._v("  如果有过长的消息链，采取这种方式，意味着客户端代码将于查找过程中的导航结构紧密耦合。这时候应该使用隐藏委托关系。你可以在消息链的不同位置采用这种重构手法。理论上，你可以重构消息链上的所有的对象，但这么做就会把所有中间对象变成中间人。通常更好的选择是：先观察消息链最终得到的对象是用来干什么的，看看能否以提炼函数把使用该对象的代码提炼到一个独立的函数中。再运用搬移函数把这个函数推入消息链。")])])}),[],!1,null,null,null);_.default=s.exports}}]);