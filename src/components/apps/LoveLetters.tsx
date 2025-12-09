import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, Home, Mail, Calendar, Clock } from 'lucide-react';
import { useOS } from '../../context/OSContext';

// Update the component to receive props
const LoveLetters = ({ fromFileManager = false }) => {
  const { dispatch } = useOS();
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Enhanced letter data
  const letters = [
    {
      id: 1,
      title: "Why I Love You.txt",
      date: "2 days ago",
      size: "2.1 KB",
      emoji: "💌",
      preview: "My dearest love, every morning I wake up grateful for you...",
      content: `My dearest love,

Every morning I wake up grateful for you. Your smile lights up my world in ways I never thought possible. You bring joy to the simplest moments and make every day feel like an adventure.

I love the way you laugh at my silly jokes, how you always know exactly what to say when I'm having a tough day, and the way you make everything better just by being you.

You are my best friend, my partner in crime, and the love of my life. Thank you for being the most amazing person I know.

Forever yours,
With all my love 💕`
    },
    {
      id: 2,
      title: "Our First Date.txt",
      date: "May 24,2024",
      size: "1.8 KB",
      emoji: "💘",
      preview: "I still remember every detail of our first date...",
      content: `My beautiful girl,
      Hehehe atli badhi excitement hati ne pendiiiiii hehe smile jati j nai hati hehe amna pan nai jati Hehehhe 2:54 hehe tana joi ma hehe ketli beautiful dekhati hati tu gadhediiiiii hehe banne e ek bija ne pela phone apya hehe tu pakad em Hehehhe rasta ma ketli vaar tana pendiii khidu hasa hehe ketli badhi vaat karvi hati apde ne kari hehe ek long drive rei gai khali gadhediiii na lidhe sunscreen lagai ne avta su thai hehe aja j bhuli gai te hehe kn e toh excitement ma bhuli gai hasa chala biji vaar thi lagavi ne avje chup chap ne natak nai karti taap hoi ke je hoi e jasu apde long drive saru hehe pachi rasta ma peli vaar atli dhimi gadi chalavi madam saru hehe tya pochi ne hehe akhu face joiyu taru hehe khali face aj joto rei gayo hehe ghara avi ne properly photo ma joiyu ke te a peryu hatu hehehehe ketli gaad api ne ma tana ke 30 min 30 min em hehe pan e 30 min km atli jaldiiii puri thai gai gadhediiiii madam nakhra karti hati ke photo pad tu j em ne hehe pachi phone ma pachi jova lagi ke hehe ignore kari saku thodo gusso batai saku hehe phone pan lai lidho ma atla thoda vadhara nakhra karya te hehe avi rite kyara pachi mari baju ma bes se tu ne gusso thasa mara thi pendiiiii 🥺 lakhta lakhta aasu ava che hehe ne tension nai le nai radu hehehe tya upar Betha hehe saru koi nai hatu baju ma haa ek uncle hata pan hehe chill hata uncle hehe atla kn hehe movie chalu thayu ne gadhediii e maro hath pakadyo tyara heartbeat kevi vadhi gaili tari hehe khidu ma santh tha pan hehe 5 min ej haal hato taro hehe pachi arms ma lidhe hehe toh puchya kara dukhta nai ne hehe gandiii dukhte toh pan thodi kete roj thodi hoi mara arms ma tu hehe dukhte toh sahan kari lete hehe amna bhi feel thai che e arm ma ke tu che tya hehe 🥺🥺 hehe kandha pe bhoj mein esa roj lena chahta hehe kala pan khidu hatu ne aja pan kei dev hehe sorryyyyyy jara bhi uncomfortable feel thayu hoi toh haa mana kbr Che ans ke nathi thayu jarak pan toh bhi hehe kei didhu sorrryyyyyyy hehe first forehead kiss kari didhi hehe second time nai vicharyu ke karu ke nai hehe saru lagse ke nai ana hehe kari didhi obviously taru reaction was priceless hehe second kari tyara toh mari side aj joti hati tu hehe kari ne evu modu fervi lidhu te hehe ketlu sharmati hati tu Hehehhe third bhi hehe avu lagyu roj karta hoi ne hehe 4 toh besttt hati hehe tu joti hati mari baju hehe e 5 sec gandiiii hehe a 10 divas kevi rite jase nai kbr 🥺🥺hehe ma Tara gal kechya ketli badhi vaar hehe pillow ni jagya tu hati hehe ketlu sukooon hatu tya hehe hehe our heads were touching hehe our cheeks were touching hehe even our eyebrows were touching each other hehe we were this close finally hehe peli vaar gusso nai avyo koi e vaad pakadya te mara hehe haaaa hehe em khidu ke interval bo lambu hatu pan hehe joitu toh banne ne ej hatu ke aju 5 min lambu hata toh hehe tya kiss vado scene avyo toh madam e puchyu karu hehe ma khidu haa toh pachi em pucha atli jaldii km che hehe che j ne jaldiiii gadhediiiii roj thodi mala mana karte aakha face par jetli karvi hati atli hehe ek vaar toh demanding thayo ke hehe aju ek kar em hehehe 🫠🫠 kashhhh roj javate avi rite hehe last ma aasu toh avi j gaila hehe ek toh tari fingers bhi nali ne hehe ekdum soft hehe perfect height difference toh che j hehe perfect hath bhi che ek bija saru j banala che hehehe🥹🥹 radti nai tya jai ne promise karyu che te ma pan nai radis hehe promise karu huhhhh hehe pacha 2 date par kyara jasu apde hehe jaldiiii ava toh saru hehe pendiiiiii 🥹🥺

I loveeeee youuuuuu 3000 pujaaaaaaaaaa🥹🫀

💖`
    },
    {
      id: 3,
      title: "Mari Pujaaaaaaa(100 note).txt",
      date: "Feb 13,2024",
      size: "2.5 KB",
      emoji: "💝",
      preview: "When I think about our future together...",
      content: `My forever love,
      Hey pujaaaa,
Kevi che tu 
Happy birthday pujaaaa
Yaad che tari bdy par peli vaar pujaaa khidu hatu masti ma Kona kbr hati thoda divas pachi em Kai’s mari pujaaaaa hehe
Kona kbr hati tu adat banse mari 
Kevu ne vaato vaato ma ek stupid deal kari hati ke tu mana novel na pages mokalje ana ma tana mara songs moklis,je chokra ne books pakadvanu pan nai gama e chokra e a vastu khidi hati ana e vachto pan tu mokalti tyara, je chokra e potana na songs koi na sathe share nai karya hata km ke he also used to think ke badha judge karse ne undhu vicharse mara saru ene tana badha songs mokalya che.

Je chokra ne 2 varas ma koi na par vishwas nai hato te tara ek Hii par excited thai jai che hamna
Ohh pujaaa no mssg avyo chalo ava saru thai jase badhu,badhi overthinking jati rei e tara ganda chokra ni ek var tu roniaaaa kei atla
Vaat karta gaya close avta gaya 
Gandii e 14 Jan e ek mast khand karyo hato ne pachi 15 traik e akho divas peli vaar Eni sathe vaat nai thaili kbr nai su thailu ke ek divas vaat nai kari atla e raat khadvani muskil thai gaili
Che ava mari gandii kari bhi su saku mara j badha khand sachava pada hehe.

Roj normal conversation 
Roniaaaa
                          Pujaaa
Ganda 
                      Gandii
Kevo che tu? 
                          Ma toh sarò j hov 
Haa kbr mana ketlo te
                          Hmm
Kevo gayo taro divas?
                          Maro toh saro j jai 
Saro j gayo em toh
                           Tana kbr mana thodi vaar pela                  
                           Mana hands shake thata hata
Gadheda nai saru 
Lagtu hoi to kevai 
Nai pela 
Ganda bolai nai velu
Tari pujaaa ne nai kevai 
Tara thi 
Bas tana care karta joi ne mari badhi tension dur thai jai a roniaa ne saans mala tari khali vaato thi kasa jati nai gandii
Tum bas sath rehna!!
Tu zindagi bani thi zindagi mein jo zindagi mili toh zindagi ko di hai tujhe hi toh chaha tujhe hi toh manga tha mainaaaa

Ma tana che ne chocolate api hati moti silk tyara Bija badha jealous thata hata ne mana tari sathe chidavta toh mara thi tyara nai kevaiyu pan kete toh maja avte ke 
Baat jo hai usme baat woh yaha nahi kisi mein 
Woh hai meri bas hai meri shor hai yahi gali gali mein sath sath woh hai mere gham mein meri dil ki har khushi mein 
Zindagi mein woh nahi toh kuch nahi hai meri zindagi mein.
Ne koi vaar eloko puchta naam nai leta taru ke koni wait kara che toh mara kevu hatu
Pucha koi naam tera toh mana hai rab likha

Kevu ne apda avu imagine karya ke nani pujaaa ana nano ronioo sathe hata toh ketlu saru hata nana thi j ek bija ne heran karta hata amna pan apde kase javanu hoi toh evu thai ke khash tu mari sathe hota hamna sathe maja karta apde chal kn thiya kara nana hata tyara sathe nai hata toh su thai gayu mota che tyara toh sathe che ne ana hope karya ke ava 12 pachi jya bhi jasu sathe j jasu 
Jitni bhi duri hai tujhse bhala lagta  tu hi paas hai. Gandi hehe 😁

Baat hai ye teri wafa ki 
Baarishon ki thandi hawa ki 
Titliyon ko rang hai tune 
phoolo ki toh laaj badha di
Basa hai tu dil mein kahin 
Ya tere hona ka eshaas hai 
Tu che ne toh badhu bhala saru hoi aju baju ma pan jyara tu ava badhi vastu vadhara sari lagva laga pujaaaaa

Kekasha ho tum 
Kahaniyoon ki paariyo 
Ki tarah ho tum
Mujhme aa saka na koi iss tarah ho tum 
Aashiyan ho tum ma bhatka sa musafir 
Meri manzilo ka ek hi raasta ho tum 
Ho yakeen tum mera ya phir guman ho tum 
I don’t know su thiu mari sathe koi ni hatu 2 varas ne ava mana bo jarur hati koi ni then god sent me his angel meri kahaniyoon ki paari
Ma bhatakto toh hato aya tya kbr nai hati ke kayu track right che kya javu ma su karu ma
Pachi tuya rasto dekhaido bas e rasta ma sathe reje gandii.

Roniaaa chal bhuk lagi mana Kai khava javana 
Roniaaa chal rakhadva javana 
Roniaaa chal kasa farva javu che 
Roniaaa avi jaa ni baju ma jaldi thi 
Roniaaa kash baju ma rete toh apda
Badhi tari cravings tu mana kei ne kbr Che nai puri thasa pan bas kei ke haa ek divas toh puri karse mari badhi cravings a manas km ke tana kbr che ke tu hi thi meri homie aur mein hamesha teri aur mein hmm promise toh nai kari saku ke badhi tari wish puri Karis pan haa try jarur karis.

Pujaaa ice cream khav ke nai 
Ketli nani vastu che pan mana puchvanu gama
Km ke gandii maru dhyan rakhe 
Hmm apdne laga nani vastu che pan apda saru ketli moti vastu che ke koi pucha che mana ke icecream khav ke nai te pan koi na saru hu ketli special hova ke avi nani vastu pan pucha che gandii tana koi vastu nai gama ne toh kei deje mana hu nai karis e vastu.

Le chalo wahan mujhe 
Mein dekhta hu aasman mein bhi abb tujhe
Dekha ek roz tara tut-t ke gaya 
Mangi bhi dua par haa tu nahi mila
Fortunately mana toh tu mali gai bas ava aj wish che ke tari sathe badhu saru j thai ana hu always hov tari sathe 
Tara je bhi dukh che e mara badha lei leva che ana mari badhi khushiyaa api devi che tana

Tana jaata joi phanghat ni vaate 
Maru man mohi gayu 
E tara rupada gora gora gala e 
Maru man mohi gayu
Tari madh mithi madh mithi vaate 
maru man mohi gayu 
Maru man mohi gayu 
Maru man mohi gayu

Tu kehti hota mujhe mood swings 
Meri zyada tu parwa na kar 
Chod de tu mere haal pe mujhe choti baato pe yu jhagda na kar 
Fights nali nali kevu ne mana bye kevanu nai gama atla tu pan nai kei haa koi vaar kei dei ma vadhara heran karu toh tana km ke ma pan gando chu ne marvani vaat kiya karu always kbr Che pujaaa ne nai gama kbr Che avu kev toh ek heartbeat skip thai jai bichari ni toh pan hu kev
Dar vakte sorry kev pan pachu ej vastu repeat karu amna pan sorry kev chu biji vaar thi nai bolis mari gandii avu ana hu nai mari mara tara saru aju jivanu che aju toh tari sathe bo time spend karvano che mari pujaaaaaa,kevu ne mana bye kevanu nai gama atla tu pan nai kei ana jo vadhara koi vaar heran karu hu toh tu kei dei jaa bye nathi vaat karvi tari sathe pan 2 min ma pachi mssg karse ganda mar khasa biji vaar jo boliyo che toh nai revai mari pujaaa thi mara thi dur hehe ne tara roniaaaa e pan nai revu dur tara thi gandii masti ma kev hu koi vaar seriously nai leti tana pan kbr Che koi nathi roniaaa nu tara sivai ana bhik laga tara roniaaa ne.

Kevu ne roj wait karvanu kyara rat thai ne kyara je bhi thayu divas ma e badhu kiya ek bija ne
Ohh roniaaa/ohh pujaaa tana kbr aja su thiyu peli no mssg avalo aja ani sathe vaat thai.
Nakkama,vaido,hoshiyari,gadhedo,maro roniooo
A badhu tu kei ne atlu saru laga ne mana ne a maro word ma je power che ne avu laga jiti lidhi duniya gandii. Bas a raat koi divas puri j nai thai avi umeed karu ne tu mari baju ma hoi e ratra.
Mari light che tu darkness ma,mari boat che tu a ocean ma,mari anushka che tu ana ma taro virat,mari gussa ne ana mind ne control kari sake tu atli tara ma himmat che,mein hu tera kanha tu radha se kam nahi hehe.

Hmm badho haq pela no che tari sathe flirt karvano pan ma bhi koi vaar kari saku hehe
Tum hath thaam Lena hum samaj jaayenga
Tu halki si sharmana hum tere ho jaayenga
Ya likhu tere nazroo ke jaadu pe 
Ya likhu unke sharma ke jhukne pe
Teri aakhon ka kajal na faila abb khabhi bhi 
Tujhe itna pyaar du
Haula se dhima se mujhko baahon mein bhar lo na tum.
Hu mane Sodhya karu pan hu tane pamya karu
Tu lai ne aave laagni no melo re.
Chanda bhi dewana hai tera
Jalti hai tujhse saari chakoria.

Biji koi chokri no mssg avyo che 
Jaa ne ani sathe j vaat kari le mari sathe km kara che jaa
Pujaaaa
Su kam che pujaaa nu jaa peli sathe j vaat kar
Are gandii biji koi no mssg avyo toh su thai gayu mara saru toh mari pujaaaa mari j che ne ana e toh jo biji koi chokri no mssg ava pan toh pan savthi pela tana kev ke jo ana mssg karyo em 
Haa tana heran karva avu keva ke haa Eni pase j Jaav chu pan nai javu mara koi biji pase tana chodi ne samaj padi ava koi biji no mssg ava toh Marie mana hehe
Hmm ma tana chidvu pela sathe ke jiju jiju em pan haa Sachu kev toh koi vaar mana pan jealousy feel thai ke e tana lai jase hehe 
Pan kn jiju jiju che mara hehe😁

Ketli gandii che ne tu mara saru ke mana Kai Thai jai toh atlu badhu tension lai lei hehe,bas khali 2 min vaat karva mali jai roniaaaa sathe toh ketlu saru laga tana,ohh chocolate khav chu chal roniaaa ne puchi lev khavano ke nai bhala e naa j padse ana haa padse toh pan api toh nai sakis pan toh bhi puchi lev saru laga hehe,roniaaa e photo maingo tarat mokli didho kbr Che e j joi che ne roniaaa e khidu bhi ke delete Kari deje pan nai karyo aju sudhi atlo badho trust che tara roniaaa par,ava school nai hoi atla roj uthi ne good morning roniaaa kei ne j divas chalu karvano,ronioo kai undhu bola che bas shh kei devanu tara shh ma atlo power che ke e ronioo je koi ni samhe jo pota par avi gayo toh nai Chup thai tara khali ek shh thi Chup thai jai che sarò khoof che mari sherni hehe bas ava kevu toh biju bo badhu che pan e imagine karyu che ne ke baju ma besi ne badhu bolis toh thodu tyar saru pan rava diye hehe mari gandii pujaaa.

Haa badho haq pela no che pan toh bhi ek vaar puchi lev ke e arms ma mana ek vaar jagya malse ke?

Bas ava bo rad nai jo pillow che jaa hug kari lee ene fatafat tara aasu kimti che mara saru toh e pillow par aj pad mana lagse mara shoulders par aj rada che hehe 
Ana ava mandatory che ke suva pela hug kari ne Sui javanu e pillow ne hehe
Chal smile kar have 

Mene kismatoh mein meri tujhe bandh rakha hai 
Mene saato hi janam tujhe maang rakha hai 
Pujaaaaaa 🥺🤝

Ava jem divas puro nai thai ek bija ne roniaaa ke pujaaa keva vagar toh a vastu Kevi ritna puri thasa
Dhyan rakhje taru gandii
Roniaaa🥺🥺
             Pujaaaaaaa 🥺🫀

`
    },
    {
      id: 4,
      title: "Your Bdy Gift. txt",
      date: "april 5 ,2024",
      size: "1.9 KB",
      emoji: "💞",
      preview: "I promise to always be there for you...",
      content: `My sweetest love,
      Until you get the real ones 😁😁
Tum paas aaye, yoon muskuraaye
Tumne na jane kya sapne dikaaye
Ab to mera dil, jage na sota hai Kya karu hai, haaye, kuch-kuch hota hai Kya karu hai, haaye, kuch-kuch hota hai

Follow me roniaaaaaaaaaaa
For life yaaaaar pujaaaaaaaaaaaaaa😁
Tu aur me Sath combination apna deadly

Hehe gandiiii tq nai kevanu samaj padi tu mari pujaaaaaaaaa che tari overthinking calm nai karis toh koni karis ma ne tana koi divas insecure nai feel karavu tana koi divas insecure laga toh kei deje ma e insecurity dur kari dais 
Haaa a dil pela thi j maru hatu ne maru j rese always hehe😁😁

Haa uthadis lagan pachi roj ke pujaaaaaaaaa uthi jaa hehe nai uthi toh kiss kari kari ne uthadis 
Ne ema su tq gandiiiii thodo late aj toh sui jato tari sathe ema su thai gayu mara toh khali time spend karvo che tari sathe tu 4 vaga pan sui jase toh ma 4 vaga sudhi pan jagis samaj padi mari pujaaaaaaaa ne koi divas eklu nai Rakhi’s ma haa hehe we are best study buddy

Haa hehe e gif bo special Che ne mari pujaaaaa e khidu ke mandatory che toh pachi e che ma roj moklis e haaa hehe thoda time pachi ma tara stomach par sui jais karje karje pamper karje hehe ramje mara vaad sathe koi ne allowed nathi touch karvanu mara vaad ne pan tu Ramse atla tana badhu allowed che 
Haa pujaaaaaaaa ek divas pillow ni jagya par tu hasa pakku🧿

Haa hehehe thoda time pachi tu mana tara hath thi khavdavje ma pan tana khavdavis Mara hath thi haa gandiii apde sathe cooking karsu hehe cooking karta karta dance karsu apde ne badhu taste karis ma cooking side pan nai rei jai enu dhyan ma Rakhis hehe tu khali badhu taste karavje hehehehe😁🫠🫠
Wo kehti thi ghar ham banayege
Saath mai royege gayege Or dono ko beti hi chahiye
Maa ki kasam use raani banayege,
Wo kehti mai khana bana dugi
Tu mujhko khana khila dena

Haaa we will take care of each other gandiiii ne kai kaam nathi mana shardi thai hoi tyara kiss ne cuddle karvani tana kai thavu nai joiya e right khali mana che jyara tana shardi thai hase tyara khali ma j kiss ana cuddle karis tana 

Haa hehe apde sathe dance karsu gandiiiii apde 2 khali ek aj room ma hehe ek aj blanket ma hehe we will dance in rain hehe ne je divasa rain nai padti hasa te divasa bathroom ma rain padi ne dance karsu baby i m dancing in the dark with you between my arms, barefoot on the grass listening to our favourite song."

Hehe gandiii tari chapad chapad aj toh mari heartbeat che tari chapad chapad bandh thai gai toh kbr nai maru su thasa ketli beautiful dekhai ne tu chapad chapad karti vakhte hehe bas man thai tana joto rev ana sambdhto rev ana blush karya karu hehe haaa a bak bak akhi life sambdis ma hehe bas avi ritna j smile karti reje gandiiii

Pujaaaaaaaaaa tu pan maru sukoooooon che gandiiiiii maru home che tu hehe mara pyaar ma j padvani hati tu hehe lattu ho gayi thi mere pe😁😁 haa hehe taro j gadhedo
Have computer nu paper toh chala taru naam ne tana toh ma mara life na page par lakhyu che  ana best page che mari life nu have toh mummy e pan kei didhu ke Sachu ma gf aj laga che hehe kevano hato ke gf nathi mari wifeyyy che 😁😁
Hehe we both are lucky gandiii ke we got each other ne sathe j resu apde 🥹🧿

You make my day toooo gandiiiii every hour every min every sec 

Hehe tara natak ma j toh maja che gandiiiiii hehe vadhara karje kn kese 10 vaar ke emoji nathi ama sorryyyy lakh barabar it’s okayyyy pujaaaaaa lakh ma lakhis 100 vaar km ke tu mari j che ne tana kasa pan java nai dev ma hehe ne natak toh karse j ne km ke ma j tana bagadi che hehe ne aju bagadis hehe movies ma toh hoi badhu pan ma real ma karis badhu standard set karis tu kei em hehe 
Haa nai chodu taro hath 
And "we will never stop trying"

Shhhh ene care nai prem kevai hehe ne karva j pade ne madam ni pota toh pota nu dhyan rakhai nai kai khavai nai pachi dhili thai jai te khata su thai barabar samaj pade ke nai hehe tara mood swings toh handle kari lais ma have khaja barabar ni toh Maris ek tana 
Hehe Mrs Perfect

Haa hehe apde sathe bdy celebrate karsu sathe mandir jasu sathe khava jasu ratna jyara bukh lagi hase hehe badhu karsu sathe apde haa hehe ghara j celebrate karsu badhu haa hehe cuddle karsu hug karsu kiss karsu stars josu ma tana jois tyara hehe badhu sathe karsu apde 😁

Haaaa we will make it happen gandiiiii 
Mujhko Itna Bataye Koyi
Kaise Tujhse Dil Na Lagaye Koyi Rabba Ne Tujhko Banane Mein
Kardi Hai Husn Ki Khaali Tijoriyan

Hehe thai jai koi vaar tension tari jyara mssg nai ava hehe ne sorrryyyyyy gandiiiii 14 feb saru ma sui gailo ne tu tension ma avi gaili 🥺🥺sorrryyyy sorrryyyyyyy 

Haaaa hehe apdi first kiss gandiiiiii bo special hasa e pan karje kn lipstick sathe pan roj nai hehehe 

Haaa gandiiiii my pujaaaaaaaaaa will always be with me no matter what mana kbr Che haaa gandiiii we will solve our problem together haa hehe mana kbr Che tu hasa mari pachad mari backbone che tu mari ladyyyy luckkkk che tu hehe😁😁
We are a family pujaaaaaaaaaaa🥹🧿

Haa hehe tu mara songs vadhara sambdhe ne ma tara vadhara sambdhu hehe it is incomplete without this song
aage rahiyo naa peechhe rahiyo
mera rahiyo yaar bas mera rahiyo aage rahiyo naa peechhe rahiyo
mera rahiyo yaar bas mera rahiyo sang rahiyo sang rahiyo
samjhe naa duniyaa tu to mujhako samajhiyo tu to mujhako samajhiyo dil naasamajh hai
dil ko kuch bhee naa kahiyo

Apdi storyyyy ma pan fav che gandiiii haa hehe our romcoms has already begun haa hehe we share the same story now and we are the main characters 
We love each other 
I was enchanted to meet you 😁😁

Haaa pujaaaaaa always hath pakdine chalsu apde apdi daughter no hath pakdi ne chalsu apde 🥹🥹

For my girllllll who has just made my life  so so so beautiful that i couldn't have even imagined that i would just keep smiling for the whole day life her little boy hehe I am her little boy it is so so so special to be just your boyyyy pujaaaaaaa justttt your boyyy hehe haa mara saru ek normal day j che maro bdy pan tara saru bo bo special che I know gandiiii hehe my girlll my girlllll my girlllll only my girlllllllll
You are the only girlllll that matters gandiiiiiii hehe I also feel the most comfortable with,with whom I can cry laugh and do any random thing with hehe ma Ochi panchat karu je tari sathe hehe ma pan atlu j bak bak karu hehe em bhi apde 2 toh navra j che😁 hehe ma pan tana mara hath thi khavdavis hehe periods par pad ne choclates badhu lavis hehe vadhara kai kbr nai periods nu atla a 2 vastu lavis hehe tu keje su thai periods ma detail ma hehe pachi apdi daughter ne bhi sachavani che mara hehe bo jealous feel nai karavu tana em bhi koi biji chokri sathe vaat karvanu gama j nai mana khali mari pujaaaaaaaaa sathe j revanu vaat karvanu natak karvana gama 
My heart also beats for you onlyyy pujaaaaaaaa
meri banhon ko teri saanson kee jo aadaten lagee hain aisee
jee letaa hoon ab main thoda aur mere dil kee ret pe aankhon kee jo pade parchaai teri
pee letaa hoon tab main thoda aur jaane kaun hai too meri main naa jaanoon ye, magar
jahaan jaaoon main, karoon main vahaan tera hee zikar muje too raji lagtee hai jiti huee baazi lagtee hai tabeeyat taji lagtee hai ye tune kya kiya
main dil ka raaj kehtha hoon ki jab-jab saansein letaa hoon
tera hee naam letaa hoon, ye tune kya kiya?

Hehe my Mrs Perfectttt 
My everything mari dosi mari vandri mari gandiii mari chipkali mari wifeyyyy bas khali mari jjjjjj 
Chanda bhi dewana hai tera
Jalti hai tujhse sari chokriya 
Khuda ne tujhe pariyon se tarash rakha hai

Tq gandiiii tq tq tq tq for this giftttttt the best gifttttt of my lifeeee tq tq tq 🥹🥹

Mene kismatoh mein meri tujhe bandh rakha hai
Mene saato hi janam tujhe maang rakha hai 🧿

I loveeeeee youuuuuuuuuuu pujaaaaaaaaaaaaa😁🫀

`
    },
    {
      id: 5,
      title: "Moments I Cherish.txt",
      date: "5 days ago",
      size: "2.3 KB",
      emoji: "💗",
      preview: "There are so many little moments with you that I treasure...",
      content: `My darling,

There are so many little moments with you that I treasure - the way you look first thing in the morning, your laugh when something really amuses you, how focused you get when you're passionate about something.

I cherish our quiet evenings together, our silly inside jokes, our deep conversations late at night, and even our little disagreements that always lead to understanding each other better.

These seemingly ordinary moments are what make our love extraordinary. They're the building blocks of our story, and I'm grateful for each one.

Thank you for all these beautiful moments, past and future.

With endless affection,
The one who loves collecting memories with you 💕`
    }
  ];

  // Function to return to FileManager when coming from there
  const returnToFileManager = () => {
    if (fromFileManager) {
      // Close the LoveLetters window
      dispatch({ type: 'CLOSE_ACTIVE_WINDOW' });
      
      // Open FileManager with the Love Letters folder open
      dispatch({
        type: 'OPEN_WINDOW',
        payload: {
          title: 'File Manager',
          component: 'FileManager',
          isMinimized: false,
          isMaximized: false,
          position: { x: 100 + Math.random() * 100, y: 100 + Math.random() * 100 },
          size: { width: 800, height: 600 },
          // You could add some state to have FileManager open at this path
          props: { initialPath: '/Love Letters' }
        },
      });
    } else {
      // Just go back to the letter list
      setSelectedLetter(null);
    }
  };

  // Modify the back button handler in the letter view
  if (selectedLetter !== null) {
    const letter = letters[selectedLetter];
    return (
      <div className="h-full bg-gradient-to-br from-pink-50 to-rose-50 flex flex-col">
        <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 p-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSelectedLetter(null)}
              className="px-3 py-1 bg-pink-100 hover:bg-pink-200 rounded-lg text-pink-800 transition-colors flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </button>
            <h2 className="text-lg font-medium text-gray-800">{letter.title}</h2>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-3xl mx-auto">
            {/* Letter header */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-pink-200 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-400 rounded-xl flex items-center justify-center shadow-md text-white">
                  <span className="text-2xl">{letter.emoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-pink-800 mb-1">{letter.title.replace('.txt', '')}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 inline" /> {letter.date}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 inline" /> {new Date().toLocaleDateString()}
                    </div>
                    <div>{letter.size}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Letter content */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-pink-200">
              <div className="prose prose-pink max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {letter.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main letter list view
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-rose-50 flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-2xl">💌</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Love Letters</h1>
          </div>
          
          {/* View toggle buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {fromFileManager ? (
              <button
                onClick={returnToFileManager}
                className="px-3 py-1 bg-pink-100 hover:bg-pink-200 rounded-lg text-pink-800 transition-colors flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Files
              </button>
            ) : (
              <button
                className="p-2 rounded-lg text-gray-600 hover:bg-pink-100"
              >
                <Home className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Path breadcrumb */}
          <div className="flex-1 bg-pink-50 rounded-lg px-3 py-2">
            <span className="text-sm text-gray-600">
              {fromFileManager ? '/File Manager/Love Letters' : '/Love Letters'}
            </span>
          </div>
        </div>
      </div>

      {/* Content - Grid and List views remain the same */}
      <div className="flex-1 overflow-auto p-6">
        {viewMode === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {letters.map((letter, index) => (
              <div
                key={letter.id}
                className="flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-200 hover:bg-pink-50 hover:shadow-md"
                onClick={() => setSelectedLetter(index)}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 bg-gradient-to-br from-pink-300 to-rose-400 shadow-md">
                  <span className="text-3xl">{letter.emoji}</span>
                </div>
                <span className="text-sm font-medium text-gray-800 text-center max-w-full truncate">
                  {letter.title}
                </span>
                <span className="text-xs text-gray-500 mt-1">{letter.size}</span>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 gap-4 p-4 bg-pink-50 border-b text-sm font-medium text-gray-600">
              <div>Name</div>
              <div>Size</div>
              <div>Modified</div>
              <div>Type</div>
            </div>
            {letters.map((letter, index) => (
              <div
                key={letter.id}
                className="grid grid-cols-4 gap-4 p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-pink-50"
                onClick={() => setSelectedLetter(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-pink-300 to-rose-400">
                    <span className="text-lg">{letter.emoji}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{letter.title}</span>
                </div>
                <div className="text-sm text-gray-600">{letter.size}</div>
                <div className="text-sm text-gray-600">{letter.date}</div>
                <div className="text-sm text-gray-600">Text</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status bar remains the same */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-pink-200 p-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{letters.length} items</span>
          <div className="flex items-center space-x-2">
            <span>Written with</span>
            <span className="text-red-500">❤️</span>
            <span>just for you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetters;