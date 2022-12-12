/* 起動コマンド
$ npx gulp --domain "サイトのドメイン"
//styleguide
$ npx gulp styleguide
$ npx gulp -v
*/

//---------------------------------------------------------
//	モード
//---------------------------------------------------------
'use strict'; // 厳格モード

//---------------------------------------------------------
//	本体読み込み
//---------------------------------------------------------
const gulp = require( 'gulp' );
const { src, dest, watch, series, parallel } = require( 'gulp' );
/*
src      =>  参照先指定(source)
dest     =>  出力先指定(destination)
watch    =>  ファイル監視
series   =>  直列処理
parallel =>  並列処理
*/

//---------------------------------------------------------
//	入出力パス設定
//---------------------------------------------------------
// 参照元パス
const srcPath = {
	'scss': './scss/**/*.scss'
}
// 出力先パス
const destPath = {
	'css': './css/'
}

//---------------------------------------------------------
//	プラグイン読み込み
//---------------------------------------------------------
const sass         = require( 'gulp-sass' )( require('sass') );	// cssコンパイル
const plumber      = require( 'gulp-plumber' );					// エラーが発生しても強制終了させない
const notify       = require( 'gulp-notify' );					// エラー発生時のアラート出力
const postcss      = require( 'gulp-postcss' );					// Node.js製、CSS操作プラグインのフレームワーク
const autoprefixer = require( 'gulp-autoprefixer' );			// ベンダープレフィックス自動付与(条件はpackage.jsonに記載)
const browserSync  = require( 'browser-sync' );					// ブラウザシンク
const minimist     = require( 'minimist' );						// コマンドラインパーサー
// const del          = require( 'del' );                          // ディレクトリ削除

//---------------------------------------------------------
//	scssコンパイル
//---------------------------------------------------------
const scssCompile = (done) => {
	return src( srcPath.scss, {
		sourcemaps: true, // init
	})
	// エラーが出ても処理継続
	.pipe( plumber( {
		errorHandler: notify.onError( 'Error:<%= error.message %>' )
	}))
	// CSS形式 => expanded：一般的なCSS形式　compressed：空白、改行取り除く(本番環境用)
	.pipe( sass({ outputStyle: 'expanded' }))
	// ベンダープレフィックス自動付与
	.pipe( autoprefixer())
	// 出力設定
	.pipe( dest( destPath.css, {
		sourcemaps: ''  // write
	}))
	// 修正部分だけ反映
	.pipe( browserSync.stream()),
	done();
}

/* Browser-sync部分は削除
//---------------------------------------------------------
//	minimist設定・Browser-sync
//---------------------------------------------------------
const options = minimist( process.argv.slice(2),{ // process.argv=>コマンドラインの引数取得
	string: 'domain',
	default: {
		// domain: 'humburger-site.local' // 引数初期値
		domain: 'index.html' // 引数初期値 C:\Users\AAAAA\htdocs\hamburger-site\index.html
	}
});
// ローカルサーバー立ち上げ
const browserSyncFunc = (done) => {
	browserSync.init( browserSyncOption );
	done();
}
const browserSyncOption = {
	proxy: {
		target: options.domain
	},
	notify: true
}

//---------------------------------------------------------
//	リロードタスク
//---------------------------------------------------------
const browserSyncReload = (done) => {
	browserSync.reload();
	done();
}
*/


//---------------------------------------------------------
//	watchタスク
//---------------------------------------------------------
const watchFiles = (done) => {
	watch( srcPath.scss, series( scssCompile ))
	// watch( srcPath.php, series( phpWatch, browserSyncReload ))
	// watch( srcPath.js, series( jsWatch, browserSyncReload ))
	done();
}

//---------------------------------------------------------
//	モジュール作成
//---------------------------------------------------------
exports.default = series(
	// parallel( phpWatch, jsWatch, scssCompile ),
	parallel( scssCompile ),
	parallel( watchFiles )
	// parallel( watchFiles, browserSyncFunc )
);



