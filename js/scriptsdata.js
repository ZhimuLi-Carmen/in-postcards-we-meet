// js/scriptsdata.js

const scriptsData = {
  "A": {
    titleZh: "章鱼水族馆",
    meta: "Aquarium",
    
    // 页面背景底部的散落图片
    images: [
      "postcardforscript/A/1f.JPG",
      "postcardforscript/A/2f.JPG",
      "postcardforscript/A/3f.JPG"
    ],

    // ==========================================
    // 交互数据控制台：管理透明图片、页面高亮文段、白框浮现的文字
    // ==========================================
    triggers: {
      "trigger1": {
        bg: "postcardforscript/A/3b.JPG",
        zh: {
          text: "搜索“密西西比水族馆巨型章鱼”", 
          tooltip: "你好！我住在芝加哥郊区，但最近我们去了伊利诺伊州的加利纳和爱荷华州的迪比克旅行。我们参观了这家博物馆和水族馆，还参加了水族馆的“幕后”导览之旅，参观了它的各种设施和研究项目。拥抱你，凯庭。" 
        },
        en: {
          text: "(Search “Mississippi Aquarium giant octopus”)",
          tooltip: "Hello Carmen! I live in the suburban Chicago area, but recently we traveled to Galena, Illinois and Dubuque, Iowa. We visited this museum and aquarium, and took a 'behind the scenes' tour of the aquarium and its various facilities and research projects. Cheers! Mike, Woodridge, IL USA"
        }
      },
      "trigger2": {
        bg: "postcardforscript/A/2b.JPG",
        zh: {
          text: "搜索“圣地亚哥水族馆巨型章鱼”",
          tooltip: "来自加利福尼亚州沿海城市圣地亚哥的问候。我们这里有很多博物馆、一个棒球场、一个大动物园，以及一个非常美丽的水族馆。我喜欢海马！我最喜欢的艺术家之一是爱德华·霍珀。我最喜欢他的作品《夜游者》。麦克。"
        },
        en: {
          text: "(Search “San Diego Aquarium giant octopus”)",
          tooltip: "Hello from San Diego, a coastal city in California. We have lots of museums, a baseball stadium, a big zoo, and a lovely aquarium. I love sea horses! One of my favorite artists is Edward Hopper. My favorite work is \"Nighthawks.\" Hugs from Kathi"
        }
      },
      "trigger3": {
        bg: "postcardforscript/A/1b.JPG",
        zh: {
          text: "我和我的丈夫喜欢去波士顿的水族馆参观，只要有机会就去，就像这样。那里的大章鱼我们都喜欢的。",
          tooltip: "你好！我叫艾米丽，今年36岁，是一所大型大学的教授。我得知你在学习设计，并且喜欢画速写！我的父母也是如此。这张卡片上的章鱼我们最喜欢的动物之一。只要有机会，我和我的伴侣就很喜欢去波士顿的这家水族馆参观。"
        },
        en: {
          text: "My husband and I like to go to the Boston Aquarium, whenever we can. There’s a reddish-purple octopus there we’re both fond of.",
          tooltip: "Hello! My name is Emily and I am a 36 year old professor at a large college. I see you study design & love to sketch! So do my parents. This octopus on the card is a favorite of ours. My partner & I love to visit this aquarium in Boston when we can. New England Aquarium Protecting the blue planet Giant Pacific Octopus Printed in the USA"
        }
      }
    },

    // ==========================================
    // 中文内容录入区（纯文本数组）
    // ==========================================
    annotationsZh: [
      "（特写）",
      "（随着呼吸的起伏）",
      "（玻璃上起雾）",
      "（一片紫红色）",
      "（静止）[0’05”]",
      "（缓慢移动）",
      "（黑字粗暴地压上）",
      "{{trigger1}}",
      "（抬头望天）",
      "（镜头移动至盛开的花）",
      "（特写）",
      "{{trigger2}}",
      "（语气温柔）",
      "（心想）",
      "（轻声嘟囔，几乎听不见）",
      "（长停顿）",
      "（背景是对话声）",
      "（镜头推远）",
      "（章鱼的眼睛动了一下）",
      "（抓紧了手）"
    ],

    contentZh: [
      "“你看，它在想什么？”我问。",
      "“也许它什么都不想。”丈夫说。",
      "“那我们为什么这样盯着它看？”",
      "“因为它什么都不想。”",
      "{{trigger3}} 刚在一起的时候，我们就喜欢来这里看着这只章鱼。",
      "“今早出门的时候，天很蓝，我发现一朵云和它趴在水里的样子很像。”他说。",
      "“我觉得它趴着的样子像一片微微隆起的草地。只不过草是紫红色的。”",
      "“求你了，不要用你那套什么一棵草也是一座山的去人类中心化思想来看章鱼好不好！下次又要说，章鱼像一朵花了。呵呵，一朵花，多可笑！”",
      "“闭嘴”，我说，“那怎么了？花的颜色倒是和它一样。”",
      "“你总是被一些表象吸引，关注不到实质。”",
      "“你知道吗？卡夫卡认为世界上有两种人，一种是试图去把握这个世界，另一种是试图去抚摸这个世界。”",
      "我看了一眼他，又看了一眼章鱼，说：“你想要把握这个世界，而我想要抚摸这个世界。”",
      "“好吧。那我们就看看是抚摸世界行的通，还是把握世界行的通吧。”",
      "“不会有胜负的……”我低声说。",
      "“对了，我的那本翻得几乎要散架的《爱丽丝梦游仙境》还在你那吗？那可是1907年的老古董。之前说要借给你看的。”他忽然问我。”",
      "“在我的书架上。”",
      "我们就这样有一搭没一搭地说着。其实我根本没用心在听他说的话，也没用心在回答。那个时候，我一直在想，我相信自己吗？他凭什么相信我。你们一定想不到我当时的心情，我想的是，即使后面因为什么事走到离婚，我也不会让自己从他生命中消失。是亲人，是朋友，又或者是他另一段婚姻里见不得人的情人，走到街上也互不认识的陌生人，什么都好，背德的，变态的，我要永远在他生命中出现。"
    ],

    // ==========================================
    // 英文内容录入区（纯文本数组）
    // ==========================================
    annotationsEn: [
      "(Close-up)",
      "(Rising and falling with breathing)",
      "(Fogging up on the glass)",
      "(A wash of magenta purple)",
      "(Static) [00:05]",
      "(Slow movement)",
      "(Black text imposed harshly)",
      "{{trigger1}}",
      "(Looking up at the sky)",
      "(Camera pans to blooming flowers)",
      "(Close-up)",
      "{{trigger2}}",
      "(Soft tone)",
      "(Thinking to oneself)",
      "(Muttering quietly, barely audible)",
      "(Long pause)",
      "(Background voices in conversation)",
      "(Camera pulls back)",
      "(The octopus’s eye twitches)",
      "(Hands clench tightly)"
    ],

    contentEn: [
      "“What do you think it’s thinking?” I asked.",
      "“Maybe it isn’t thinking at all,” my husband said.",
      "“Then why are we staring at it like this?”",
      "“Because it isn’t thinking at all.”",
      "{{trigger3}} When we first got together, we liked coming here to sit in front of its tank and just watch.",
      "“This morning, on my way out, I saw a cloud that looked exactly like it lying in the water,” he said.",
      "“I think the way it lies there looks like a patch of grass, just slightly raised. Only the grass is purple-red.”",
      "“For God’s sake, don’t start with your whole thing about a blade of grass being a mountain, or your de-centering-humanity lecture. Next thing you’ll say the octopus looks like a flower. A flower! How ridiculous.”",
      "“Shut up,” I said. “So what? A flower’s color is the same as its own.”",
      "“You’re always taken in by appearances. You never look at the substance.”",
      "“You know what?” I glanced at him, then back at the octopus. “Kafka said there are two kinds of people in the world: the ones who try to grasp it, and the ones who try to caress it. You want to grasp the world. I want to caress it.”",
      "“All right then. Let’s see which one works in the end—grasping the world, or caressing it.”",
      "“There won’t be a winner,” I whispered.",
      "“By the way, is my battered copy of Alice’s Adventures in Wonderland still at your place? I told you I’d lend it to you.”",
      "“It’s on my shelf.”",
      "We kept talking like that, on and off, without much effort. The truth is, I wasn’t really listening to him, and I wasn’t really answering. The whole time I kept wondering—do I believe in myself? And why on earth should he believe in me? You’d never guess what I was thinking then. I thought, even if someday we end up divorced, I’ll never let myself vanish from his life. A relative, a friend, or some shameful lover in his next marriage, even a stranger we’d pass on the street without a word—whatever it takes. Something forbidden, something twisted. I’d still find a way to be in his life forever."
    ]
  },

  "B": {
      titleZh: "坏手",
      meta: "Broken Wrist",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      // 💡 必须加上这个 triggers 容器！
      triggers: {
          "trigger1": {
            bg: "postcardforscript/B/1b.JPG",
            zh: {
              text: "我的手腕受伤了，”", 
              tooltip: "你好，通常我都是手写明信片的，但是我的手受了伤，现在写字非常困难。 这段留言是我儿子打出来的，我把它和明信片一起放进了信封里。 为什么要寄这些卡片呢：我在拍卖网站“Catawiki”上买了一批1500张（主要是旧的）明信片，现在我把这些额外的卡片寄给我抽到地址的互寄玩家们。 我花了一整天的时间才把这堆明信片整理好。 我以前也在这个拍卖网站上买过明信片，不过我也很喜欢去二手旧货店里淘卡片。 海尔特。" 
            },
            en: {
              text: "I broke my wrist,",
              tooltip: "Hello, normally I write my cards by hand, but I have an injury to my hand and writing is very difficult now. My son typed this message and I put it with the cards in an envelope. Why cards: I bought a batch of 1500 (mainly old) cards at the auction website Catawiki and now send extra cards to the Postcrossers, from whom I received the adress. It took me a whole day to sort through all these cards. I have bought cards at this auction site before, but I also like to go to thriftstores to look for cards. Happy Postcrossing, Geert."
            }
          },

          "trigger2": {
            bg: "postcardforscript/B/2b.JPG",
            zh: {
              text: "打着石膏几乎不可能写字。更别说写出来也会潦草得没法看。", 
              tooltip: "你好， 我摔断了手腕，但我不想停止寄明信片！！这就是为什么你收到的是这段打印出来的文字。非常抱歉，我原本很喜欢手写些专属的留言，但打着石膏几乎不可能写字。更别说写出来也会潦草得没法看 ;-)。 如果你想知道我喜欢什么书、音乐和电影，可以看看我的个人主页。 祝好！约斯特。" 
            },
            en: {
              text: "writing is almost impossible with a plaster cast on. Not to mention unreadable ;-)",
              tooltip: " Hallo, I broke my wrist and I don't want to stop sending cards!! That's why you get this printed text. I'm so sorry, I love to write personal messages but writing is almost impossible with a plaster cast on. Not to mention unreadable ;-). If you want to know what books, music and movies I like, check my profile. Cheers! Joost."
            }
          },

          "trigger3": {
            bg: "postcardforscript/B/1b.JPG",
            zh: {
              text: "我叫来我的儿子帮我打好字再打印出来。", 
              tooltip: "你好，通常我都是手写明信片的，但是我的手受了伤，现在写字非常困难。 这段留言是我儿子打出来的，我把它和明信片一起放进了信封里。 为什么要寄这些卡片呢：我在拍卖网站“Catawiki”上买了一批1500张（主要是旧的）明信片，现在我把这些额外的卡片寄给我抽到地址的互寄玩家们。 我花了一整天的时间才把这堆明信片整理好。 我以前也在这个拍卖网站上买过明信片，不过我也很喜欢去二手旧货店里淘卡片。 海尔特。" 
            },
            en: {
              text: "I asked my son to type this message and print them for me.",
              tooltip: "Hello, normally I write my cards by hand, but I have an injury to my hand and writing is very difficult now. My son typed this message and I put it with the cards in an envelope. Why cards: I bought a batch of 1500 (mainly old) cards at the auction website Catawiki and now send extra cards to the Postcrossers, from whom I received the adress. It took me a whole day to sort through all these cards. I have bought cards at this auction site before, but I also like to go to thriftstores to look for cards. Happy Postcrossing, Geert."
            }
          },

          "trigger4": {
            bg: "postcardforscript/B/2b.JPG",
            zh: {
              text: "因为我不想停止寄明信片。", 
              tooltip: "你好， 我摔断了手腕，但我不想停止寄明信片！！这就是为什么你收到的是这段打印出来的文字。非常抱歉，我原本很喜欢手写些专属的留言，但打着石膏几乎不可能写字。更别说写出来也会潦草得没法看 ;-)。 如果你想知道我喜欢什么书、音乐和电影，可以看看我的个人主页。 祝好！约斯特。" 
            },
            en: {
              text: "Because I don't want to stop sending cards.",
              tooltip: "Hallo, I broke my wrist and I don't want to stop sending cards!! That's why you get this printed text. I'm so sorry, I love to write personal messages but writing is almost impossible with a plaster cast on. Not to mention unreadable ;-). If you want to know what books, music and movies I like, check my profile. Cheers! Joost."
            }
          },

          "trigger5": {
            bg: "postcardforscript/B/1b.JPG",
            zh: {
              text: "我把它和明信片一起放进了信封里", 
              tooltip: "你好，通常我都是手写明信片的，但是我的手受了伤，现在写字非常困难。 这段留言是我儿子打出来的，我把它和明信片一起放进了信封里。 为什么要寄这些卡片呢：我在拍卖网站“Catawiki”上买了一批1500张（主要是旧的）明信片，现在我把这些额外的卡片寄给我抽到地址的互寄玩家们。 我花了一整天的时间才把这堆明信片整理好。 我以前也在这个拍卖网站上买过明信片，不过我也很喜欢去二手旧货店里淘卡片。 海尔特。" 
            },
            en: {
              text: "I put it with the cards in an envelope.",
              tooltip: "Hello, normally I write my cards by hand, but I have an injury to my hand and writing is very difficult now. My son typed this message and I put it with the cards in an envelope. Why cards: I bought a batch of 1500 (mainly old) cards at the auction website Catawiki and now send extra cards to the Postcrossers, from whom I received the adress. It took me a whole day to sort through all these cards. I have bought cards at this auction site before, but I also like to go to thriftstores to look for cards. Happy Postcrossing, Geert."
            }
          }
      }, // 💡 triggers 容器在这里闭合

      annotationsZh: [
        "（笔划过纸面的声音）"
      ],

      contentZh: [
        "抱歉，{{trigger1}}{{trigger2}}{{trigger3}}{{trigger4}}{{trigger5}}"
      ],
      annotationsEn: [
        "(The sound of a pen scratching across paper)"
      ],
      contentEn: [
        "Sorry, {{trigger1}}{{trigger2}}{{trigger3}}{{trigger4}}{{trigger5}}"
      ]
  },

 "C": {
      titleZh: "我曾是小丑",
      meta: "Clown I Used to Be",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/C/2b.JPG",
            zh: {
              text: "经过数月训练后，每年七月大家会在一个盛大的三环马戏团里表演：走钢丝、空中飞人、杂耍和独轮车", 
              tooltip: "我是史蒂芬。这张明信片来自我的家乡——印第安纳州秘鲁市。这里的孩子都会学马戏，经过数月训练后，每年七月大家会在一个盛大的三环马戏团里表演：走钢丝、空中飞人、杂耍和独轮车。我曾扮演过小丑，我妹妹则能用头发悬吊在半空中做花式旋转！在这个小镇长大充满了乐趣。" 
            },
            en: {
              text: "They train for months & perform each July in Giant 3 ring circus: Highwire, Trapeze, juggling, unicycle.",
              tooltip: "Hi! I'm Stephen. This postcard is from my hometown Peru, Indiana. All the children are taught the circus acts. They train for months & perform each July in a giant 3 ring circus: Highwire, Trapeze, Juggling, unicycle. I was a clown. My sister would hang by her hair & do fancy spins in the air! It was a fun town to grow up in.（Greetings fom Northwest Indiana - Peru Circus Series www.PortraitsFX.com/Postcrossing）"
            }
          },

          "trigger2": {
            bg: "postcardforscript/C/2b.JPG",
            zh: {
              text: "在这个小镇长大充满了乐趣", 
              tooltip: "我是史蒂芬。这张明信片来自我的家乡——印第安纳州秘鲁市。这里的孩子都会学马戏，经过数月训练后，每年七月大家会在一个盛大的三环马戏团里表演：走钢丝、空中飞人、杂耍和独轮车。我曾扮演过小丑，我妹妹则能用头发悬吊在半空中做花式旋转！在这个小镇长大充满了乐趣。" 
            },
            en: {
              text: "It was a fun town to grow up in",
              tooltip: "Hi! I'm Stephen. This postcard is from my hometown Peru, Indiana. All the children are taught the circus acts. They train for months & perform each July in a giant 3 ring circus: Highwire, Trapeze, Juggling, unicycle. I was a clown. My sister would hang by her hair & do fancy spins in the air! It was a fun town to grow up in.（Greetings fom Northwest Indiana - Peru Circus Series www.PortraitsFX.com/Postcrossing）"
            }
          },
          "trigger3": {
            bg: "postcardforscript/C/1b.JPG",
            zh: {
              text: "尽管小丑这个身份已经有几百年的历史", 
              tooltip: "我是米莫，住在热那亚。这是一座依山傍海的“垂直”城市，因为我所在的利古里亚大区正是由一弯直入大海的群山构成。热那亚拥有千年历史，1815年前曾是共和国，这里有着欧洲最大、由狭窄街巷交织而成的历史中心。照片上是热那亚附近的小镇卡莫利。邮票也展现了利古里亚的风貌：圣雷莫的诺贝尔别墅、因佩里亚的小丑格罗克别墅，以及由强大的多利亚家族于1270年建造的多尔切阿夸村城堡。祝一切顺利。" 
            },
            en: {
              text: "the role of the clown has a history of hundreds of years",
              tooltip: "Hello, I'm Mimmo and I live in Genova, a vertical city that climbs the mountains from the sea. My region, Liguria, is formed by an arch of mountains that plunge into the sea. Genova has a millennial history. It was a republic until 1815 and has the largest historic center in Europe, made up of a network of very narrow streets. In the photo you see Camogli, a village near Genova. The stamps also tell you a little about Liguria: the Villa of Alfred Nobel in Sanremo, the Villa of the clown Grock in Imperia, and the Castle of the village of Dolceacqua, built in 1270 by the powerful Genoese family Doria. I wish you all the best. Ciao! Mimmo."
            }
          },

      }, // 💡 triggers 容器在这里闭合

      annotationsZh: [
        "（二十秒）",
        "（字幕：我们的采访继续）",
        "（同期声）",
        "（目光直视镜头）",
        "<br>",
        "（镜头剪切到录像：）",
        "（穿着日常服装）",
        "（双脚在地上敲击着转圈）",
        "（重复）",
        "（远处的女孩手握平衡杆）",
        "（走钢丝）",
        "（左：复杂的金属支架）",
        "（右：垂下幕布）",
        "（画面跳转）",
        "（一个空荡荡的舞台，灯光吊杆降至一半）"
      ],

      contentZh: [
        "问：您是怎么走上自己的职业之路的？",
        "答：在我的家乡，孩子都会学马戏。{{trigger1}}。我在那个时候就开始扮演小丑了。",
        "问：您一定有一个与众不同的童年。",
        "答：跟你们比确实不太一样。但在我们那个小镇里，大家都差不多。对我们来说，马戏可不是电视里的虚构节目，而是真实的童年。",
        "问：现在回忆起来，这样的生活如何？",
        "答：（笑）{{trigger2}}。",
        "问：也一定很辛苦吧。",
        "答：你要知道，在是小丑前，你得先是一个马戏演员。杂耍与平衡、肢体表演，都是苦练出来的。除此之外，你还得彻底把你的自尊抛开。你要展现自己最笨拙、最脆弱、最容易失败的一面。",
        "问：如何看待从小练习的马戏成为你的职业？",
        "答：小时候的马戏玩耍让人开心，但一旦走上职业的道路，快乐和享受会变质。我相信别的职业也是如此。随着我的年纪渐长，一些高难度动作在离我远去。反而让我能静下心来真正做一个“普通人的小丑”，只用最简单的方式让别人开心。我在努力寻找儿时做小丑时那种简单的快乐。",
        "答：问：可以这么说吗，小丑其实就是戴着红鼻子的哲学家。",
        "答：我倒不愿意说的这么严肃。{{trigger3}}。我认为小丑绝不能失去“人性”，当小丑出场时，观众不该觉得他是个外星怪物，也不该是个与生活格格不入的旁观者。而应该觉得“他动起来像我叔叔，笑起来像我朋友”——最高级的小丑，是教导人们如何拿自己开玩笑，并不把生活看得太沉重。",
        "问：那现在您有什么其他的爱好吗？",
        "答：现在我喜欢折气球狗。"
      ],
      annotationsEn: [
        "(20 SECONDS)",
        "(SUBTITLE: Our interview continues.)",
        "(SYNC SOUND)",
        "(Looking directly into the camera.)",
        "<br>",
        "(CUT TO VIDEO:)",
        "(Wearing everyday clothes.)",
        "(Feet tapping on the ground while spinning in circles.)",
        "(REPEAT.)",
        "(A girl in the distance holding a balancing pole.)",
        "(Highwire.)",
        "(Left: Complex metal scaffolding.)",
        "(RIGHT: Hanging curtain.)",
        "(SCENE TRANSITION:)",
        "(An empty stage with lighting battens lowered halfway)"
      ],
      contentEn: [
        "Q:How did you start your career path?",
        "A:In my hometown, All the children are taught the Circus acts. {{trigger1}} At that time, I was a clown.",
        "Q:You must have had a unique childhood.",
        "A:It was indeed quite different compared to yours. But in our small town, everyone was pretty much the same. For us, the circus wasn't a fictional show on TV, but a real childhood.",
        "Q:Looking back now, how was that kind of life?",
        "A:(laughing){{trigger2}}!",
        "Q:It must have been very hard, too.",
        "A:You have to know, before being a clown, you must first be a circus performer. Juggling and balancing, as well as physical performances, are all achieved through hard training. In addition, you have to completely put your ego aside. You need to show your clumsiest, most vulnerable, and most easily defeated side.",
        "Q:How do you view the fact that the circus you were involved with since childhood became your career?",
        "A:Playing circus as a child made me happy, but once you take the professional path, the happiness and enjoyment change in nature. I believe this is true for other professions as well. As I grow older, some highly difficult moves are leaving me. Instead, it allows me to settle down and truly be an \"ordinary people's clown,\" making others happy in the simplest ways. I am trying hard to find that simple joy I had when I was a clown in my childhood.",
        "Q:Could we say that a clown is actually a philosopher with a red nose?",
        "A:I wouldn't want to put it so seriously. Although {{trigger3}}. I think a clown must never lose their \"humanity\"; when a clown appears, the audience shouldn't feel like he is an alien monster, nor an onlooker out of touch with life. Rather, they should feel \"he moves like my uncle, laughs like my friend\"—the highest level of a clown is to teach people how to make fun of themselves and not take life too heavily.",
        "Q:So, do you have any other hobbies now?",
        "A:Now I like making balloon dogs."
      ]
  },  

  "D": {
      titleZh: "别在这根线下面写字",
      meta: "Do Not Write Below This Line",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

    

      annotationsZh: [
        "（印上邮寄条）"
      ],

      contentZh: [
        "不要在这条线下面写字。"
      ],
      annotationsEn: [
        "(print the post code)"
      ],
      contentEn: [
        "DO NOT WRITE BELOW THIS LINE. SPACE RESERVED FOR U.S. POSTAL SERVICE.",
        "PAGE BELOW RESERVED FORUS POSTAL SERVICE.",
        "THIS AREA FOR OFFICIAL POSTAL USE ONLY.",
        "PLEASE DO NOT WRITE BELOW. SPACE RESERVED FOR U.S. POSTAL SERVICE BARCODE.",
        "DO NOT WRITE BELOW THIS LINE.",
      ]
  },  

  "E": {
      titleZh: "共同的名字艾米丽",
      meta: "Emily shares the name",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/E/1b.JPG",
            zh: {
              text: "我很欣赏其中的艺术和创作过程", 
              tooltip: "来自美国的问候！希望你喜欢这张明信片，因为我在你的喜欢列表里看到了同系列的另一张。我非常喜欢动画电影，因为我很欣赏其中的艺术和创作过程。这些作品往往投入了大量的时间，所以通常都非常棒！ 艾米丽。" 
            },
            en: {
              text: "I appreciate the art and the process of its creation",
              tooltip: "Hello from the USA! If you like this card, I saw one from the same set in your favorites. I like animated movies very much because I appreciate the art and the process of its creation. A lot of time gets put into them so they are often great! Emily."
            }
          },

          "trigger2": {
            bg: "postcardforscript/E/2b.JPG",
            zh: {
              text: "布莱恩", 
              tooltip: "很高兴在这里认识你！我住在西雅图地区，离加拿大边境不远，如果条件允许，我每年都喜欢去不列颠哥伦比亚省游玩几次。我最喜欢的加拿大艺术家是艾米丽·卡尔，她画了许多加拿大西部的风景画。祝好！ 布莱恩。" 
            },
            en: {
              text: "Bryon",
              tooltip: "Greetings Carmen! Very nice meeting you here! I live in the Seattle area not far from the Canadian border and enjoy visiting British Columbia several times a year if I can. My favorite Canadian artist is Emily Carr who painted many images of the scenes in Western Canada. Best Wishes! Bryon."
            }
          },

          "trigger3": {
            bg: "postcardforscript/E/3b.JPG",
            zh: {
              text: "前往威尔明顿看望她的姐姐和侄女", 
              tooltip: "来自美国北卡罗来纳州的温暖问候！我住在靠近首府罗利的一个小镇。这周我将前往威尔明顿看望我的姐姐和侄女。希望天气能给力点，这样我也能顺便去海滩玩！:) 我最近读了一本好书，是卡塔林·考里科的《突破：我的科学人生》。你呢？ 祝你一切顺利！艾米丽 ♡" 
            },
            en: {
              text: "travel to Wilmington to visit her sister and niece",
              tooltip: "Many warm greetings from North Carolina, USA! I live in a town near the capital, Raleigh. This week I will travel to Wilmington to visit my sister and niece. Hopefully the weather will cooperate and I'll also be able to visit the beach! :) A good book I read recently was \"Breaking Through: My Life in Science\" by Katalin Karikó. What about you? Wishing you all the best! Emily ♡"
            }
          },

          "trigger4": {
            bg: "postcardforscript/E/4b.JPG",
            zh: {
              text: "不论我们的灵魂是用什么做成的，他的和我的是一模一样的", 
              tooltip: "你好，来自美国特拉华州纽瓦克的问候！我认为这张明信片正面的引言是所有文学作品中最浪漫的句子之一。我没有看过后来翻拍的电影（2011年版），但这本小说是我最喜欢的书之一。非常推荐你去看看！ 萨拉贝丝。注：很抱歉把这张明信片装在信封里寄给你。我上次寄到中国的那张没有装信封，结果在路上损坏了 :( 那句引言：“不论我们的灵魂是用什么做成的，他的和我的是一模一样的。”" 
            },
            en: {
              text: "Whatever our souls are made of, his and mine are the same",
              tooltip: "Greetings from Newark, Delaware, USA! I think the quote on the front of this postcard is one of the most romantic lines in all of literature. I have not seen the later remake of the movie (from 2011), but the novel is one of my favorite books. You should check it out! Sarabeth. Quote:“Whatever our souls are made of, his and mine are the same.” By Emily Brunt."
            }
          },

          "trigger5": {
            bg: "postcardforscript/E/5b.JPG",
            zh: {
              text: "工作日是一名老师，周末则是咖啡品鉴师", 
              tooltip: "我叫艾米丽，来自美国威斯康星州。我和我的丈夫以及我们的橘猫住在一起 :) 我工作日是一名老师，周末则是“咖啡品鉴师”！哈哈！我真的很希望有一天能去中国旅游！那里有太多超酷的历史文物和旅游景点了！ 祝保持健康，爱你的艾米丽。" 
            },
            en: {
              text: "a teacher during the week and a coffee tester on the weekends",
              tooltip: "My name is Emily and I'm from Wisconsin, USA. I live with my husband and our orange cat :) I'm a teacher during the week and a coffee tester on the weekends! LOL! I really hope to visit China one day! Theres so many cool artifacts and tourist attractions! Stay healthy & with love, Emily."
            }
          },

          "trigger6": {
            bg: "postcardforscript/A/1b.JPG",
            zh: {
              text: "三十六岁的大学教授", 
              tooltip: "你好！我叫艾米丽，今年36岁，是一所大型大学的教授。我得知你在学习设计，并且喜欢画速写！我的父母也是如此。这张卡片上的章鱼是我们最喜欢的动物之一。只要有机会，我和我的伴侣就很喜欢去波士顿的这家水族馆参观。" 
            },
            en: {
              text: "36 year old professor at a large college",
              tooltip: "Hello! My name is Emily and I am a 36 year old professor at a large college. I see you study design & love to sketch! So do my parents. This octopus on the card is a favorite of ours. My partner & I love to visit this aquarium in Boston when we can. New England Aquarium Protecting the blue planet Giant Pacific Octopus Printed in the USA."
            }
          }
      },

      annotationsZh: [
        "（第一个艾米丽）",
        "（第二个艾米丽）",
        "（第三个艾米丽）",
        "（第四个艾米丽）",
        "（第五个艾米丽）",
        "（第六个艾米丽）",
        "（视线回到A：章鱼水族馆）"
      ],

      contentZh: [
        "艾米丽，美国女孩。动画电影爱好者，扎着随意的马尾辫，双颊满是雀斑。认为自己喜欢的是捕捉幻影的艺术，而投入的时间越多，作品就越值得欣赏。表情天真活力。拿着笔写下：“{{trigger1}}。”",
        "艾米丽，加拿大艺术家。灰白的短发被一丝不苟地向后梳理，紧紧地包裹在一个标志性的深色网状发罩里。一件厚实、略显臃肿的粗织羊毛开衫，外面套着一件宽大的深色罩袍，领口露出朴素的衬衫。表情沉郁、严肃。她的作品和姓名被印在一张张10*15厘米的印刷品上，其中一张来到一位叫{{trigger2}}的人手中，正写下第一个字。",
        "艾米丽，美国一位普通职工。被海风吹散的披肩长发，有着一张日晒后的小麦色脸庞，没有任何配饰。正计划{{trigger3}}。表情里尽是对周末到来的期待。左手拿一部名为《突破：我的科学人生》的书稿，右手拿着笔在书页中勾画。",
        "艾米丽，英国作家。是三姐妹中身材最高挑的一位，体形消瘦。肤色苍白且略显暗沉，面部轮廓凌厉。有双深灰色的眼睛。深色的长发略显凌乱地挽在脑后，几缕碎发倔强地垂在消瘦的脖颈旁。她拿着笔写下：“{{trigger4}}。”",
        "艾米丽，{{trigger5}}。利落的短发，脸颊红润，嘴角带着一个浅浅的酒窝，整个人散发出乳酪般的质感。左手端着一只陶瓷咖啡杯，右手正安抚着一只趴在臂弯里的橘猫。正弯腰捡起被小猫碰到地上的笔。",
        "艾米丽，{{trigger6}}。身材修长，戴着一条紫色的水晶项链。双手相交于腰间，站在水族馆装着太平洋章鱼的玻璃箱前。章鱼似乎有了回应。想到什么，轻笑，转头，问身边的人：“你看，它在想什么？”",
        ""
      ],

      annotationsEn: [
        "(The first Emily)",
        "(The second Emily)",
        "(The third Emily)",
        "(The fourth Emily)",
        "(The fifth Emily)",
        "(The sixth Emily)",
        "(Scene transitions back to A: Octopus Aquarium)"
      ],

      contentEn: [
        "Emily, an American girl. An animated movies lover, wearing a casual ponytail, her cheeks full of freckles. She thinks what she likes is the art of capturing illusions, and the more time gets put into them, the more the work is worth appreciating. With an innocent and energetic expression. She holds a pen and writes down: \"{{trigger1}}.\"",
        "Emily Carr, a Canadian artist. Her short grayish-white hair is meticulously combed back, tightly wrapped in a signature dark hairnet. She wears a thick, slightly bulky chunky knit wool cardigan, covered by a large dark smock, revealing a plain shirt at the collar. Her expression is gloomy and serious. Her artwork and name are printed on 10x15 cm prints, one of which comes into the hands of a person named {{trigger2}}, who is writing down the first word.",
        "Emily, an ordinary worker in the USA. Her shoulder-length long hair blown scattered by the sea breeze, with a sun-tanned wheat-colored face, without any accessories. She will {{trigger3}}. Her expression is full of anticipation for the coming weekend. In her left hand she holds a manuscript titled \"Breaking Through: My Life in Science\", and in her right hand she holds a pen, underlining the pages.",
        "EMILY BRONTË, a British author. She is the tallest among the three sisters, with a thin figure. Her skin is pale and slightly dull, with sharp facial contours. She has deep gray eyes. Her long dark hair is tied up slightly messily behind her head, with a few stubborn strands of loose hair hanging by her thin neck. She holds a pen and writes down: \"{{trigger4}}.\"",
        "Emily, {{trigger5}}! With neat short hair, rosy cheeks, and a shallow dimple at the corner of her mouth, her whole person exudes a cheese-like texture. Holding a ceramic coffee cup in her left hand, her right hand is soothing an orange cat resting in the crook of her arm. She is bending over to pick up the pen knocked onto the floor by the kitten.",
        "Emily, a {{trigger6}}. With a slender figure, wearing a purple crystal necklace. Her hands are crossed at her waist, standing in front of the glass tank housing the Pacific octopus as they visit this aquarium. The octopus seems to have responded. Thinking of something, she chuckles, turns her head, and asks the person next to her: \"Look, what is it thinking?\"",
        ""
      ]
  },

  "F": {
      titleZh: "弗利伍麦克摇滚乐队",
      meta: "Fleetwood Mac",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/F/1b.JPG",
            zh: {
              text: "你知道弗利伍麦克摇滚乐队的这首歌吗？", 
              tooltip: "来自美国北卡罗来纳州的问候。我是莱斯莉，住在夏洛特。你知道弗利伍麦克摇滚乐队的这首歌吗？希望你的学业一切顺利。你什么时候毕业呢？" 
            },
            en: {
              text: "Do you know this Fleetwood Mac song?",
              tooltip: "Greetings from North caroling in the USA. I'm LeslieF and I live in Charlotte, Do you know this Fleetwood mac song?I hope your studies are going well. When will you graduate?"
            }
          },

      }, // 💡 triggers 容器在这里闭合

      annotationsZh: [
        "（歌词如下）"
      ],

      contentZh: [
        "我最喜欢的一首歌是美国摇滚乐队弗利伍麦克的DREAMS。{{trigger1}}爱你本就是错误之举我该如何改变心底的感受倘若可以我愿把整个世界都给你可你不愿接纳我又能如何你大可走自己的路走自己的路你大可把这视作又一个孤寂之日你大可走自己的路走自己的路告诉我为何一切都变了模样收拾行囊草草相伴便是你所有的所求亲爱的倘若可以我愿把整个世界都给你敞开心扉世间一切都在为你等候你大可走自己的路走自己的路你大可把这视作又一个孤寂之日你大可走自己的路走自己的路我收起心底爱意独自释怀我登上山巅蓦然回首看见自己映在白雪覆盖的山峦直到山崩地裂将我吞噬天际的明镜啊何为爱我心底的童真能否超脱尘世我能否驶过变幻的人海潮汐我能否安然走过人生四季我一直畏惧改变只因我的人生早已围绕你构筑但时光会让人愈发勇敢孩童也终将长大而我也在慢慢老去是啊我也在慢慢老去我收起心底爱意独自释怀我登上山巅蓦然回首看见自己映在白雪覆盖的山峦直到山崩地裂将我吞噬若你看见白雪山峦间我的倒影那山崩之势也终将将你淹没蕾安农如深夜回荡的风铃谁不愿倾心于她她如飞鸟翱翔天际谁又能成为她的挚爱此生你从未见过被清风裹挟的女子若她许诺予你天堂你是否愿意停留你能否终得圆满她如暗夜中的猫咪而后便化作无边黑暗她如云雀般主宰自己的人生纵使夜空黯淡无光此生你从未见过被清风裹挟的女子若她许诺予你天堂你是否愿意停留你能否终得圆满你能否终得圆满蕾安农蕾安农蕾安农蕾安农她如深夜回荡的风铃谁不愿倾心于她她如飞鸟般主宰自己的人生谁又能成为她的挚爱此生你从未见过被清风裹挟的女子若她许诺予你天堂你是否愿意停留你能否终得圆满若我能及时翻过岁月篇章便能重新拼凑朝夕时光闭上双眼穷尽思绪却寻不到出路只好奢求一日能全心信你骗我吧对我说谎编织温柔的小小谎言骗我吧不断对我说谎你终究无处隐藏无处隐藏终究无法伪装骗我吧编织温柔的小小谎言我虽无心规划未来但愿你能明白事出有因闭上双眼不必再心碎分离或许放手各自安好不如就此一试骗我吧对我说谎编织温柔的小小谎言骗我吧不断对我说谎你终究无处隐藏无处隐藏终究无法伪装骗我吧编织温柔的小小谎言你又一次这般说辞说你渴望自由我又有什么资格将你束缚随心而行本就理所应当可请用心聆听你心底孤寂的回响如同心跳般将你逼至疯狂在追忆往昔的静默里细数曾经拥有与已然失去曾经拥有已然失去雷鸣总伴随风雨而来逢场作戏的人只在欢愉时动情世人来来去去聚散无常当雨水洗净凡尘你终将明白你终将明白我又一次陷入幻境只将心事藏于心底唯有我想萦绕你的梦境你是否有愿意割舍的梦那些孤寂的幻梦如同心跳般将你逼至疯狂在追忆往昔的静默里细数曾经拥有与已然失去曾经拥有已然失去已然失去雷鸣总伴随风雨而来逢场作戏的人只在欢愉时动情世人来来去去聚散无常当雨水洗净凡尘你终将明白雷鸣总伴随风雨而来逢场作戏的人只在欢愉时动情世人来来去去聚散无常当雨水洗净凡尘你终将明白你终将明白你终将了然你终将知晓聆听风起凝望日升隐于阴影之中诅咒你的情爱唾弃你的谎言若你此刻不再爱我往后便再也不会爱我我仍清晰记得你曾说永远不会斩断这份羁绊你此刻不再爱我往后便再也不会爱我我仍清晰记得你曾说永远不会斩断这份羁绊聆听风起夜幕降临隐于阴影之中诅咒你的情爱唾弃你的谎言打破沉寂厌弃黑暗漠视光明若你此刻不再爱我往后便再也不会爱我我仍清晰记得你曾说永远不会斩断这份羁绊你此刻不再爱我往后便再也不会爱我我仍清晰记得你曾说永远不会斩断这份羁绊你此刻不再爱我往后便再也不会爱我我仍清晰记得你曾说永远不会斩断这份羁绊夜幕降临隐于阴影之中夜幕降临隐于阴影之中夜幕降临隐于阴影之中夜幕降临隐于阴影之中羁绊将我们紧紧相连隐于阴影之中羁绊将我们紧紧相连隐于阴影之中羁绊将我们紧紧相连隐于阴影之中聆听水面风声静听海岸浪涛声声辗转难眠睡意全无意识渐渐恍惚蓦然想起月圆皎洁之夜我会牵你走入夜色共舞深夜探戈探戈我将美梦珍藏心底任其永不消散内心深处此间梦境再无孤寂蓦然想起月圆皎洁之夜我会牵你走入夜色共舞深夜探戈探戈于是我重回那丝绒地下世界重回我眷恋的那片土地去到满是蕾丝纸花的小屋重拾曾经不羁的吉普赛灵魂重拾曾经不羁的吉普赛灵魂世间万般终究皆归于你你心知肚明人生际遇或许仅有寥寥数次刹那光芒点亮夜色你看见心底那个吉普赛灵魂你看见心底那个吉普赛灵魂那份灵魂依旧留存她的面容写满自由亦藏着些许惶恐我无所畏惧心中只剩满腔爱意若我仍是孩童那份天真便已足够足够让我倾心相守足够让我倾心相守如今她已转身离你远去她本就只是一场虚妄念想她本就只是一场虚妄念想徒留回忆伴你余生你看见心底那个吉普赛灵魂你看见心底那个吉普赛灵魂人生际遇或许仅有寥寥数次刹那光芒世间万般终究皆归于你世间万般终究皆归于你我仍记得你明亮眼眸世间万般终究皆归于你为何不问他是否决意留下为何不问他是否执意远行为何不告诉我究竟发生了什么为何不告诉我电话那头是谁为何不问他究竟心事重重为何不问他如今新欢又是谁别说你深爱我只需坦言你渴望我图腾图腾图腾图腾图腾图腾图腾图腾图腾图腾图腾图腾图腾图腾图腾图腾我渴望有个富贵知己他可以做我的挚友若我偶需钱财相助我知他定会伸出援手可谈及情爱他最好别来打扰只因我已有了你宝贝你给了我所有渴求的爱意没错你给了我所有渴求的爱意若我偶尔心生饥肠他能予我无尽美食若我想要一杯威士忌他会为我斟上纯酿可谈及情爱他最好别来打扰只因我已有了你宝贝你给了我所有渴求的爱意没错你给了我所有渴求的爱意我所求不过有人悉心照料我不求轰轰烈烈的爱只求一丝温柔体谅他能驾着豪华名车前来我便可佯装成耀眼影星可谈及情爱他最好别来打扰只因我已有了你宝贝你给了我所有渴求的爱意没错你给了我所有渴求的爱意我所求不过有人悉心照料我不求轰轰烈烈的爱只求一丝温柔体谅我不求情爱牵绊我不求情爱牵绊你是否始终遵从心底最初的直觉冥冥之中的真知永远值得深信我蓦然转身潮水已将我层层包裹如同宿命如同那份终于降临的挚爱那一刻我便知晓你澄澈通透的本心引我翻越群山清冽如泉水澄澈透亮引我如磁石奔赴大海奔赴大海奔赴大海是啊岁月流转爱的模样几经变迁世事更迭而你依旧初心未改容颜不老我蓦然转身潮水已将我层层包裹如同宿命如同那份终于降临的挚爱那一刻我便知晓你澄澈通透的本心引我翻越群山清冽如泉水澄澈透亮引我如磁石奔赴大海奔赴大海奔赴大海是啊奔赴大海是啊你宛若纯净无瑕的孩童而我又一次沦为痴人你爱上我时我尚且年仅十岁岁月悄然流逝时光匆匆走过我紧咬双唇你是否忍心将我推开你的触碰让我无从挣脱只能甘愿停留我只能甘愿停留我只能甘愿停留无眠的孩子时光已然所剩无几你的眼眸流露期许却始终未曾言语多希望你能属于我多希望你能属于我你说清晨离别只会更添不舍我只等你一句就此放手短短数小时你曾紧握我的双手可我早已不再是懵懂孩童我早已不再是懵懂孩童我已然足够高大伸手便可触碰星辰我已然长大足以远远默默爱你太过天真心软可世间女子大抵皆是如此我早已不再是懵懂孩童我早已不再是孩童我已然足够高大伸手便可触碰星辰我会顺从所有期许我已然长大足以远远默默爱你纵使此生再也无法相拥太过天真心软可世间女子大抵皆是如此再也无法相拥再也无法相拥无眠的孩子时光已然所剩无几我会顺从所有期许你的眼眸流露期许却始终未曾言语纵使此生再也无法相拥多希望你能属于我再也无法相拥多希望你能属于我纵使此生再也无法相拥多希望你能属于我再也无法相拥多希望你能属于我我早已不再是懵懂孩童你能否听见我轻声呼唤你的名字你知晓我已然沉沦却不知该如何言语我愿放声倾诉甚至高声呐喊你知晓我满心骄傲却难以吐露心声多想时时刻刻陪在你身旁多想时时刻刻陪在你身旁只想时刻伴你左右奇妙的情愫正在我心底蔓延友人都说我举止异常来吧亲爱的我们不如就此启程你要趁早下定决心别等到伤透我的心多想时时刻刻陪在你身旁多想时时刻刻陪在你身旁只想时刻伴你左右你能否听见我轻声呼唤你的名字你知晓我已然沉沦却不知该如何言语来吧亲爱的我们不如就此启程你要趁早下定决心别等到伤透我的心多想时时刻刻陪在你身旁多想时时刻刻陪在你身旁多想时时刻刻陪在你身旁多想时时刻刻陪在你身旁只想时刻伴你左右于寂静深夜寻觅真爱我愿为你在山间小屋筑造一方国度执着追寻那份挚爱炽热浓烈的深情你曾说深爱于我此生永不更改你曾恳求我伴你驻守山间小屋执着追寻那份挚爱炽热浓烈的深情我独自从梦中醒来满心怅然梦醒之后只剩沉沦执着追寻那份挚爱炽热浓烈的深情只是执着寻觅真爱炽热浓烈的深情我满心惶恐孤身一人熬过岁岁年年数不尽的泪水藏着万千心事我从未改变也永远不会改变我深深畏惧心底翻涌的情绪那些阴雨无光日月沉寂的日子夜色如墨痛苦早已缠绕我心太久满心惶恐稍一沉沦便坠落消亡我始终孤身一人满心低落无人愿意为我驻足停留我从未改变也永远不会改变我深深畏惧心底翻涌的情绪那些阴雨无光日月沉寂的日子夜色如墨痛苦早已缠绕我心太久满心惶恐稍一沉沦便坠落消亡亲爱的父亲你可知你总能让我落泪我不懂你为何会倾心于我亲爱的父亲若我能让你明白若世间真有愚痴之人那一定是我终究只能是我亲爱的父亲你的温柔笑容总能安抚我心让我明白你是我生命中最珍贵的馈赠亲爱的父亲若我能让你明白若世间真有愚痴之人那一定是我终究只能是我为何你永远清醒而我满身过错我这般脆弱而你无比坚韧你的一言一行都恰到好处我终究无法狠心离你而去即便刻意尝试也是徒劳为何你永远清醒而我满身过错我这般脆弱而你无比坚韧你的一言一行都恰到好处我终究无法狠心离你而去即便刻意尝试也是徒劳亲爱的父亲你的温柔笑容总能安抚我心让我明白你是我生命中最珍贵的馈赠亲爱的父亲若我能让你明白若世间真有愚痴之人那一定是我终究只能是我终究只能是我终究只能是我终究只能是我终究只能是我终究只能是我终究只能是我"
      ],
      annotationsEn: [
        "(song scripts are here)"
      ],
      contentEn: [
        "One of my favourite songs is DREAMS by American Rock band FleetWood mac.{{trigger1}}Loving you isn’t the right thing to do How can I ever change things that I feel If I could maybe I’d give you my world How can I when you won’t take it from me You can go your own way Go your own way You can call it another lonely day You can go your own way Go your own way Tell me why everything turned around Packing up shacking up is all you wanna do If I could baby I’d give you my world Open up everything’s waiting for you You can go your own way Go your own way You can call it another lonely day You can go your own way Go your own way I took my love I took it down I climbed a mountain and I turned around And I saw my reflection in the snow covered hills ’Til the landslide brought me down Oh mirror in the sky what is love Can the child within my heart rise above Can I sail through the changing ocean tides Can I handle the seasons of my life Well I’ve been afraid of changing ’Cause I’ve built my life around you But time makes you bolder Even children get older And I’m getting older too Oh I’m getting older too I take my love I take it down I climb a mountain and I turn around And I saw my reflection in the snow covered hills ’Til the landslide brought me down Oh if you see my reflection in the snow covered hills Well the landslide will bring you down Rhiannon rings like a bell through the night and wouldn’t you love to love her Takes to the sky like a bird in flight and who will be her lover All your life you’ve never seen a woman taken by the wind Would you stay if she promised you heaven Will you ever win She is like a cat in the dark and then she is the darkness She rules her life like a fine skylark and when the sky is starless All your life you’ve never seen a woman taken by the wind Would you stay if she promised you heaven Will you ever win Will you ever win Rhiannon Rhiannon Rhiannon Rhiannon She rings like a bell through the night and wouldn’t you love to love her She rules her life like a bird in flight and who will be her lover All your life you’ve never seen a woman taken by the wind Would you stay if she promised you heaven Will you ever win If I could turn the page in time then I’d rearrange just a day or two Close my close my close my eyes but I couldn’t find a way so I’ll settle for one day to believe in you Tell me tell me tell me lies tell me lies tell me sweet little lies Tell me lies tell me tell me lies Oh no no you can’t disguise you can’t disguise no you can’t disguise Tell me lies tell me sweet little lies Although I’m not making plans I hope that you understand there’s a reason why Close your close your close your eyes No more broken hearts we’re better off apart let’s give it a try Tell me tell me tell me lies tell me lies tell me sweet little lies Tell me lies tell me tell me lies Oh no no you can’t disguise you can’t disguise no you can’t disguise Tell me lies tell me sweet little lies Now here you go again you say you want your freedom Well who am I to keep you down It’s only right that you should Play the way you feel it But listen carefully to the sound Of your loneliness Like a heartbeat drives you mad In the stillness of remembering what you had And what you lost And what you had And what you lost Oh thunder only happens when it’s rainin’ Players only love you when they’re playin’ Say women they will come and they will go When the rain washes you clean you’ll know You’ll know Now here I go again I see the crystal visions I keep my visions to myself It’s only me who wants to wrap around your dreams And have you any dreams you’d like to sell Dreams of loneliness Like a heartbeat drives you mad In the stillness of remembering what you had And what you lost And what you had Ooh what you lost Thunder only happens when it’s raining Players only love you when they’re playing Women they will come and they will go When the rain washes you clean you’ll know Oh thunder only happens when it’s raining Players only love you when they’re playing Say women they will come and they will go When the rain washes you clean you’ll know You’ll know You will know Oh you’ll know Listen to the wind blow Watch the sun rise Run in the shadows Damn your love Damn your lies And if You don’t love me now You will never love me again I can still hear you saying You would never break the chain You don’t love me now You will never love me again I can still hear you saying You would never break the chain Listen to the wind blow Down comes the night Run in the shadows Damn your love Damn your lies Break the silence Damn the dark Damn the light And if You don’t love me now You will never love me again I can still hear you saying You would never break the chain You don’t love me now You will never love me again I can still hear you saying You would never break the chain You don’t love me now You will never love me again I can still hear you saying You would never break the chain Down comes the night Run in the shadows Down comes the night Run in the shadows Down comes the night Run in the shadows Down comes the night Run in the shadows Chain keep us together Run in the shadow Chain keep us together Run in the shadow Chain keep us together Run in the shadow Listen to the wind on the water Listen to the waves upon the shore Try to sleep sleep won’t come Just as I begin to fade Then I remember When the moon was full and bright I would take you in the darkness And do the tango in the night Tango I keep the dream in my pocket Never let it fade away Inside outside No loneliness in this dream Then I remember When the moon was full and bright I would take you in the darkness And do the tango in the night Tango So I’m back to the velvet underground Back to the floor that I love To a room with some lace and paper flowers Back to the gypsy that I was To the gypsy that I was And it all comes down to you Well you know that it does and Lightning strikes maybe once maybe twice Oh and it lights up the night And you see your gypsy You see your gypsy To the gypsy That remains Her face says freedom With a little fear I have no fear Have only love And if I was a child And the child was enough Enough for me to love Enough to love She is dancing away from you now She was just a wish She was just a wish And her memory is all that is left for you now You see your gypsy oh You see your gypsy Lightning strikes maybe once maybe twice And it all comes down to you And it all comes down to you I still see your bright eyes bright eyes And it all comes down to you Why don’t you ask him if he’s going to stay? Why don’t you ask him if he’s going away? Why don’t you tell me what’s going on? Why don’t you tell me who’s on the phone? Why don’t you ask him what’s going on? Why don’t you ask him who’s the latest on his throne? Don’t say that you love me! Just tell me that you want me! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Tusk! Well I need a sugar daddy He could be my friend And if I needed a little money I know he would lend me lend me a hand But when it comes to love He’d better leave me alone ’Cause I’ve got you baby And you give me all the love I need Yes you give me all the love I need And when I get a little hungry He could give me all I could eat And if I needed whiskey He could serve it to me neat But when it comes to love He’d better leave me alone ’Cause I’ve got you baby And you give me all the love I need Yes you give me all the love I need All that I want is someone to take care of me I’m not asking for love just a little sympathy And he could pick me up In a big fancy car Then I could pretend I was a big movie star But when it comes to love He’d better leave me alone ’Cause I’ve got you baby And you give me all the love I need Yes you give me all the love I need All that I want is someone to take care of me I’m not asking for love just a little sympathy I’m not asking for love I’m not asking for love Do you always trust your first initial feeling Special knowledge holds true bears believing I turned around and the water was closing all around Like a glove like the love that had finally finally found me Then I knew in the crystalline knowledge of you Drove me through the mountains Through the crystal like a clear water fountain Drove me like a magnet to the sea To the sea To the sea yeah How the faces of love change turning the pages I have changed oh but you you remain ageless I turned around and the water was closing all around Like a glove like the love that had finally finally found me Then I knew in the crystalline knowledge of you Drove me through the mountains Through the crystal like a clear water fountain Drove me like a magnet to the sea To the sea To the sea yeah To the sea yeah You are a beautiful child And I am a fool once more You fell in love when I was only ten The years disappeared Much has gone by since then I bite my lip can you send me away You touch I have no choice I have to stay Ooh I had to stay Ooh I had to stay Sleepless child There is so little time Your eyes say yes But you don’t say yes Well I wish that you were mine I wish that you were mine You say it will be harder in the morning I wait for you to say just go Your hands held mine so few hours But I’m not a child anymore I’m not a child anymore I’m tall enough to reach for the stars I’m old enough to love you from afar Too trusting Yes But then women usually are I’m not a child anymore I’m not a child oh no I’m tall enough to reach for the stars I will do as I’m told I’m old enough to love you from afar Even if I never hold you again Too trusting Yes but then women usually are Hold you again Hold you again Sleepless child There is so little time I will do as I am told Your eyes say yes But you don’t say yes Even if I never hold you again I wish that you were mine Hold you again I wish that you were mine Even if I never hold you again Well I wish that you were mine Hold you again Well I wish that you were mine I’m not a child anymore Can you hear me calling Out your name You know that I’m falling And I don’t know what to say I’ll speak a little louder I’ll even shout You know that I’m proud And I can’t get the words out Oh I I want to be with you everywhere Oh I I want to be with you everywhere Wanna be with you everywhere Something’s happening Happening to me My friends say I’m acting peculiarly C’mon baby We better make a start You better make it soon Before you break my heart Oh I I want to be with you everywhere Oh I I want to be with you everywhere Wanna be with you everywhere Can you hear me calling Out your name You know that I’m falling And I don’t know what to say Come along baby We better make a start You better make it soon Before you break my heart Oh I I want to be with you everywhere Oh I I want to be with you everywhere Oh I I want to be with you everywhere Oh I I want to be with you everywhere Wanna be with you everywhere Looking out for love In the night so still Oh I’ll build you a kingdom In that house on the hill Looking out for love Big big love You said that you love me And that you always will Oh you begged me to keep you In that house on the hill Looking out for love Big big love I wake up alone With it all I wake up But only to fall Looking out for love Big big love Just looking out for love Big big love I’m So Afraid I been alone All the years So many ways to count the tears I never change I never will I’m so afraid the way I feel Days when the rain and the sun are gone Black as night Agony’s torn at my heart too long So afraid Slip and I fall and I die I been alone Always down No one cared to stay around I never change I never will I’m so afraid the way I feel Days when the rain and the sun are gone Black as night Agony’s torn at my heart too long So afraid Slip and I fall and I die Oh Daddy You know you make me cry How can you love me I don’t understand why Oh Daddy If I could make you see If there’s been a fool around It’s got to be me Yes it’s got to be me Oh Daddy You soothe me with your smile You’re letting me know You’re the best thing in my life Oh Daddy If I could make you see If there’s been a fool around It’s got to be me Yes it’s got to be me Why are you right when I’m so wrong I’m so weak but you’re so strong Everything you do is just alright And I can’t walk away from you Baby if I tried Why are you right when I’m so wrong I’m so weak but you’re so strong Everything you do is just alright And I can’t walk away from you Baby if I tried Oh Daddy You soothe me with your smile  me with your smile You’re letting me know You’re the best thing in my life Oh Daddy If I could make you see If there’s been a fool around It’s got to be me Yes it’s got to be me Yes it’s got to be me Yes it’s got to be me Yes it’s got to be me Yes it’s got to be me Yes it’s got to be mYes it’s got to be me Yes it’s got to be me"
      ]
  },  

  "G": {
      titleZh: "去谷歌它",
      meta: "Google It",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/G/1b.JPG",
            zh: {
              text: "如何拼写“specially”", 
              tooltip: "今天我刚听了拉娜・德・雷的《卡门》。你要音乐推荐，这是我专门为你选的：) 我每次都得谷歌查 “专门” 这个词怎么拼，还总记不住。祝你愉快！爱你的 卡佳 ♡。" 
            },
            en: {
              text: "How to spell ‘specially’?",
              tooltip: "Just today I was listening to the song called 'Carmen' by Lana del Rey. Since you asked for music recommendations, this is my choice specifically for you. :) I always have to google how to spell 'specifically' and every time, I forget it. Hope you have a nice day! All the love, Katja ♡"
            }
          },

          "trigger2": {
            bg: "postcardforscript/G/2b.JPG",
            zh: {
              text: "科隆大教堂", 
              tooltip: "你好！来自科隆的问候。我们著名的科隆大教堂是世界文化遗产，也是欧洲最大哥特式教堂，是德国到访人数最多的地标。可以谷歌看看！德克。（孔施塔尔埃什当代艺术空间 2025.7.12 - 9.21 杰里米・帕吕斯《工作室试椅》2024 摄影 © 萨曼莎・威尔维特）（孔施塔尔埃什 亨利亲王大道 29 号 L-4280 阿尔泽特河畔埃施）" 
            },
            en: {
              text: "Cologne Cathedral?",
              tooltip: "Hello! Greetings from Cologne. Our famous cathedral is a WHS and the largest gothic church in Europe. The most visited landmark in Germany. Google it! Dirk (KONSCHT HAL ESCH Espace d'art contemporain 12.07 - 21.09.2025 _FINAL_FINAL JEREMY PALLUCE Jeremy Palluce, studio chair tryout, 2024. Photo © Samantha Wilvert)(Konschthal Esch 29, boulevard Prince Henri L-4280 Esch-sur-Alzette )"
            }
          },

          "trigger3": {
            bg: "postcardforscript/G/3b.JPG",
            zh: {
              text: "皮桑卡彩蛋", 
              tooltip: "谢谢你和我分享明信片！想和你分享一种传统工艺，我们用它装饰复活节彩蛋，就像邮票上这样 ^^ 上面有不同符号，各有寓意：健康、丰收、生命、天空与空气：) 可以搜 “皮桑卡彩蛋” 看更多！祝好，阿纳斯塔西娅（画师：[划掉] 哦：）" 
            },
            en: {
              text: "“Pysanka” Easter eggs?",
              tooltip: "Thank you for doing swap with me! I want to share with you traditional art style! We use it to decorate Easter eggs! As you can see on the stamp ^^ There are different symbols with interesting meanings! For example: health, harvest, life, sky and air :) You can googled \"Pysanka\" to see more! Best wishes, Anastasiia (Artist: [delete] oh: notdrm)"
            }
          },

          "trigger4": {
            bg: "postcardforscript/G/4b.JPG",
            zh: {
              text: "次方阵舞", 
              tooltip: "来自东田纳西的问候。我搬来这里后认识了郁金香杨，它开着别致的橙黄色花朵，春天盛开时十分壮观。我的头像是我和丈夫在大烟山国家公园一棵古郁金香杨前拍的，这座公园是联合国教科文组织世界遗产。我成年后大多住在新墨西哥州，阿卡马普韦布洛是我最爱的地方（见陶器邮票）。我和丈夫都是舞者，我跳民间舞，他跳乡村方阵舞，我们每月会参加一两次方阵舞周末活动，可以谷歌了解一下。愿你安康顺遂。洛瑞。" 
            },
            en: {
              text: "What's Contra dance?",
              tooltip: "Greetings from East Tennessee. When I moved to Tennessee, I learned about the tulip poplar tree. It has curious orange and yellow flowers. When it blooms in the spring, the tree is quite spectacular. My profile picture is my husband and I in front of an old growth tulip poplar in the nearby Great Smoky Mountains National Park, a UNESCO designated World Heritage Site. I lived in New Mexico most of my adult life. Acoma Pueblo is my favorite (see pottery stamp). My husband and I are dancers. I am a folk dancer. He is a contra dancer. We go to contra dance weekends one to two times a month. Google contra dance. I hope this finds you healthy and peaceful. Lori (LORI)"
            }
          }
      },

      annotationsZh: [
        "（打开浏览器）",
        "（光标）",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "（想不起来怎么拼这个单词）",
        "（每次都要搜索一下）",
        " "
      ],

      contentZh: [
        "如何在炎热干燥的沙漠地区种植仙人掌、多肉植物、棕榈树，以及柠檬、青柠和金橘等柑橘类果树？",
        "{{trigger2}}",
        "如何从种子开始亲手培育多肉植物？",
        "如何在芬兰的气候条件下种植来自中国四川省的结白色浆果的花楸属植物？",
        "郁金香什么时候开？",
        "{{trigger3}}",
        "如何在自己家的花园里种植花卉、香草和蔬菜？",
        "为什么今年的赫尔辛基没有下雪？",
        "冷黄瓜汤Tarator",
        "{{trigger1}}",
        "拉那·德雷的歌曲《卡门》",
        "{{trigger4}}"
      ],

      annotationsEn: [
        "(Opening the browser)",
        "(Cursor)",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "(Can't remember how to spell this word)",
        "(Have to search it every time)",
        " "
      ],

      contentEn: [
        "How to grow cacti, succulents, citrus trees (lemon, lime and kumquat) and palm trees in a hot, dry desert?",
        "{{trigger2}}",
        "How to take care of succulent plants and growing them from seeds myself?",
        "How to grow Sorbus species with white berries come mostly from Sichuan County in Finland's climate?",
        "When are the tulips blossoming?",
        "{{trigger3}}",
        "How to plant flowers, herbs and veggies in a small garden?",
        "Why Helsinki will be snowless this year?",
        "Tarator (Bulgarian cold cucumber soup)?",
        "{{trigger1}}",
        "the song called ‘Carmen’ by Lana del Rey?",
        "{{trigger4}}"
      ]
  },

  "H": {
      titleZh: "世界上的疗伤者",
      meta: "Healer of the World",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/H/1b.JPG",
            zh: {
              text: "6只被救助的流浪猫", 
              tooltip: "来自保加利亚的问候！我叫玛丽娜，今年 24 岁，职业是兽医。家里收养了六只流浪猫咪。我热爱手工创作，为自己的小店设计数码纸品与插画，也擅长钩针编织和刺绣，同时十分喜爱摇滚音乐。预祝你的展览圆满顺利！玛丽娜。" 
            },
            en: {
              text: "six rescued cats at home",
              tooltip: "Hello from Bulgaria! My name is Marina. I'm 24 years old and work as veterinarian. I have six rescued cats at home. I'm also passionate about creativity. I design digital papers and illustrations for my shop. Also I like crocheting and embroidery. I love rock music too. Wishing you the best of luck with your exhibition! Marina (with a cute cat head)"
            }
          },

          "trigger2": {
            bg: "postcardforscript/H/2b.JPG",
            zh: {
              text: "骑车通勤", 
              tooltip: "亲爱的朋友：加拿大国旗如今迎来六十周年，恰好我也年届六十。我喜欢打理园艺、读书、骑车通勤，也爱做针线活。咖啡和巧克力是我的最爱。我在监狱牙科诊所工作，从前还会弹奏钢琴和单簧管。圣诞快乐 ♡琳达。" 
            },
            en: {
              text: "cycle to work",
              tooltip: "Dearest, Canada's flag is now age 60, like me. I like to garden, read, cycle to work, and sew. Coffee and chocolate is my weakness :) I work in the prison dental clinic. In the past I played the piano and clarinet. Merry Christmas ♡ Linda."
            }
          },

          "trigger3": {
            bg: "postcardforscript/H/3b.JPG",
            zh: {
              text: "当地的岩石形态", 
              tooltip: "你好！我叫亚历克斯，在美国弗吉尼亚州罗阿诺克市从事护士工作。我刚发现这张明信片的纸张不适合钢笔墨水书写。希望你喜欢这幅当地岩石景观的蚀刻版画。愿你日日舒心！" 
            },
            en: {
              text: "local Rock formation",
              tooltip: "Hi! My name is Alex and I'm a nurse in Roanoke, VA USA. I just found out that this paper is no good for fountain pen ink. I hope you enjoy this etching of a local Rock formation. Have a great day!"
            }
          },

          "trigger4": {
            bg: "postcardforscript/H/4b.JPG",
            zh: {
              text: "红十字会急救处的同事", 
              tooltip: "你好！送上德国北部施塔德的问候，此地位于汉堡以西 50 公里。我在红十字会做了 42 年急救医护人员，本月正式退休。我最大的爱好是在摇滚乐队里打鼓、弹吉他。愿你安康顺遂。埃卡特。" 
            },
            en: {
              text: "paramedic with the Red Cross",
              tooltip: "Ni hao, many greetings from Stade in northern Germany 50 Km west of Hamburg. I was a paramedic with the Red Cross for 42 years and I retired this month. My favorite hobby is playing drums and guitar in a rock band. Stay healthy, Eckhardt."
            }
          },

          "trigger5": {
            bg: "postcardforscript/H/5b.JPG",
            zh: {
              text: "急诊室", 
              tooltip: "来自斯洛文尼亚的问候！我叫切尔特，住在首都卢布尔雅那附近的博罗夫尼察小镇。我已婚，有两个儿子，分别 11 岁、14 岁。我是急诊科注册医护技师，从业已有 22 年。这是一张 1975 年的老明信片。这么多年过去，这里略有扩建、愈发现代化，但整体风貌依旧如故。愿你平安康健！" 
            },
            en: {
              text: "Emergency unit",
              tooltip: "Hello from SLOVENIA! My name is ČRT and I live in a small town Borovnica near capital city Ljubljana. I'm married, have two sons (11,14). By profession I'm reg.med.tech.(nurse) in Emergency unit - 22. years. This is an older postcard from 1975. The place has grown and modernized a little during this time, but otherwise it is still the same as it was. OAS. Stay well!"
            }
          },

          "trigger6": {
            bg: "postcardforscript/H/6b.JPG",
            zh: {
              text: "儿科医生", 
              tooltip: "你好！我叫埃琳娜，是一名儿科医生。如今我在科托沃小镇，参与乡村基层医师项目工作。平日里喜欢读书、打保龄球、滑雪。愿你好运常伴，喜乐无忧！" 
            },
            en: {
              text: "pediatrician",
              tooltip: "Hello! My name is Elena. I am a pediatrician. Now I work in the small town of Kotovo under the \"Zemsky Doctor\" program. I like to read, go bowling, go skiing. Good luck and love!"
            }
          },

          "trigger7": {
            bg: "postcardforscript/H/7b.JPG",
            zh: {
              text: "医院的护士", 
              tooltip: "你好！我叫埃琳娜，住在俄罗斯莫斯科。我喜欢读书、旅行、听音乐，在医院担任护士。致以美好祝愿！" 
            },
            en: {
              text: "nurse in a hospital",
              tooltip: "Hello! My name is Elena. I live in Russia, in the city of Moscow. I like to read, travel, listen to music. I work as a nurse in a hospital. With best wishes!"
            }
          },

          "trigger8": {
            bg: "postcardforscript/H/8b.JPG",
            zh: {
              text: "祖尼印第安保留地的护士", 
              tooltip: "我是一名日本护士，在美国新墨西哥州祖尼印第安保留地生活工作。目前我正在日本探亲。祝愿你明年的展览圆满成功，一切顺利！由衷祝福，由美子。" 
            },
            en: {
              text: "nurse who live/works on the Zuni Indian Reservation",
              tooltip: "I am a Japanese nurse who live/works on the Zuni Indian Reservation in New Mexico, USA. But at the moment, I am visiting my family in Japan. Hope your exhibition next year will be a great success. Good luck! Very best wishes. Yumiko"
            }
          },

          "trigger9": {
            bg: "postcardforscript/H/9b.JPG",
            zh: {
              text: "结婚已有 34 年", 
              tooltip: "你好！愿你喜欢这张明信片！我叫萨宾，住在德国莱茵河畔的杜塞尔多夫。今年 60 岁，结婚已有 34 年。我曾在医院做了多年护士，后来因身体原因无法继续从业。祝你万事顺遂！" 
            },
            en: {
              text: "married since 34 years",
              tooltip: "Hello! I hope you will enjoy this card! My name is Sabine, and I live in Düsseldorf/Germany, near to the river Rhine. I am 60 years old, and I am married since 34 years. I worked as a nurse at a hospital for many years, but this isn't possible any more because of health-reasons. All the best!"
            }
          },

          "trigger10": {
            bg: "postcardforscript/H/10b.JPG",
            zh: {
              text: "仰望繁星点点的夜空", 
              tooltip: "你好！我叫玛拉，和丈夫、小儿子定居在德国南部。我在牙科诊所做护士，闲暇时喜欢钩针、做针线活，也爱仰望繁星点点的夜空。愿你身体健康、好运常在。诚挚致意，玛拉。" 
            },
            en: {
              text: "looking into the night sky with all it stars",
              tooltip: "Hello, my name is Mara and I live with my husband and our little son in the south of Germany. I'm a nurse, working at a dentist. In my freetime I like to crochet and sew. I also love looking into the night sky with all it stars. I wish you health and luck, Best wishes, Mara."
            }
          },

          "trigger11": {
            bg: "postcardforscript/H/11b.JPG",
            zh: {
              text: "犯罪悬疑小说", 
              tooltip: "你好！寄来我所居住的悉尼的问候。我是一名退休护士。随信附上一张原住民艺术极限明信片，希望你喜欢。我很爱读悬疑推理小说，大卫・巴尔达奇是我最喜爱的作家。顺祝安好，卡伦。" 
            },
            en: {
              text: "crime fiction",
              tooltip: "Hello, greetings from Sydney where I live. I am a retired Nurse. I send a maxicard of Indigenous Art - I hope you like it. I love to read crime fiction - David Baldacci is a favourite for me. Best wishes KarenK."
            }
          }
      },

      annotationsZh: [],

      contentZh: [
        "一位医护工作者的工作表",
        "早晨六点三十分：",
        "从六点开始，每隔十分钟响一次的闹钟最后一次响起。起床。起床后的第一件事，是去喂家里那{{trigger1}}。然后再喝上一杯热咖啡唤醒自己。",
        "早晨七点五十分：",
        "{{trigger2}}，呼吸清晨的空气。如果是夏日，太阳已然升起，这个时候心情不错。沿途或许还会留意一下{{trigger3}}。",
        "八点半：",
        "抵达工作地点，打开电脑，处理{{trigger4}}发来的留言。",
        "九点-十八点：",
        "{{trigger5}}，医院的儿科病房，作为“地方医生”项目的一员。为孩子们看病（{{trigger6}}）。日常的工作重复而琐碎，几乎没有休息的时间。只有在专心于工作的时候，偶尔会会想起曾经的经历：曾做过监狱牙科诊所和普通牙科诊所的护士、曾在{{trigger7}}工作、也曾是{{trigger8}}、也曾帮助兽医为动物提供救治。",
        "晚上六点半：",
        "骑车回到家中。如果在冬天，这就是一段夜路了。{{trigger9}}的伴侣已在家中等候吃完饭。",
        "晚上八点：",
        "出门散步。如果天气好，可以{{trigger10}}。据说在星空下，祈求所有人健康与好运的话，更容易灵验。",
        "晚上十点半：",
        "和伴侣轮流做完家务，躺在床上读{{trigger11}}。想到周末的计划，可以去打保龄球，或者在雪季去滑雪。还需要到花园里劳作，侍弄花草。偶尔也会想想出国旅游，但目前忙得没时间。"
      ],

      annotationsEn: [],

      contentEn: [
        "A Healthcare Worker's Schedule",
        "6:30 AM",
        "The alarm, which has been ringing every ten minutes since six o'clock, rings for the last time. Get up. The first thing after getting up is to feed the {{trigger1}}. And then drink a cup of hot coffee to wake myself up.",
        "7:50 AM",
        "I {{trigger2}}, breathing the early morning air. If it's summer, the sun has already risen, and I'm in a good mood at this time. Along the way, perhaps I'll also notice the {{trigger3}}.",
        "8:30 AM",
        "Arrive at the workplace, turn on the computer, and process messages from colleagues who are {{trigger4}}.",
        "9:00 AM - 6:00 PM",
        "{{trigger5}}, the pediatric ward of the hospital, as a member under the \"Zemsky Doctor\" program. Treating children as a {{trigger6}}. The daily work is repetitive and trivial, with almost no time to rest. Only when focusing on work do I occasionally recall past experiences: having been a {{trigger7}}, working in a prison dental clinic and working at a dentist, having been a {{trigger8}}, and also having helped a veterinarian provide treatment for animals.",
        "6:30 PM",
        "Cycle back home. If it is in winter, this is a night ride. My partner, to whom I am {{trigger9}}, is already waiting at home for dinner.",
        "8:00 PM",
        "Go out for a walk. If the weather is nice, I can go {{trigger10}}. It is said that under the starry sky, praying for everyone's health and luck is more likely to come true.",
        "10:30 PM",
        "After taking turns doing chores with my partner, lie in bed to read {{trigger11}}. Thinking about weekend plans, I could go bowling, go skiing in the snowy season. I also need to garden and tend to plants and flowers. Occasionally I also think about to travel abroad, but currently I am too busy to have time."
      ]
  },

 "I": {
      titleZh: "想象",
      meta: "Imagine",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/I/1b.JPG",
            zh: {
              text: "我来自一座曾经以采煤为生的小镇。我常常骑着我的旧摩托车环游欧洲，也时常徜徉在充满故事与", 
              tooltip: "我来自一座曾经以采煤为生的小镇。我常常骑着我的旧摩托车环游欧洲，也时常徜徉在充满故事与想象的奇幻天地里。祝你一切顺遂，也希望你有机会来我的国家看一看。来自斯洛文尼亚的拥抱，科比（或罗布，签名潦草难以辨认）。" 
            },
            en: {
              text: "I'm from a small, once a coal mining town. I travel a lot all around Europe, usually by my good old motorbike. Here and there also in the magical land of stories and ",
              tooltip: "I'm from a small, once a coal-mining town. I travel a lot all around Europe, usually by my good old motorbike. Here and there also in the magical land of stories and Imagination. I wish you all the very best including a visit to our country. A big hug from Slovenia Kobe [或 Robe，签名草书]"
            }
          },

          "trigger2": {
            bg: "postcardforscript/I/2b.JPG",
            zh: {
              text: "想象", 
              tooltip: "你好吗？我叫亚历山德拉，今年 38 岁，在意大利给你写下这张明信片。希望你喜欢这张明信片。来自意大利的问候。（2024 年 5 月 9 日至 13 日 都灵国际图书博览会，主题是想象）" 
            },
            en: {
              text: "Imagination",
              tooltip: "How are you? I'm Alessandra, I'm 38 years old and I am writing to you from Italy. I hope you like the postcard. Greetings from Italy.（SALONE INTERNAZIONALE DEL LIBRO TORINO 9-13 maggio 2024）"
            }
          },

          "trigger3": {
            bg: "postcardforscript/I/3b.JPG",
            zh: {
              text: "我喜爱山川、森林，旅行与摄影。我还一直梦想着能亲眼看看大海…… 而现在，我只想象着能过上和平的生活", 
              tooltip: "你好！我叫莱西亚，来自乌克兰。我喜爱山川、森林，热爱旅行与摄影。我一直梦想着能亲眼看看大海…… 而现在，我只期盼能过上平静的生活。愿你拥有美好的一天，平安喜乐，岁月静好。" 
            },
            en: {
              text: "I love mountains, forests, travel, photography. I dreamed and still dream to see the ocean... but now I am only imagining of a peaceful life",
              tooltip: "Hello! My name is Lesia. I'm from Ukraine. I love mountains, forests, travel, photography. I dreamed and still dream to see the ocean... but now I dream of a peaceful life. I wish you a wonderful day and peaceful happy life!（Леся ）（Lesia）"
            }
          }
      },

      annotationsZh: [
        "（闭上眼）",
        "（让忘记的事情再次出现）",
        "（想象一片树林）",
        "（想象一片天空）",
        "（想象一只章鱼）",
        "（想象每一种头发的颜色）",
        "（想象牛群）",
        "（想象无忧无虑）",
        "（想象人类出现以前的世界）",
        "（耳边响起歌声）",
        "（想象约翰·列侬在唱）",
        "（试想世界上没有国界）",
        "（这并不难做到）",
        "（没有什么值得为之杀戮牺牲）",
        "（也没有宗教信仰）",
        "（想象所有的人）",
        "（都在和平中生活）……",
        "（你可能会说我是个梦想家）",
        "（但我并非唯一）",
        "（但愿有一天你能加入我们）",
        "（让世界同心共存）"
      ],

      contentZh: [
        "{{trigger1}}{{trigger2}}的奇幻天地里。",
        "在漫长的日子里，{{trigger3}}。"
      ],

      annotationsEn: [
        "(Close your eyes)",
        "(Let forgotten things appear again)",
        "(Imagine a forest)",
        "(Imagine a sky)",
        "(Imagine an octopus)",
        "(Imagine every hair color)",
        "(Imagine a herd of cattle)",
        "(Imagine being carefree)",
        "(Imagine the world before humans appeared)",
        "(A song echoes in the ear)",
        "(Imagine John Lennon singing)",
        "(Imagine there's no countries)",
        "(It isn't hard to do)",
        "(Nothing to kill or die for)",
        "(And no religion, too)",
        "(Imagine all the people)",
        "(Living life in peace...)",
        "(You may say I'm a dreamer)",
        "(But I'm not the only one)",
        "(I hope someday you'll join us)",
        "(And the world will be as one)"
      ],

      contentEn: [
        "{{trigger1}}{{trigger2}}.",
        "Through the long days, {{trigger3}}."
      ]
  },

  "J": {
      titleZh: "在那个爵士音乐节晚上",
      meta: "Jazz Festival Night",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/J/1b.JPG",
            zh: {
              text: "潮湿而闷热。也许那是新奥尔良的气息，爵士乐的故乡", 
              tooltip: "我叫史黛西，住在路易斯安那州的新奥尔良。这里是狂欢节、贝涅特甜点、水煮小龙虾与海鲜的故乡，还有风光旖旎的沼泽和野生短吻鳄。城里好玩的活动数不胜数，各式节庆不断，波旁街热闹非凡。这里也是爵士乐的发源地，只是气候常年潮湿闷热。♡ 史黛西" 
            },
            en: {
              text: "Humid muggy Heat. Perhaps that is the scent of new orleans louisiana, the home of Jazz music",
              tooltip: "My name is Stacey and I live in New Orleans Louisiana. Home of Mardi gras, Beignets, Boiled crawfish/seafood, Beautiful swamps and Alligators. We have a lot of fun stuff to do here like festivals, Bourbon Street. We are also home of Jazz music and Humid muggy Heat. ♡ Stacey"
            }
          },

          "trigger2": {
            bg: "postcardforscript/J/2b.JPG",
            zh: {
              text: "传奇的查尔斯·明格斯。在1977年的“奇异恩典”咖啡馆，那里没有拘束的桌椅，大家都随意地席地而坐。我就坐在舞台最前面的地板上，仰起头，看着他就在我头顶上方拨动琴弦。那个时候我还只有高三", 
              tooltip: "这张明信片上是传奇爵士音乐家 查尔斯・明格斯（1922-1979）。1977 年我读高三时，曾在一家名叫 “奇异恩典咖啡屋” 的小型现场场馆看过他的演出。那地方氛围随性，屋里摆着桌椅，但大部分人都席地而坐。我记得当时就坐在舞台正前方，他仿佛就在我头顶演奏。前不久我的邻居杰夫，翻出几张多年前从摄影师本人手里收下的明格斯明信片，特意赠予了我。愿平安喜乐常伴。费利斯（摄影：赫伯・诺兰，伊利诺伊州芝加哥市，北赫尔米蒂奇大道 1819 号，邮编 60626；电话 773-645-9009 查尔斯・明格斯 作品版权归赫伯・诺兰所有）" 
            },
            en: {
              text: "legendary Jazz musician Charles Mingus. I saw him in 1977 at a small venue called Amazing Grace Coffee House, where It was very casual place with tables in back but everyone mostly sat on the floor! I remember I was sitting in front of the stage and he was playing just above me. That was when I was a senior in High school",
              tooltip: "This card shows the legendary Jazz musician Charles Mingus (1922-1979). I saw him in 1977 at a small venue called Amazing Grace Coffee House when I was a senior in High School. It was a very casual place with tables and chairs in back but everyone mostly sat on the floor! I remember I was sitting in front of the stage and he was playing just above me :) Recently my neighbor Jeff found a few of these postcards of Mingus that he had gotten from the photographer many years ago and gave them to me. Cheers - peace and happiness, Felice (Herb Nolan Photography 1819 N. Hermitage Chicago, IL 60622 773-645-9009 Charles Mingus © Herb Nolan)"
            }
          },

          "trigger3": {
            bg: "postcardforscript/J/3b.JPG",
            zh: {
              text: "在自家厨房里独自狂舞", 
              tooltip: "来自芝加哥，费利斯向你问好！我今年 65 岁，是一名彩色玻璃艺术创作者，平日爱骑行、旅行，也十分热爱舞蹈。年少时我学习过芭蕾、现代舞与爵士舞；到了八十年代，最爱在夜店伴着朋克摇滚、哥特与新浪潮音乐起舞。如今看演出时我仍会随性起舞，有时也独自在厨房，肆意跟着朋克音乐纵情摇摆。" 
            },
            en: {
              text: "dance sometimes alone in my kitchen - wildly",
              tooltip: "Greetings from Felice in Chicago! I'm 65, a stained glass artist, bicycle rider and traveler. I also love dancing. I studied Ballet Modern and Jazz dance when I was young - But in the 1980's my favorite was dancing to Punk Rock - Goth + NEW WAVE music at dance clubs :) And I still dance at concerts or sometimes alone in my kitchen - wildly to Punk :) !"
            }
          },

          "trigger4": {
            bg: "postcardforscript/J/4b.JPG",
            zh: {
              text: "七月蒙特勒爵士音乐节的草坪上，每年它都在我家附近举办", 
              tooltip: "这封信由我和妈妈一同写下。明信片上是瑞士国家博物馆，园内有一座底蕴悠远、景致优美的古典园林。园中的花草蔬果，全都依照 1730 年的原始风貌原样复刻。每年七月，享誉国际的蒙特勒爵士音乐节都会在我居所附近举办。愿你安好，万事珍重！露西 & 安托瓦内特（普兰然城堡及菜园花园 | 瑞士国家博物馆，2009）" 
            },
            en: {
              text: "Montreux Jazz Festival, which In July will take place, as an international and well reknown festival near where I live",
              tooltip: "I am writing to you with my mom, This card shows the Swiss national Museum, which has a wonderful and historical garden. Flowers & vegetables, same as the original ones, from about 1730. In July will take place the Montreux Jazz Festival, an international and well reknown festival near where I live. I wish you well, take care! Lucie & Antoinette (Le château et son jardin potager — Château de Prangins | Musée national suisse, 2009)"
            }
          }
      },

      annotationsZh: [
        "（镜头放大）",
        "（波普艺术的点阵闪烁）",
        "（写下）",
        "（第 50 届蒙特勒爵士音乐节）"
      ],

      contentZh: [
        "耳边音乐响起，我沉浸在这些旋律、律动和跃动的光影中。",
        "闭上眼睛，夜风突然变得{{trigger1}}，不过不是我的。那个正在弹奏低音提琴的身影，让我想起{{trigger2}}。",
        "现在过了多久呢？现在我还会忍不住{{trigger3}}。我站在{{trigger4}}。",
        "当舞台上的第一个音符响起时，周围的喧嚣如潮水般退去了。奇怪的是，我似乎早就认识它们。"
      ],

      annotationsEn: [
        "(Zoom in)",
        "(Pop art halftone dots flashing)",
        "(Write down)",
        "(50th Montreux Jazz Festival)"
      ],

      contentEn: [
        "As the music plays in my ears, I am immersed in these melodies, rhythms, and dancing lights and shadows.",
        "Closing my eyes, the night wind suddenly becomes a {{trigger1}}, but not mine. That figure playing the double bass reminds me of the {{trigger2}}.",
        "How much time has passed since then? And I still {{trigger3}}. I stand on the lawn of the {{trigger4}}.",
        "When the first note from the stage sounds, the surrounding noise recedes like the tide. Strangely, it seems I have known them for a long time."
      ]
  },

 "K": {
      titleZh: "编织是我的爱好",
      meta: "Knitting as My Hobby",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/K/1b.JPG",
            zh: {
              text: "这一件毛衣，是给我一岁的儿子", 
              tooltip: "致以最温暖的问候！我梦想退休后成为一名玩偶裁缝，不过我还得再工作 14 年。高中时我就常做编织，特别喜欢！我织的最后一件毛衣，是给我一岁的儿子。那真是幸福的时光！艾琳。" 
            },
            en: {
              text: "The last sweater I knitted for my 1 year old son",
              tooltip: "Sending you my warmest greetings! I dream to be a doll tailor when I'm retired. But I have to work another 14 years. I used to knit when I was a high school student. I loved it! The last sweater I knitted for my 1 year old son. Happy days! -Irene-"
            }
          },

          "trigger2": {
            bg: "postcardforscript/K/2b.JPG",
            zh: {
              text: "织完这一只袜子", 
              tooltip: "来自芬兰的问候！这张图案出自一本启蒙识字书，科伊武是儿童插画领域的先驱。我叫奥内，喜欢鲜花、书籍，也爱织袜子。希望你收到卡片时一切安好！保重！奥内。" 
            },
            en: {
              text: "knitting socks",
              tooltip: "Hello/Hei from Finland! This picture is from an ABC-book. Koivu is a pioneer of illustrations for children. My name is Aune and I like flowers, books and knitting socks. Hope my card finds you well! Take care! Aune"
            }
          },

          "trigger3": {
            bg: "postcardforscript/K/3b.JPG",
            zh: {
              text: "钩针玩偶和小玩具是要送人的", 
              tooltip: "你好！来自葡萄牙的问候。我叫索菲亚，今年 34 岁，我也喜欢钩针编织。我主要做钩针玩偶和小玩具送人，也会做一些圣诞小物件。接下来我想花更多时间在这个爱好上。（一起编织吧！）" 
            },
            en: {
              text: "amigurumi dolls and toys are to offer",
              tooltip: "Hello! Greetings from Portugal. My name is Sofia, I'm 34 years old and I also like to crochet. I do mainly amigurumi dolls and toys to offer and some Christmas stuff too. Next I want to dedicate more time doing this hobbie. （Let's knit!）"
            }
          }
      },

      annotationsZh: [
        "（两根银色编织针的针尖在画面中央交叉）",
        "（一根暗红色的毛线被紧紧挑起）",
        "（纤维的毛流在强光下纤毫毕现）",
        "（呼吸带着细毛微微颤动）",
        "（穿过。绕线。挑出。滑落。重复的机械动作。）",
        "（平行的劳作，画面从中间垂直劈开，同时呈现两个不同角度的局部动作。）",
        "（左屏：聚焦于她的左手。食指如同一根紧绷的起重机摇臂，精准地控制着毛线的张力。毛线在指节间勒出一道发白的凹痕。）",
        "（小拇指上下动）",
        "（挑线）",
        "（肌肉的微小颤动被镜头放大）",
        "（右屏：聚焦于她的右手。两根金属针像击剑手的细剑，在极度狭窄的空间内进行着复杂的交锋。一次正针刺入（Knit），一次反针上挑（Purl）。）",
        "（转圈）",
        "（滑落）",
        "（挑开）",
        "（画面突然上下颠倒）",
        "（手仍在继续编织）",
        "（散落的毛线）",
        "（从上到下生长，如同在地面上找一块地扎根似的）",
        "（编织的手是万能的，似乎整个世界都是由编织创造，世界似乎是用线连接在一起的材料。）"
      ],

      contentZh: [
        "在春天，心想：{{trigger1}}。“我是一个年迈的牧羊人。我希望他能看到春天，我希望有布谷鸟在我的羊圈中啼叫。”（一首来自捷克东部的民间古老歌谣。）",
        "在夏天，心想：门口的羽扇豆开花了。这正是夏天到来的信号。现在开始织的话，到冬天应该就能穿上身了。",
        "在秋天，心想：等我{{trigger2}}，去树林散步和采摘蘑菇吧。那个离家只有5米远的森林里还有浆果。",
        "在冬天，心想：今天刚下了一场8英寸大雪。幸好早织好了袜子。这个{{trigger3}}。圣诞节快到了。"
      ],

      annotationsEn: [
        "(The tips of two silver knitting needles cross in the center of the frame)",
        "(A dark red yarn is tightly pulled up)",
        "(The hair flow of the fibers is clearly visible under the strong light)",
        "(Breathing makes the fine hairs tremble slightly)",
        "(Through. Wrap. Pick up. Slip off. Repetitive mechanical movements.)",
        "(Parallel labor, the screen splits vertically in the middle, showing local actions from two different angles simultaneously.)",
        "(Left screen: Focus on her left hand. The index finger acts like a taut crane jib, precisely controlling the tension of the yarn. The yarn cuts a white indentation between the knuckles.)",
        "(Pinky finger moves up and down)",
        "(Picking the yarn)",
        "(The slight trembling of the muscles is magnified by the camera)",
        "(Right screen: Focus on her right hand. The two metal needles are like a fencer's foils, engaging in a complex duel in an extremely narrow space. One knit stitch in, one purl stitch up.)",
        "(Circling)",
        "(Slipping off)",
        "(Picking open)",
        "(The picture suddenly turns upside down)",
        "(The hands continue to knit)",
        "(Scattered yarn)",
        "(Growing from top to bottom, as if finding a patch of ground to take root)",
        "(Knitting hands are omnipotent, as if the whole world is created by knitting, the world seems to be made of materials connected by threads.)"
      ],

      contentEn: [
        "In Spring, Thinking: {{trigger1}}. \"I'm a very old shepherd, I want him to see spring, I want have cuckoos cuckooing in my sheepfold\", (an old folk ballad from the East of the Czech Republic.)",
        "In Summer, Thinking: The Lupines at the door bloom. This is exactly the \"signal Summer's here.\" If I start knitting now, it should be ready to wear by winter.",
        "In Autumn, Thinking: Wait until I finish {{trigger2}}, let's go for a walk in the woods and pick mushrooms. In the forrest that is only 5 meters from my house there are still berries.",
        "In Winter, Thinking: Today we had a big snowstorm 8 inches. Good thing the socks were knitted early. These {{trigger3}}. It's almost Christmas time."
      ]
  },

  "L": {
      titleZh: "迷失东京",
      meta: "Lost in Translation",
     
      images: [ 
        "postcardforscript/L/1f.JPG",
        "postcardforscript/L/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/L/3b.JPG",
            zh: {
              text: "这是我连续走过的第九个国家，现在，我要回家了。", 
              tooltip: "我现在在乌兹别克斯坦首都塔什干。这是我连续到访的第九个国家。我真的很喜欢旅行。我明天早上乘飞机回家。" 
            },
            en: {
              text: "This is my 9th country in a row, and now, I'm flying home.",
              tooltip: "I am evrrently in Tashkent, the capital of Uzbekistan. This is my 9th country in a row. I really like to travel. I’m flying home tomorrow morning."
            }
          },

          "trigger2": {
            bg: "postcardforscript/L/1b.JPG",
            zh: {
              text: "迷失东京", 
              tooltip: "你好。我是来自德国波鸿的阿尔夫。我特意为你选了这幅奥古斯特・麦克的表现主义画作，这幅作品我曾在科隆亲眼见过原作。奥古斯特・麦克与弗朗茨・马克同为 “青骑士” 画派的艺术家，也是我最钟爱的两位画家。他们作画，从不拘泥于眼前的实景物象，而是落笔于心，描绘内心的感知与情愫。你喜欢看电影吗？不知你是否看过我最爱的影片《迷失东京》，由比尔・默瑞与斯嘉丽・约翰逊出演。愿你身心康健，日子安稳平和。致以诚挚祝愿，阿尔夫。||来自美国爱达荷州，愿你的学业诸事顺遂。我已然退休，却一直十分怀念大学时光。我格外喜欢的一部电影，正是《迷失东京》。愿温柔与安宁常伴左右。温迪。" 
            },
            en: {
              text: "Lost in Translation",
              tooltip: "Ni hǎo, I am Alf from Bochum, Germany. I chose this expressionistic painting of August Macke for you which I have seen in original in the city of Cologne. August Macke and Franz Marc, both painters of the artist-union Blauer Reiter, are my favourites. They didn't paint what they saw in real but what they felt. And you like movies? Have you ever seen my favourite one Lost in Translation with Bill Murray and Scarlett Johansson? Have a healthy and peaceful life! Best wishes, Alf.||Idaho, USA Hello :) I hope studies are going well... I am a retired person but I loved college. A movie I like is Lost in Translation. Peace - Wendy."
            }
          },

      }, // 💡 triggers 容器在这里闭合

      annotationsZh: [
        "（如果我是你，你也是我，那么我讨厌的电影和你喜欢的电影，将没有分别）",
"（飞机的轰鸣声突然消失）",
"（绝对静音）",
"（《穿绿色夹克的女士》这幅画出现）",
"（两个极度模糊的人在隐形的护栏旁）（呈现绝对的静止状态。）",
"（一件绿色夹克出现）",
"（身体呈四分之三侧后方站立。）",
"（颈部以微小的角度向下倾斜。）",
"（头部被一顶深色钟形帽压住）",
"（遮挡住大部分额头与赤褐色的头发。）",
"（脸庞仅仅是一块带有阴影的、平滑的肉色几何多边形。）",
"（没有眼睛）",
"（保持此帧画面，直至视觉疲劳。）",
"（闭上眼睛）",
"（飞机起飞）"
      ],

      contentZh: [
        "很小的时候，我就喜欢从窗户里往外看。在这么多的窗户里，我尤其喜欢飞机的舷窗，透过机身局促的椭圆形窗户往下，是脚步可以丈量，却不能被意识到的地平线。此刻我正在塔什干机场，坐在狭窄的飞机座位上，等待起飞。{{trigger1}}",
        "飞机缓缓驶向跑道，侧向停在最长的跑道前，等待转弯的指示。突然一架飞机出现在我眼前舷窗里，原来我们都在排队等待它的降落。那个时候，我脑子里想的是，难以想象，人们能如此精确地计算出每一架飞机的起飞、降落，容不得一点失误。在这个世界上，所有事情都精确地在一块钟表上吗？在这么多飞行中，严重的时差会让我在凌晨三点醒来。我感觉自己不属于任何时间，甚至感觉不到地心引力。忽然，刚才在航站楼内的一幕恍惚间回到脑海中，我看见一位穿着纯绿色夹克的女士，在灰暗匆忙的人群中移动，好抓人眼球。降落的飞机滑行出了视线，一会儿，排在前面的飞机在跑道前停住，一秒，两秒，突然发出连续的低响，以最快的速度冲出去，在跑道上前进。",
        "这个时候，我脑子里想的是，曾经有一段时间我经常乘坐飞机，那时候我还年轻，我的男朋友住在塞尔维亚，我常从德国飞去看他。我总爱幻想我们的对话，幻想我们的将来。可我却觉得与这里格格不入，每一次在候机室里的等待都让人心焦，好像如果我们彻底没有未来反而让人如释重负。这倒是被我讨厌的那部电影说中了，《{{trigger2}} 》。我们的假期很快就结束，航班很快就起飞。每一条途中的地平线都在那些年轻的日子里进入视线再消失，拖着长长的，模糊不清的尾巴。舷窗里，我的机翼沉默着，而它的背景是一架冲出跑道的飞机，就好像侧肩而过，消失在云雾里了。",
      ],
      annotationsEn: [
      "(If I were you and you were me, then the movies I hate and the movies you like will be no different)",
"(The roar of the plane suddenly fades away)",
"(Absolute silence)",
"(The painting *Lady in a Green Jacket* appears)",
"(Two extremely blurry people beside an invisible guardrail) (In a state of absolute stillness.)",
"(A green jacket appears)",
"(Standing in a three-quarter rear posture.)",
"(The neck tilts downward at a tiny angle.)",
"(The head is pressed down by a dark cloche hat)",
"(Covering most of the forehead and auburn hair.)",
"(The face is only a smooth, flesh-colored geometric polygon covered in shadows.)","(No eyes)",
"(Hold this frame until visual fatigue occurs.)",
"(Close the eyes)",
"(The plane takes off)"
      ],
      contentEn: [
        "When I was very young, I liked looking out of windows. Among so many windows, I especially liked airplane windows. Looking down through the cramped oval window of the fuselage, there is a horizon that can be measured by footsteps but cannot be consciously perceived. I am currently in Tashkent airport, sitting in a narrow airplane seat, waiting for takeoff. {{trigger1}}",
        "The plane slowly taxied toward the runway, stopping sideways in front of the longest runway, waiting for the instruction to turn. Suddenly, an airplane appeared in my window; it turned out we were all in line waiting for its landing. At that moment, I was thinking how unimaginable it is that people can calculate the takeoff and landing of every plane so precisely, allowing absolutely no room for error. Is everything in this world precisely ticking on a clock? Throughout so many flights, severe jet lag would wake me up at 3 a.m. I felt like I didn't belong to any time, and couldn't even feel gravity. Suddenly, a scene from the terminal just now flashed back into my mind: I saw a lady in a green jacket, moving through the gray and hurried crowd, which was so eye-catching. The landed plane taxied out of sight. A moment later, the plane ahead stopped at the runway, one second, two seconds, then suddenly let out a continuous low roar, rushing out at top speed and advancing down the runway.",
        "At this time, what came to my mind was that there was a period when I flew frequently. I was still young then, and since my boyfriend lives here in Serbia, I'm visiting Serbia quite frequently; I'm from Germany and often flew to see him. I always loved to imagine our conversations and our future. Yet I felt completely out of place here; every wait in the departure lounge was agonizing, as if it would be a relief if we simply had no future at all. This was actually nailed by that movie I hated, {{trigger2}}. Our holidays ended quickly, and the flights took off quickly. Every horizon along the way entered my sight and then disappeared during those young days, dragging a long, blurred tail. Through the window, my wing remained silent, while its background was a plane rushing down the runway, as if brushing shoulders and disappearing into the clouds.",
      ]
  },  

  "M": {
      titleZh: "午夜蓝",
      meta: "Midnight Blue",
     
      images: [ 
        "postcardforscript/M/1f.JPG",
      
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/M/1b.JPG",
            zh: {
              text: "例如三月对应处女座，九月对应双鱼座，月份名称对应着相对的黄道星座在午夜达到中天的时间。", 
              tooltip: "来自洛杉矶的问候！我今年 42 岁，是一名律师，有两个女儿和一只猫。我喜欢阅读、看喜剧、喝茶。我正要带小女儿去集市，大女儿去参加通宵派对了。今天天气格外好。祝好！丹尼斯。明信片上写着：月份名称对应着相对的黄道星座在午夜达到中天的时间，例如三月对应室女座，九月对应双鱼座。时圈显示子午线的角度以及望远镜所对准的方位。银河（A）与星云均以点绘技法绘制。" 
            },
            en: {
              text: "as in March Virgo and in September Pisces, The names of the months mark the time when the opposite zodiacal constellations culminate at",
              tooltip: "Hello from Los Angeles! I am 42, a lawyer, with 2 daughters and a cat. I love to read, watch comedies & drink tea. I am about to take my youngest daughter to the fair. The elder one went off to a sleepover. The weather is super gorgeous today. Best wishes! Dennis. On the postcard: The names of the months mark the time when the opposite zodiacal constellations culminate at midnight, as in March Virgo and in September Pisces. The hour circle shows the angle of the meridian and the point to which the telescope is directed. The Milky Way (A) and nebulae are stippled."
            }
          },

          "trigger2": {
            bg: "postcardforscript/M/1b.JPG",
            zh: {
              text: "当大女儿去参加通宵派对了", 
              tooltip: "来自洛杉矶的问候！我今年 42 岁，是一名律师，有两个女儿和一只猫。我喜欢阅读、看喜剧、喝茶。我正要带小女儿去集市，大女儿去参加通宵派对了。今天天气格外好。祝好！丹尼斯。明信片上写着：月份名称对应着相对的黄道星座在午夜达到中天的时间，例如三月对应室女座，九月对应双鱼座。时圈显示子午线的角度以及望远镜所对准的方位。银河（A）与星云均以点绘技法绘制。" 
            },
            en: {
              text: "Well my elder daughter went off to a sleepover",
              tooltip: "Hello from Los Angeles! I am 42, a lawyer, with 2 daughters and a cat. I love to read, watch comedies & drink tea. I am about to take my youngest daughter to the fair. The elder one went off to a sleepover. The weather is super gorgeous today. Best wishes! Dennis. On the postcard: The names of the months mark the time when the opposite zodiacal constellations culminate at midnight, as in March Virgo and in September Pisces. The hour circle shows the angle of the meridian and the point to which the telescope is directed. The Milky Way (A) and nebulae are stippled."
            }
          },

      }, // 💡 triggers 容器在这里闭合

      annotationsZh: [
       "（翻覆长空）",
        "（直至）",
        "（长蛇座）",
        "（处女座）",
        "（双鱼座）",
        "（天秤座）",
        "（天蝎座）",
        "（金牛座）",
        "（{{trigger2}}）",
        "（望向望远镜）",
        "（静默停驻）"
      ],

      contentZh: [
        "人们的记忆都存储在午夜的天空之中。{{trigger1}}只有在行走在自己属于的那个星座达到中天的夜空中时，记忆才会回归，回到自己的脑海中。",
        "我们就这样走在街上。五月的午夜，风还是会吹得人微冷，我紧了紧外套。聊了什么我已经不记得了，只记得我们有一搭没一搭地说着。",
        "也许那时在天上的正是我的星座吧。我记得我的的确确想起来了一段记忆，但后来又忘了。我只记得在那个时候，她说了一句，我们走慢一点好不好。"
      ],
      annotationsEn: [
        "(flipping over)",
        "(that sky)",
        "(to)",
        "(hydra)",
        "(virgo)",
        "(pisces)",
        "(libra)",
        "(scorpio)",
        "(taurus)",
        "({{trigger2}})",
        "(see the telescope)",
        "(pause)"
      ],
      contentEn: [
        "We, people's memories are all stored in the sky of midnight, {{trigger1}}. Only when I walk beneath midnight sky where my constellation climbs to its zenith do my memories return, drifting softly back into my mind.",
        "We wandered down the street just like this. midnight in May, the wind still carried a faint chill, so I pulled my coat closer. I can no longer remember what we talked about, only that we spoke casually, back and forth.",
        "Perhaps my constellation was culminating in the sky that night. I do recall a fragment of memory returning to me, only to fade away again afterward. All that remains is that moment, when she softly asked: ",
        "Could we walk a little slower?",
      ]
  },  

 "N": {
      titleZh: "国家信托基金",
      meta: "National Trust",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/N/1b.JPG",
            zh: {
              text: "这座花园由国家信托基金会管理，这是一个非常受欢迎的慈善组织。如果你选择将这张明信片寄回国家信托基金会，代表你同意他们在未来的市场推广中使用你的个人信息和故事。", 
              tooltip: "你好呀，来自伦敦的问候！我很享受城市生活，也特别喜欢逃去乡下放空。这座花园由英国国民信托基金打理，它是英国非常受欢迎的公益保护组织。祝好，基思。若您将此明信片寄回英国国民信托，即表示您同意将您的个人信息与故事用于后续宣传材料。感谢您的支持。图片：威尔特郡斯托尔海德庄园的湖泊 © 英国国民信托图片库 / 克里斯・莱西（Chris Lacey）。© 英国国民信托 2021 年版权所有。注册慈善机构编号：205846。" 
            },
            en: {
              text: "This garden is looked after by the National Trust, a very popular charity organisation. If you choose to return this postcard to the National Trust, you are giving your permission for your personal data and story to be used in future marketing material.",
              tooltip: "Hello, and greetings from London! I enjoy living in the city but love escaping to the countryside too. This garden is looked after by the National Trust, a very popular charity organisation. Best wishes, Keith. If you choose to return this postcard to the National Trust, you are giving your permission for your personal data and story to be used in future marketing material. Thank you. Image: The lake at Stourhead, Wiltshire. © National Trust Images/Chris Lacey. © National Trust 2021. Registered charity no. 205846."
            }
          },

          "trigger2": {
            bg: "postcardforscript/N/2b.JPG",
            zh: {
              text: "这里的酒吧早上九点一直演奏到凌晨3点", 
              tooltip: "我叫史黛西，住在路易斯安那州的新奥尔良。这里是狂欢节、贝涅特甜点、水煮小龙虾与海鲜的故乡，还有风光旖旎的沼泽和野生短吻鳄。城里好玩的活动数不胜数，各式节庆不断，波旁街热闹非凡。这里也是爵士乐的发源地，只是气候常年潮湿闷热。♡ 史黛西" 
            },
            en: {
              text: "Live music is heard from 9am-3am",
              tooltip: "My name is Stacey and I live in New Orleans Louisiana. Home of Mardi gras, Beignets, Boiled crawfish/seafood, Beautiful swamps and Alligators. We have a lot of fun stuff to do here like festivals, Bourbon Street. We are also home of Jazz music and Humid muggy Heat. ♡ Stacey"
            }
          }
      },

      annotationsZh: [
        "（场景一）（室内）（他的办公室）（白天）",
        "（镜头退远）",
        "（场景二）（室外/室内）（酒吧与街道）（插入：查尔斯·明格斯的音乐）（光线昏暗）",
        "（场景三）（他的办公室）",
        " "
      ],

      contentZh: [
        "窗户没有完全关严，风把百叶窗拉出细微的声响。在他的办公桌上，摆着一张明信片。明信片上的绿色在一堆苍白的文件里显得格外刺眼。",
        "我忍不住走上去，小心翼翼地拿起这张明信片。我保证我不会看任何一个他桌子上的文件，人事任免、资金流动、政府证明，我全都不感兴趣。我承认，唯一让我想知道的，也许是某个小夹层里，他的哪位情人又给他写了什么东西，留下了什么有香味的东西。但是，从昨晚开始，这些东西也再不能引起我的注意了。",
        "昨晚……昨晚又发生了什么呢？我想要喝醉，但当一杯不加冰块的威士忌送到我嘴边的时候，又发现自己找不到一个喝酒的理由。也许我只是想用喝醉证明自己是一个重情的人，是一个会受伤、会心痛的人，但内心对他人的冷漠总是在一些深夜时刻钻出来，无法克制。我鄙视那种自怜自艾。我没法真正的爱任何人。那些音乐吵得我头疼，{{trigger2}}，只能从喧闹的酒吧里逃出来，逃回地面上。突然的安静让我的耳朵连着脑子嗡嗡低响。在黑暗中我沿着街道漫无目的地闲逛，之后我在一家亮着小灯的吧外坐下。有几个工人在修桌椅上的大雨棚。我盯着雨棚缓慢地打开，卷起，再打开，再卷起。不知道在多少次卷起打开后黑夜走到尽头，天开始亮了。从暗到亮的时间那么短，那么神奇，原来我们都因为生活中的大事和小事错过了那么多次伟大的瞬间。我拦了一辆出租车回到自己的公寓，直到我连衣服都不换就倒在床上的时候，才意识到自己在外面闲逛了一整个晚上。我醒来之后，看到外面下起了雪。",
        "我屏住呼吸，将手上的明信片轻轻反转。背面写着这样一行字：“{{trigger1}}”",
        "我不禁轻笑了一声，随手把明信片扔回他的桌子上，假装漫不经心。"
      ],

      annotationsEn: [
        "(Scene 1) (Interior) (His office) (Daytime)",
        "(Camera pulls back)",
        "(Scene 2) (Exterior/Interior) (Bar and street) (Insert: music of Charles Mingus) (Dim lighting)",
        "(Scene 3) (His office)",
        " "
      ],

      contentEn: [
        "The window was not completely shut, and the wind drew a faint rustling sound from the blinds. On his desk lay a postcard. The green on the postcard looked particularly glaring amidst a pile of pale documents.",
        "I couldn't help but walk up and carefully pick up this postcard. I swear I wouldn't look at any of the documents on his desk—personnel appointments, financial flows, government certificates, I'm not interested in any of them. I admit, the only thing I might want to know is whether in some small hidden compartment, one of his lovers had written him something again, or left behind something scented. But, since last night, these things could no longer catch my attention either.",
        "Last night... what happened last night again? I wanted to get drunk, but when a glass of whiskey without ice was brought to my lips, I found myself unable to find a reason to drink. Perhaps I just wanted to use getting drunk to prove that I am a person who values feelings, someone who can get hurt and feel heartache, but the inner apathy towards others always creeps out during certain late-night moments, uncontrollably. I despise that kind of self-pity. I can't truly love anyone. The music gave me a headache, and here, {{trigger2}}. I could only escape from the noisy bar, fleeing back to the ground level. The sudden silence made my ears buzz along with my brain. In the dark, I wandered aimlessly along the street, and then I sat down outside a bar with small lights on. A few workers were fixing the large awning over the tables and chairs. I stared at the awning as it slowly opened, rolled up, opened again, and rolled up again. I don't know after how many times of rolling up and opening, the dark night came to an end, and the sky began to light up. The time from dark to light was so short, so magical; it turned out we have all missed so many great moments because of the big and small things in life. I hailed a taxi back to my apartment, and it wasn't until I collapsed on the bed without even changing my clothes that I realized I had been wandering outside for the whole night. After I woke up, I saw it was snowing outside.",
        "I held my breath and gently turned the postcard in my hand over. On the back was written this line: \"{{trigger1}}\"",
        "I couldn't help but chuckle softly, and casually tossed the postcard back onto his desk, pretending to be nonchalant."
      ]
  },

 "O": {
      titleZh: "计划表",
      meta: "Bucket List",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/O/1b.JPG",
            zh: {
              text: "学用数位板画画", 
              tooltip: "你好，我住在里昂，不过我要去巴黎看我最喜欢的乐队演出了 —— 诱惑本质乐队和伊凡塞斯乐队。我已经迫不及待了！我还很喜欢动画片《宇宙小子》，未来想学用数位板画画，还有吹风笛。祝你学业顺利！保重。维奥莱塔。（巴黎 —— 白广场 —— 红磨坊）" 
            },
            en: {
              text: "take up drawing on a tablet",
              tooltip: "Hi, I live in Lyon, but I will visit Paris for the concert of some of my favourite bands. Within Temptation and Evanescence. Can't wait! I also love the cartoon series Steven Universe and one day I want to take up drawing on a tablet, and playing bagpipe. Good luck with your studies! Take care, Violeta Lapis Lazuli.（PARIS - Place Blanche - Moulin Rouge）"
            }
          },

          "trigger2": {
            bg: "postcardforscript/O/2b.JPG",
            zh: {
              text: "吉娜", 
              tooltip: "我选这张明信片，是因为上面的 “速写”。我还没去过马拉加，但去过西班牙。希望有一天能去中国。祝你一切顺利，来自维滕的问候。吉娜。" 
            },
            en: {
              text: "Gina",
              tooltip: "\"Sketching\" was the reason why I chose this card. I've not yet been to Malaga, but to Spain. I hope to visit China one day. All the best and greetings from Witten, Gina GINA-G（from the book THE ART OF URBAN SKETCHING）（Cristina Urdiales / Drawing from the Gibralfaro Fortress, Mála[ga] / https://www.google.com/search?q=beentheredrawnthat.blogspot.com）"
            }
          },

          "trigger3": {
            bg: "postcardforscript/O/3b.JPG",
            zh: {
              text: "特拉维斯", 
              tooltip: "愿你拥有美好的一天！我从没去过中国，希望将来有机会。你去过美国吗？我住在美国内华达州的拉斯维加斯。希望你喜欢这张明信片，它来自我的故乡密苏里州圣路易斯 —— 西部之门！祝你今天开心！特拉维斯。" 
            },
            en: {
              text: "Travis",
              tooltip: "Hope you having a great day! I've never been to China. I hope to visit one day. Have you ever been to USA? I live in Las Vegas, NV-USA. I hope you like this postcard. It's from my hometown of St. Louis, MO The Gateway to the West! Hope you have a great day! ~Travis~（From the Lewis & Clark Display / Museum of Westward Expansion / Gateway Arch, St. Louis, Mo. / When Lewis & Clark explored a route to the Pacific in 1804-06, they took along Indian trade goods, including knives, beads, peace medals and \"ropes\" of tobacco.）（St. Louis Color Postcard Co. / 1115 Washington St., St. Louis, Mo. 63101）（Photo by Charles and Joann Jordon / mcg logo / 151315）"
            }
          },

          "trigger4": {
            bg: "postcardforscript/O/4b.JPG",
            zh: {
              text: "安东尼奥", 
              tooltip: "你好，我叫安东尼奥，住在瑞士苏黎世。这里地处欧洲中部，阿尔卑斯山脉以北。我还没去过中国，但计划将来去一趟。曾有一位来自上海的交换生在我家住了一年。这张明信片是我的朋友乌米制作的，她是一名艺术家。祝一切安好。安东尼奥。" 
            },
            en: {
              text: "Antonio",
              tooltip: "Dear Ashley, my name is Antonio and I live in Zürich Switzerland. In the middle of Europe to the north of the Alps. I never seen to china but I plan to go one day. I had an exchange student from Shanghai living wit my family for a year. This card was made by a friend of mine. Ümi, she is an artist. All the best Antonio"
            }
          },

          "trigger5": {
            bg: "postcardforscript/O/5b.JPG",
            zh: {
              text: "马特", 
              tooltip: "希望你那边一切都好，我们这里正遭遇严重的野火。我希望有一天能去中国看看长城，在那之前，就先靠明信片一饱眼福吧。马特。" 
            },
            en: {
              text: "Matt",
              tooltip: "I hope all is well there, we are dealing with horrible wildfires here. I hope to visit China one day and see the great wall, but until then postcards will have to suffice. ~Matt~"
            }
          },

          "trigger6": {
            bg: "postcardforscript/O/6b.JPG",
            zh: {
              text: "我喜欢弹奏弦乐器，不过主要弹电贝斯，最喜欢学流行乐曲", 
              tooltip: "我喜欢弹奏弦乐器，不过主要弹电贝斯，最喜欢学流行乐曲。我买过一把班卓琴，但没怎么弹过，也许哪天会去上课学学！干杯！蕾切尔。（我总爱叫它 “蜜桃裤先生”，它是在美国田纳西州一处化石遗址发现的。我把它带回了家，现在它在纽约附近过着快乐的日子。有时候我觉得它长得像玉米热狗。你养宠物吗？）" 
            },
            en: {
              text: "I love playing stringed instruments but I mostly play the electric bass. Pop music is my favorite to learn",
              tooltip: "I love playing stringed instruments but I mostly play the electric bass. Pop music is my favorite to learn. I bought a banjo but haven't played it much. Maybe I'll take lessons one day! Cheers! -Rachel（Mr. Peachy Pants McGee (as I like to call him) was found at a fossil site in Tennessee, USA. I took him home and now he lives a happy life near NYC. Sometimes I think he looks like a corn dog. Do you have any pets?）"
            }
          },

          "trigger7": {
            bg: "postcardforscript/O/7b.JPG",
            zh: {
              text: "艾米丽", 
              tooltip: "我叫艾米莉，来自美国威斯康星州。我和丈夫还有我们的橘猫住在一起。工作日我是一名老师，周末就当咖啡品鉴师！哈哈。我真的很希望有一天能去中国，那里有太多超棒的文物和景点了。祝你身体健康，带着爱意，艾米莉。" 
            },
            en: {
              text: "Emily",
              tooltip: "My name is Emily and I'm from Wisconsin, USA. I live with my husband and our orange cat (笑脸) I'm a teacher during the week and a coffee tester on the weekends! lol! I really hope to visit China one day! Theres so many cool artifacts and tourist attractions. Stay healthy & with love, Emily"
            }
          },

          "trigger8": {
            bg: "postcardforscript/O/8b.JPG",
            zh: {
              text: "去不同的国家旅行", 
              tooltip: "我叫斯蒂娜，也已经退休了，不过现在每周会去做一天 “校园奶奶”。我和你有一样的爱好！我喜欢做饭，尝试新菜谱、新菜式，也喜欢旅行。我住在芬兰西南部的一座小岛上，森林离我家只有 5 米远，秋天我可以去采浆果和蘑菇。祝你万事顺意，如果你打算尝试这道菜，祝你成功。斯蒂娜。（北部驯鹿肉小炒）" 
            },
            en: {
              text: "travel to as many countries as possible",
              tooltip: "my name is Stina and I'm also retired, but now I \"work\" like a school grandmother one day in week. I have the same thing I like to do like you have! I love to cook and try new recipes/dishes and also to travel. I'm living in a small island south west of Finland. and the forrest is only 5 meters from my house so I can pick berries and mushrooms in the autumn. I wish you all the best and good luck if you will try this dish. StinaM（Sautéed reindeer from North - Pohjoisen poronkäristys / www.minorpostcards.fi）（Photo / Valokuva: Minna Kääriäinen, Minor Postcards / Printed in Finland - Painettu sertifioidulle kartongille Suomessa）"
            }
          },

          "trigger9": {
            bg: "postcardforscript/O/9b.JPG",
            zh: {
              text: "在樱花盛开的时候去日本", 
              tooltip: "谢谢你漂亮的樱花卡片，希望有一天你能在樱花盛开的时候来日本。前天我去逛了大阪万博会，感受到了非洲等多个国家的文化。祝你秋日愉快！菜里。" 
            },
            en: {
              text: "come to Japan during Sakura in full bloom",
              tooltip: "Thank you for the beautiful Sakura card (爱心) Hope you come to Japan during in full bloom one day. I enjoyed Osaka Expo the day before yesterday. I could feel some cultures of several countries like Africa. Have a nice Autumn Zhimu :) Nari"
            }
          }
      },

      annotationsZh: [
        " ",
        " ",
        " ",
        " ",
        " ",
        "（一滴红色的水彩颜料滴落在纸面上）",
        "（棉质的纸张，将水吸去）",
        "（晕染开）",
        " ",
        "（出现信封）",
        "（“温馨提示：签收国际邮件快件对外包装及内件消毒，加强个人防护。”）",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "（望向墙上由日本朋友寄来的樱花水彩画）",
        " ",
        " ",
        "（印刷品）",
        "（划掉）",
        " ",
        " ",
        " ",
        " "
      ],

      contentZh: [
        "计划表",
        "2020",
        "掌握弹钢琴的技能，（继续坚持练习）",
        "用多邻国开始学习日语（之后可以挑战一下中文）",
        "2021",
        "开始学习用水彩画明信片，亲手绘制明信片寄给别人",
        "2022",
        "疫情结束，准备旅行",
        "2023",
        "带 87 岁的母亲去韩国旅行（因为父亲工作的关系，他们曾在 1980 年居住在首尔，重新造访韩国是母亲的梦想）",
        "去纳米比亚旅行（遗愿清单之一）（bucket list）",
        "2024",
        "希望能{{trigger1}}",
        "希望学会吹风笛",
        "希望能抽出时间来学习画画",
        "2025",
        "投入更多时间在钩针编织玩偶这个爱好上",
        "希望有一天和{{trigger2}}、{{trigger3}}，{{trigger4}}，{{trigger5}}，{{trigger7}}一起去中国。（想去的城市：长沙、南京、洛阳、西安、大同和北京）",
        "希望能学会班卓琴。（{{trigger6}}）",
        "希望{{trigger9}}，去见朋友",
        "尽可能多地{{trigger8}}",
        "2026",
        "成功减肥",
        "成功考取驾照",
        "希望有一天能拥有两个孩子（我目前和丈夫养了四只猫）",
        "退休后能成为一名专门缝制娃娃的裁缝，（不过还得再努力工作14年才能实现这个心愿）",
        "让你的脸上露出微笑",
        "希望能去看大海"
      ],

      annotationsEn: [
        " ",
        " ",
        " ",
        " ",
        " ",
        "(A drop of red watercolor lands on the paper)",
        "(The cotton-blend paper soaks up the liquid)",
        "(It bleeds and spreads softly)",
        " ",
        "(An envelope appears)",
        "(Warm Reminder: Disinfect the outer packaging and contents of international postal items and express parcels, and take enhanced personal protective measures.)",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "(Glances at the cherry blossom watercolor on the wall, sent by a Japanese friend)",
        " ",
        " ",
        "(Printed item)",
        "(Crossed out)",
        " ",
        " ",
        " ",
        " "
      ],

      contentEn: [
        "Plan",
        "2020",
        "Master the skill to play the piano, (and continue to practice).",
        "Start learning Japanese with Duolingo (and then maybe challenge Chinese).",
        "2021",
        "Start making postcards with watercolors, and draw postcards by hand to send to others.",
        "2022",
        "When the pandemic is over, prepare to travel.",
        "2023",
        "Plan a travel to Korea with my mother, (87 y.o). (P. S. We had lived in Seoul in 1980, because of my father's work. Visiting Korea again was her dream.)",
        "Travel to Namibia (one of my “bucket list”)",
        "2024",
        "I want to {{trigger1}}.",
        "Hope to learn playing bagpipe.",
        "I really want to learn to draw, but I don't have time for it :)",
        "2025",
        "Want to dedicate more time doing this hobbie ( of crocheting amigurumi dolls and toys)",
        "Hope to go to China one day with {{trigger2}}, {{trigger3}}, {{trigger4}}, {{trigger5}}, and {{trigger7}}. (Cities to visit: Changsha, Nanjing, Luoyang, Xi'an, Datong, Beijing).",
        "Hope to learn the banjo. ({{trigger6}}).",
        "Hope my friend {{trigger9}}.",
        "Hope to {{trigger8}}.",
        "2026",
        "Successfully lose weight..",
        "Successfully get a driver's license.",
        "We have four cats and hope someday we'll have two kids :)",
        "Be a doll tailor when retired. (But I have to work another 14 years)",
        "Hope to put a smile on your face",
        "I also dream to see the ocean"
      ]
  },

 "P": {
      titleZh: "邮递员",
      meta: "Postman",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/P/1b.JPG",
            zh: {
              text: "叫“那位老爸”的博主", 
              tooltip: "-9°C，YouTube - 那位老爸（That Dad Guy），你好，我是一名邮递员，我经营这个 YouTube 频道是为了乐趣。新年快乐。罗布" 
            },
            en: {
              text: "the blogger called \"That Dad Guy\"",
              tooltip: "-9°C, YouTube - That Dad Guy, Hello, I work as a mailman and I have my YouTube channel for fun. Happy New Year. Rob"
            }
          },

          "trigger2": {
            bg: "postcardforscript/P/2b.JPG",
            zh: {
              text: "信箱", 
              tooltip: "来自美国阿拉巴马州的问候。愿你的信箱里永远装满来自世界各地的精美明信片。—— 休（文森特·梵高（荷兰，1853-1890）《邮差鲁林肖像》，1888... 底特律美术馆）" 
            },
            en: {
              text: "mailbox",
              tooltip: "Greetings from Alabama, USA May your mailbox always be filled with great cards from all over the world. —— Sue（Vincent van Gogh (Dutch, 1853-1890) Portrait of Postman Roulin, 1888... The Detroit Institute of Arts）"
            }
          },

          "trigger3": {
            bg: "postcardforscript/P/3b.JPG",
            zh: {
              text: "周圍不同的郵局", 
              tooltip: "来自德国北部不来梅的诚挚问候。我叫弗兰克，今年 76 岁。我是一名退休的邮政局长。祝你一切顺利，度过美好的一天。弗兰克" 
            },
            en: {
              text: "some of the different post offices",
              tooltip: "many greetings from Bremen in Northern Germany. My name is Frank and i am 76 years old. I'm a retired postmaster. Best wishes to you and have a nice day. Frank"
            }
          }
      },

      annotationsZh: [
        "（打开油管网站）",
        "（字幕文本）",
        "（搜索{{trigger1}}）",
        "（起床）",
        "（换好衣服，准备上班）",
        "（打开手机相机）",
        "（欢迎回到《那位老爸博主第 3 集》）",
        "（“你好，我在加拿大邮政工作。今天我將向大家展示我是如何工作的，以及我的工作內容，讓大家稍微了解一下加拿大郵政的幕後生活。”）",
        "（一段不停息的背景声音）",
        "（路上）",
        "（声音低低沉沉）",
        "（汽车来来往往）",
        "（今天是个比较轻松的日子。）",
        "（在以后的视频里，我会展示給你看{{trigger3}}）",
        "（希望你喜歡這段視頻。如果你喜歡，請點讚、評論並豎起大拇指。請確保打開通知，以便觀看更多其他視頻。我們下次再見，拜拜。）"
      ],

      contentZh: [
        "噜 ——马达声。",
        "通叭 梆 ——开关门声。",
        "啾咿 啾咿 ——啾咿扫描声。",
        "嘶 ——呼吸声。",
        "嘀嘀嘀嘀 ———确认包裹信息声。",
        "嗒咔 嗒咔 ——脚步声。",
        "哒 隆 ——将钥匙插入{{trigger2}}。",
        "克嘞 克嘞 佩克 克诶 普特 普咔 特普 ——将报纸折叠扔进信箱。",
        "噜噜噜 ——马达声。",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
      ],

      annotationsEn: [
        "(Opening YouTube)",
        "(Subtitle text)",
        "(Search for {{trigger1}})",
        "(Waking up)",
        "(Changing clothes, getting ready for work)",
        "(Turning on phone camera)",
        "(Welcome back to Episode 3 of That Dad Guy)",
        "(\"Hello, I work at Canada Post. Today I’m going to show you my daily work routine and job duties, letting you get a little glimpse of life behind the scenes at Canada Post.\")",
        "(Continuous background ambient sound)",
        "(On the road)",
        "(Low and muffled sounds)",
        "(Cars coming and going)",
        "(\"It’s a pretty relaxed day today.\")",
        "(\"Maybe in a later video, I'll show you {{trigger3}}\")",
        "(\"So I hope you enjoyed this video! And if you did, like, comment, thumbs up. Make sure your notifications are on for other videos and we'll see you later. Bye you.\")"
      ],

      contentEn: [
        "\"rrr……\" — Engine rumble.",
        "\"tumba ba- umf\" — Car doors opening and closing.",
        "\"Tuii tuii tuii tuii\" — Scanning beeps.",
        "\"Hiss\" — Breathing sounds.",
        "\"Tee tee tee tee\" — Verifying package information.",
        "\"tack tack tack\" — Footsteps.",
        "\"tah trum track\" — Inserting the key into the {{trigger2}}.",
        "\"kre kre pek kre e pte puc te puk\" — Folding newspapers and tossing them into mailboxes.",
        "\"rrr……\" — Engine noise.",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
      ]
  },

  "Q": {
      titleZh: "安静的生活",
      meta: "Quiet Life",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/Q/1b.JPG",
            zh: {
              text: "我们已经收完了干草，眼下的生活十分平静", 
              tooltip: "送上来自德国北部的秋日问候。我住在一座农场，身边有许多小动物相伴。眼下周遭十分安静，干草收割工作已经全部完成。我们很快就要动身前往瑞典度假了。万事顺意。卡琳娜。" 
            },
            en: {
              text: "We've finished the hay harvest. It's quiet right now",
              tooltip: "I send you autumnal greetings from northern Germany. I live on a farm with lots of animals. It's quiet right now. We've finished the hay harvest. We're going on vacation to Sweden soon. All the best, Carina"
            }
          },

          "trigger2": {
            bg: "postcardforscript/Q/2b.JPG",
            zh: {
              text: "他每天都会去朋友的农场喂一只流浪猫", 
              tooltip: "我现在就在明信片画面里的这栋建筑中（并非礼拜堂）。这里是一处静修休养中心，我所在的内布拉斯加州拼布手工社团，每年都会在此聚会两次。我正在慢慢补上明信片的寄送进度，生活轻松又惬意。祝你夏日愉快。来自美国中部爱荷华州安克尼市的问候。爱荷华州人口三百多万，玉米产量位居全美首位。我们住在城郊，毗邻一座林木环绕的优美湖泊，生活十分惬意。我最近彻底迷上了复古手帐创作，我的丈夫每天都会去朋友的农场投喂一只流浪猫。步入晚年，我们过着宁静平淡的生活。本地意大利裔居民较多，也因此有许多口味绝佳的意大利餐厅。愿你平安康健，一切安好。祝好。莎伦。" 
            },
            en: {
              text: "my husband goes out everyday to feed a feral cat on a friend's farm",
              tooltip: "I am at the building which shown on this card. (Not in the chapel) It is a retreat center & my quilt group from Nebraska meets here 2 times a year. I am getting caught up on my Postcards :) We have fun :) Have a nice summer. Hello from Ankeny, Iowa in central US. Iowa has a population of 3+ million and we grow the most corn in the US. We are lucky to live on the edge of town near a pretty lake surrounded by woods. I have fallen down the Junk Journal rabbit hole and my husband goes out everyday to feed a feral cat on a friend's farm. We live a pretty quiet life in our old age. Our area has a relatively large Italian population which provides very good Italian restaurants. I hope you are well and safe. Cheers. Sharon (hrist the King Chapel / Benedictine Mission House, Schuyler, NE 68661。)"
            }
          },

          "trigger3": {
            bg: "postcardforscript/Q/3b.JPG",
            zh: {
              text: "维姆·文德斯导演的《完美的日子》。这是一部非常舒缓安静的电影，但对我来说很有趣，因为它展示了日本那样截然不同的世界，我还从未去过亚洲", 
              tooltip: "我最近观看的影片是维姆・文德斯的《完美的日子》。这是一部氛围沉静的电影，能借此窥见日本截然不同的风土，于我而言格外有趣。我从未去过亚洲。致以美好祝愿。达格玛。" 
            },
            en: {
              text: "Directed by Wim Wenders, the Last film I saw was \"Perfect days\". A very quiet film, but very interesting for me to see this different world in Japan. I've never been to Asia",
              tooltip: "Last film I saw was \"Perfect day\" by Wim Wenders. A very quiet film, but interesting for me to see this different world in Japan. I've never been to Asia. Best wishes Dagmar. (CARL SPITZWEG (1808–1885) Gefährliche Passage)"
            }
          }
      },

      annotationsZh: [
        "（右手无意识地抠弄着沙发靠垫边缘的一根脱线）",
        "（呼吸）",
        "（昏暗的光线）",
        "（安静，无声）",
        "（窗外的鸟鸣声）",
        "（阳光穿过树叶缝隙产生的光影）（帕蒂史密斯的音乐）（涂掉）",
        "（卢·里德的音乐，完美的一天）",
        "（这首歌在Spotify上有吗？）",
        "（灯亮了）",
        "（这真是完美的一天）",
        "（在公园里喝着桑格利亚汽酒）",
        "（天色渐暗时，我们就回家）",
        "（这真是完美的一天）",
        "（在动物园给动物喂食）",
        "（之后再去看场电影，然后回家）",
        "（噢，如此完美的一天）",
        "（我很高兴和你共度）",
        "（噢，多么完美的一天）",
        "（你让我难以释怀）",
        "（你让我难以释怀）",
        "（这真是完美的一天）",
        "（所有烦恼都抛在脑后）",
        "（周末我们自由自在）",
        "（多么快乐）",
        "（这真是完美的一天）",
        "（你让我忘却了自我）",
        "（我以为自己变成了另一个人）",
        "（一个更好的人）",
        "（噢，如此完美的一天）",
        "（我很高兴和你共度）",
        "（噢，多么完美的一天）",
        "（你让我难以释怀）",
        "（你让我难以释怀）"
      ],

      contentZh: [
        "昨天是周五，{{trigger1}}。晚上我丈夫出门了，{{trigger2}}，我独自在家。我看了一部一直想看却一直没有时间看的电影。是{{trigger3}}。在亚洲，有多少人会像电影中的主角那样生活呢？会有人认可这种生活吗？如果他恰恰选择的是在电影、书籍和音乐中聊以此生，而他又热爱着这样的生活，那么这就是最完美的日子。",
        "我想到在我的家乡科隆，有一家每周日会放映老电影的电影院。小城生活平静，而电影院就是我的整个世界。小时候我几乎每周都去，我在那看了很多电影，仿佛我的日子就是由一个个百无聊赖的周日堆砌而成，而我的记忆就由一部部毫不相干的电影情节拼凑，而在银幕外面的时间，好像都不曾存在过。",
        "那段时间，每当我走出电影院，觉得自己好像是生活在电影里的人，只是不小心跑出来了。我的生活会结束，但电影永不结束。后来我才知道，那正是伍迪·艾伦的《开罗紫玫瑰》拍的内容，那时候我还不懂。但那种感觉只持续了一秒钟，甚至都不到。然后我就走了，任凭路灯把我的影子拉长，而日子也就这样被电影拉长。",
        
      ],

      annotationsEn: [
        "(Right hand picks absently at a loose thread fringing the sofa cushion)",
        "(Breathing)",
        "(Dim light)",
        "(Silence, with no voice)",
        "(The chirping of birds outside the window)",
        "(The dappled light filtering through the leaves) (Patti Smith's music) (Crossed out)",
        "(Lou Reed's music, \"Perfect Day\")",
        "(Is this song available on Spotify?)",
        "(The light turns on)",
        "(Just a perfect day)",
        "(Drink sangria in the park)",
        "(And then later, when it gets dark, we'll go home)",
        "(Just a perfect day)",
        "(Feed animals in the zoo)",
        "(Then later a movie too, and then home)",
        "(Oh, it's such a perfect day)",
        "(I'm glad I spent it with you)",
        "(Oh, such a perfect day)",
        "(You just keep me hanging on)",
        "(You just keep me hanging on)",
        "(Just a perfect day)",
        "(Problems all left alone)",
        "(Weekenders on our own)",
        "(It's such fun)",
        "(Just a perfect day)",
        "(You made me forget myself)",
        "(I thought I was someone else)",
        "(Someone good)",
        "(Oh, it's such a perfect day)",
        "(I'm glad I spent it with you)",
        "(Oh, such a perfect day)",
        "(You just keep me hanging on)",
        "(You just keep me hanging on)"
      ],

      contentEn: [
        "Yesterday was Friday. {{trigger1}}. My husband went out in the evening; {{trigger2}}, and I was home alone. I watched a movie I had always wanted to see but never had the time for. {{trigger3}}. In Asia, how many people would live like the protagonist in the movie? Would anyone approve of such a life? If he simply chooses to spend his life immersed in movies, books, and music, and he loves such a life, then these are the perfect days.",
        "It made me think that in my hometown Cologne we have a little cinema in which you can watch old movies every Sunday. Small town life was peaceful, and the cinema was my whole world. When I was young, I went there almost every week and watched a lot of movies. It was as if my days were piled up by one boring Sunday after another, and my memories were pieced together by completely unrelated movie plots, while the time outside the silver screen seemed as if it had never existed.",
        "During that time, whenever I walked out of the cinema, I felt as if I were a person living in a movie who had just accidentally escaped. My life will end, but movies never end. Later I learned that this was exactly what Woody Allen's The Purple Rose of Cairo was about, though I didn't understand it back then. But that feeling only lasted for a second, or even less. Then I walked away, letting the streetlights stretch my shadow, and my days were stretched by the movies just like that.",
        
      ]
  },

 "R": {
      titleZh: "给我推荐本书读读吧",
      meta: "Recommend Me a Book to Read",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/R/1b.JPG",
            zh: {
              text: "《最后的独角兽》", 
              tooltip: "我很佩服你会画画 —— 我很喜欢画画，却不擅长，我会继续努力的！我很喜欢中文，一直想学。还有正宗的中国菜（在中国吃的，不是美国的中餐）也太好吃了！书籍方面，我推荐彼得・S・毕格的 《最后的独角兽》，以及拉维・阿贾伊・琼斯的《专业麻烦制造者》。音乐方面，我喜欢阿卢娜乔治和斯科特。祝好，梅根。" 
            },
            en: {
              text: "\"The Last Unicorn\"",
              tooltip: "I admire that you can draw. I love it but I'm not good at it. I'll keep trying! I love Chinese language - I want to study it. And real Chinese food (in china, not US.) is amazing! For books, I recommend \"The Last Unicorn\" by Peter S. Beagle and \"Professional Troublemaker\" by Luvvie Ajayi Jones. For music, I love AlunaGeorge and Skott. ↖(artists)↗ Best wishesMegan."
            }
          },

          "trigger2": {
            bg: "postcardforscript/R/2b.JPG",
            zh: {
              text: "萨莉·鲁尼的《美丽的世界，你在哪里》", 
              tooltip: "你好，！我叫叶卡捷琳娜，来自乌法。这座城市是巴什科尔托斯坦共和国的首府，我们地区以民族文化、特色美食和迷人的自然风光闻名。我也很喜欢阅读和看电影！我最近正在读我最爱的当代作家之一萨莉・鲁尼的 《美丽的世界，你在哪里》，强烈推荐！" 
            },
            en: {
              text: "book by Sally Rooney, called \"Beautiful World, Where Are You\"",
              tooltip: "Hello! My name is Ekaterina, I'm from Ufa. My city is the capital of the Republic of Bashkortostan. My region is known for its national culture, food and bewitching nature. I also love to read and watch movies! I'm currently reading a book by one of my favorite contemporary writers, Sally Rooney, called \"Beautiful World, Where Are You\". Highly recommended!"
            }
          },

          "trigger3": {
            bg: "postcardforscript/R/3b.JPG",
            zh: {
              text: "露西・斯科尔", 
              tooltip: "我叫贝娅塔，来自一个乡村小镇。我也喜欢阅读，推荐你读露西・斯科尔的书，相信你能找到喜欢的内容。这张明信片的创作灵感来自一首歌，你可以扫描二维码收听。希望你喜欢。" 
            },
            en: {
              text: "Lucy Score",
              tooltip: "My name is Beata and I come from a small rural town. I like reading too. I recommend you the books by Lucy Score. I think you can find something for yourself there. As for this card, the author was inspired by a song that you can listen to by scanning the QR code. Hope you like it."
            }
          },

          "trigger4": {
            bg: "postcardforscript/R/4b.JPG",
            zh: {
              text: "查理・唐利亚", 
              tooltip: "我叫费尔南达，是一名经济学家，热爱旅行。我在 2008 年去过中国，非常喜欢我到访过的城市。我也很爱阅读，推荐作家查理・唐利亚的作品。祝你一切顺利！" 
            },
            en: {
              text: "Charlie Donlea",
              tooltip: "My name is FERNANDA. I'm an economist and I love to travel. I had visited China in 2008. I enjoyed a lot the cities I had been. I love to read. One of the authors I recomend is Charlie Donlea. Wish you all the best!"
            }
          },

          "trigger5": {
            bg: "postcardforscript/R/5b.JPG",
            zh: {
              text: "艾丽芙·沙法克的《失踪树木的岛屿》。我还挺喜欢她的书，它的视线在塞浦路斯和伦敦之间穿梭，而且有一个章节是由一棵无花果树来作第一人称视角写的。”一棵树的视角？其实也挺常见的，算不得特别。“或者她的《爱的十四条法则》", 
              tooltip: "我很喜欢阅读，也很乐意推荐书籍。我最近读了艾丽芙・沙法克的 《失踪的树木岛屿》，非常喜欢，故事动人，文笔也很好。我现在收藏了她好几本书，也读了《爱的四十条法则》，同样十分精彩。祝好。马约琳。" 
            },
            en: {
              text: "The islands of Missing trees, by Elif Shafak. I loved it, its perspective shuttles between Cyprus and London, and there is a chapter written from the first-person point of view of a fig tree.\" A tree's perspective? Actually, it's quite common, not particularly special. \"Or The 40 rules of love too",
              tooltip: "I love to read and I'm always happy to recommend a book. I recently read The islands of Missing trees, by Elif Shafak, and I loved it, it's such a beautiful story and very well-written. I now have several of her books and read The 40 rules of love too, also beautiful. all the best, Marjolein"
            }
          },

          "trigger6": {
            bg: "postcardforscript/R/6b.JPG",
            zh: {
              text: "罗莎蒙德·拉普顿的《寂静的质量》", 
              tooltip: "你好，我叫玛西娅，住在波罗的海附近的小镇瓦迪斯瓦沃沃。我也喜欢阅读、看电影和剧集。书籍推荐：T. 金费舍 《荨麻与骨》，凯瑟琳・阿登 《熊与夜莺》，罗莎蒙德・勒普顿 《寂静的重量》。希望你会找来读一读，玛西娅。" 
            },
            en: {
              text: "\"The Quality of Silence\" by Rosamund Lupton",
              tooltip: "Hi I'm Marysia. I live in Władysławowo, a small town near the Baltic Sea. I also love reading and watching films and series. Some books recommendations: \"Nettle and Bone\" by T. Kingfisher \"The Bear and the Nightingale\" by Katherine Arden, \"The Quality of Silence\" by Rosamund Lupton. Hope you'll give some a try Marysia."
            }
          }
      },

      annotationsZh: [
        "（沉重的脚步声）",
        "（踩过门前的落叶沙沙作响）",
        " ",
        " ",
        "（手指拂过一排书脊）",
        "（从一座摇摇欲坠的书山中精准地抽出一本）",
        " ",
        " ",
        "（听不清楚……）",
        "（身后传来其他人的低语）",
        " ",
        " ",
        "（摆了摆手）",
        "（视线继续在周边探索）",
        " ",
        " ",
        " ",
        "（露出心照心照不宣的微笑）",
        " ",
        " ",
        "（轻叹口气）",
        "（挑眉）",
        " ",
        "（指尖摩挲着书名）",
        " ",
        "（踩着落叶，沙沙响）"
      ],

      contentZh: [
        " ",
        " ",
        "我推开书店的门，走进这家气味混合着发霉纸浆与干燥灰尘的二手书店。我也能感觉到好多读者静静翻书时的呼吸，但现在这呼吸少了很多。店主跟我相识，便麻烦他向我推荐一些新货。",
        "“别客气，我总是很高兴能推荐一本书。”店主说。",
        " ",
        " ",
        "“{{trigger6}}。极夜的阿拉斯加，一个失聪女孩的视角。”店主说。",
        "有趣的通感。但这也许太冷了。",
        " ",
        " ",
        "“{{trigger5}}哦。”",
        "鲁米。这个名字忽然涌上心头。喜欢看阿巴斯的电影那会儿读了很多鲁米，可以继续读，但不是这会儿。",
        " ",
        " ",
        "“{{trigger4}}的悬疑呢？或者{{trigger3}}。”",
        "我不喜欢结构太硬的书。",
        "“《寂静的重量》？但对你来说会不会太畅销啦？”",
        " ",
        "是有点。",
        "“要不返璞归真，看点童话吧。{{trigger1}}如何？”",
        " ",
        " ",
        "我没太仔细听清店主说的话，因为我的视线被一本天蓝色的书吸引。顺着书脊抽出来一看，是{{trigger2}}。拧巴。我不喜欢她。",
        " ",
        "我耸耸肩，这些书我没一本喜欢。我向店主道了声谢，推门走出去。门轴依旧发出悠长的吱呀声，外面的风轻轻吹进来。也许下次来的时候，会有我喜欢的书出现。不过没有出现也没关系。",
        " "
      ],

      annotationsEn: [
        "(Heavy footsteps)",
        "(Rustling of fallen leaves stepped on in front of the door)",
        " ",
        " ",
        "(Fingers brushing across a row of book spines)",
        "(Accurately pulling one out from a tottering mountain of books)",
        " ",
        " ",
        "(Listen Unclear...)",
        "(Whispers of other people coming from behind)",
        " ",
        " ",
        "(Waved hand)",
        "(Gaze continues to explore the surroundings)",
        " ",
        " ",
        " ",
        "(Showing a tacit smile)",
        " ",
        " ",
        "(Sighs lightly)",
        "(Raises eyebrows)",
        " ",
        "(Fingertips rubbing the book title)",
        " ",
        "(Stepping on fallen leaves, rustling)"
      ],

      contentEn: [
        " ",
        " ",
        "I pushed open the door of the bookstore and walked into this secondhand bookstore with a mixed smell of moldy pulp and dry dust. I could also feel the breathing of many readers quietly turning pages, but now this breathing was much less. The owner knew me, so I troubled him to recommend some new arrivals.",
        "\"You're welcome, I'm always happy to recommend a book,\" the owner said.",
        " ",
        " ",
        "\"{{trigger6}},\" the owner said. \"The polar night of Alaska, from the perspective of a deaf girl.\"",
        "Interesting synesthesia. But perhaps this is too cold.",
        " ",
        " ",
        "\"{{trigger5}} too. It talks a lot about Rumi.\"",
        "Rumi. This name suddenly welled up in my heart. When I liked watching Abbas's movies, I read a lot of Rumi. I can continue reading it, but not right now.",
        " ",
        " ",
        "\"What about mysteries by {{trigger4}}? Or {{trigger3}}.\"",
        "I don't like books with too rigid a structure.",
        "\"The Weight of Silence? But wouldn't it be too bestselling for you?\"",
        " ",
        "It is a bit.",
        "\"How about getting back to basics and reading some fairy tales. What about {{trigger1}}?\"",
        " ",
        " ",
        "I didn't listen very carefully to what the owner said, because my gaze was attracted by a sky-blue book. Pulling it out along the spine to take a look, it was a {{trigger2}}. Awkward. I don't like her.",
        " ",
        "I shrugged my shoulders, I don't like a single one of these books. I thanked the owner and pushed the door to go out. The door hinge still let out a long creak, and the wind outside blew in gently. Perhaps next time I come, there will be a book I like. But it doesn't matter if there isn't.",
        " "
      ]
  },

"S": {
      titleZh: "舞台",
      meta: "Stage",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/S/1b.JPG",
            zh: {
              text: "塞维利亚的理发师", 
              tooltip: "我是克里斯蒂安，来自维也纳。这张照片是维也纳国家歌剧院的观众厅。为遮盖铁幕（该表述如今已不再被视作政治正确）上的图案，每年都会悬挂一幅大型现代艺术作品复制品将其覆盖。上个月我在这里观看了焦阿基诺・罗西尼的《塞维利亚的理发师》。祝好，克里斯蒂安" 
            },
            en: {
              text: "IL BARBIERE DI SIVIGLIA",
              tooltip: "My name is Christian and I'm from Vienna. This is a photo of the auditorium of the Vienna State Opera. To cover the motif on the iron curtain (a term no longer considered politically correct), it is draped each year with a large-scale reproduction of a modern artwork. Last month I saw Il Barbiere di Siviglia by Gioachino Rossini there. Best wishes, Christian"
            }
          },

          "trigger2": {
            bg: "postcardforscript/S/1b.JPG",
            zh: {
              text: "维也纳国家歌剧院", 
              tooltip: "我是克里斯蒂安，来自维也纳。这张照片是维也纳国家歌剧院的观众厅。为遮盖铁幕（该表述如今已不再被视作政治正确）上的图案，每年都会悬挂一幅大型现代艺术作品复制品将其覆盖。上个月我在这里观看了焦阿基诺・罗西尼的《塞维利亚的理发师》。祝好，克里斯蒂安" 
            },
            en: {
              text: "VIENNA STATE OPERA",
              tooltip: "My name is Christian and I'm from Vienna. This is a photo of the auditorium of the Vienna State Opera. To cover the motif on the iron curtain (a term no longer considered politically correct), it is draped each year with a large-scale reproduction of a modern artwork. Last month I saw Il Barbiere di Siviglia by Gioachino Rossini there. Best wishes, Christian"
            }
          },

          "trigger3": {
            bg: "postcardforscript/S/1b.JPG",
            zh: {
              text: "铁幕前（该表述如今已不再被视作政治正确）", 
              tooltip: "我是克里斯蒂安，来自维也纳。这张照片是维也纳国家歌剧院的观众厅。为遮盖铁幕（该表述如今已不再被视作政治正确）上的图案，每年都会悬挂一幅大型现代艺术作品复制品将其覆盖。上个月我在这里观看了焦阿基诺・罗西尼的《塞维利亚的理发师》。祝好，克里斯蒂安" 
            },
            en: {
              text: "in front of the IRON CURTAIN (WHICH ISN'T POLITICALLY CORRECT ANY MORE)",
              tooltip: "My name is Christian and I'm from Vienna. This is a photo of the auditorium of the Vienna State Opera. To cover the motif on the iron curtain (a term no longer considered politically correct), it is draped each year with a large-scale reproduction of a modern artwork. Last month I saw Il Barbiere di Siviglia by Gioachino Rossini there. Best wishes, Christian"
            }
          }
      },

      annotationsZh: [
        "（2张表演海报）",
     
      ],

      contentZh: [
        "剧目：{{trigger1}}。",
        "作者：焦阿基诺·罗西尼。",
        "形式：二幕喜歌剧 。",
        "地点：{{trigger2}} 。",
        "时间：约 3 个小时（包含中场休息）。",
        "人物： 渴望爱情的年轻伯爵； 被囚禁的美丽少女； 狡黠且无处不在的理发师费加罗； 贪婪而滑稽的老监护人。",
        "经典唱段：费加罗的卡瓦提那：“快给大忙人让路”，罗西娜的花腔卡瓦提那：“那个声音在我的心头回荡”，第二幕的暴风雨音乐。",
        "剧情：发生于阳光明媚的十八世纪西班牙街头。阿尔玛维瓦伯爵爱慕罗西娜，罗西娜也倾心于他。可她的监护人唐・巴托洛一心想自己娶她为妻，对她严加看管、监视严密。擅长搬弄是非、暗中谋划诡计的唐・巴西利奥，成了巴托洛的帮凶。足智多谋的理发师费加罗出手相助，他巧用计谋与伪装，帮阿尔玛维瓦见到了罗西娜。尽管一路障碍重重、闹出无数滑稽的纠葛，这对恋人最终还是成功骗过了巴托洛，如愿相守。",
        "剧目：索拉里斯。",
        "作者：安塞姆·基弗。",
        "形式：油画。",
        "地点：{{trigger2}} ，{{trigger3}}。",
        "时间：2023.11-2024.6。",
        "人物：一片拥有心智的异星之海； 无法被解读的宇宙空洞； 炼金术的残骸与历史的废墟； 无名的、被压迫的潜意识。",
        "经典唱段：基弗的作品《索拉里斯》，取材于波兰作家斯坦尼斯瓦夫・莱姆 1961 年出版的同名科幻小说。小说描绘了一颗遥远的外星星球，以及盘踞整颗星球的神秘生命体。",
        "剧情：在维也纳国家歌剧院第26届“安全幕帘”展览中，评审团选定了艺术家安塞尔姆·基弗的作品。他的作品《索拉里斯（献给斯坦尼斯瓦夫·莱姆）》将在演出开始前、中场休息和演出结束后向观众展出。"
      ],

      annotationsEn: [
        "(Performance Poster)",
      
      ],

      contentEn: [
        "Title: {{trigger1}}",
        "Author: GIOACHINO ROSSINI",
        "Form: Two-act comic opera",
        "Location: {{trigger2}}",
        "Time: About 3 hours (including intermission).",
        "Characters: A young count longing for love; a beautiful imprisoned maiden; the cunning and omnipresent barber Figaro; a greedy and comical old guardian.",
        "Classic Arias: Figaro's Cavatina: \"Largo al factotum\", Rosina's Coloratura cavatina: \"Una Voce Poco fa\", Thunderstorm music from the second act.",
        "Plot: Takes place on the sunny streets of 18th-century Spain. Count Almaviva loves Rosina, and Rosina also falls for him. However, her guardian Don Bartolo wants to marry her himself, keeping a strict and close watch over her. Don Basilio, who is good at gossiping and secretly plotting tricks, becomes Bartolo's accomplice. The resourceful barber Figaro comes to the rescue; using clever schemes and disguises, he helps Almaviva meet Rosina. Despite numerous obstacles along the way and countless comical entanglements, the lovers ultimately succeed in deceiving Bartolo and stay together as they wished.",
        "Title: Solaris",
        "Author: Anselm Kiefer",
        "Form: Oil painting",
        "Location: {{trigger2}}, {{trigger3}}",
        "Time: 2023.11-2024.6",
        "Characters: A sentient alien sea; an unreadable cosmic void; the remnants of alchemy and the ruins of history; the nameless, oppressed subconscious.",
        "Classic Arias: Kiefer's work »Solaris« refers to a science fiction novel of the same name by the Polish writer Stanisław Lem from 1961, which tells of a distant alien planet and the planet-encompassing entity that inhabits it.",
        "Plot: For the 26th \"Safety Curtain\" at the Wiener Staatsoper, the jury (Daniel Birnbaum, Bice Curiger and Hans-Ulrich Obrist) selected the artist Anselm Kiefer. His work \"Solaris (for Stanislaw Lem)\" can be seen by the audience from 8 November 2023 until the end of June 2024 before the start of the performances, during the intermissions and at the end of the performances. \"Safety Curtain\" is an exhibition series conceived by museum in progress that has been transforming the safety curtain of the Vienna State Opera's main stage into an exhibition space for contemporary art since 1998."
      ]
  },

 "T": {
      titleZh: "谢谢你",
      meta: "Thank You",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {},

      annotationsZh: [
        "（视线回到P：Postman）"
      ],

      contentZh: [
        "谢谢你的：",
        "可爱的圣诞卡片、",
        "精美的艺术卡片、",
        "富士山明信片、",
        "可爱的猫咪卡片、",
        "美丽的樱花卡片、",
        "可爱的兔子卡片、",
        "谢谢邮递员！",
        "谢谢邮递员！",
        "谢谢邮递员！",
        "谢谢邮递员！",
        "感谢您支持大英图书馆。"
      ],

      annotationsEn: [
        "(Scene transitions back to P: Postman)"
      ],

      contentEn: [
        "Thank you for:",
        "Thank you for the cute X-MAS card,",
        "Thank you for the nice art cards,",
        "Thank you for the Mt. Fuji card!",
        "Thank you for the cute cat card.",
        "Thank you for the beautiful Sakura Card,",
        "Thank you for the cute rabbit card,",
        "Thank you Postman!",
        "THANK YOU Postman!",
        "Thank you POSTMAN!",
        "THANK YOU MAIL CARRIER!",
        "Thank you for supporting the British Library."
      ]
  },

  "U": {
      titleZh: "独一无二的卡片",
      meta: "Unique Card",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/U/1b.JPG",
            zh: {
              text: "超 4300 万游客", 
              tooltip: "这是一套成对的明信片，我在都柏林的切斯特・比蒂博物馆买到的！样式十分特别，我之前从没见过。我和汤姆住在 “世界娱乐之都”，每年有超 4300 万游客来到这座梦幻之城！这里也有充满烟火气的日常一面。我们很享受退休后的度假社区生活，这里有各式各样的社团和休闲设施。2015 年我去过北京，参观了许多历史古迹！之后我还飞往平壤，在朝鲜待了一周，非常奇妙！亲身踏足某地的感受无可替代，那才是完整的体验。梅格。（配刺绣丝绸短外套的绉纱连衣裙，《仕女与时尚杂志》，夏尔・马丁，1913 年，巴黎）" 
            },
            en: {
              text: "43+ million",
              tooltip: "These cards go together. I got them at the Chester Beatty Museum in Dublin! They are quite unique - I've not seen these before! Tom & I live in the \"Entertainment Capital of the World.\" 43+ million visit this magical city each year! There's also a \"normal\" city, too. We enjoy our retirement resort with its many clubs and amenities. I visited Beijing in 2015, & saw many historic sites! Then, I flew to Pyongyang & spent a week in North Korea. Fascinating! There's nothing like being \"on the ground\" somewhere. It's the full experience! Happy Postcrossing! Meg.（Crepe de chine dress with embroidered silk jacket Journal des Dames et des Modes Charles Martin 1913, Paris CBL Web 0858 www.chesterbeatty.ie）"
            }
          },

          "trigger2": {
            bg: "postcardforscript/U/2b.JPG",
            zh: {
              text: "这款特色明信片属于我们的历史系列，旨在帮助你了解与领略美国首都及美国历史。如需了解协会会员及相关项目信息，可致信：美国…… 历史学会，马里兰大道东北段 200 号，华盛顿……，邮编 20002。它记录了1541 年，德・索托发现密西西比河，记录了埃尔南・科尔特斯抵达墨西哥及韦拉克鲁斯建城五百周年纪念", 
              tooltip: "来自欧洲小国荷兰的问候，它坐落于北海之滨。祝一切安好，照顾好自己也善待他人。亨妮。1541 年，德・索托发现密西西比河。画家威廉・H・鲍威尔描绘了埃尔南多・德・索托发现壮阔的 “众水之父” 密西西比河的场景。这幅作品与其他历史画作一同陈列在圆形大厅内，其丰富的动态与细节刻画尤为出众。画面中心是德・索托，印第安人在一旁惊叹观望。前景下方，历经战事的士兵正推来大炮安置就位；右下角，一位神父正在为十字架祈福。这幅画作于 1855 年 2 月 16 日最后一批入驻圆形大厅。这款特色明信片属于我们的历史系列，旨在帮助你了解与领略美国首都及美国历史。如需了解协会会员及相关项目信息，可致信：美国…… 历史学会，马里兰大道东北段 200 号，华盛顿……，邮编 20002。" 
            },
            en: {
              text: "This unique card is another in our series of historical ca... signed to help you appreciate and learn about your Capi... the history of the United States. For information about m... ship in the Society and its programs, write the U.S. ... Historical Society, 200 Maryland Ave., N.E., Washington... 20002. It records the \"DISCOVERY OF THE MISSISSIPPI / BY DE SOTO A.D. 1541\", and the commemoration of the \"V CENTENARIO LLEGADA DE HERNÁN CORTÉS A MÉXICO Y FUNDACIÓN DE LA CIUDAD DE VERACRUZ\"",
              tooltip: "Greetings out the Netherlands Europe, a small country at the Nord sea. Best wishing and take care of yourself and others Bye Hennie. DISCOVERY OF THE MISSISSIPPI / BY DE SOTO A.D. 1541 Artist William H. Powell portrays the discovery of the mighty Mississippi, the Father of Waters by Hernando De Soto. Taking its place with the other historical paintings in the Rotunda, it is especially notable for the great variations in activity and detail. De Soto occupies the center. Indians look on in wonderment. In lower foreground battle-weary soldiers push a cannon in place and in lower right foreground, a Priest blesses a Cross. The last of the Paintings to be placed in the Rotunda on February 16, 1855. This unique card is another in our series of historical ca... signed to help you appreciate and learn about your Capi... the history of the United States. For information about m... ship in the Society and its programs, write the U.S. ... Historical Society, 200 Maryland Ave., N.E., Washington... 20002."
            }
          },

          "trigger3": {
            bg: "postcardforscript/U/3b.JPG",
            zh: {
              text: "知道你有设计师的审美，", 
              tooltip: "知道你有设计师的审美，特意寄给你这张别致的明信片。画面图案取自日本鸭井公司的 MT 和纸胶带，被重新设计成了明信片样式。我想你会比其他人更懂得这些纹样的独特魅力。" 
            },
            en: {
              text: "knowing you have a designer's eye",
              tooltip: "I'm sending you this slightly quirky postcard, knowing you have a designer's eye. It features patterns from MT washi tape by Kamoi, transformed into a postcard design. I thought you might appreciate the unique charm of those motifs more than anyone eles.  from Wisteria."
            }
          },

          "trigger4": {
            bg: "postcardforscript/U/4b.JPG",
            zh: {
              text: "尽管我本人并不支持斗牛运动。", 
              tooltip: "你好，我叫玛丽亚，在巴塞罗那攻读医学专业。不过我来自西班牙南部，这里正是弗拉门戈的发源地。希望你喜欢这张明信片，它很特别，尽管我本人并不支持斗牛运动。我喜爱所有动物，养了两只金丝雀，分别叫梅尔乔和梅伦迪。爱你的，玛丽亚。（埃尔南・科尔特斯抵达墨西哥及韦拉克鲁斯建城五百周年纪念）" 
            },
            en: {
              text: "although I don't support bullfighting",
              tooltip: "¡Hola! My name is María and I study Medicine in Barcelona. However, I'm from the south of Spain where the flamenco (此词为蓝色) was born. I hope you like this postcard. It's very unique, although I don't support bullfighting. I love all kinds of animals. I own two canaries: Melchor and Melendi. Love, María（V CENTENARIO LLEGADA DE HERNÁN CORTÉS A MÉXICO Y FUNDACIÓN DE LA CIUDAD DE VERACRUZ）"
            }
          },

          "trigger5": {
            bg: "postcardforscript/U/5b.JPG",
            zh: {
              text: "目前正在澳大利亚探望女儿", 
              tooltip: "我是德国人，目前正在澳大利亚探望女儿。这是一个很棒的国家，有独特的动物和十分友善的人民，我太喜欢这里了！祝一切顺利。安吉拉。（2024 年 10 月 悉尼歌剧院 / 摄影：唐・阿诺德 / 盖蒂图片社。国王查尔斯三世与卡米拉王后投影影像 © 米莉・皮尔金顿 2024。悉尼歌剧院影像经悉尼歌剧院信托基金会授权使用 2025。感谢新南威尔士州州长府授权复刻悉尼歌剧院投影画面）" 
            },
            en: {
              text: "currently visiting my daughter in Australia",
              tooltip: "I am a german, currently visiting my daughter in Australia. It is a wonderful country with unique animals and very friendly people. I love it! All the best, Angela （Sydney Opera House, October 2024 / Photograph: Don Arnold/WireImage/Getty Images. Projected image of King Charles and Queen Camilla © Millie Pilkington 2024. Image of Sydney Opera House used with permission - Sydney Opera House Trust 2025. Thanks to the NSW Premier's Department for permission to reproduce the Sydney Opera House projection）"
            }
          },

          "trigger6": {
            bg: "postcardforscript/U/1b.JPG",
            zh: {
              text: "这是一套成对的明信片，", 
              tooltip: "这是一套成对的明信片，我在都柏林的切斯特・比蒂博物馆买到的！样式十分特别，我之前从没见过。我和汤姆住在 “世界娱乐之都”，每年有超 4300 万游客来到这座梦幻之城！这里也有充满烟火气的日常一面。我们很享受退休后的度假社区生活，这里有各式各样的社团和休闲设施。2015 年我去过北京，参观了许多历史古迹！之后我还飞往平壤，在朝鲜待了一周，非常奇妙！亲身踏足某地的感受无可替代，那才是完整的体验。梅格。（配刺绣丝绸短外套的绉纱连衣裙，《仕女与时尚杂志》，夏尔・马丁，1913 年，巴黎）" 
            },
            en: {
              text: "These cards go together",
              tooltip: "These cards go together. I got them at the Chester Beatty Museum in Dublin! They are quite unique - I've not seen these before! Tom & I live in the \"Entertainment Capital of the World.\" 43+ million visit this magical city each year! There's also a \"normal\" city, too. We enjoy our retirement resort with its many clubs and amenities. I visited Beijing in 2015, & saw many historic sites! Then, I flew to Pyongyang & spent a week in North Korea. Fascinating! There's nothing like being \"on the ground\" somewhere. It's the full experience! Happy Postcrossing! Meg.（Crepe de chine dress with embroidered silk jacket Journal des Dames et des Modes Charles Martin 1913, Paris CBL Web 0858 www.chesterbeatty.ie）"
            }
          }
      },

      annotationsZh: [
        "（独特明信片的宣言）",
        "（否则，就是一张普通的白纸。）"
      ],

      contentZh: [
        "在这个被{{trigger1}}游客和城市所包围的世界里，在这个充满疲惫的打工人、战争与神性祈福的宏大历史中，我们以此宣言，宣告一种微小、古怪却极具力量的媒介的诞生——",
        "独特明信片！",
        "但是，明信片千千万万，只有以下类型的明信片才能属于独特明信片的范畴，否则，就是一张普通的白纸。",
        "只有再现历史的明信片才是独特的",
        "{{trigger2}}",
        "只有带有设计师眼光的明信片才是独特的",
        "{{trigger3}}",
        "只有体现文化矛盾的明信片才是独特的",
        "{{trigger4}}",
        "只有展现没见过的东西的明信片才是独特的",
        "{{trigger5}}",
        "悉尼歌剧院影像经悉尼歌剧院信托基金会授权使用 2025。感谢新南威尔士州州长府授权复刻悉尼歌剧院投影画面",
        "只有能成对的明信片才是独特的",
        "{{trigger6}}"
      ],

      annotationsEn: [
        "(Manifesto of the unique postcard)",
        "(Otherwise, it is nothing but a plain blank sheet of paper.)"
      ],

      contentEn: [
        "In a world surrounded by {{trigger1}} tourists and cities, in this grand history full of exhausted workers, wars, and divine prayers, we hereby declare the birth of a tiny, bizarre, yet incredibly powerful medium— The Unique Card!",
        "However, among millions of postcards, only the following types fall into the category of the unique postcard; otherwise, it is just a piece of ordinary blank paper:",
        "Only postcards that reproduce history are unique.",
        "{{trigger2}}.",
        "Only postcards with a designer's eye are unique.",
        "\"{{trigger3}}.\"",
        "Only postcards that reflect cultural contradictions are unique.",
        "\"{{trigger4}}.\"",
        "Only postcards that show unseen things are unique",
        "\"{{trigger5}}.\"",
        "Sydney Opera House images used under license from the Sydney Opera House Trust 2025. Thanks to the Office of the Premier of New South Wales for authorizing the reproduction of the Sydney Opera House projection images.",
        "Only postcards that can be paired are unique",
        "\"{{trigger6}}.\""
      ]
  },

  "V": {
      titleZh: "文森特",
      meta: "Vincent",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/V/1b.JPG",
            zh: {
              text: "他出生在我家临近的一个小村庄", 
              tooltip: "我叫苏珊，来自荷兰。这张明信片是我最近去卢森堡时购入的，希望你喜欢！荷兰画家梵高出生在和我家相邻的村庄，是不是很妙？祝你拥有美好的一天！（贝尔特・泰斯，《选自：柏拉图追逐集体无意识》，拼贴作品，1987 年）" 
            },
            en: {
              text: "he was born in the village next to mine",
              tooltip: "My name is Suzanne I'm from the Netherlands. I picked up this card when I visited Luxembourg recently, I hope you'll like it! Dutch painter Vincent van Gogh was born in the village next to mine, cool Right? Have a nice day!（Bert Theis, Szene aus: Von Platon jagt das kollektive Unbewusste, collage 1987）"
            }
          },

          "trigger2": {
            bg: "postcardforscript/V/2b.JPG",
            zh: {
              text: "《雏菊与海葵花瓶》", 
              tooltip: "我叫莱拉，和两个女儿住在荷兰阿姆斯特丹附近的一座小村庄！画作者是文森特・梵高，著名的荷兰画家！致以温暖的祝福，莱拉。（文森特・梵高《雏菊与银莲花瓶》，1887 年。奥特洛库勒慕勒美术馆藏。亦收录于《梵高：画作全集》，本尼迪克特・塔森出版社）" 
            },
            en: {
              text: "Vase with Daisies and Anemones",
              tooltip: "My name is Laila and I live with my two daughters in a small village near Amsterdam in the Netherlands! The painter is Vincent v. Gogh, famous dutch painter! Warm wishes Laila（Vincent van Gogh: Vase with Daisies and Anemones, 1887 Vase mit Margeriten und Anemonen · Vase avec un bouquet de fleurs Otterlo, Rijksmuseum Kröller-Müller Also reproduced in Van Gogh. The Complete Paintings, Benedikt Taschen Verlag）"
            }
          },

          "trigger3": {
            bg: "postcardforscript/V/3b.JPG",
            zh: {
              text: "阿尔勒附近的运河开启式桥梁", 
              tooltip: "我是艾琳，住在美国大西洋沿岸。我们喜欢沿着海边遛狗，闲适又安宁。我和家人都爱逛美术馆，总会惊叹艺术家们的出众才华。祝你大学学业顺利、前程似锦。—— 艾琳（《阿尔勒附近的吊桥》，1888 年，文森特・梵高（荷兰，1853-1890），布面油画。荷兰奥特洛库勒慕勒美术馆藏。（纽约格兰杰典藏）《梵高明信片册》，1988 年奔跑出版社出版）" 
            },
            en: {
              text: "THE DRAWBRIDGE NEAR ARLES",
              tooltip: "I am Eileen and I live next to the Atlantic Ocean in the USA. We like to walk our dogs along the ocean's edge. It is very relaxing and peaceful. My family and I like to visit art museums. I am always amazed at the talent of artists. Best wishes for much success in college. - Eileen.（THE DRAWBRIDGE NEAR ARLES，1888, by Vincent van Gogh (Dutch, 1853-1890). Oil on canvas. Rijksmuseum Kröller-Müller, Otterlo, Netherlands. (The Granger Collection, New York)VAN GOGH A Postcard Book™ © 1988 by Running Press Book Publishers）"
            }
          },

          "trigger4": {
            bg: "postcardforscript/V/4b.JPG",
            zh: {
              text: "邮差鲁林肖像", 
              tooltip: "来自美国阿拉巴马州的问候。愿你的信箱总能收到来自世界各地的美好明信片。—— 休。（文森特・梵高（荷兰，1853-1890）《邮差鲁林肖像》，1888 年…… 底特律艺术博物馆藏）" 
            },
            en: {
              text: "Portrait of Postman Roulin",
              tooltip: "Greetings from Alabama, USA May your mailbox always be filled with great cards from all over the world. —— Sue.（Vincent van Gogh (Dutch, 1853-1890) Portrait of Postman Roulin, 1888... The Detroit Institute of Arts）"
            }
          },

          "trigger5": {
            bg: "postcardforscript/V/5b.JPG",
            zh: {
              text: "《摇篮曲》", 
              tooltip: "你好！我没有本地艺术家主题的明信片，便选了这张寄给你。上周我的家人从英国来看我，我带他们体验了各式各样的德克萨斯特色活动，真的很舍不得他们。愿你快乐安康。萨拉。（《摇篮曲：奥古斯丁・鲁林夫人摇动摇篮》，1889 年，文森特・梵高，荷兰画家（旅居法国）（1853-1890），布面油画；92.7cm×72.7cm。约翰・T・斯波尔丁遗赠，馆藏编号 48.548）" 
            },
            en: {
              text: "\"Lullaby: Madame Augustine Roulin Rocking a Cradle\"",
              tooltip: "Greetings! I didn't have any local artists so I chose this postcard for you. Last week my family was visiting from England. We took them to do as many Texas things as we could. I'm going to miss them. I hope you are happy & healthy. Best, Sarah.（Lullaby: Madame Augustine Roulin Rocking a Cradle, 1889 Vincent van Gogh, Dutch (worked in France) (1853-1890) Oil on canvas; 36 1/2 x 28 5/8 in. Bequest of John T. Spaulding, 48.548.）（© 2001 Museum of Fine Arts, Boston 465 Huntington Avenue Boston, MA 02115 www.mfa.org）"
            }
          },

          "trigger6": {
            bg: "postcardforscript/V/6b.JPG",
            zh: {
              text: "圣雷米疗养院的花园", 
              tooltip: "你好，我刚从阿姆斯特丹梵高博物馆归来，想寄给你一幅馆内展出的画作。《疗养院》：梵高在此度过了人生最后的时光。（阿姆斯特丹梵高博物馆）（文森特・梵高（1853-1890）《圣雷米疗养院的花园》，1889 年 12 月，布面油画，72×91 厘米，阿姆斯特丹梵高博物馆（梵高基金会藏））" 
            },
            en: {
              text: "Garden of the Asylum Saint-Rémy-de-Provence",
              tooltip: "Hello, I have just returned from Van Gogh Museum Amsterdam, & would like to send you one of the paintings exposed there. Asylum : here Van Gogh spent his last months.（Van Gogh Museum Amsterdam）（Vincent van Gogh (1853 - 1890) Garden of the Asylum Saint-Rémy-de-Provence, December 1889, oil on canvas, 72 x 91 cm Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)）"
            }
          },

          "trigger7": {
            bg: "postcardforscript/V/7b.JPG",
            zh: {
              text: "黑色的从麦田顶端略过", 
              tooltip: "我住在法国西部小镇干邑，这里是法国文艺复兴时期著名国王弗朗索瓦一世的出生地，也因本地出产的干邑白兰地享誉全球。我喜欢阅读、猫咪、绘画和摄影。提前祝你农历新年快乐！索菲。（文森特・梵高（1853-1890）《乌鸦群飞的麦田》，1890 年）" 
            },
            en: {
              text: "their black figures skimming over the top of the wheatfield",
              tooltip: "I live in Cognac, a small town in western France, the birthplace of François 1er, the famous King of the French Renaissance, and also known worldwide for its alcoholic product, Cognac, produced in the town. I like reading, cats drawing and taking photos. Happy Chinese New Year a little early! Sophie.（Vincent van Gogh (1853-1890) / Wheatfield with crows, 1890）"
            }
          }
      },

      annotationsZh: [
        "（他出生在我们隔壁的村庄。）",
        "（我刚从那儿回来，他在此度过了人生最后的时光。）"
      ],

      contentZh: [
        "1853，{{trigger1}}。在荷兰南部，这里四季只顾自己在门外行走，从不进屋。他是牧师家庭的长子。这第一个孩子没给这个家庭带来什么快乐，没有什么人来看他，他也总是一副疲惫不堪的样子，仿佛仅仅是活着就需要耗费极大的体力。",
        "随着年岁的增长，他在荷兰埃顿、海牙等地辗转。在巴黎，一次偶然的机会他见到印象派的光影。在1887年，他创作了油画{{trigger2}}。",
        "后来他去了法国南部。那里的阳光毫无保留，甚至有些恶毒。1988年，不知在什么情况下他见到{{trigger3}}，他忍不住用明亮的色彩捕捉了南法的春意，尽管他表现出的是这座桥严谨的工艺结构及其各部件。澄澈发白的天空和切割水面的蓝色带着一种不容拒绝的锋利，他在河边的洗衣妇女没有目光注视的陪伴下完成了这幅画。",
        "常年过度饮用苦艾酒和极度缺乏睡眠，导致他的神经系统有点失常。但这不妨碍他与当地邮递员约瑟夫·鲁林结下深厚友谊。那天，鲁林穿着他引以为傲的蓝色制服到来，他突然觉得鲁林有点像苏格拉底，几乎没有鼻子，额头很高，头顶秃顶，灰色的小眼睛，红扑扑的胖脸颊，浓密的灰白胡须，便拿起画笔为他画下一幅{{trigger4}}。",
        "有一天，他见到了邮递员的妻子。夫人正拉着绳子摇晃着摇篮，他仿佛看到了爱与家庭生活的典范。他忽然感到左耳一阵疼痛。但那疼痛又马上消逝，只听得耳边乌鸦的叫声。他为邮递员的妻子画下{{trigger5}}这幅画，画里的女人穿着一袭绿衣，手里攥着一根摇篮的绳子，而他总觉得那根粗糙的绳子正渐渐收紧，勒住他自己的脖颈，让他无法呼吸。",
        "最后，病情反复的他在生命最后的几个月里，他住进了法国普罗旺斯地区圣雷米的精神疗养院。没人知道他为什么总是在晚上望星空，而画下的却是{{trigger6}}。",
        "1990年的某一天，他走进奥维尔一片金黄色的麦田。他的步伐惊起一群乌鸦，{{trigger7}}。他拿起画笔画下了这几幕，不知是立刻还是过了很久，他向自己的胸口开了一枪。除了五幅油画外，他没有留下其他东西。人们总是惊讶一个连握笔都发抖、一生只短暂拿起过六次画笔的疯子（尽管有些人坚持认为他的画很糟糕），如何能画出如此摄人心魄的画作，就好像有另一个叫文森特的人在借用他那双迟钝的手画下这些东西一般。"
      ],

      annotationsEn: [
        "(He was born in the village next to mine.)",
        "(I have just returned from there, here Van Gogh spent his last months.)"
      ],

      contentEn: [
        "In 1853, {{trigger1}}. In the south of the Netherlands, the four seasons here only care to walk outside the door on their own, never entering the house. He was the eldest son of a pastor's family. This first child brought no joy to the family; no one came to see him, and he always looked exhausted, as if merely living required an immense amount of physical energy.",
        "As he grew older, he moved around Etten, The Hague, and other places in the Netherlands. In Paris, by a chance encounter, he saw the light and shadow of Impressionism. In 1887, he created the oil painting {{trigger2}}.",
        "Later, he went to the south of France. The sunlight there was unreserved, even somewhat vicious. In 1988, under unknown circumstances, he saw {{trigger3}}; he couldn't help but capture the spring vibes of southern France with bright colors, although what he depicted was the rigorous craftsmanship structure of this bridge and its various components. The clear, whitish sky and the blue cutting through the water surface carried an undeniable sharpness; he finished this painting accompanied by the washerwomen by the river without their gazes.",
        "Years of excessive absinthe consumption and extreme sleep deprivation caused his nervous system to become somewhat unhinged. But this did not prevent him from forging a deep friendship with the local postman, Joseph Roulin. That day, Roulin arrived wearing the blue uniform he was so proud of, and he suddenly felt that Roulin looked a bit like Socrates—with almost no nose, a high forehead, a bald head, small gray eyes, chubby red cheeks, and a thick gray beard—so he picked up his paintbrush and painted a {{trigger4}} for him.",
        "One day, he met the postman's wife. The madame was pulling a rope and rocking a cradle, and he seemed to see the paradigm of love and family life. Suddenly, he felt a burst of pain in his left ear. But that pain quickly vanished, and he only heard the cawing of crows by his ear. He painted {{trigger5}} for the postman's wife; the woman in the painting wore a green dress, clutching a cradle rope in her hand, but he always felt that the rough rope was gradually tightening, strangling his own neck and making him unable to breathe.",
        "Finally, suffering from relapsing illness, he was admitted to the psychiatric hospital in Saint-Rémy-de-Provence, France, and here Van Gogh spent his last months. No one knew why he always gazed at the starry sky at night, yet what he painted was the {{trigger6}}.",
        "One day in 1990, he walked into a golden wheatfield in Auvers. His steps startled a flock of crows, {{trigger7}}. He picked up his paintbrush and painted these scenes of the Wheatfield with crows, and not knowing whether it was immediately or a long time later, he shot himself in the chest. He left nothing else behind except for five oil paintings. People are always amazed at how a madman who trembled even when holding a pen, and who had only briefly picked up a paintbrush six times in his life (although some insisted that his paintings were terrible), could paint such breathtaking artworks, as if another person named Vincent was borrowing his sluggish hands to paint these things."
      ]
  }, 

 "W": {
      titleZh: "小村庄文德赛",
      meta: "Wendesse, the Small Village",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/W/1b.JPG",
            zh: {
              text: "彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野", 
              tooltip: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆" 
            },
            en: {
              text: "The picture with the rainbow shows a view from my \"home office\" window on our fields",
              tooltip: "Our tiny village Wendesse is to small, to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my \"home office\" window on our fields, in the background you might see our pumpjacks. The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we'll need the next 25 years or so. On the bottom is the map of our tiny village - as you see, many fields and just a few houses - much nature :) You might also notice our families coat of arms and the one of our village. And you find my address - as I always hope for replys! Many greetings from family Nottbohm Handwriting: How do you like my selfmade card? Nihao Zhimu Li have you ever watched \"inherit the wind\" an old black/white movie from 1960? I love it! Wilhelm (need sender's address? please turn!)"
            }
          },

          "trigger2": {
            bg: "postcardforscript/W/1b.JPG",
            zh: {
              text: "背景中还能看到抽油机", 
              tooltip: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆" 
            },
            en: {
              text: "pumpjacks in the background",
              tooltip: "Our tiny village Wendesse is to small, to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my \"home office\" window on our fields, in the background you might see our pumpjacks. The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we'll need the next 25 years or so. On the bottom is the map of our tiny village - as you see, many fields and just a few houses - much nature :) You might also notice our families coat of arms and the one of our village. And you find my address - as I always hope for replys! Many greetings from family Nottbohm Handwriting: How do you like my selfmade card? Nihao Zhimu Li have you ever watched \"inherit the wind\" an old black/white movie from 1960? I love it! Wilhelm (need sender's address? please turn!)"
            }
          },

          "trigger3": {
            bg: "postcardforscript/W/1b.JPG",
            zh: {
              text: "我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心", 
              tooltip: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆" 
            },
            en: {
              text: "The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully",
              tooltip: "Our tiny village Wendesse is to small, to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my \"home office\" window on our fields, in the background you might see our pumpjacks. The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we'll need the next 25 years or so. On the bottom is the map of our tiny village - as you see, many fields and just a few houses - much nature :) You might also notice our families coat of arms and the one of our village. And you find my address - as I always hope for replys! Many greetings from family Nottbohm Handwriting: How do you like my selfmade card? Nihao Zhimu Li have you ever watched \"inherit the wind\" an old black/white movie from 1960? I love it! Wilhelm (need sender's address? please turn!)"
            }
          },

          "trigger4": {
            bg: "postcardforscript/W/1b.JPG",
            zh: {
              text: "太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力", 
              tooltip: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆" 
            },
            en: {
              text: "will hopefully produce more electricity, then we'll need the next 25 years or so",
              tooltip: "Our tiny village Wendesse is to small, to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my \"home office\" window on our fields, in the background you might see our pumpjacks. The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we'll need the next 25 years or so. On the bottom is the map of our tiny village - as you see, many fields and just a few houses - much nature :) You might also notice our families coat of arms and the one of our village. And you find my address - as I always hope for replys! Many greetings from family Nottbohm Handwriting: How do you like my selfmade card? Nihao Zhimu Li have you ever watched \"inherit the wind\" an old black/white movie from 1960? I love it! Wilhelm (need sender's address? please turn!)"
            }
          },

          "trigger5": {
            bg: "postcardforscript/W/1b.JPG",
            zh: {
              text: "在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽", 
              tooltip: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆" 
            },
            en: {
              text: "Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms",
              tooltip: "Our tiny village Wendesse is to small, to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my \"home office\" window on our fields, in the background you might see our pumpjacks. The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we'll need the next 25 years or so. On the bottom is the map of our tiny village - as you see, many fields and just a few houses - much nature :) You might also notice our families coat of arms and the one of our village. And you find my address - as I always hope for replys! Many greetings from family Nottbohm Handwriting: How do you like my selfmade card? Nihao Zhimu Li have you ever watched \"inherit the wind\" an old black/white movie from 1960? I love it! Wilhelm (need sender's address? please turn!)"
            }
          },

          "trigger6": {
            bg: "postcardforscript/W/1b.JPG",
            zh: {
              text: "在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章", 
              tooltip: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆" 
            },
            en: {
              text: "many fields and just a few houses - much nature :) Furthermore, within the line of sight, you might also notice our families coat of arms and the one of our village",
              tooltip: "Our tiny village Wendesse is to small, to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my \"home office\" window on our fields, in the background you might see our pumpjacks. The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we'll need the next 25 years or so. On the bottom is the map of our tiny village - as you see, many fields and just a few houses - much nature :) You might also notice our families coat of arms and the one of our village. And you find my address - as I always hope for replys! Many greetings from family Nottbohm Handwriting: How do you like my selfmade card? Nihao Zhimu Li have you ever watched \"inherit the wind\" an old black/white movie from 1960? I love it! Wilhelm (need sender's address? please turn!)"
            }
          },

          "trigger7": {
            bg: "postcardforscript/W/1b.JPG",
            zh: {
              text: "我也留下了我的地址——因为我总是期待能收到回信！", 
              tooltip: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆" 
            },
            en: {
              text: "leaving my address on the paper, as I always hope for replys!",
              tooltip: "Our tiny village Wendesse is to small, to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my \"home office\" window on our fields, in the background you might see our pumpjacks. The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we'll need the next 25 years or so. On the bottom is the map of our tiny village - as you see, many fields and just a few houses - much nature :) You might also notice our families coat of arms and the one of our village. And you find my address - as I always hope for replys! Many greetings from family Nottbohm Handwriting: How do you like my selfmade card? Nihao Zhimu Li have you ever watched \"inherit the wind\" an old black/white movie from 1960? I love it! Wilhelm (need sender's address? please turn!)"
            }
          },

          "trigger8": {
            bg: "postcardforscript/W/1b.JPG",
            zh: {
              text: "我们的小村庄温德塞太小了，没有属于自己的明信片。", 
              tooltip: "我们的小村庄温德塞太小了，没有属于自己的明信片。所以我就自己制作了这张：在村标旁边，有一块辉长岩，是我的同事们从哈尔茨山脉一座著名采石场带来的。他们甚至请了一位石匠来雕刻细节，包括旧版的村徽。彩虹那张照片展示的是从我“家庭办公室”窗户望出去的景色，你可以看到我们的田野，背景中还能看到抽油机。我们村里唯一的一座鹳巢也在这里。每当鹳鸟们完成前往非洲的年度迁徙并顺利繁殖，我们都会感到很开心。太阳能发电系统安装在我们的谷仓上，希望未来大约 25 年能够源源不断地提供比我们所需更多的电力。在明信片底部是我们小村庄的地图——如你所见，这里有很多田地，只有几座房屋——自然环境非常丰富。你还可以看到我们家族的徽章，以及我们村庄的徽章。另外，我也留下了我的地址——因为我总是期待能收到回信！来自诺特博姆一家的问候。你好，你有没有看过《雄才怪傑》这部1960年代的黑白老电影？我非常喜欢它。你喜欢我自制的明信片吗？诺特博姆" 
            },
            en: {
              text: "Our tiny village Wendesse is to small, to have its own Postcards.",
              tooltip: "Our tiny village Wendesse is to small, to have its own Postcards. So I made this one: Next to the village-sign is the Gabbro-stone we got from my colleagues from a popular quarry in the Harz mountains. They even organized a stonemason to add the details including the old coat of arms. The picture with the rainbow shows a view from my \"home office\" window on our fields, in the background you might see our pumpjacks. The stork's nest is our only one and we are happy, when the storks return from their annual journey to Africa and breed successfully. The solar energy system is placed on our barn and will hopefully produce more electricity, then we'll need the next 25 years or so. On the bottom is the map of our tiny village - as you see, many fields and just a few houses - much nature :) You might also notice our families coat of arms and the one of our village. And you find my address - as I always hope for replys! Many greetings from family Nottbohm Handwriting: How do you like my selfmade card? Nihao Zhimu Li have you ever watched \"inherit the wind\" an old black/white movie from 1960? I love it! Wilhelm (need sender's address? please turn!)"
            }
          }
      },

      annotationsZh: [
        ""
      ],

      contentZh: [
        "根据艾许诺滋的《王后的任性》改编。",
        "在我写下这句话的这只手的右边，延伸着一片铺着灰色碎石或方形地砖的私人车道，它的外缘是一排修剪过的低矮树篱，透过树篱的缝隙，人们可以看到此处所看到的全景的下半部分，这正是{{trigger1}}。如果天气好，此处甚至能看到彩虹。一条名叫厄尔海默（Oelheimer）的柏油马路正好横亘在前方。马路正对一大片平坦的、几何形状的农田缓坡，甚至可以说非常平坦，这就是典型的下萨克森州平原。平原下面紧挨着几簇零星的树林，风向好的时候，可能会传来远处某条小溪或主干道上汽车隐隐的轰鸣声，以及{{trigger2}}，正不知疲倦地进行着机械往复运动的抽油机发出的细微噪音。",
        "在这片平原的另一边，透过交错的树枝，人们能看到远处一条乡间小路正好在与草地对称的斜坡上方形成一条横线。在更高一点的地方，这片田野的四周围绕着树篱，树篱之间绵延分布着一片牧场，牧场上也许会有几匹马或奶牛。在这片区域，还矗立着{{trigger3}}。这些动物除了吃草，生命中似乎就只有根据是否需要阴凉而跟着阳光的轨迹移动一件事，此外再也没有什么好操心的。好。现在让我们从南向东转动，然后再接着向北，如此等等，即按照逆时针的方向，让我们环顾整个地平线，直到再次看到这片牧场，看看它们在此期间是否也在移动。",
        "牧场的左边是一座典型的德国乡村农场，因此我们有理由认为这些牲畜就是这个农场的。关于这家农场，人们只能看到它的部分建筑：首先是一堵宽阔的墙壁，上面牢牢地覆盖着深红色或暗黑色的斜面瓦片屋顶，很可能是典型的当地住房特色；其次，毗邻瓦片屋顶的是另一栋建筑的可见部分，这座建筑也许是附属部分，或者是农场附属建筑中的一座谷仓。这座谷仓的顶部被大面积的{{trigger4}}。人们只能看到这些房子的一部分，它们掩映在植物之中，不细看几乎发现不了。我们待会再回来谈植物的问题。",
        "也许我们现在应该关注一下我们此次叙述中植物的顺序的重要性，尽管在了解派讷（Peine）乡村风貌方面，这似乎是最无足轻重的一点。所有的住房都聚集在从南方到东方这一部分扇形区域，房子中间都隔着一丛丛极具欧洲温带特色的树木。这些树木非常具有代表性，有橡树、白蜡树、山毛榉，它们密密麻麻地填满了道路对面直到第一座农场的整片区域。而在这些植物之间，紧挨着{{trigger5}}。",
        "让我们接着往北看。如果说面对把我们与作为参照物的牲畜分开的平原，我们身处在一个与平原面对面的观察点，那么接下来我们要抬起头，将目光转向北方。从这个观测点看来，植被就显得没有那么密集：不仅仅是因为它们更稀疏，还因为我们现在身处一片更加宽阔的区域，远离房屋，中间相隔的距离使得植物的顺序更加谦卑一些，不再那么高傲，不再那么居高临下。平原、荒地、低矮的小土丘。就像我们在明信片底部的微缩地图上所看到的那样：{{trigger6}}。远处的景致更胜眼前，让我们在连绵土地的地平线上，隐约窥见一些现代工业的产物——那是几座巨大的白色风力发电机。除此之外，离我们更近一点的是一座可能是十九世纪的红砖建筑，它从身后的背景中浮现出来，四分之三的面积都掩映在浓密的植被中，我们只能隐约看见烟囱或者屋顶的一部分。其实也就这些东西了。",
        "应该就只有这些，因为西侧的东西毫无意义。我们的目光从北方的辽阔视野中再次回到眼前触手可及的东西，院子里的落叶、停泊的汽车、花园里的家具。在西北方有一条能通车的道路，是村间道路的分支，能一直通到这座房子。这条道路的尽头，一道清晰的两旁有树的缓坡很快就与远处的田野融为一体。我们环绕房子一圈之后，重新回来看看南边的车道、树篱、椅子以及手。",
        "这只手重新回到原位，在纸面上{{trigger7}}。随后，它写下现在这句话：",
        "“{{trigger8}}”"
      ],

      annotationsEn: [
        ""
      ],

      contentEn: [
        "Based on The Queen's Caprice by Jean Echenoz.",
        "To the right of the hand writing this sentence, a private driveway paved with gray gravel or square tiles extends outward, its outer edge bordered by a row of neatly pruned, low hedges. Through the gaps in these hedges, one can glimpse the lower half of the panorama presented here—{{trigger1}}. A tarmac road named Oelheimer stretches directly ahead. The road confronts a vast, gentle slope of flat, geometrical farmland, one might even say remarkably flat, which is quintessential of the Lower Saxony plains. Just below this plain clusters a sparse scattering of woods; when the wind is favorable, the faint roar of cars from a distant stream or main thoroughfare might drift over, along with the subtle noise emitted by the {{trigger2}}, tirelessly performing their mechanical reciprocating motions.",
        "On the far side of this plain, through the interlacing branches, one can see a distant country lane forming a horizontal line just above the slope that mirrors the meadow. A little higher up, this field is encircled by hedges, between which sprawls a pasture where perhaps a few horses or cows graze. {{trigger3}}. Aside from grazing, these creatures seem to have but one pursuit in life: moving along the sun's trajectory depending on their need for shade, with nothing else to worry about. Good. Now let us pivot from south to east, then continue towards the north, and so on—tracing a counterclockwise arc—let us sweep our gaze across the entire horizon until we behold this pasture once more, to see if they, too, have moved in the meantime.",
        "To the left of the pasture sits a typical German country farm, giving us reason to assume these livestock belong to it. Of this farm, only fragments of its structures are visible: first, a broad wall firmly capped by a sloping roof of deep red or dark black tiles, likely a hallmark of local dwellings; second, adjacent to the tiled roof, the visible portion of another building, perhaps an annex or a barn among the farm's outbuildings. The roof of this barn is blanketed by a large-scale solar energy system, and by calculations, it {{trigger4}}. One can only catch glimpses of these houses, nestled so deeply among the vegetation that they are nearly imperceptible without close scrutiny. We shall return to the matter of the plants shortly.",
        "Perhaps we should now turn our attention to the significance of the vegetative arrangement in our narrative, though it may seem the most trivial detail in understanding the rural charm of Peine. All the dwellings are clustered within a fan-shaped sector from south to east, interspersed with thickets of trees quintessential to the European temperate zone. These highly representative trees—oaks, ashes, beeches—densely fill the entire expanse from across the road all the way to the first farm. And amidst this foliage, abruptly placed, {{trigger5}}.",
        "Let us continue our gaze northward. If, facing the plain that separates us from the livestock serving as our reference point, we stand at an observation post directly confronting the flatland, then next we must lift our heads and cast our eyes to the north. From this vantage point, the vegetation appears less dense: not merely because it is sparser, but because we are now immersed in a much broader expanse, far from the houses, where the intervening distances render the order of plants more humble, less haughty, no longer so commanding. Plains, wastelands, low earthen mounds. Just as we see on the miniature map at the bottom of the postcard: {{trigger6}}. The distant vistas eclipse the immediate ones, allowing us to faintly glimpse the offspring of modern industry upon the horizon of the rolling land—several colossal, white wind turbines. Closer to us still is a red-brick building, perhaps from the nineteenth century, emerging from its background, three-quarters of its mass obscured by thick foliage; we can only vaguely discern a chimney or a fragment of the roof. Truly, that is about all there is.",
        "That should be all, for whatever lies to the west is devoid of meaning. Our gaze withdraws from the vast northern panorama back to the tangible things right before us: fallen leaves in the yard, parked cars, garden furniture. To the northwest, there is a navigable road, a branch of the village pathways, leading directly up to this house. At the end of this road, a distinct, tree-lined gentle slope quickly dissolves into the distant fields. Having circled the house, we return once more to behold the southern driveway, the hedges, the chair, and the hand.",
        "This hand returns to its original position, {{trigger7}}. Subsequently, it pens down the present sentence:",
        "\"{{trigger8}}\""
      ]
  },

"X": {
      titleZh: "圣诞节",
      meta: "X-MAS",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "",
            zh: {
              text: "", 
              tooltip: "" 
            },
            en: {
              text: "",
              tooltip: ""
            }
          }
      },

      annotationsZh: [
        "（打开信箱）",
        "（圣诞节的贺卡从信箱里散落）",
        "（写下）"
      ],

      contentZh: [
        "圣诞节对我来说意味着什么？",
        "我喜欢各地的圣诞灯饰氛围，也会在圣诞节享用蛋糕。",
        "圣诞节期间我会再次阅读《古战场传奇》的系列书籍。",
        "回家探亲，和家人一起参观圣诞集市，外面也会布满美丽的灯饰。",
        "会和家人一起烤牛肉。",
        "吃传统的圣诞汤——“barszcz”（罗宋汤），配上名为“uszka”的小饺子一起食用。",
        "在家里舒服地喝着热巧克力、重温《哈利·波特》电影。",
        "我的两只猫会陪我一起。",
        "祝你圣诞节快乐！"
      ],

      annotationsEn: [
        "(Opening the mailbox)",
        "(Christmas cards spill out from the mailbox)",
        "(Writing down)"
      ],

      contentEn: [
        "What does Christmas mean to me?",
        "I like the Christmas atmosphere in everywhere (illumination), and I'll enjoy a piece of cake on Christmas.",
        "During the Christmas season, I will read the Outlander books again.",
        "I will go home to visit my family and friends!!, we will visit a Christmas market, and outside it's all decorated with lot of lighth.",
        "I plan to have roast beef with my family.",
        "I will eat a traditional Christmas soup - \"barszcz\" (borscht) - a beetroop soup eaten with little dumplings called \"uszka\".",
        "I like cozy relaxed weekends at home with coffee & chocolate, and This close to Christmas holidays I felt like watching the Harry Potter movies 'again'.",
        "My two cats will stay at home to accompany me.",
        "Merry Christmas!"
      ]
  },

"Y": {
      titleZh: "好多年前，昨天时候",
      meta: "Years ago, yesterday was",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/Y/1b.JPG",
            zh: {
              text: "昨天是我的生日，所以心情特别好：)", 
              tooltip: "能认识有创意的人总是件开心事！我从没去过亚洲国家，很希望能去中国看看。我觉得挺有意思的是，英语里称中国首都为 Beijing，我们俄罗斯却叫 Pekin！昨天（5 月 12 日）是我的生日，所以心情特别好：) 我现居莫斯科，出生在雅罗斯拉夫尔。我想你应该知道这位画家，还是推荐你看看阿尔伯特・比尔施塔特的画作。祝好！阿尔图尔。" 
            },
            en: {
              text: "Yesterday (12th of May) was my birthday so I have a good mood :)",
              tooltip: "I'm very glad that I'm sending this postcard to you :) it's always nice to see creative person! I never was in Asian countries and I wish that I could visit china. It was very interesting to know that in english language people call the capital of china \"Beijing\". Because in Russia we call it \"Pekin\"! Yesterday (12th of May) was my birthday so I have a good mood :) I live in Moscow but, was born in Yaroslavl (it's about place where I live) I think that you know this artist, but I'll recommend you to see paintings from Albert Bierstadt. Best wishes, Artur."
            }
          },

          "trigger2": {
            bg: "postcardforscript/Y/2b.JPG",
            zh: {
              text: "昨天我去了我们这个城市的美术馆", 
              tooltip: "这张明信片是我昨天在汉堡艺术馆买的，馆内展出了许多知名画作。愿你收到满满一信箱的美好明信片，祝你今日愉快！文娅。" 
            },
            en: {
              text: "Yesterday I went to the art museum in our city",
              tooltip: "Greetings from Germany. I hope you are doing well. I bought this card yesterday at the \"Kunsthalle Hamburg\". Many famous paintings are exhibited there. I wish you a mailbox full of good cards and a good day! Venja（Anders Zorn (1860-1920) Fors under gammal stenbro, 1884. Akvarell River under old stone bridge, 1884. Watercolour Zornmuseet, Mora www.zorn.se）（Förlagsrätt: Zornmuseet, Mora. KST Infoservice, Kalmar 2011）"
            }
          }
      },

      annotationsZh: [
        "（镜头扫过）",
        "（空房间）",
        "（停留在）",
        "（周四的日历）",
        "（我想起了我的爷爷，也想起了我女儿的爷爷）",
        "（特写）",
        "（打开的信封一角）"
      ],

      contentZh: [
        "许多年前，我们一家人喜欢驾车去附近的一个小岛上度假，只需要45分钟的汽车渡轮就能到达。那个时候孩子们还小，现在他们已经三十多岁，有了自己的家庭，不再和我们一起住了。他们每周日晚上来吃饭，谈谈他们的工作，孩子学业的琐事。可是等他们走了，屋子里又安静地要命。",
        "今天是周四，{{trigger2}}。老年的生活平静也自在。这几天我在整理最小的女儿的房间，她在三年前和一个外国人结婚了。她只带走了一小部分东西，剩下的我也没有扔掉，就在房间里放着。在我擦拭窗台边上的书桌时，在绿色带着波点窗帘（那是她小时候喜欢的样式，长大后一直吵嚷着要换，我一直找理由搪塞过去了）下发现了一叠书。《美丽的世界，你在哪里》、《失踪树木的岛屿》、《熊与夜莺》、几本横七竖八插着着彩色便签的练习册。这几本书是按这样的顺序叠着的。当我一本本地拿起他们，想要擦一擦周围的灰尘时，一个由教堂照片印刷品几次折叠制成的信封，粘着几张边角起了小霉点的纸从书堆滑落到地上。我俯身捡起，在腰部发力起身的瞬间，看到纸上用乌黑的水笔写的字，字写得很小，而且极其工整，在笔画的周围墨水轻轻洇了一点纸：",
        "{{trigger1}} 这幅画唤起了我童年的回忆，那时我每个夏天都会去乡下探望祖母。我每天骑着自行车、吃着浆果，和动物及朋友们玩耍……",
        "还有另一张纸，上面的字迹很明显是另一个人的。但是，我却不记得哪个是我的女儿写的了，因为我不记得她的字迹了。或者，可能这两张纸都不是我女儿写的，只是在这个时刻出现在她的房间里而已。只见这张纸上用娟秀的字写着：“一个星期前，我每晚都会哭。原来一个最亲近的人突然离去，当我们谈论死亡时，揣测死亡时，有目的吗？倘若讨论的足够深刻，就能超越生死吗？写下这些时是语无伦次的，我不想掩饰我的无措，事实上我也无法掩饰。在生死面前，每个人皆赤裸。于是最近发现时间非常不够用，想做的事情很多。我徒劳无功地让自己不虚度珍贵的生命。我希望能与我爱的人拥有更多回忆，我希望能拥有更多知识帮助我摆渡。我希望我有勇气和智慧去爱。我想这样，和爷爷在梦中相遇时，我能有更多的故事跟他讲。”",
        "赶在回忆彻底淹没我的脑海时，我将这些纸放回原处。周四的晚上并不是适合回忆往昔的好时机。然而事物只能再现，不能彻底地经历。我们只能面对回忆突如其来露出的线脚，然后溃不成军。"
      ],

      annotationsEn: [
        "(The camera pans across)",
        "(An empty room)",
        "(Lingers on)",
        "(A Thursday calendar)",
        "(I think of my grandfather, and the grandfather of my daughter as well.)",
        "(Close-up)",
        "(The edge of an open envelope)"
      ],

      contentEn: [
        "Many years ago, our family liked to drive and we went to this island for holiday, which took only a 45 min vehicle barge journey to reach. At that time, when my children were younger, but now they are now in their 30's, have their own families, and no longer live with us. They come over for dinner every Sunday evening, talking about their work and the trivial matters of their children's studies. But when they leave, the house becomes deadly quiet again.",
        "Today is Thursday. {{trigger2}}. Life in old age is peaceful and comfortable. These past few days, I have been tidying up my youngest daughter's room. She married a foreigner three years ago. She only took a small portion of her things; I didn't throw away the rest, just leaving them in her room. As I was wiping the desk by the windowsill, I found a stack of books under the green polka-dot curtains (that was the style she liked when she was a child; she kept clamoring to change it after she grew up, but I always found excuses to put it off). Beautiful World, Where Are You, The Island of Missing Trees, The Bear and the Nightingale, and a few exercise books randomly stuffed with colorful sticky notes. These books were stacked in this exact order. When I picked them up one by one, wanting to wipe the dust around them, an envelope folded several times from a church photo print, with a few pieces of paper slightly mildewed at the edges stuck to it, slid from the pile of books onto the floor. I bent down to pick it up, and the moment I exerted force from my waist to stand up, I saw the words written on the paper with a jet-black pen. The handwriting was very small and extremely neat, with the ink slightly bleeding into the paper around the strokes:",
        "\"{{trigger1}} This painting bring back memories of my childhood, when I went to the village to visit my grandmother every summer. I spent my days riding bicycle, eating berries and playing with animals and friends...\"",
        "There was another piece of paper, and the handwriting on it obviously belonged to someone else. However, I couldn't remember which one was written by my daughter, because I couldn't remember her handwriting. Or, perhaps neither of these two pieces of paper was written by my daughter; they just appeared in her room at this moment. I saw elegant handwriting on this paper saying: \"A week ago, I would cry every night. It turned out that a closest person suddenly left. When we talk about death and speculate about death, is there a purpose? If the discussion is profound enough, can it transcend life and death? I am incoherent when writing this. I don't want to hide my helplessness; in fact, I cannot hide it. In the face of life and death, everyone is naked. So recently I found that time is very insufficient, and there are many things I want to do. I try in vain not to waste my precious life. I hope to have more memories with the people I love, and I hope to have more knowledge to help me cross over. I hope I have the courage and wisdom to love. I think in this way, when I meet grandpa in a dream, I can have more stories to tell him.\"",
        "Before the memories completely submerged my mind, I put these papers back in their original place. Thursday night is not a good time to reminisce about the past. However, things can only be reproduced, not completely experienced. We can only face the sudden exposed threads of memories, and then be utterly defeated."
      ]
  },

 "Z": {
      titleZh: "Zip-Glorp你好外星人",
      meta: "Zip-Glorp",
     
      images: [ 
        "postcardforscript/A/1f.JPG",
        "postcardforscript/A/2f.JPG",
      ],

      triggers: {
          "trigger1": {
            bg: "postcardforscript/Z/1b.JPG",
            zh: {
              text: "它让你们想起了你们美丽的母星", 
              tooltip: "“非常感谢你的明信片，它对我们的帮助超乎你的想象。我们现在已经派了几个同类去中国寻找‘龙’和它的魔法。希望能借此帮助我们完成重返家园的任务。 我们选择寄这张明信片给你，是因为这张画（注：莫奈的《吉维尼花园》）让我们想起了我们美丽的母星。 同时，也祝你在大学以及未来人生的‘任务（quests）’中一切顺利！”" 
            },
            en: {
              text: "the picture reminds you of your beautiful home planet",
              tooltip: "thank you so much for your card, which helped us more than you think it did. We have now sent a few of our kind to china to find the dragon and its magic. Hopefully it can help us in our quest to get back home. We chose to send you this postcard because the picture reminds us of our beautiful home planet. Also we wish you the best with your quests at college and beyond in life. Zip-Glorp Unsichtbare Aliens (画了一个带触角的小外星人头像) （CLAUDE MONET (1840-1926) »Garten in Giverny« (1902), Österreichische Galerie Belvedere, Wien Bridgeman Images）"
            }
          }
      },

      annotationsZh: [
        "（穿过望远镜的眼）",
        "（一颗星球出现）",
        "（缓缓转动）",
        "（被吉维尼花园覆盖的星球）",
        "（收到明信片）",
        "（明信片上印着莫奈的吉维尼花园）",
        "（拿起明信片）",
        "（卷成球状）"
      ],

      contentZh: [
        "亲爱的朋友，这是一份指南，希望你能借此找到你的宇宙飞船，返回你的星球。思来想去，你只需要带上这张纸就够了——莫奈的《吉维尼花园》明信片。你说{{trigger1}}，那么，也希望吉维尼花园里故乡的光影让你想起偶然来到的地球。然后，请在你的祈祷中记得我们。",
        "你不再是异乡人。"
      ],

      annotationsEn: [
        "(Through the telescope lens)",
        "(A planet emerges)",
        "(Slowly spinning)",
        "(A planet covered by Giverny Garden)",
        "(Receives a postcard)",
        "(The postcard printed with Monet’s Giverny Garden)",
        "(Picks up the postcard)",
        "(Rolls it into a ball)"
      ],

      contentEn: [
        "Dear friend, this is a guide, and hopefully it can help in your quest to get back home to your spaceship and your planet. After much thought, bringing this piece of paper is all you need—this postcard of CLAUDE MONET's Garten in Giverny. You said that {{trigger1}}, so I also hope the light and shadows of your hometown in the Garden at Giverny will remind you of the Earth you accidentally visited. Then, please remember us in your prayers.",
        "You are no longer a stranger."
      ]
  },

  
};