
let istext = false;
let timeoutId;

// 产品内容
const product1content = '';
const product2content=`鋐鑫的陶瓷材料系統應用於包括高頻通訊模組﹑LTCC 基板﹑微機電構裝基板﹑車用、能源以及通訊的各種領域。我們所提供的材料皆是符合RoHS及其他的環保指令, 無毒無鉛.並有銀膠或複合銀膠等材料可搭配。詳細內容或規格書,歡迎與我們聯絡.`;
const product4content='本公司基於數十年的陶瓷材料開發、規劃與產品實際量產經驗，開發了一系列針對量產需求的設備，除了自行使用外，有提供有需求客戶採購使用或技術移轉(Turn-key)之需求。'

document.getElementById("product").addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    istext=false;
    timeoutId=setTimeout(() => {
        formid(true);
    }, 200);
});

document.getElementById("product").addEventListener("mouseleave", () => {
    clearTimeout(timeoutId);
    timeoutId=setTimeout(() => {
        if (!istext) {
            formid(false);
        }
    }, 400);
});

document.getElementById("formid").addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    istext = true;
});

document.getElementById("formid").addEventListener("mouseleave", () => {
    clearTimeout(timeoutId);
    timeoutId=setTimeout(() => {
        istext = false;
        formid(false);
    }, 400);
});

function formid(open) {
    const formid = document.getElementById("formid");
    if (open) {
        formid.innerHTML = ""; // 清空内容
        const items = [
            { text: "氧體偵測傳感器", action: product1 },
            { text: "陶瓷材料系統", action: product2 },
            { text: "陶瓷製氧基板", action: product3 },
            { text: "多層陶瓷量產設備", action: product4 },
            { text: "多層構裝陶瓷基板與傳感器", action: product5 },
        ];

        items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.text;
            li.onclick = item.action;
            formid.appendChild(li);
        });

        formid.className = "formid";
    } else {
        formid.innerHTML = "";
        formid.removeAttribute("class");
    }
}

// 切換語言
function language() {
    window.location.href = "english.html";
}

const fr = document.getElementById("fr");
function product1() {
    fr.textContent='';
    fr.textContent = product1content;
}

function product2() {
    fr.textContent='';
    fr.textContent = product2content;
    const frimgs=[
        {img:'http://www.elit.com.tw/i03-4-1.jpg'},
        {img:'http://www.elit.com.tw/i03-4-2.jpg'}
    ]
    frimgs.forEach((frimg)=>{
        const img=document.createElement('img');
        img.src=frimg.img;
        img.className='imgs';
        document.getElementById('fr').appendChild(img);
    })
}

function product3() {
    fr.textContent='';
    const img=document.createElement('img');
    img.src='http://www.elit.com.tw/i03-2-1-D.jpg';
    img.className='imgs';
    document.getElementById('fr').appendChild(img);
}

function product4() {
    fr.textContent='';
    fr.textContent = product4content;
    const img=document.createElement('img');
    img.src='http://www.elit.com.tw/i03-6-1-D.jpg';
    img.className='imgs';
    document.getElementById('fr').appendChild(img);
}

function product5() {
    fr.textContent='';
    const frimgs=[
        {img:'http://www.elit.com.tw/i03-3-1.jpg'},
        {img:'http://www.elit.com.tw/i03-3-2.jpg'},
        {img:'http://www.elit.com.tw/i03-3-3.jpg'}
    ]
    frimgs.forEach((frimg)=>{
        const img=document.createElement('img');
        img.src=frimg.img;
        img.className='imgs';
        document.getElementById('fr').appendChild(img);
    })
}

function company(){
    fr.textContent='';
    fr.textContent=`關於鋐鑫:
鋐鑫電光科技股份有限公司(Elit Fine Ceramics CO., Ltd)成立於2005年3月，廠區位於桃園市楊梅區幼獅擴大工業區內，為一家專業精密陶瓷材料研發及產品製造公司。經營團隊深耕精密陶瓷材料科技30餘年，擁有自主的陶瓷複合材料開發技術、陶瓷生胚量產技術、多層陶瓷構裝技術及多層陶瓷生產設備設計開發技術，於2007年榮獲經濟部頒發中小企業創新奬。 


因應產業環境改變，鋐鑫已從早期消費性電子、照明等LED產品，升級轉型往高門檻、高產值、高附加價值的尖端電化學陶瓷工藝技術發展，目前主力產品為氧傳感器與氮氧傳感器，其主要功能為偵測內燃機燃油效率與尾氣排放檢測，為全球少數幾家擁有傳感器從材料配方、生胚流延成形、多層陶瓷沖孔/印刷/結合/燒結、總成封裝量產技術的廠商之一。 


由於鋐鑫在電化學陶瓷工藝技術的卓越表現，獲得國內外廠商一致肯定，陸續取得與國際大廠在醫療生技、高純氧製造、碳中和、潔淨能源等創新產品的合作機會。其中電化學陶瓷製氧機是目前正在進行的跨國合作項目，鋐鑫負責關鍵材料陶瓷製氧基板的生產，樣品機已通過客戶驗證，未來產品上市後可供應全球醫療與工業用高純度氧氣(純度99.99%)，切入高純氧氣製造與生技醫療市場。 

傳感器與陶瓷製氧基板的開發成功奠定了鋐鑫在電化學陶瓷半導體材料產業永續發展的基礎，當前如何解決環境汙染是全世界急迫需要面對的課題，面對2050淨零排放的目標，各國已陸續制定嚴格的碳中和減碳目標與計畫時程表。由於電化學技術應用在碳中和及潔淨能源的發展有非常大機會，所以鋐鑫未來有更重大的願景與使命，尋求與國內外廠商共同合作，整合碳捕捉與電化學固體氧化物電解池 (SOEC) 技術，將 H2O、CO2 或H2O + CO2透過電化學技術分別轉化為 H2、CO 或 H2 + CO（合成氣）；或是透過一系列化學合成進行熱整合，使捕獲的 CO2 和水能夠再循環到合成天然氣或汽油、甲醇或氨等，除了可直接降低二氧化碳排放汙染外，更能進一步抑制使用化石原料所造成的環境汙染，還給大家一個乾淨的地球。


主要產品:
氧體偵測傳感器:
-偵測內燃機燃油效率、排放尾氣與工廠煙道排放一氧化氮濃度檢測。
陶瓷材料系統:
-特定客製化陶瓷生胚開發及代工製造，同時可提供各種搭配性的導體材料匹配研發。
陶瓷製氧基板:
-與國際大廠合作開發中小型電化學陶瓷氧氣製造機，可提供純度高達99.99%的氧氣，使用在醫療、工業用等有高純度氧氣需求的產業。
多層陶瓷量產設備:
-利用既有的多層陶瓷基板製程技術，開發出具低成本、高產出效能的量產設備。
多層構裝陶瓷基板與傳感器:
-LTCC(低溫共燒陶瓷)陶瓷多層電路板應用於LED、MEMS、 紅外線感測器、重力加速感測器等半導體構裝基板、厚膜氧化鋁基板、陶瓷多層感測元件，利用材料本身的特性與電路設計，配合大數據資料庫的應用，可成為偵測環境中各種變化的感測元件，例如：溫度、壓力、酸鹼值等感測元件。


鋐鑫沿革:
．2005年3月成立，當年度實收資本額為5仟8佰萬，完成量產型LTCC材料配方開發。
．2006年100W LTCC金屬構裝基板開發完成，並通過客戶認證出貨。
．2007年250W LED照明模組開發完成，並榮獲經濟部頒發最佳中小企業創新，實收資本額增為1億5仟8佰萬元。
．2008年玻璃反射杯以及鑲入型銀導熱塊結構專利技術開發完成，實收資本額增為2億5仟8佰萬元。
．2010年技轉日本大廠LTCC生產技術並供應LTCC生胚，雙方形成戰略聯盟。
．2012年楊梅幼獅新廠落成啟用，實收資本額增為2億9仟5佰萬元。
．2014年窄域氧傳感器開發完成，並通過汽車主機廠認證出貨。
．2015年窄域氧傳感器通過中國大排量摩托車主機廠認證出貨，實收資本額增為4億3仟萬元。
．2016年寬域氧傳感器開發完成，並通過客戶認證出貨，實收資本額增為4億7仟萬元。
．2018年跨國技術合作案啟動，開發電化學陶瓷製氧機，負責陶瓷製氧基板開發。
．2019年氮氧傳感器開發完成，並通過客戶認證出貨。
．2022年電化學陶瓷製氧基板開發完成，客戶樣品機通過測試驗證。    `;
}
window.onload=()=>{
    setTimeout(()=>{
        company();
    },0);
};
