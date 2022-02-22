const [a, b, c, d, e, f] = [
  "Learning",
  "Introspection",
  "Environment",
  "Behavior",
  "Nature",
  "Inanimate",
];
const owl_index = {
  p1: {
    i1: "Quotes; I felt this evening, in the course of a solitary walk in the most beautiful weather",
    cat: {
      a: ["writing"],
      b: ["euphoria"],
      c: ["internet"],
      d: ["progression"],
    },
  },
  p2: {
    i1: "If they so wish to speak to me then let them make the effort to come to where I am.",
    i2: "I so dispise the everlasting tactics of envious routine against growing talent.",
  },
  p3: {
    i1: "[7.28.11] I can never tell whether I am being incredibly lazy or just giving myself a break.",
  },
  p4: {
    i1: "Whether we allow it to control us or if we choose to perform the necessary work to understand how it works… ",
  },
  p5: { i1: "Soon I will be going on an adventure to an alien world." },
  p6: {
    i1: "I am filled with great enthusiasm when I read about the triumph of 'Hernani' ",
  },
  p7: {
    i1: "So many things are just discarded by our society and pass… ",
    i2: "Some Other things were written too. ",
  },
  p8: {
    i1: "Probably the greatest human invention of the wheel, the beginning of commerce.",
  },
  p9: {
    i1: "Did she ask me to teach her how to play the cello because she wanted to have sex with me? ",
  },
  p10: { i1: "Notes from “maldoror” by Lautreamont" },
  p11: {
    i1: "Imagine if you anticipated being reincarnated 150yrs from now and you wanted to leave a hint for yourself. ",
    i2: "Some Other things were Written too. ",
  },
  p12: {
    i1: "The essence is captured in the image of a train, a steam locomotive… ",
  },
  p13: {
    i1: "The steam creates a magical atmosphere as if the magician just caused… ",
  },
  p14: {
    i1: "A clean window means one of two things either humans rarely come in contact with it or… ",
    i2: "Just step inside, shut the door, and hit the forward button..",
    i3: "Emotions were created to facilitate communication and language.",
  },
  p15: { i1: "Life is partially taking risks until you die." },
  p16: {
    i1: "If Israel believed truly what the bible teaches then they would gladly give their state… ",
  },
  p17: { i1: "Huge truck pulling an enclosed car trailer semis, suv, cars… " },
  p18: {
    i1: "Unnatural rest stops, oil barrels, train tracks, strange objects… ",
    i2: "Wyoming, barron rolling hills...",
  },
  p19: {
    i1: "Weak wrists. Joints take all the stress. less moving parts means less things to fix.",
  },
  p20: {
    i1: "The television promotes sports so people who watch tv are passionate about sports. ",
    i2: "Notes from 'Evil Eye' by Hakim Bey ",
    i3: "Sometimes I look upon couples with indignation...",
  },
  p21: {
    i1: "All the things that populate the hyway environment in order to ensure people's safety. ",
  },
  p22: {
    i1: "I look toward the horizon and whatever i wish to see is drawn there. ",
  },
  p23: {
    i1: "What do the CO-OPs Symbolize? All old but still standing tall out on the plains. ",
  },
  p24: { i1: "Study the Preface to Cromwell in order to define the drama. " },
  p25: {
    i1: "Constantly they peel forth. It is all I can do to ignore them and continue the swift motion of my arms. ",
  },
  p26: { i1: "How do I overcome my social anxiety? " },
  p27: {
    i1: "Unable to make the connection. Both halves are placed near one another but the reaction that was meant to happen never does. ",
  },
  p28: { i1: "That defines the challenge that I am faced with. " },
  p29: { i1: "That’s nothing, just wait til you see the big picture. " },
  p30: {
    i1: "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed- Blaise Pascal ",
  },
  p31: { i1: "[8.26.11] Notes from “Incognito” by David Eagleman " },
  p32: { i1: "Notes from 'Incognito' by David Eagleman cont. " },
  p33: {
    i1: "You have surprisingly little access to what goes on behind the scenes. ",
  },
  p34: {
    i1: "Your brain is situated in the dark but your mind constructs light. ",
  },
  p35: { i1: "Poem Sanctuary " },
  p36: {
    i1: "The old man sits alone in his chair. The room is dark, the house is empty. ",
  },
  p37: {
    i1: "It is bad that society has seemed to me to make it unhealthy for children to be educated by the elderly. ",
  },
  p38: {
    i1: "What causes a man to work his entire life and have nothing to show for it? ",
  },
  p39: { i1: "What is so good about working at a liquor store? " },
  p40: {
    i1: "Kansas is raised upabove the rest of the US people are looking over the edge, trying not to fall off. ",
  },
  p41: {
    i1: "I don’t think that I should allow myself to get worked upby these fanatics that forecast the end of our individual rights. ",
  },
  p42: {
    i1: "Why does it seem so difficult to promote and get people interested in writing? ",
  },
  p43: {
    i1: "The dramas that play out before us day after day are very entertaining to watch. ",
  },
  p44: {
    i1: "Am I not complete, from the moment I open my eyes, lying bare upon my bed… ",
  },
  p45: {
    i1: "I think there is a chance that I could smell. That I might be producing an odor.. ",
  },
  p46: {
    i1: "A gentle breeze stimulates my skin. And the warmth and light from the sun seems subtle. ",
  },
  p47: {
    i1: "We’ll burn alive, kill everyone. But picture it, nice and relaxed, almost euphoric. ",
  },
  p48: {
    i1: "[9.8.11] Is my heart forever fated to be mute? The people around me will not allow me to speak freely. ",
  },
  p49: {
    i1: "That light which causes the contours of your face to look so angelic. ",
  },
  p50: {
    i1: "You are the peak of my aspirations to be as beautiful as you are to me. Oh if I could be as beautiful as you are to me…. ",
  },
  p51: { i1: "A plea to the importance of a library. " },
  p52: {
    i1: "You could describe the behavior of the human race completely by simply stating $49.99 ",
  },
  p53: {
    i1: "Potential energy is always growing. Just as other energy is being expelled.  ",
  },
  p54: {
    i1: "So why prevent people from feeling pain? Isn’t that the same as hurting them in the long run? ",
  },
  p55: { i1: "A conversation between two lunatics…. " },
  p56: {
    i1: "[9.24.11] Some lights you can only see from the perspective of being completely surrounded by darkness. ",
  },
  p57: {
    i1: "Why won't you assholes just let me die? I filled out a “do not recessitate” form you motherffuckers better not keepme alive. ",
  },
  p58: {
    i1: "That’s the hard thing. Trying to write as if you were someone else. ",
  },
  p59: {
    i1: "I’m afraid that even in my writing, in the place where I am free to be completely honest, I’m not. ",
  },
  p60: {
    i1: "I will explain, or try to explain my troubles to this blank sheet of paper. ",
  },
  p61: {
    i1: "I saw the light, comin through the trees. It's the moment of my ascension, my last breath had come… ",
  },
  p62: { i1: "The power to pull apart that which was once whole. " },
  p63: { i1: "I never knew that I could be myself at a party." },
  p64: {
    i1: "I can’t believe that when I was with you, when we were recently together, all I could talk about was my bookbinding. ",
  },
  p65: { i1: "Drawing of embryos " },
  p66: { i1: "It’s not manic and depression, it is manic and change. " },
  p67: { i1: "The waiter shorted me on my change… " },
  p68: { i1: "[10.8.11]It’s dark and all the doors are locked…. " },
  p69: {
    i1: "I feel like clean is not always clean and there is a purity that comes from being dirty. ",
  },
  p70: { i1: "There’s no limit to what I can create. " },
  p71: { i1: "Why am I so uncreative when it comes to conversation? " },
  p72: {
    i1: "Back in the cooler there are these tiny little Velosa Raptors that run around.. ",
  },
  p73: {
    i1: "Sometimes for brief moments I will fall into different states of consciousness. ",
  },
  p74: {
    i1: "'When you comfort me, it doesn’t bring me comfort actually. When you comfort me.' -Feist ",
  },
  p75: { i1: "Your encouragement and praise does little to empower me. " },
  p76: {
    i1: "It is an infected, puss filled, thorn in my side when I see someone foolishly wasting the infinite potential of their mind.  ",
  },
  p77: { i1: "In everything there must be maintained a balance. " },
  p78: {
    i1: "I keepwanting to formulate a piece of writing that will pull me into my creative space. ",
  },
  p79: { i1: "[Environments and States] " },
  p80: {
    i1: "The economy is so bad that the lady at the Bus station had to cut back on her games. No 3-D DS this year. ",
  },
  p81: {
    i1: "if you watch me… That is.. Just keepwatching and your life will be happy and carefree. ",
  },
  p82: { i1: "People are forced to make a decision to save their asses. " },
  p83: { i1: "We do not know how to control our own minds. " },
  p84: {
    i1: "The only way its gonna work is if the powerful are allowed to have their way and the weak realize the power they gain from having to deal with the struggle. ",
  },
  p85: {
    i1: "It would be impossible to have a tiny star as a power source because.. ",
  },
  p86: {
    i1: "[11.19.11] The archeologist, treasure hunter and conspiracy theorist Ron Pastore came to visit us tonight. ",
  },
  p87: {
    i1: "Several time throughout the evening we commented about thee potentially hazardous results of spilling the beans about all this. ",
  },
  p88: { i1: "It becomes your interaction with the universe. " },
  p89: {
    i1: "Gradually they are encroaching on our lives. we lose the freedom to decide.. ",
  },
  p90: {
    i1: "[11.30.11] I have no desire to become famous or rich or well-known. ",
  },
  p91: {
    i1: "Gradually they are encroaching on our lives. Gradually we lose the freedom to determine what is and is not in our environment.  ",
  },
  p92: {
    i1: "I am surrounded by a wealth of resources. It’s such an adventure using different materials to create things. ",
  },
  p93: { i1: "That should have been the goal for some time now.  " },
  p94: {
    i1: "Worthy hands are usually those which are calloused and rough. ",
    i2: "I keepexpecting those things around me to bring me serenity ",
    i3: "Space time is a blanket, a 3-D blanket. ",
    i4: "Light seen shining through a keywhole in the door... ",
  },
  p95: {
    i1: "The minds of today have unfortunately became infected with a disease. ",
  },
  p96: {
    i1: "The answer comes easily when all one must do is consider the opposite of the norm and a whole new world of possibilities floods the mind. ",
  },
  p97: { i1: "To achieve focus you must first find your bearings, " },
  p98: { i1: "The place looks pretty quaint from the outside. " },
  p99: { i1: "The feeling of being cradled by the soil. " },
  p100: { i1: "A city needs to be treated like a human being " },
  p101: { i1: "drawing " },
  p102: { i1: "blank " },
  p103: { i1: "Drawing " },
  p104: { i1: "blank " },
  p105: { i1: "Drawing " },
  p106: { i1: "blank " },
  p107: { i1: "Flipping through mind spaces a mile a minute. " },
  p108: {
    i1: "My challenge is to understand why all these minds have chosen to harbor certain thoughts.  ",
  },
  p109: {
    i1: "I have came to the realization that I often act contrary to what I would have imagined I’d acted when considered from an outside perspective. ",
  },
  p110: {
    i1: "I’m like a shower in a drought but then it freezes during the middle of the night… ",
  },
  p111: { i1: "Just imagine having to second guess everything that you do. " },
  p112: {
    i1: "Beautiful girls will not stand to be with someone who doesn’t cultivate their outward appearance.  ",
  },
  p113: { i1: "On a jet the environment is quite alien. " },
  p114: {
    i1: "[1.7.12] Writing would have been much easier to promote before the development off all these distractions of the mind. ",
  },
  p115: {
    i1: "I refrain from speaking not for lack of words but due to a lack of an audience. ",
  },
  p116: { i1: "[1.11.12] Thoughts are a flame above my head. " },
  p117: {
    i1: "I may not have the equipment or the formal training to be a sound engineer, but thats not gonna stopme. ",
  },
  p118: { i1: "I am sailing,.. to a far shore… " },
  p119: {
    i1: "I always figured that i would end upbeing court jester to the masses. ",
  },
};

// Actual Section

// 1. Create thumbnail function
function createThumb(pagenum) {
  let imgfldr = "images/";
  let source = imgfldr + "pg" + pagenum + ".jpg";
  document.write('<div class="thumb"><a href="' + source + '">');
  document.write(
    '<img src="' + source + '" alt="pg' + pagenum + '"></a></div>'
  );
}

// 2. Create Details
function createDetails(journal_name, pagenum) {
  let index = 1;
  document.write('<div class="details">');
  document.write(
    '<h2 class="title">' +
      journal_name +
      " - pg " +
      pagenum +
      ' <span style="font-size:1ch;">of 119</span></h2><ul>'
  );
  for (let i = 1; i < 10; i++) {
    var page_ref = "p" + pagenum;
    var index_ref = "i" + index;
    var stop = owl_index[page_ref][index_ref];
    if (stop == undefined) {
      break;
    }
    document.write("<li>" + owl_index[page_ref][index_ref] + "</li>");
    index++;
  }

  document.write("</ul></div>");
}

// 3. Create Details Page
function createDetailsPage(pagenum) {
  document.write(
    '<div class="right"><a href="details/pg' + pagenum + '.html">'
  );
  document.write("Details</a></div>");
}

// 4. Create Node

function createNode(pagenum) {
  for (let i = 1; i <= 30; i++) {
    var page_ref = "p" + pagenum;
    var stop = owl_index[page_ref];
    if (stop == undefined) {
      break;
    }
    document.write('<div class="node">');
    createThumb(pagenum);
    createDetails("Owl Journal", pagenum);
    createDetailsPage(pagenum);
    document.write("</div>");
    pagenum++;
  }
}
