import{_ as l}from"./儀表板-DCG5MZQC.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,e as a,a as e,b as n,d as o,w as d,r as i,o as f}from"./app-BQvecbWv.js";const g={},m={class:"hint-container tip"},u={class:"hint-container-title"};function h(y,t){const s=i("Badge"),r=i("font");return f(),c("div",null,[t[4]||(t[4]=a('<h2 id="股價的更新" tabindex="-1"><a class="header-anchor" href="#股價的更新"><span>股價的更新</span></a></h2><p>數值以及圖表會因為股價的變動而自動更新儀表板上的數據 ( 如下圖 )<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>',2)),e("figure",null,[t[0]||(t[0]=e("img",{src:l,alt:" 台股訂閱版 ",tabindex:"0",loading:"lazy"},null,-1)),e("figcaption",null,[n(s,{type:"tip",text:"台股訂閱版"})])]),t[5]||(t[5]=e("ul",null,[e("li",null,"無須任何動作，只要打開試算表就會自己更新"),e("li",null,"也因此在剛開打試算表時會需要讓試算表更新一下")],-1)),e("div",m,[e("p",u,[t[2]||(t[2]=o("更新股票的股價並")),n(r,{color:"red"},{default:d(()=>t[1]||(t[1]=[o("非即時")])),_:1}),t[3]||(t[3]=o("，有時間上的落差"))])]),t[6]||(t[6]=a('<h3 id="若發現有股票沒有股票價格" tabindex="-1"><a class="header-anchor" href="#若發現有股票沒有股票價格"><span>若發現有股票沒有股票價格</span></a></h3><p>不用擔心，等待一段時間即可~<br> 試算表會自動持續更新股票價格，只不過這次更新時剛好某檔股票取價失敗而已</p><h3 id="取價失敗原因" tabindex="-1"><a class="header-anchor" href="#取價失敗原因"><span>取價失敗原因</span></a></h3><ol><li>可能是查詢網站在這一次查詢價格時沒有回應</li><li>查詢次數限制在短時間內達到 Google 的查詢次數上限</li></ol><h3 id="降低失敗的方式" tabindex="-1"><a class="header-anchor" href="#降低失敗的方式"><span>降低失敗的方式</span></a></h3><p>試算表為了降低抓不到股價的情況發生做了以下的優化</p><ol><li>多個取價來源 ➡️ 有 Google、API、3 個查詢網站。共 5 種來源</li><li>改善取價結構 ➡️ 每檔股票的現價都是在股票代號分頁，且前面取價失敗才會往後嘗試。大幅降低總查詢次數</li><li>自製取價 API ➡️ 網路取價是屬於爬蟲技術，而 API 屬於不同技術 ( 方式不同 )。透過不同方式降低失敗機率</li></ol><h4 id="註釋" tabindex="-1"><a class="header-anchor" href="#註釋"><span>註釋</span></a></h4><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>圖表的變化<br> 圖表的截圖期間內沒有新的股票交易，所以持股數、投入成本、已實現損益並不會產生變化。僅模擬顯示因股價所產生的變化 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',10))])}const b=p(g,[["render",h]]),B=JSON.parse(`{"path":"/guide/feature/%E8%87%AA%E5%8B%95%E6%9B%B4%E6%96%B0%E8%82%A1%E7%A5%A8%E6%88%90%E4%BA%A4%E5%83%B9.html","title":"自動更新股票成交價","lang":"zh-TW","frontmatter":{"title":"自動更新股票成交價","icon":"cloud-arrow-down","order":1,"description":"股價的更新 數值以及圖表會因為股價的變動而自動更新儀表板上的數據 ( 如下圖 )[1] 台股訂閱版 無須任何動作，只要打開試算表就會自己更新 也因此在剛開打試算表時會需要讓試算表更新一下 更新股票的股價並，有時間上的落差 若發現有股票沒有股票價格 不用擔心，等待一段時間即可~ 試算表會自動持續更新股票價格，只不過這次更新時剛好某檔股票取價失敗而已 取價...","head":[["meta",{"property":"og:url","content":"https://94lanyu.github.io/guide/feature/%E8%87%AA%E5%8B%95%E6%9B%B4%E6%96%B0%E8%82%A1%E7%A5%A8%E6%88%90%E4%BA%A4%E5%83%B9.html"}],["meta",{"property":"og:site_name","content":"全自動股票管理表"}],["meta",{"property":"og:title","content":"自動更新股票成交價"}],["meta",{"property":"og:description","content":"股價的更新 數值以及圖表會因為股價的變動而自動更新儀表板上的數據 ( 如下圖 )[1] 台股訂閱版 無須任何動作，只要打開試算表就會自己更新 也因此在剛開打試算表時會需要讓試算表更新一下 更新股票的股價並，有時間上的落差 若發現有股票沒有股票價格 不用擔心，等待一段時間即可~ 試算表會自動持續更新股票價格，只不過這次更新時剛好某檔股票取價失敗而已 取價..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://94lanyu.github.io/images/台股訂閱版/儀表板.gif"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-07-12T09:37:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-12T09:37:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自動更新股票成交價\\",\\"image\\":[\\"https://94lanyu.github.io/images/台股訂閱版/儀表板.gif\\"],\\"dateModified\\":\\"2023-07-12T09:37:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"懶魚\\",\\"url\\":\\"\\"}]}"],["script",{"async":true,"src":"https://www.googletagmanager.com/gtag/js?id=G-RY2H2KJXY8"}],["script",{},"\\n                          window.dataLayer = window.dataLayer || [];\\n                          function gtag(){dataLayer.push(arguments);}\\n                          gtag('js', new Date());\\n                          gtag('config', 'G-RY2H2KJXY8');\\n                        "]]},"git":{"createdTime":1687835526000,"updatedTime":1689154663000,"contributors":[{"name":"lazypisces","username":"lazypisces","email":"102859733+lazypisces@users.noreply.github.com","commits":2,"url":"https://github.com/lazypisces"}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"guide/feature/自動更新股票成交價.md","localizedDate":"2023年6月27日","excerpt":"<h2>股價的更新</h2>\\n<p>數值以及圖表會因為股價的變動而自動更新儀表板上的數據 ( 如下圖 )<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></p>\\n<figure><img src=\\"/images/台股訂閱版/儀表板.gif\\" alt=\\" 台股訂閱版 \\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>  </figcaption></figure>\\n<ul>\\n<li>無須任何動作，只要打開試算表就會自己更新</li>\\n<li>也因此在剛開打試算表時會需要讓試算表更新一下</li>\\n</ul>","autoDesc":true}`);export{b as comp,B as data};
