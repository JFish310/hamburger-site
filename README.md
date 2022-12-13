# RaiseTech WP副業コース  
最終課題  
ハンバーガーサイト  

## 履歴  
6/8     構成考察  
6/9     環境構築  
--  

6/10    frontページ、マークアップ開始  
6/13    scss側開始  
6/18    中断  
7/6     再開  
7/29    frontページのコーディング終了  
7/30    リファクタリング終了
7/31    質問に答えていただいた箇所のリファクタリング開始  
8/2     リファクタリング終了  
--  

8/3     archiveページ開始  
8/13    archiveページ終了、archive_searchマークアップ終了  
--  

8/19    singleページマークアップ開始  
8/20-23 中断  
8/24    Sass側開始  
8/28    singleページ終了、全体のリファクタリング  
--  

8/29    静的コーディング提出 ⇒ OK  


### frontページ  
【累計】  
構成・設計        1h20m  
環境構築          2h  
マークアップ      1h30m  
Sass             44h10m  
jQuery           4h  
リファクタリング  9h30m  
合計　62h30m  

### archiveページ  
【累計】  
マークアップ      2h15m  
Sass             10h  
合計　12h15m  

### archive_searchページ  
マークアップ      10m  

### singleページ  
【累計】  
マークアップ      45m  
Sass             12h20m  
合計　13h5m  

### pageページ  
マークアップ      5m  

### 全体  
リファクタリング  1h30m  

### 静的コーディング  
合計　89h35m  

**gulp対応**  
- 2022.01・2022.12  合計7h30m
DartSass対応・コンパイル  
Browser-syncにも対応させたかったが、うまくいかないので、ブラウザでの確認はGoLiveのまま。  


***  
## 学習参考サイトや、考察、メモ  
<!-- <dl>
    <dt>M+ FONTSについて</dt>
    <dd><a>http://mplus-webfonts.osdn.jp/</a></dd>
</dl>
<dl>
    <dt>font-weightについて</dt>
    <dd><a>https://yumanoblog.com/xd-css/</a></dd>
</dl>
<dl>
    <dt>検索バーのinput要素のアイコン表示について参照サイト</dt>
    <dd><a>https://www.tsukimi.net/submit-button_font-awesome.html</a></dd>
</dl> -->
<!-- <dl><strong>CSS Grid Layoutについて</strong> -->
<!-- <dl>CSS Grid Layoutについて
    <dt>CSS Grid Layout を極める！（基礎編）</dt>
    <dd><a>https://qiita.com/kura07/items/e633b35e33e43240d363</a></dd>
    <dt>CSS Grid Layout を極める！（場面別編）</dt>
    <dd><a>https://qiita.com/kura07/items/486c19045aab8090d6d9</a></dd>
    <dt>5分で完璧に分かる！CSS Gridの基本的な使い方を解説</dt>
    <dd><a>https://coliss.com/articles/build-websites/operation/css/learn-css-grid-in-5-minutes.html</a></dd>
    <dt>●●一番分かりやすいCSS Grid Layoutの使い方ガイド</dt>
    <dd><a>https://webdesign-trends.net/entry/11086#Grid_LayoutFlexbox</a></dd>
    <dt>CSS Gridレイアウト入門：「fr」でのサイズ指定</dt>
    <dd><a>https://hacknote.jp/archives/26960/</a></dd>
</dl> -->

**M+ FONTSについて**  
http://mplus-webfonts.osdn.jp/  

**font-weightについて**  
https://yumanoblog.com/xd-css/  

**検索バーのinput要素のアイコン表示について参照サイト**  
https://www.tsukimi.net/submit-button_font-awesome.html  



<!-- <dl><strong>CSS Grid Layoutについて</strong> -->
<dl>CSS Grid Layoutについて
    <dt>CSS Grid Layout を極める！（基礎編）</dt>
    <dd><a>https://qiita.com/kura07/items/e633b35e33e43240d363</a></dd>
    <dt>CSS Grid Layout を極める！（場面別編）</dt>
    <dd><a>https://qiita.com/kura07/items/486c19045aab8090d6d9</a></dd>
    <dt>5分で完璧に分かる！CSS Gridの基本的な使い方を解説</dt>
    <dd><a>https://coliss.com/articles/build-websites/operation/css/learn-css-grid-in-5-minutes.html</a></dd>
    <dt>---->>> 一番分かりやすいCSS Grid Layoutの使い方ガイド</dt>
    <dd><a>https://webdesign-trends.net/entry/11086#Grid_LayoutFlexbox</a></dd>
    <dt>CSS Gridレイアウト入門：「fr」でのサイズ指定</dt>
    <dd><a>https://hacknote.jp/archives/26960/</a></dd>
</dl>

**検索バーの入力フォームとボタンが揃わない**  
---->>>     入力フォームに「vertical-align : top;」の設定  
            一応、検索ボタンにも設定する  

**【CSS】背景のみ透過させて表示する方法**  
https://www.design-memo.com/coding/css-rgba-opacity  
---->>> https://eguweb.jp/css/overlay-transparent-black-colors  
https://techacademy.jp/magazine/29811  
https://kubogen.com/web-programing-211/  


**罫線について（1本だけ線を引くCSS）**  
https://www.nishishi.com/css/line-border-hr.html  
https://html-coding.co.jp/annex/dictionary/html/hr/  

Flexboxで最後の1つだけ右寄せや下寄せにする方法！  
https://webkore.site/flexbox-right-justified/  

displayプロパティのデフォルト値一覧  
https://programmercollege.jp/column/4914/  

**背景画像のレスポンシブについて**  
```
背景画像の比率を保ったまま、レスポンシブ対応する  
https://taneppa.net/responsive_background_image/  

背景画像の縦横比率を維持したまま、コンテンツの幅に合わせて表示させる方法  
https://blog.looseknot.jp/css/background-image-size.html  
```

**フォントサイズのレスポンシブについて**

https://techblog.raccoon.ne.jp/archives/1617239525.html

**マップ部分のレイヤーについて**  
実際に書く！CSSで背景画像を透過させる方法【初心者向け】  
https://techacademy.jp/magazine/19412  

**ページネーションについて**  
https://getbootstrap.jp/docs/5.0/components/pagination/  

**引用タグについて**  
引用タグ（blockquote）の正しい使い方について  
https://keywordfinder.jp/blog/seo/blockquote/  

**HTMLでソースコードをそのまま表示させる方法！**  
ソースコードをそのまま表示  
https://qumeru.com/magazine/37  

***




## 命名規則（FLOCSSに帰属）

.block{}                    親要素  
.block__element{}           blockに属する子要素  
.block--modifier{}          修飾を追加した親要素  
.block__element--modifier{} 修飾を追加した子要素  

**2つ以上の単語をつなぐときは「-（ハイフン）」でつなぐ**  
catch-copy  
layout-list  
など  

**「_（アンダースコア）」1つでつなぐことは基本的に禁止**

**原則、保守性を高めるため、単語は省略しない**

よくある単語  
    bg  は  background  
    btn は  button  
    ttl は  title  
    txt は  text  

ただし、**開発時のルールに合わせることが大原則のため、この限りではない**


参照URL https://jobtech.jp/html_css/4209/
***


## 余白の調整  
margin-bottom: 0;  
margin-topで余白の調整をする。  
※要素の下に、何が来るかわからないから、下につく方が、上と調整する。  
参考サイト  
https://design-remarks.com/margin-top-or-bottom/  
***

## 【font-family】について  
    font-family: 候補1,候補2,候補3,フォントの種類;  
        「sans-serif」  ゴシック体系のフォント（MSゴシック、中ゴシック、Arialなど）
        「serif」       明朝体系のフォント（MS明朝、MS P明朝、Garamond、MS Georgia、Times New Romanなど）  
        「cursive」     筆記体系のフォント（caflisch script、ex pontoなど）  
        「fantasy」     装飾系のフォント（critter、studzなど）  
        「monospace」   等幅系のフォント（Osaka-等幅、courier、Courier Newなど）  
    ※日本語テキストにcursiveを指定していると、希に正常に表示できない場合がある※  
    英語フォントと日本語フォントの両方を指定する場合は、先に英語フォントを指定する。  
    そうすることで、アルファベットには英語フォントが、日本語には日本語フォントが使用されるようになる。  
***


## Sass-ディレクトリ構造  
```
hamburger-site  
├─ css  
|  ├─ ress.css  
|  ├─ style.css  
|  └─ style.css.map  
├─ img  
├─ js  
|  └─ menu.js  
├─ scss  
|  ├─ foundation  
|  |  ├─ _base.scss  
|  |  ├─ _mixin.scss  
|  |  └─ _variable.scss  
|  ├─ layout  
|  |  ├─ _container.scss  
|  |  ├─ _footer.scss  
|  |  ├─ _header.scss  
|  |  ├─ _main.scss  
|  |  └─ _sidebar.scss  
|  ├─ object  
|  |  ├─component  
|  |  |  ├─ _blockquote.scss  
|  |  |  ├─ _box.scss  
|  |  |  ├─ _button.scss  
|  |  |  ├─ _definition-list.scss  
|  |  |  ├─ _layout-list.scss  
|  |  |  └─ _section-title.scss  
|  |  ├─project  
|  |  |  ├─ _access.scss  
|  |  |  ├─ _archive.scss  
|  |  |  ├─ _card.scss  
|  |  |  ├─ _firstview.scss  
|  |  |  ├─ _gnavi.scss  
|  |  |  ├─ _pagination.scss  
|  |  |  ├─ _search.scss  
|  |  |  └─ _single.scss  
|  |  └─utility  
|  └─ style.scss  
├─ node_modules  
├─ gulpfile.js  
├─ package.json  
├─ package-lock.json  
├─ archive_search.html  
├─ archive.html  
├─ index.html  
├─ page.html  
├─ single.html  
└─ README.md  
```
