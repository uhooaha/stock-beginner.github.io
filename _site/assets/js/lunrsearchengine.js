
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/stock-beginner.github.io/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/stock-beginner.github.io/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "http://localhost:4000/stock-beginner.github.io/authors",
    "title": "Authors",
    "body": "                                                                                                                                        uhooaha:         Author of Memoirs, a Bootstrap Medium styled template available for Jekyll. You are currently previewing Jekyll template demo.                "
    }, {
    "id": 3,
    "url": "http://localhost:4000/stock-beginner.github.io/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/stock-beginner.github.io/contact",
    "title": "Contact",
    "body": "  Please send your message to uhooaha. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/stock-beginner.github.io/",
    "title": "Home",
    "body": "                                                                                               주식, 드디어 시작해 버리다!              :       오늘은 모의투자를 시작한 첫날이었다. 시작 전에는 유튜브를 통해 증권사 프로그램의 기본 사용법과 호가창 보는 법, 스캘핑에 대한 영상들을 참고했다. 전반적인 투자 감각을 익히기 위해 공부를 나름대로 했다고 생각했지만, 막상 시장에. . . :                                                                               uhooaha                 14 Jan 2025                                                                                                                           Much more than a desert: A trip into the Sahara              :       The Sahara is a desert located on the African continent. It is the largest hot desert in the world, and the third largest desert overall after Antarctica and the Arctic. . . . :                                                                                               01 Feb 2020                                                                                                                           One day we just started our adventure              :       The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. :                                                                               uhooaha                 12 Jan 2020                                                                                                                           London is that kind of place you must visit in this lifetime              :       The Queen’s Guard and Queen’s Life Guard (called King’s Guard and King’s Life Guard when the reigning monarch is male) are the names given to contingents of infantry and cavalry. . . :                                                                                               12 Jan 2020                                                                                                                           Memoirs supports external images as featured              :       Adding images is a very annoying task, I know that, but “Memoirs” theme has external featured images integrated so your publishing task becomes easier now. :                                                                               uhooaha                 12 Jan 2020                                                                                                                           Spoliers Inside - a film review needs hidden spoilers like this post              :       Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire. . . :                                                                                               11 Jan 2020                                   &laquo;          1        2       &raquo; "
    }, {
    "id": 6,
    "url": "http://localhost:4000/stock-beginner.github.io/categories/stock-keyword/",
    "title": "초보 주린이의 필수 주식 키워드",
    "body": ""
    }, {
    "id": 7,
    "url": "http://localhost:4000/stock-beginner.github.io/stock-news/",
    "title": "오늘의 주식 시장은?",
    "body": "📰 오늘의 주식 시장 뉴스:  {% assign posts = site. stock-news | sort: 'date' | reverse %} {% for post in posts %}  {% include postbox. html %} {% endfor %}"
    }, {
    "id": 8,
    "url": "http://localhost:4000/stock-beginner.github.io/categories/stock-note/",
    "title": "좌충우돌 주식 투자일지",
    "body": ""
    }, {
    "id": 9,
    "url": "http://localhost:4000/stock-beginner.github.io/categories/stock-utilizing-tip/",
    "title": "여기저기서 모아본 주식 꿀팁",
    "body": ""
    }, {
    "id": 10,
    "url": "http://localhost:4000/stock-beginner.github.io/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 11,
    "url": "http://localhost:4000/stock-beginner.github.io/page2/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 12,
    "url": "http://localhost:4000/stock-beginner.github.io/stock-note-start/",
    "title": "주식, 드디어 시작해 버리다!",
    "body": "2025/01/14 - 오늘은 모의투자를 시작한 첫날이었다. 시작 전에는 유튜브를 통해 증권사 프로그램의 기본 사용법과 호가창 보는 법, 스캘핑에 대한 영상들을 참고했다. 전반적인 투자 감각을 익히기 위해 공부를 나름대로 했다고 생각했지만, 막상 시장에 진입하니 전혀 다른 세계였다. 500만 원을 기준으로 하루 손실 -30만 원을 넘기지 않겠다는 나름의 원칙을 세우고 시작했다. 하지만 첫날부터 이 원칙이 얼마나 쉽게 흔들리는지를 실감하게 되었다. 컴퓨터가 윈도우가 아니라 맥이라 증권사에서 제공하는 프로그램을 제대로 사용할 수 없었고, 결국 모바일 앱으로 주문을 시작하게 되었다. 모바일로는 호가 주문을 제대로 해보지 못했기에, 상대적으로 저렴한 3,000원대 종목을 선택해 실험해보기로 했다. 하지만 수량 입력 방식 자체를 몰랐던 탓에, 눈앞에서 좋은 매수 타이밍을 몇 차례 놓쳤다. 창을 열고 닫는 구조로 되어 있어 수 초 단위의 딜레이가 발생했고, 그 사이에 주가는 이미 움직여 있었다. 그러다 메뉴 안에서 ‘주문’이라는 항목을 발견하게 되었는데, 너무 기본적인 위치임에도 불구하고 당시엔 마음이 너무 상기되어 있던 탓인지 그 메뉴를 미처 보지 못했다. 이 작은 혼란이 나를 더 혼란스럽게 만들었다. 결국 스스로가 과하게 흥분해 있음을 자각하고 잠깐 마음을 진정시켰다. 다행히 수량 입력 정도는 익힐 수 있게 되었고, 몇 종목에서 운 좋게 수익도 올릴 수 있었다. 특히 매수 타이밍을 실수로 놓쳐 늦게 들어간 종목이 오히려 수익을 내는 아이러니한 상황도 있었다. 수량이 많지 않아도 주당 몇십 원씩 차익을 얻으면서 9만 원가량의 수익을 거두기도 했다. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/stock-beginner.github.io/much-more-than-a-desert-trip-to-sahara/",
    "title": "Much more than a desert: A trip into the Sahara",
    "body": "2020/02/01 - The Sahara is a desert located on the African continent. It is the largest hot desert in the world, and the third largest desert overall after Antarctica and the Arctic. Its area of 9,200,000 square kilometres (3,600,000 sq mi) is comparable to the area of China or the United States. [3] The name ‘Sahara’ is derived from a dialectal Arabic word for “desert”, ṣaḥra (صحرا /ˈsˤaħra/). The desert comprises much of North Africa, excluding the fertile region on the Mediterranean Sea coast, the Atlas Mountains of the Maghreb, and the Nile Valley in Egypt and Sudan. It stretches from the Red Sea in the east and the Mediterranean in the north to the Atlantic Ocean in the west, where the landscape gradually changes from desert to coastal plains. To the south, it is bounded by the Sahel, a belt of semi-arid tropical savanna around the Niger River valley and the Sudan Region of Sub-Saharan Africa. The Sahara can be divided into several regions including: the western Sahara, the central Ahaggar Mountains, the Tibesti Mountains, the Aïr Mountains, the Ténéré desert, and the Libyan Desert. For several hundred thousand years, the Sahara has alternated between desert and savanna grassland in a 20,000 year cycle caused by the precession of the Earth’s axis as it rotates around the Sun, which changes the location of the North African Monsoon. The area is next expected to become green in about 15,000 years (17,000 AD). "
    }, {
    "id": 14,
    "url": "http://localhost:4000/stock-beginner.github.io/one-day-just-started-adventure/",
    "title": "One day we just started our adventure",
    "body": "2020/01/12 - The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”. "
    }, {
    "id": 15,
    "url": "http://localhost:4000/stock-beginner.github.io/london/",
    "title": "London is that kind of place you must visit in this lifetime",
    "body": "2020/01/12 - The Queen’s Guard and Queen’s Life Guard (called King’s Guard and King’s Life Guard when the reigning monarch is male) are the names given to contingents of infantry and cavalry soldiers charged with guarding the official royal residences in the United Kingdom. The British Army has regiments of both Horse Guards and Foot Guards predating the English Restoration (1660), and since the reign of King Charles II these regiments have been responsible for guarding the Sovereign’s palaces. The Guards are fully operational soldiers. The Queen’s Guard and Queen’s Life Guard are mounted at the royal residences that come under the operating area of the British Army’s London District, which is responsible for the administration of the Household Division. This covers Buckingham Palace, St James’s Palace and the Tower of London, as well as Windsor Castle. The Queen’s Guard is also mounted at the sovereign’s other official residence, the Palace of Holyroodhouse, but not as often as in London. In Edinburgh, the guard is the responsibility of the resident infantry battalion at Redford Barracks. It is not mounted at the Queen’s private residences at Sandringham or Balmoral.  The Queen’s Guard is the name given to the contingent of infantry responsible for guarding Buckingham Palace and St James’s Palace (including Clarence House) in London. The guard is made up of a company of soldiers from a single regiment, which is split in two, providing a detachment for Buckingham Palace and a detachment for St James’s Palace. Because the Sovereign’s official residence is still St James’s, the guard commander (called the captain of the guard) is based there, as are the regiment’s colours. When the Sovereign is in residence, the Queen’s Guard numbers three officers and forty other ranks, with four sentries each posted at Buckingham Palace (on the forecourt) and St James’s Palace (two in Friary Court, two at the entrance to Clarence House). This reduces to three officers and 31 ORs, with two sentries each, when the Sovereign is not in residence. The Queen’s Guard is not purely ceremonial in nature. They provide sentries during the day and night, and during the later hours, they patrol the grounds of the Palace. Until 1959, the sentries at Buckingham Palace were stationed outside the fence. This stopped following an incident involving a female tourist and a Coldstream Guardsman – due to the continued pestering by tourists and sightseers, the guardsman kicked the tourist on the ankle as he marched. The tourist made a complaint to the police and the sentry was confined to barracks for ten days. Not long after, the sentries were moved inside the fence. "
    }, {
    "id": 16,
    "url": "http://localhost:4000/stock-beginner.github.io/external-featured-image/",
    "title": "Memoirs supports external images as featured",
    "body": "2020/01/12 - Adding images is a very annoying task, I know that, but “Memoirs” theme has external featured images integrated so your publishing task becomes easier now. Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 17,
    "url": "http://localhost:4000/stock-beginner.github.io/post-with-spoiler/",
    "title": "Spoliers Inside - a film review needs hidden spoilers like this post",
    "body": "2020/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” What critiques say?:  “There’s almost no single moment in Portrait of a Lady on Fire that couldn’t be captured, mounted, and hung on a wall as high art. ” — Entertainment Weekly A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we add spoilers in this theme?: &lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 18,
    "url": "http://localhost:4000/stock-beginner.github.io/that-day-we-almost-missed-flight/",
    "title": "That day when we almost missed our flight",
    "body": "2020/01/01 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 19,
    "url": "http://localhost:4000/stock-beginner.github.io/review-oscar/",
    "title": "Reviewing the best Oscar movies of all time",
    "body": "2020/01/01 - Review products, books, movies, restaurant and anything you like on your Jekyll blog with Memoirs! JSON-LD ready for review property. How to use?: It’s actually really simple! Add the rating in your YAML front matter. It also supports halfs: ---layout: posttitle:  Inception Movie author: johncategories: [ Lifestyle ]tags: [red, yellow]image: assets/images/11. jpgdescription:  My review of Inception movie. Actors, directing and more.  rating: 4. 5---"
    }, {
    "id": 20,
    "url": "http://localhost:4000/stock-beginner.github.io/french-wine/",
    "title": "French Wine has to compete with many new world wines",
    "body": "2020/01/01 - French wine is produced all throughout France, in quantities between 50 and 60 million hectolitres per year, or 7–8 billion bottles. France is one of the largest wine producers in the world, along with Italian, Spanish, and American wine-producing regions.  French wine traces its history to the 6th century BC, with many of France’s regions dating their wine-making history to Roman times. The wines produced range from expensive wines sold internationally to modest wines usually only seen within France such as the Margnat wines were during the post war period. Two concepts central to the better French wines are the notion of terroir, which links the style of the wines to the locations where the grapes are grown and the wine is made and the Appellation d’origine contrôlée (AOC) system, replaced by the Appellation d’Origin Protégée (AOP) system in 2012. Appellation rules closely define which grape varieties and winemaking practices are approved for classification in each of France’s several hundred geographically defined appellations, which can cover regions, villages or vineyards. France is the source of many grape varieties (such as Cabernet Sauvignon, Chardonnay, Pinot noir, Sauvignon blanc, Syrah) that are now planted throughout the world, as well as wine-making practices and styles of wine that have been adopted in other producing countries. Although some producers have benefited in recent years from rising prices and increased demand for some of the prestige wines from Burgundy and Bordeaux, the French wine industry has seen a decline in domestic consumption and internationally, it has had to compete with many new world wines. "
    }, {
    "id": 21,
    "url": "http://localhost:4000/stock-beginner.github.io/the-observer/",
    "title": "The Observer - National Gallery of Art, Washington, United States",
    "body": "2019/12/01 - The National Gallery of Art, and its attached Sculpture Garden, is a national art museum in Washington, D. C. , located on the National Mall, between 3rd and 9th Streets, at Constitution Avenue NW. Open to the public and free of charge, the museum was privately established in 1937 for the American people by a joint resolution of the United States Congress. Andrew W. Mellon donated a substantial art collection and funds for construction.  The core collection includes major works of art donated by Paul Mellon, Ailsa Mellon Bruce, Lessing J. Rosenwald, Samuel Henry Kress, Rush Harrison Kress, Peter Arrell Browne Widener, Joseph E. Widener, and Chester Dale. The Gallery’s collection of paintings, drawings, prints, photographs, sculpture, medals, and decorative arts traces the development of Western Art from the Middle Ages to the present, including the only painting by Leonardo da Vinci in the Americas and the largest mobile created by Alexander Calder. The Gallery’s campus includes the original neoclassical West Building designed by John Russell Pope, which is linked underground to the modern East Building, designed by I. M. Pei, and the 6. 1-acre (25,000 m2) Sculpture Garden. The Gallery often presents temporary special exhibitions spanning the world and the history of art. It is one of the largest museums in North America. "
    }, {
    "id": 22,
    "url": "http://localhost:4000/stock-beginner.github.io/press-and-education/",
    "title": " Culinary Arts in Europe by Jean Anthelme Brillat-Savarin",
    "body": "2019/12/01 - The origins of culinary began with primitive humans roughly 2 million years ago. There are various theories as to how early humans used fire to cook meat. According to anthropologist Richard Wrangham, author of Catching Fire: How Cooking Made Us Human, primitive humans simply tossed a raw hunk of meat into the flames and watched it sizzle. Another theory claims humans may first have savoured roasted meat by chance when the flesh of a beast killed in a forest fire was found to be more appetizing and easier to chew and digest than the conventional raw meat. Culinary techniques improved with the introduction of earthenware and stoneware, the domestication of livestock, and advancements in agriculture. In early civilizations, the primary employers of professional chefs were kings, aristocrats, or priests. The divide between professional chefs cooking for the wealthy and peasants cooking for their families engendered the development of many cuisines. A great deal of the study of Culinary Arts in Europe was organized by Jean Anthelme Brillat-Savarin, a man famous for his quote “Tell me what you eat, and I will tell you what you are,” which has since been mistranslated and oversimplified into “You are what you eat. ” Other people helped to parse out the different parts of food science and gastronomy. Over time, increasingly deeper and more detailed studies into foods and the Culinary Arts has led to a greater wealth of knowledge. In Asia, a similar path led to a separate study of the Culinary Arts, which later essentially merged with the Western counterpart. In the modern international marketplace, there is no longer a distinct divide between Western and Eastern foods. Culinary Arts students today, generally speaking, are introduced to the different cuisines of many different cultures from around the world. The Culinary Arts, in the Western world, as a craft and later as a field of study, began to evolve at the end of the Renaissance period. Prior to this, chefs worked in castles, cooking for kings and queens, as well as their families, guests, and other workers of the castle. As Monarchical rule became phased out as a modality, the chefs took their craft to inns and hotels. From here, the craft evolved into a field of study. Before cooking institutions, professional cooks were mentors for individual students who apprenticed under them. In 1879, the first cooking school was founded in the United States: the Boston Cooking School. This school standardized cooking practices and recipes, and laid the groundwork for the culinary arts schools that would follow. "
    }, {
    "id": 23,
    "url": "http://localhost:4000/stock-beginner.github.io/education/",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - Memoirs theme has Prism highlighter integrated. I will show you in this post a few examples of how it looks if you are a developer planning to add pieces of code on your website. HTML: &lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: . highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: // alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: print( Hello World )Ruby: require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: printf( Hello World );"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});