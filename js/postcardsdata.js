// js/postcards-data.js
const postcardPool = [
  {
    id: 1,
    cn: "你好，来自德国的问候，我和家人住在埃尔福特附近。昨天暴风雨带来大雨、闪电和雷声，我们堆了沙袋并准备好抽水机。最终情况还好。祝你一切顺利！安雅。", // 这里记得换成 Anja 这段话的中文翻译
    en: "Hello, many greetings from Germany, my family and I live near Erfurt. Yesterday the storm came to us with heavy rain, lightning and thunder, we stacked sandbags and got the pump ready. It turned out lightly. I wish you all the best! Anja."
  },
  {
    id: 2,
    cn: "我2岁的女儿从瑞士向您致以最美好的祝愿！",
    en: "My 2yr old daughter sends you best wishes from Switzerland!"
  },
  {
    id: 3,
    cn: "嘿，因为你在个人资料中提到你喜欢电影，所以我决定给你寄一个经典的电影女性形象。我希望你喜欢它。在我的家乡科隆，我们有一个小电影院，每周日都会放映老电影。也许有一天，我会在那看到玛丽莲·梦露的电影。来自德国的问候！卡罗琳。",
    en: "Hey there, Because it’s said on your profile that you like movies I decided to sent you the icon Herself. I hope you enjoy it. In my hometown Cologne we have a little cinema in which you can watch old movies every Sunday. Maybe someday I will see on of Marilyns movies there. Greetings from Germany! Carolin."
  },
  {
    id: 4,
    cn: "你好，我是凯特！来自白俄罗斯的问候！我为你挑选了一张由白俄罗斯艺术家塔季扬娜·切尔尼赫绘制的明信片。这幅画名为《村庄的早晨》，是2023年明斯克艺术节的获奖作品。这位艺术家专注于描绘白俄罗斯的乡村、田园风光以及野花静物画。在我看来，她的画作非常温馨，却也带着一丝淡淡的忧伤。它们让我想起了童年时光——每年夏天我都会去乡下看望祖母，白天骑自行车、吃浆果、和动物还有朋友们一起玩耍……顺便说一句，我真的很喜欢你的绘画和设计作品！太棒了！祝你有一个美好的夏天，一切顺利！要幸福哦！凯特。",
    en: "Hello! This is Kate! Greetings from Belarus! I have chosen for you the postcard with a painting by Belarusian artist Tatyana Chernykh. The painting is called “Morning in the Village” and became the winner of the Art Minsk festival in 2023. This artist paints Belarusian villages, countryside, and still lifes with wild flowers. Her paintings seem very cozy and a little sad to me. They bring back memories of my childhood when I went to the village to visit my grandmother every summer. I spent my days riding bicycles, eating berries, and playing with animals and friends... By the way, I really like your drawings and design projects! It is fantastic!I wish you a good summer and all the best! Be happy! Kate."
  },
  {
    id: 5,
    cn: "来自洛杉矶的问候！我今年42岁，是一名已婚律师，有两个女儿，还有一只猫。我喜欢阅读、看喜剧和喝茶。我正要带我最小的女儿去游乐场。大女儿去参加一个过夜聚会了。今天天气非常好，阳光明媚。最诚挚的祝福！ 丹尼斯 。",
    en: "Hello from Los Angeles! I am 42, a married lawyer, with 2 daughters and a cat. I like to read, watch comedies and drink tea. I am about to take my youngest daughter to the fair. The elder one went off to a sleepover. The weather is super gorgeous today. Best wishes. Dennis."
  },
  {
    id: 6,
    cn: "你好， 我是阿尔夫，来自德国波鸿。我为你挑选了这幅奥古斯特·麦克的表现主义画作，我在科隆市见过原作。奥古斯特·麦克和弗朗茨·马克都是青骑士画派的画家，是我的最爱。他们不是真实地再现他们所见，而是描绘他们所感。你喜欢电影吗？你看过我最喜欢的比尔·默里和斯嘉丽·约翰逊主演的《迷失东京》吗？健康平和地生活！祝好，阿尔夫[羊][羊][贴纸][羊] 丹尼斯 。",
    en: "Ni hao, I am Alf from Bochum, Germany. I chose this expressionistic paintingof August Macke for you which I have seen in original in the city of Colone. August Macke and Franz marc, both painters of the artist-union: “Blauer Reiter”, are my favourites. They didn’t paint what they saw in real but whwt they felt. And you like movies? Have you ever seen my favourite one “Lost in Translation” with Bill murray and Scarlett Johannson? Have a healthy and peaceful life! Best wishes, Alf [sheep] [sheep] [sticker] [sheep]"
  },
  {
    id: 7,
    cn: "我是克里斯蒂安，来自维也纳。这张照片是维也纳国家歌剧院的观众厅。为遮盖铁幕（该表述如今已不再被视作政治正确）上的图案，每年都会悬挂一幅大型现代艺术作品复制品将其覆盖。上个月我在这里观看了焦阿基诺・罗西尼的《塞维利亚的理发师》。祝好",
    en: "My name is Christian and I'm from Vienna. This is a photo of the auditorium of the Vienna State Opera. To cover the motif on the iron curtain (a term no longer considered politically correct), it is draped each year with a large-scale reproduction of a modern artwork. Last month I saw Il Barbiere di Siviglia by Gioachino Rossini there. Best wishes, Christian"
},
{
    id: 8,
    cn: "欢迎来到阿联酋，希望这些猫咪能让你的一天变得更美好！卡莉塔。",
    en: "هياك في الإمارات Welcome to UAE. I hope that the cats can make your day! :)"
  },
  {
    id: 9,
    cn: "来自爱尔兰劳伊斯农村卡姆罗斯的问候！我和年迈的妈妈住在一个农场里，四周都是森林。我寄给你的明信片上面的画是由 JIM FITZPATRICK 创作的，他曾根据照片画过切·格瓦拉。我还寄了一张与 A7 大小相关的卡片和一枚三叶草贴纸，但其实我们的主要象征是竖琴。我每天开车10分钟去一个本地的锯木厂上班，在那里我负责清理锯末和木材，每天工作9小时，每周5天。我有2型糖尿病，但目前身体状况还不错。最好的祝愿，萨姆。！",
    en: "Hello from rural Camross in Laois, Ireland on a farm with my elderly mum, and we are surrounded by forestry. I send you artwork by Jim Fitzpatrick, who painted Che Guevara from a photo. I send you an A7 related shape (card)  and a shamrock sticker, but the harp is our base symbol. I travel 10 minutes to work in a local sawmill where I sweep/tidy sawdust and timber, 9 hours a day, 5 days a week. I am a type 2 diabetic, but I’m doing OK at present. Best wishes Seamus. "
  },
  {
    id: 10,
    cn: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆。",
    en: "Our tiny village Wendesse is too small to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my “home office” window on our fields, in the background you might see our pumpjacks. The stork’s nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we’ll need the next 25 years or so. On the bottom is the map of our tiny village – as you see, many fields and just a few houses — much nature. You might also notice our families coat of arms and the one of our village.And you find my address — as I always hope for replies! Many greetings from family Nottbohm. Hallo Zhimu Li, have you ever watched “nherit the wind”and old black white movie from 1960s? I love it! How do you like my selfmade card? Nottbohm from Germany."
  },
  {
    id: 11,
    cn: "你好，来自美国威斯康星州芒特霍雷布的问候！我对爵士乐不是特别熟悉。你认识这位艺术家吗？我很喜欢这张专辑封面的艺术设计。我平时听流行和独立音乐。目前我正在听一组 洛德·赫伦的音乐，他们的音乐让我感到很平静。我最近还发现了 迈尔斯·史密斯的音乐，他有一首很受欢迎的歌叫《仰望星空》。新年快乐！杰森。",
    en: "Hello from Mount Horeb, Wisconsin, USA. I don’t follow jazz that much. Are you familiar with this artist? I liked the art work. I listen to pop and indie music. I am correctly listening to a mix of lord Huron music. Their music is so celming for me. I also recently discovered the music of Myles smith-a popular song of this is celled Stargazing. Heppy New year. Jeson."
  },
  {
    id: 12,
    cn: "非常感谢你的明信片，它对我们的帮助超乎你的想象。我们现在已经派了几个同类去中国寻找龙和它的魔法。希望能借此帮助我们完成重返家园的任务。 我们选择寄这张明信片给你，是因为这张画（注：莫奈的《吉维尼花园》）让我们想起了我们美丽的母星。 同时，也祝你在大学以及未来人生的任务中一切顺利！",
    en: "thank you so much for your card, which helped us more than you think it did. We have now sent a few of our kind to china to find the dragon and its magic. Hopefully it can help us in our quest to get back home. We chose to send you this postcard because the picture reminds us of our beautiful home planet. Also we wish you the best with your quests at college and beyond in life. Zip-Glorp Unsichtbare Aliens."
  },
  {
    id: 13,
    cn: "我给它起名叫 “蜜桃裤麦吉先生”，它是在美国田纳西州的一处化石遗址被发现的。我把它带回了家，如今它在纽约附近过着惬意的生活。有时候我觉得它长得像一根玉米热狗。你有养宠物吗？我很喜欢弦乐器，不过平时大多弹电贝斯。流行音乐是我最爱学的类型。我还买了一把班卓琴，不过没怎么弹过。说不定哪天我会报班学学！祝好！",
    en: "Mr. Peachy Pants McGee (as I like to call him) was found at a fossil site in Tennessee, USA. I took him home and now he lives a happy life near NYC. Sometimes I think he looks like a corn dog. Do you have any pets? I love playing stringed instruments but I mostly play the electric bass. Pop music is my favorite to learn. I bought a banjo but haven't played it much. Maybe I'll take lessons one day! Cheers! Rachel."
  },
  {
    id: 14,
    cn: "你好，我看到你喜欢毕加索那幅著名的《和平鸽》，所以希望你也会喜欢这张他的作品：《公牛》。“Toros” 意为公牛，瓦洛里（Vallauris）是法国的一座小镇。",
    en: "Hello, You have the famous dove of peace by Picasso in your Favorites. So I hope you will like another Picasso, TOROS = bulls Vallauris = a place in France."
  },
  {
    id: 15,
    cn: "你好，每当我抽到一个来自中国的地址时，我总是非常开心！我的女儿是从中国收养的，我也曾多次访问中国。现在我们正在再次前往香港和中国大陆旅行。来自林妮特·范德霍夫的问候。我的地址是：荷兰鹿特丹。",
    en: "Hello, I am always happy when I get an address in China for a postcard! My daughter is adopted from China and I visited the country several times. And in now, we making a trip to Hongkong and China again. Greeting from Linette van der Hoof & Zonneblaem staat 61 365 IST Rotterdam, The Netherlands."
  },
  {
    id: 16,
    cn: "你好！这张卡片讲的是狐狸精。在中国也有类似的形象，比如“狐妖”“狐仙”“狐媚”或“阿柴”？希望你喜欢这张卡片。丽。",
    en: "This card is about fox spirit. It seems it’s the same in China, huyao，huxian，humei or achai？Hope you enjoy the card. Lyo."
  },
  {
    id: 17,
    cn: "你好！我叫莱西娅，来自乌克兰。我热爱山川、森林、旅行和摄影。我曾梦想亲眼见到大海，这个愿望至今也没变……但现在，我最渴望的是能过上平静安稳的生活。愿你拥有美好的每一天，以及安宁幸福的人生！莱西娅。",
    en: "Hello! My name is Lesia. I'm from Ukraine. I love mountains, forests, travel, photography. I dreamed and still dream to see the ocean... But now I dream of a peaceful life. I wish you a wonderful day and peaceful happy life! Lesia."
  },
  {
    id: 18,
    cn: "",
    en: ""
  },
  {
    id: 19,
    cn: "嗨，我叫兹登卡。来自捷克共和国的问候，我的家乡是姆拉达-博莱斯拉夫。这里是斯柯达汽车的产地，也许你听说过。希望你喜欢这张“小鼹鼠”的卡片 :)兹登卡。",
    en: "Hi, my name is Zdenka. I am sending you many greetings from the Czech Republic, my hometown Mlada Boleslav. Here Škoda cars are made. Maybe you know them. Hope you will like this card of Little Mole :) Zdenka."
  },
  {
    id: 20,
    cn: "你好，我是卡米拉，我是比约恩（即将两岁的男孩）的幸福的祖母。前面的字是：ONNEA，意思是好运。我们正好下雪了，所以给你堆了个雪人。爱你的卡米拉！",
    en: "Hello! I’m Camilla, a happy grandmother to Bjorn (boy soon to be 2)In front: ONNEA, means LUCK. We have snow so made you a snowman. Love Camilla!"
  },
];