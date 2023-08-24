import{_ as s,o as a,c as n,S as l}from"./chunks/framework.88ce82f1.js";const u=JSON.parse('{"title":"Variables","description":"","frontmatter":{},"headers":[],"relativePath":"grammar/index.md","filePath":"grammar/index.md","lastUpdated":1692871589000}'),e={name:"grammar/index.md"},p=l(`<h1 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h1><p>本章节主要讲述<code>rust</code>语法</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><blockquote><p>变量类型一旦确定就不可变且在声明时必须赋值。(跟js最大的区别)</p></blockquote><p>在<code>rust</code>中有两种声明变量的语法，分别是：</p><ol><li><code>let</code>通常用来生成变量和可变变量（<code>mut</code>）</li><li><code>const</code>通常用来生成不可变常量，常量在声明时需要确定其数据类型）</li></ol><h2 id="不可变变量" tabindex="-1">不可变变量 <a class="header-anchor" href="#不可变变量" aria-label="Permalink to &quot;不可变变量&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>let</code> 直接 声明的变量不可再赋值，再次赋值即会报语法错误(<code>cannot assign twice to immutable variable</code>)。</p></div><div class="language-rs line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li>在<code>rust</code>中：上述语句表达的意思是，将5的<code>所有权</code>交给变量<code>x</code>,</li><li>在其他语言中，则为将5赋值给x。</li></ol><h2 id="可变变量" tabindex="-1">可变变量 <a class="header-anchor" href="#可变变量" aria-label="Permalink to &quot;可变变量&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通过关键字<code>mut</code>即可声明变量是可变的，在上述例子中将不会产生编译错误, 正常输出<code>The value of x is 6</code></p></div><div class="language-rs line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The value of x is:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="未使用变量" tabindex="-1">未使用变量 <a class="header-anchor" href="#未使用变量" aria-label="Permalink to &quot;未使用变量&quot;">​</a></h3><div class="language-rs line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> _x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通常在一些场景下（刚开始书写项目）我们会声明一些暂时使用不到的变量，此时只需要添加<code>_</code>前缀即可避开rust编译器的警告</p><h3 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h3><div class="language-rs line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MAX_NUM</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100_000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过上面的语法 就声明了一个不可变的变量.</p><h3 id="变量遮蔽" tabindex="-1">变量遮蔽 <a class="header-anchor" href="#变量遮蔽" aria-label="Permalink to &quot;变量遮蔽&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>变量遮蔽与可变变量的区别是会重新生成新的变量，再次分配一次内存。</p></div><div class="language-rs line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 在main函数的作用域内对之前的x进行遮蔽</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 在当前的花括号作用域内，对之前的x进行遮蔽</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The value of x in the inner scope is: </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The value of x is: </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>这个程序首先将数值 5 绑定到 x，然后通过重复使用 let x = 来遮蔽之前的 x，并取原来的值加上 1，所以 x 的值变成了 6。第三个 let 语句同样遮蔽前面的 x，取之前的值并乘上 2，得到的 x 最终值为 12。当运行此程序，将输出以下内容：</p><div class="language-rs line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">The</span><span style="color:#A6ACCD;"> value of x </span><span style="color:#F78C6C;">in</span><span style="color:#A6ACCD;"> the inner scope is</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span></span>
<span class="line"><span style="color:#FFCB6B;">The</span><span style="color:#A6ACCD;"> value of x is</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><p><a href="https://doc.rust-lang.org/book/" target="_blank" rel="noreferrer">rust-docs</a><a href="https://kaisery.github.io/trpl-zh-cn/" target="_blank" rel="noreferrer">rust-dpcs-zh</a></p>`,26),o=[p];function r(t,c,i,d,C,y){return a(),n("div",null,o)}const F=s(e,[["render",r]]);export{u as __pageData,F as default};
