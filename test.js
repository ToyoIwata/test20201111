const SubMenu =
      {
        "philosophy": ["哲学","倫理学","論理学","井上円了と東洋大学","宗教学"],
        "kiso": ["天文学","環境科学","美術史","生物学","文学","歴史学","言語学","科学史","経済学","社会学","法学","政治学","心理学"],
        "international01": ["Advanced TOEIC Ⅰ","Remedial English Ⅰ","Technical Reading","Technical Writing","Advanced TOEIC Ⅱ","Remedial English Ⅱ","Academic English","Business English"],
        "international02": ["英語と文化", "ドイツ語と文化", "フランスと文化","中国語と文化","韓国語と文化"],
        "international03": ["国際キャリア概論","留学のすすめ","海外研修Ⅰ","海外研修Ⅱ","海外実習Ⅰ","海外実習Ⅱ","短期海外研修Ⅰ","短期海外研修Ⅱ","短期海外研修Ⅲ","短期海外研修Ⅳ","短期海外実習Ⅰ","短期海外実習Ⅱ","短期海外実習Ⅲ","短期海外実習Ⅳ"],
        "career": ["日本国憲法", "キャリア形成", "社会人文章論", "スポーツ健康科学実技Ⅰ", "スポーツ健康科学実技Ⅱ", "スポーツ健康科学(身体の健康)", "スポーツ健康科学(心の健康)"],
        "sogo": ["総合A", "総合B", "総合C", "全学総合ⅠA", "全学総合ⅠB", "全学総合ⅡA", "全学総合ⅡB"],
        "abroad": ["English foe Academic Purposes A listening/Speaking","English foe Academic Purposes A Reading/Writiing","Pre-Study Abroad College Study Skills","Pre-Study Abroad Basic Academic Writing","Pre-Study Abroad Basic Academic Essay Writing","Business English Communication"],
        "Basic-subject": ["総合情報プロジェクトA","総合情報プロジェクトB","総合情報プロジェクトC","英語専門講読Ⅰ","英語専門講読Ⅱ","基礎数学A","基礎数学B","基礎科学A","基礎科学B","情報数学"],
        "Business-subject": ["経営学の基礎","ロジカルシンキング","認知心理学","企業会計論","ビジネスシステム論","マーケティング論","社会心理学","組織心理学","学外実習"],
        "Social-researcher": ["社会調査入門","アセスメント技法","確率と統計","統計学","社会調査法","多変量解析","調査実習Ⅰ","調査実習Ⅱ"],
        "Compulsory": ["基礎ゼミナールⅠ","基礎ゼミナールⅡ","総合情報学概論","総合情報学基礎演習Ⅰ","総合情報学基礎演習Ⅱ","総合情報学演習Ⅰ","総合情報学演習Ⅱ","総合情報学演習Ⅲ","総合情報学演習Ⅳ","卒業研究・制作Ⅰ","卒業研究・制作Ⅱ"],
        "System": ["入門プログラミング","プログラミング技法Ⅰ","ネットワーク通信入門","環境学の基礎","サービス情報論","プログラミング技法Ⅱ","ソフトウェア工学Ⅰ","ソフトウェア工学Ⅱ","コンピュータアーキテクチャ","オペレーティングシステム","データベース","アルゴリズムの基礎","資源・エネルギーマネジメント論","CSR論","社会インフラ論","グリーンプロダクト","マーケティング実践論","プロジェクト管理","人工知能Ⅰ","人工知能Ⅱ","情報システム論","情報セキュリティ","ネットワークコンピューティング","信号処理","システム監査論","コミュニティデザイン論","消費者選好分析"],
        "Sports": ["スポーツメカニクス入門","スポーツ行動心理学","スポーツ行動心理学計測入門","心理・生体情報入門","スポーツの思想と歴史","スポーツ流体科学入門","スポーツバイオメカニクス","身体動作計測","スポーツ情報処理入門","心理・生体情報論","心理・生体情報測定法","スポーツ行動心理計測論","スポーツ行動心理計測法","現代スポーツ文化論","グローバルスポーツと情報","スポーツダイナミクス","身体動作解析","スポーツ感性商品デザイン","スポーツパフォーマンス","ヒューマンインタフェース","マネジメント心理学","スポーツ人間工学","スポーツ社会学","スポーツとメディア"],
        "Media": ["コンピュータグラフィクス論","メディア概論","メディア表現論","映像メディア作成技法","文化情報論","マルチメディアシミュレーション論","コンピュータグラフィクス技法","映像メディア論","コンテンツ作成技法","ネットワークメディア概論","メディアの歴史","メディアデザイン論","芸術学","技術文化史","コンテンツ作成のためのCG","コンテンツ作成のためのデータ処理","マルチメディアシミュレーション技法","ネットワークメディア技法","デジタルデザイン論","メディアデザイン論","メディアデザイン技法","メディアプランニング","言語情報論","サイエンスとアート","感性学"],
        "Teaching":["情報処理基礎","情報化社会と倫理","情報化社会と職業"]

      };


function createReview(selectGenre){

  let menuList = document.getElementById('subList');
  menuList.disabled = false;
  menuList.innerHTML = '';
  let option = document.createElement('option');
  option.innerHTML = '講義を選択してください';
  option.defaultSelected = true;
  option.disabled = true;
  menuList.appendChild(option);


  SubMenu[selectGenre].forEach( menu => {
    let option = document.createElement('option');
    option.innerHTML = menu;
    menuList.appendChild(option);
  });
}


function radioDeselection() {
  for (const element of document.getElementsByName('radio01')) {
    element.checked = false;
  }
}

function radioDeselection() {
  for (const element of document.getElementsByName('radio02')) {
    element.checked = false;
  }
}

function radioDeselection() {
  for (const element of document.getElementsByName('radio03')) {
    element.checked = false;
  }
}

function radioDeselection() {
  for (const element of document.getElementsByName('radio04')) {
    element.checked = false;
  }
}

function radioDeselection() {
  for (const element of document.getElementsByName('radio05')) {
    element.checked = false;
  }
}

function radioDeselection() {
  for (const element of document.getElementsByName('radio06')) {
    element.checked = false;
  }
}

function radioDeselection() {
  for (const element of document.getElementsByName('radio07')) {
    element.checked = false;
  }
}

function radioDeselection() {
  for (const element of document.getElementsByName('radio08')) {
    element.checked = false;
  }
}

function radioDeselection() {
  for (const element of document.getElementsByName('radio09')) {
    element.checked = false;
  }
}
