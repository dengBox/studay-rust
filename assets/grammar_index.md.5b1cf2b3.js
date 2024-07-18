import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aa94cc63.js";const b=JSON.parse('{"title":"Variables","description":"","frontmatter":{},"headers":[],"relativePath":"grammar/index.md","filePath":"grammar/index.md","lastUpdated":1721282063000}'),p={name:"grammar/index.md"},o=l(`<h1 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h1><p>本章节主要讲述<code>rust</code>变量</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><blockquote><p>变量类型一旦确定就不可变且在声明时必须赋值。(跟js最大的区别)</p></blockquote><p>在<code>rust</code>中有两种声明变量的语法，分别是：</p><ol><li><code>let</code>通常用来生成变量和可变变量（<code>mut</code>）</li><li><code>const</code>通常用来生成不可变常量，常量在声明时需要确定其数据类型）</li></ol><h2 id="不可变变量" tabindex="-1">不可变变量 <a class="header-anchor" href="#不可变变量" aria-label="Permalink to &quot;不可变变量&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>let</code> 直接 声明的变量不可再赋值，再次赋值即会报语法错误(<code>cannot assign twice to immutable variable</code>)。</p></div><div class="language-rs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#6A737D;"> // [!code  error]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#6A737D;"> // [!code  error]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>在<code>rust</code>中：上述语句表达的意思是，将5的<code>所有权</code>交给变量<code>x</code>,</li><li>在其他语言中，则为将<code>5</code>赋值给<code>x</code>。</li></ul><h2 id="可变变量" tabindex="-1">可变变量 <a class="header-anchor" href="#可变变量" aria-label="Permalink to &quot;可变变量&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通过关键字<code>mut</code>即可声明变量是可变的，在上述例子中将不会产生编译错误, 正常输出<code>The value of x is 6</code></p></div><div class="language-rs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span></span>
<span class="line"><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The value of x is:&quot;</span><span style="color:#E1E4E8;">, x)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">mut</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span></span>
<span class="line"><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The value of x is:&quot;</span><span style="color:#24292E;">, x)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="未使用变量" tabindex="-1">未使用变量 <a class="header-anchor" href="#未使用变量" aria-label="Permalink to &quot;未使用变量&quot;">​</a></h2><div class="language-rs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> _x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> _x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>通常在一些场景下（刚开始书写项目）我们会声明一些暂时使用不到的变量，此时只需要添加<code>_</code>前缀即可避开rust编译器的警告</li><li>添加<code>#[warn(unused_variables)]</code></li></ul><h2 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h2><div class="language-rs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MAX_NUM</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">u32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100_000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MAX_NUM</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">u32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100_000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过上面的语法 就声明了一个不可变的变量.</p><h2 id="变量遮蔽" tabindex="-1">变量遮蔽 <a class="header-anchor" href="#变量遮蔽" aria-label="Permalink to &quot;变量遮蔽&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>变量遮蔽与可变变量的区别是会重新生成新的变量，再次分配一次内存。</p></div><div class="language-rs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 在main函数的作用域内对之前的x进行遮蔽</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在当前的花括号作用域内，对之前的x进行遮蔽</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The value of x in the inner scope is: {}&quot;</span><span style="color:#E1E4E8;">, x);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The value of x is: {}&quot;</span><span style="color:#E1E4E8;">, x);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 在main函数的作用域内对之前的x进行遮蔽</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在当前的花括号作用域内，对之前的x进行遮蔽</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The value of x in the inner scope is: {}&quot;</span><span style="color:#24292E;">, x);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The value of x is: {}&quot;</span><span style="color:#24292E;">, x);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>这个程序首先将数值<code>5</code>绑定到<code>x</code>，然后通过重复使用<code>let x = </code>来遮蔽之前的<code>x</code>，并取原来的值加上<code>1</code>，所以<code>x</code>的值变成了 6。第三个<code>let</code>语句同样遮蔽前面的<code>x</code>，取之前的值并乘上<code>2</code>，得到的<code>x</code>最终值为<code>12</code>。当运行此程序，将输出以下内容：</p><div class="language-rs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">The</span><span style="color:#E1E4E8;"> value of x </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> the inner scope is</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span></span>
<span class="line"><span style="color:#B392F0;">The</span><span style="color:#E1E4E8;"> value of x is</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">The</span><span style="color:#24292E;"> value of x </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> the inner scope is</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span></span>
<span class="line"><span style="color:#6F42C1;">The</span><span style="color:#24292E;"> value of x is</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="变量解构" tabindex="-1">变量解构 <a class="header-anchor" href="#变量解构" aria-label="Permalink to &quot;变量解构&quot;">​</a></h2><p><code>let</code>表达式不仅仅用于变量的绑定，还能进行复杂变量的解构：从一个相对复杂的变量中，匹配出该变量的一部分内容</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>assert_eq</code>宏可以用于判断两个表达式返回的值是否相等</p></div><div class="language-rs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> (a, </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> b)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">bool</span><span style="color:#E1E4E8;">,</span><span style="color:#B392F0;">bool</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // a = true,不可变; b = false，可变</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;a = {:?}, b = {:?}&quot;</span><span style="color:#E1E4E8;">, a, b);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">assert_eq!</span><span style="color:#E1E4E8;">(a, b);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> (a, </span><span style="color:#D73A49;">mut</span><span style="color:#24292E;"> b)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">bool</span><span style="color:#24292E;">,</span><span style="color:#6F42C1;">bool</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">  // a = true,不可变; b = false，可变</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;a = {:?}, b = {:?}&quot;</span><span style="color:#24292E;">, a, b);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">assert_eq!</span><span style="color:#24292E;">(a, b);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="解构赋值" tabindex="-1">解构赋值 <a class="header-anchor" href="#解构赋值" aria-label="Permalink to &quot;解构赋值&quot;">​</a></h3><p>我们可以在赋值语句的左式中使用元组、切片和结构体模式</p><div class="language-rust vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">i32</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> (a, b, c, d, e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (a, b) </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // _ 代表匹配一个值，但是我们不关心具体的值是什么，因此没有使用一个变量名而是使用了 _</span></span>
<span class="line"><span style="color:#E1E4E8;">    [c, </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">, d, _] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Struct</span><span style="color:#E1E4E8;"> { e, </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Struct</span><span style="color:#E1E4E8;"> { e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">assert_eq!</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">], [a, b, c, d, e]);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">i32</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> (a, b, c, d, e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (a, b) </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // _ 代表匹配一个值，但是我们不关心具体的值是什么，因此没有使用一个变量名而是使用了 _</span></span>
<span class="line"><span style="color:#24292E;">    [c, </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">, d, _] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Struct</span><span style="color:#24292E;"> { e, </span><span style="color:#D73A49;">..</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Struct</span><span style="color:#24292E;"> { e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">assert_eq!</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">], [a, b, c, d, e]);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,31),e=[o];function c(r,t,E,y,i,d){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{b as __pageData,F as default};