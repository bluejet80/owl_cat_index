const main = [
  "Learning",
  "Introspection",
  "Environment",
  "Behavior",
  "Nature",
  "Mechanical",
];

const categories = {
  Learning: [
    "book notes", // 0
    "writing", // 1
    "conditioning the mind", // 2
    "history", // 3
    "study habits", // 4
    "music", // 5
    "developing a skill", // 6
    "romantic period", // 7
    "philosophy", // 8
    "education", // 9
    "math", // 10
    "systems theory", // 11
    "Choices", // 12
    "Books", // 13
    "Problem Solving", // 14
      
  ],
  Introspection: [
    "perspective", // 0
    "image of ourselves", // 1
    "dreams", // 2
    "ideas", // 3
    "creative perspective", // 4
    "motivation", // 5
    "stress", // 6
    "joy", // 7
    "imagination", // 8
    "the blues", // 9
    "spirituality", // 10
    "distraction", // 11
    "advice", // 12
    "subconscious", // 13
    "dicipline", // 14
    "experience", // 15
    "thankfulness", // 16
    "strength", // 17
    "weakness", // 18
    "contentment", // 19
    "ego", // 20
  ],
  Environment: [
    "government", // 0
    "society", // 1
    "media", // 2
    "internet", // 3
    "habits and routines", // 4
    "deception of desire", // 5
    "isreal", // 6
    "relationships", // 7
    "dark", // 8
    "freedom", // 9
    "colorado", // 10
    "sports", // 11
    "safety", // 12
    "wyoming", // 13
    "liquor store", // 14
    "old age", // 15
    "art", // 16
    "alchohol", // 17
    "kansas", // 18
    "planet earth", // 19
    "youth", // 20
    "headlines", // 21
    "before technology", // 22
    "loss", // 23
    "chaos", // 24
  ],
  Behavior: [
    "watching television", // 0
    "healthy behavior", // 1
    "unhealthy behavior", // 2
    "expression", // 3
    "becoming angry", // 4
    "steps of the journey", // 5
    "sacrifice", // 6
    "travelling", // 7
    "observation", // 8
    "bravery and courage", // 9
    "self justification", // 10
    "solitude", // 11
    "self presentation", // 12
    "conflict", // 13
    "accomplishment", // 14
    "destruction", // 15
    "organization", // 16
    "greed", // 17
    "love", // 18
    "struggle", // 19
    "waste and excess", // 20
    "patience", // 21
    "hard work", // 22
    "exploration", // 23
    "description", // 24
    "relaxation", // 25
    "physical affection", // 26
    "communication", // 27
    "prevent discomfort", // 28
  ],
  Nature: [
    "adaptation", // 0
    "physical body", // 1
    "birds", // 2
    "physical forces", // 3
    "river", // 4
    "natures example", // 5
    "beauty of nature", // 6
    "death", // 7
    "countryside", // 8
    "the mind", // 9
    "trees", // 10
    "cows", // 11
    "hands", // 12
    "evolution", // 13
    "birth", // 14
    "the senses", // 15
    "color", // 16
    "nurturing", // 17
  ],
  Mechanical: [
    "transportation", // 0
    "logic gates", // 1
    "wear and tear", // 2
    "deconstruction", // 3
    "build", // 4
    "defense mechanism", // 5
    "time", // 6
    "trains", // 7
    "cars", // 8
  ],
  printCategories(page) {
    const pickles = [];
    for (const item of main) {
      const bread = eval(`owl_index.${page}.cat.${item}`);
      const noodles = eval(`categories.${item}`);
      const vegies = [];
      for (const num of bread) {
        vegies.push(noodles[num]);
      }
      pickles.push(...vegies);
    }
    console.log(`Page ${page} has categories of ${pickles.join("\n and ")}`);
    const date = eval(`owl_index.${page}.cat['Date']`);
    if (date) console.log("Page is dated");
  },
  getCategories(page) {
    const pickles = [];
    for (const item of main) {
      const bread = eval(`owl_index.${page}.cat?.${item}`);
      const noodles = eval(`categories.${item}`);
      const vegies = [];
      if (bread === undefined) break;
      for (const num of bread) {
        vegies.push(noodles[num]);
      }
      pickles.push(...vegies);
    }
    return pickles;
  },
  searchPages(category) {
    const resultPages = [];
    const pages = Object.keys(owl_index); // array of pages
    for (const item of pages) {
      const pageCat = this.getCategories(item); // array of categories
      for (const value of pageCat) {
        if (category === value) {
          resultPages.push(item);
        }
      }
    }
    return resultPages;
  },
};

const owl_index = {
  p1: {
    i1: "Quotes; I felt this evening, in the course of a solitary walk in the most beautiful weather",
    cat: {
      Learning: [0, 1],
      Introspection: [7],
      Environment: [],
      Behavior: [9, 5],
      Nature: [6],
      Mechanical: [3],
      Date: false,
    },
  },
  p2: {
    i1: "If they so wish to speak to me then let them make the effort to come to where I am.",
    i2: "I so dispise the everlasting tactics of envious routine against growing talent.",
    cat: {
      Learning: [0],
      Introspection: [0],
      Environment: [],
      Behavior: [5, 2],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p3: {
    i1: "[7.28.11] I can never tell whether I am being incredibly lazy or just giving myself a break.",
    cat: {
      Learning: [3],
      Introspection: [5, 6],
      Environment: [1],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: true,
    },
  },
  p4: {
    i1: "Whether we allow it to control us or if we choose to perform the necessary work to understand how it works??? ",
    cat: {
      Learning: [2],
      Introspection: [0],
      Environment: [1, 5],
      Behavior: [6],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p5: {
    i1: "Soon I will be going on an adventure to an alien world.",
    cat: {
      Learning: [],
      Introspection: [0, 8],
      Environment: [],
      Behavior: [7, 1],
      Nature: [5],
      Mechanical: [],
      Date: false,
    },
  },

  p6: {
    i1: "I am filled with great enthusiasm when I read about the triumph of 'Hernani' ",
    cat: {
      Learning: [3, 7, 1],
      Introspection: [7],
      Environment: [1],
      Behavior: [9],
      Nature: [],
      Mechanical: [],
      Date: true,
    },
  },
  p7: {
    i1: "So many things are just discarded by our society and pass??? ",
    i2: "They drilled holes in my head...",
    i3: "Other peoples justification of thie life",
    cat: {
      Learning: [],
      Introspection: [8, 6, 1],
      Environment: [1],
      Behavior: [10],
      Nature: [1, 2],
      Mechanical: [],
      Date: false,
    },
  },
  p8: {
    i1: "Probably the greatest human invention of the wheel, the beginning of commerce.",
    i2: "Heres a bunch of people that could be amazing but they choose not to be",
    i3: "Its ok to want to be alone",
    cat: {
      Learning: [3, 6],
      Introspection: [3, 1, 5],
      Environment: [1, 4],
      Behavior: [11],
      Nature: [],
      Mechanical: [4, 5],
      Date: false,
    },
  },
  p9: {
    i1: "Did she ask me to teach her how to play the cello because she wanted to have sex with me? ",
    i2: "Its hard to keep a positive mental state with all the contrary..",
    i3: "Guile is the finest instrument of men of Genius",
    i4: "LOOKUP: Prague-Astronomical Clock - YouTube",
    cat: {
      Learning: [3, 7],
      Introspection: [11, 6, 12],
      Environment: [7, 3],
      Behavior: [1],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p10: {
    i1: "Notes from ???Maldoror??? by Lautreamont",
    i2: "You desire riches, palaces, fame?",
    i3: "Tired of life and ashamed of walking amongst beings..",
    cat: {
      Learning: [0],
      Introspection: [],
      Environment: [5, 8],
      Behavior: [6, 13, 11],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p11: {
    i1: "Imagine if you anticipated being reincarnated 150yrs from now and you wanted to leave a hint for yourself. ",
    i2: "All philosophy leads to the realization that nothing matters.",
    cat: {
      Learning: [8],
      Introspection: [5, 8],
      Environment: [5],
      Behavior: [3],
      Nature: [5],
      Mechanical: [6],
      Date: false,
    },
  },
  p12: {
    i1: "The essence is captured in the image of a train, a steam locomotive??? ",
    cat: {
      Learning: [],
      Introspection: [4],
      Environment: [],
      Behavior: [8],
      Nature: [3],
      Mechanical: [7],
      Date: false,
    },
  },
  p13: {
    i1: "The steam creates a magical atmosphere as if the magician just caused??? ",
    cat: {
      Learning: [],
      Introspection: [4],
      Environment: [],
      Behavior: [8],
      Nature: [3],
      Mechanical: [7],
      Date: false,
    },
  },
  p14: {
    i1: "A clean window means one of two things either humans rarely come in contact with it or??? ",
    i2: "Just step inside, shut the door, and hit the forward button..",
    i3: "Emotions were created to facilitate communication and language.",
    cat: {
      Learning: [1],
      Introspection: [8, 13],
      Environment: [1, 9],
      Behavior: [15],
      Nature: [5],
      Mechanical: [2],
      Date: false,
    },
  },
  p15: {
    i1: "Life is partially taking risks until you die.",
    i2: "Take those shitty car parts..",
    i3: "The pieces seem to be falling into place",
    i4: "A dictatorship is required",
    cat: {
      Learning: [],
      Introspection: [14],
      Environment: [],
      Behavior: [16],
      Nature: [7],
      Mechanical: [8],
      Date: false,
    },
  },
  p16: {
    i1: "If Israel believed truly what the bible teaches then they would gladly give their state??? ",
    i2: "You have to be the ugliest person ive ever met...",
    cat: {
      Learning: [],
      Introspection: [10, 4],
      Environment: [6],
      Behavior: [6, 17],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p17: {
    i1: "Huge truck pulling an enclosed car trailer semis, suv, cars??? ",
    cat: {
      Learning: [],
      Introspection: [8],
      Environment: [],
      Behavior: [8, 7],
      Nature: [],
      Mechanical: [8],
      Date: false,
    },
  },
  p18: {
    i1: "Unnatural rest stops, oil barrels, train tracks, strange objects??? ",
    i2: "Wyoming, barron rolling hills...",
    cat: {
      Learning: [],
      Introspection: [4, 8],
      Environment: [10],
      Behavior: [7, 8],
      Nature: [8],
      Mechanical: [],
      Date: false,
    },
  },
  p19: {
    i1: "Weak wrists. Joints take all the stress. less moving parts means less things to fix.",
    cat: {
      Learning: [9, 10, 1],
      Introspection: [6, 2, 3],
      Environment: [1],
      Behavior: [],
      Nature: [],
      Mechanical: [2, 8],
      Date: false,
    },
  },
  p20: {
    i1: "The television promotes sports so people who watch tv are passionate about sports. ",
    i2: "Notes from 'Evil Eye' by Hakim Bey ",
    i3: "Sometimes I look upon couples with indignation...",
    cat: {
      Learning: [0],
      Introspection: [8, 11],
      Environment: [11, 7, 9],
      Behavior: [0, 18],
      Nature: [1],
      Mechanical: [],
      Date: false,
    },
  },
  p21: {
    i1: "All the things that populate the hyway environment in order to ensure people's safety. ",
    i2: "In some ways I am particularly intersted in the young mind.",
    i3: "Life has a tendency to cause large channels of thought to be carved in the mind",
    i4: "Its 4am Im going 75 down the hyway dodging semis",
    cat: {
      Learning: [],
      Introspection: [15],
      Environment: [12, 1],
      Behavior: [7, 8, 5],
      Nature: [9],
      Mechanical: [],
      Date: false,
    },
  },
  p22: {
    i1: "I look toward the horizon and whatever i wish to see is drawn there. ",
    i2: "It was a nice view off Cemetary Road",
    cat: {
      Learning: [],
      Introspection: [8],
      Environment: [13],
      Behavior: [8, 7],
      Nature: [6, 10],
      Mechanical: [],
      Date: false,
    },
  },
  p23: {
    i1: "What do the CO-OPs Symbolize? All old but still standing tall out on the plains. ",
    cat: {
      Learning: [3],
      Introspection: [],
      Environment: [9],
      Behavior: [16],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p24: {
    i1: "Study the Preface to Cromwell in order to define the drama. ",
    i2: "Hopefully working at the Liquor Store will cause me to get fed up and say what needs to be said",
    i3: "The drama that is my life, the last struggle.",
    cat: {
      Learning: [3, 0, 7],
      Introspection: [9, 13, 12],
      Environment: [7],
      Behavior: [3],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p25: {
    i1: "Constantly they peel forth. It is all I can do to ignore them and continue the swift motion of my arms. ",
    cat: {
      Learning: [3, 7],
      Introspection: [6],
      Environment: [],
      Behavior: [3],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p26: {
    i1: "How do I overcome my social anxiety? ",
    i2: "These obsessed people. Doing something unnatural for so long that it becomes natural.",
    i3: "I will be like a tree and divide the drops of rain, so that you are not drowned by a single drop",
    cat: {
      Learning: [],
      Introspection: [6, 11, 8, 4],
      Environment: [1, 4],
      Behavior: [13, 2],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p27: {
    i1: "Unable to make the connection. Both halves are placed near one another but the reaction that was meant to happen never does. ",
    i2: "The Strength of the Unseen enemy",
    i3: "It seems to be some sort of accomplishment to wake up feeling like shit",
    cat: {
      Learning: [],
      Introspection: [6, 0],
      Environment: [7, 1],
      Behavior: [6],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p28: {
    i1: "That defines the challenge that I am faced with. Society tells people to relax and not work up a sweat. ",
    i2: "Its so awesome that if you take a single moment in history, that it branches out in all directions",
    i3: "Society as a person has been learning and evolving throughout time",
    cat: {
      Learning: [3],
      Introspection: [],
      Environment: [1],
      Behavior: [19, 5],
      Nature: [0],
      Mechanical: [],
      Date: false,
    },
  },
  p29: {
    i1: "Thats nothing, just wait til you see the big picture. ",
    i2: "The street lights do not depend on the cars..",
    i3: "People must be told when to start and stop.",
    cat: {
      Learning: [],
      Introspection: [0, 1],
      Environment: [12],
      Behavior: [5],
      Nature: [],
      Mechanical: [8],
      Date: false,
    },
  },
  p30: {
    i1: "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed- Blaise Pascal ",
    i2: "Hello all of you beautiful people. I wish to contribute to this amazing experience, the violin.",
    cat: {
      Learning: [0, 5],
      Introspection: [0],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p31: {
    i1: "[8.26.11] Notes from ???Incognito??? by David Eagleman ",
    i2: "Our brains are a universe of neurons",
    i3: "The voice seems ephemeral and ineffable, uncapturable.",
    cat: {
      Learning: [0, 1, 6, 2],
      Introspection: [0],
      Environment: [3],
      Behavior: [],
      Nature: [9, 0],
      Mechanical: [],
      Date: true,
    },
  },
  p32: {
    i1: "Notes from 'Incognito' by David Eagleman cont. ",
    i2: "Most of what we do and think and feel is not under our conscious control.",
    i3: "Consciousness is like a tiny stowaway on a transatlantic steamship... ",
    i4: "Brains are in the business of gathering information and steering behavior..",
    cat: {
      Learning: [0, 6, 2],
      Introspection: [13],
      Environment: [],
      Behavior: [],
      Nature: [9, 0],
      Mechanical: [],
      Date: false,
    },
  },
  p33: {
    i1: "You have surprisingly little access to what goes on behind the scenes. ",
    i2: "Galileo dethroned humanism and the earth from the center of the universe..",
    cat: {
      Learning: [3, 6, 2],
      Introspection: [13],
      Environment: [2],
      Behavior: [],
      Nature: [9, 0],
      Mechanical: [],
      Date: false,
    },
  },
  p34: {
    i1: "Your brain is situated in the dark but your mind constructs light. ",
    i2: "Here is an amazing consequence of the brains plasticity",
    i3: "Its so awesome to read something from this year and have it correspond...",
    cat: {
      Learning: [6, 2],
      Introspection: [13],
      Environment: [],
      Behavior: [9],
      Nature: [9, 0],
      Mechanical: [],
      Date: false,
    },
  },
  p35: {
    i1: "Poem Sanctuary ",
    cat: {
      Learning: [1],
      Introspection: [10, 7],
      Environment: [12],
      Behavior: [3],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p36: {
    i1: "The old man sits alone in his chair. The room is dark, the house is empty. ",
    cat: {
      Learning: [],
      Introspection: [15],
      Environment: [15, 1],
      Behavior: [8, 6, 10],
      Nature: [9, 7],
      Mechanical: [6],
      Date: false,
    },
  },
  p37: {
    i1: "It is bad that society has seemed to me to make it unhealthy for children to be educated by the elderly. ",
    i2: "There is power in drums, Spiritual Power",
    i3: "The countrys whole problem is the decline in interest for art",
    i4: "Alchohol was meant to be something that you added to life",
    i5: "There should be a push to understand the mind",
    cat: {
      Learning: [9, 2, 5],
      Introspection: [10],
      Environment: [1, 15, 16, 17],
      Behavior: [3],
      Nature: [9],
      Mechanical: [],
      Date: false,
    },
  },
  p38: {
    i1: "What causes a man to work his entire life and have nothing to show for it?",
    i2: "I'll stand next to you, and you put your arm around me",
    cat: {
      Learning: [],
      Introspection: [15],
      Environment: [5, 7],
      Behavior: [6, 14],
      Nature: [1],
      Mechanical: [],
      Date: false,
    },
  },
  p39: {
    i1: "What is so good about working at a liquor store? ",
    cat: {
      Learning: [],
      Introspection: [16],
      Environment: [14, 1],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p40: {
    i1: "Kansas is raised upabove the rest of the US people are looking over the edge, trying not to fall off. ",
    i2: "Countries are different planets warring with one another",
    i3: "A huge bunch of grass sticking off the planet sized cow eating",
    i4: "Praise writing, praise handwriting, praise hand",
    i5: "Two groups of kids with a broken toy...",
    cat: {
      Learning: [1, 9, 6],
      Introspection: [8, 0, 5],
      Environment: [18, 0, 1, 19, 20],
      Behavior: [8, 13,],
      Nature: [11, 12],
      Mechanical: [9],
      Date: false,
    },
  },
  p41: {
    i1: "I dont think that I should allow myself to get worked up by these fanatics that forecast the end of our individual rights. ",
    i2: "Headlines: 90% of people surveyed feel insignificant",
    i3: "Why am I so anxious in certain environments?",
    i4: "A discarded shop vac filled with...",
    cat: {
      Learning: [],
      Introspection: [0, 6],
      Environment: [1, 9, 21],
      Behavior: [1, 20],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p42: {
    i1: "Why does it seem so difficult to promote and get people interested in writing? ",
    i2: "Worthy hands are usually those hands that are callosed and rough.",
    cat: {
      Learning: [1],
      Introspection: [5, 0, 6, 15, 17],
      Environment: [22, 1, 0],
      Behavior: [3, 21, 6, 9, 22],
      Nature: [],
      Mechanical: [9, 2],
      Date: false,
    },
  },
  p43: {
    i1: "The dramas that play out before us day after day are very entertaining to watch. ",
    i2: "These fucking people and their lavishly adorned fingers.",
    cat: {
      Learning: [],
      Introspection: [0],
      Environment: [],
      Behavior: [8, 2, 10, 17, 20, 2, 12],
      Nature: [12],
      Mechanical: [],
      Date: false,
    },
  },
  p44: {
    i1: "Am I not complete, from the moment I open my eyes, lying bare upon my bed",
    cat: {
      Learning: [],
      Introspection: [0, 19, 1],
      Environment: [5, 22],
      Behavior: [10, 0, 2],
      Nature: [13, 6, 9],
      Mechanical: [],
      Date: false,
    },
  },
  p45: {
    i1: "I think there is a chance that I could smell. That I might be producing an odor.. ",
    cat: {
      Learning: [1, 8],
      Introspection: [1, 0, 6],
      Environment: [1, 2],
      Behavior: [0],
      Nature: [1],
      Mechanical: [],
      Date: false,
    },
  },
  p46: {
    i1: "A gentle breeze stimulates my skin. And the warmth and light from the sun seems subtle. ",
    i2: "A rice and water fast with a little eating once in a while.",
    cat: {
      Learning: [],
      Introspection: [7, 1, 19, 16],
      Environment: [],
      Behavior: [24, 25, 6, 20],
      Nature: [6, 9],
      Mechanical: [],
      Date: false,
    },
  },
  p47: {
    i1: "We'll burn alive, kill everyone. But picture it, nice and relaxed, almost euphoric. ",
    i2: "Caveman walks around exploring his surroundings.",
    cat: {
      Learning: [9, 2, 4, 3],
      Introspection: [7, 20],
      Environment: [],
      Behavior: [15, 23, 8],
      Nature: [7, 14, 3, 9, 5],
      Mechanical: [],
      Date: false,
    },
  },
  p48: {
    i1: "[9.8.11] Is my heart forever fated to be mute? The people around me will not allow me to speak freely. ",
    cat: {
      Learning: [12],
      Introspection: [9, 1, 14, 6, 2],
      Environment: [7],
      Behavior: [26, 22],
      Nature: [],
      Mechanical: [],
      Date: true,
    },
  },
  p49: {
    i1: "That light which causes the contours of your face to look so angelic. ",
    cat: {
      Learning: [],
      Introspection: [8, 9, 1],
      Environment: [7],
      Behavior: [24, 18, 26, 10],
      Nature: [1],
      Mechanical: [],
      Date: false,
    },
  },
  p50: {
    i1: "You are the peak of my aspirations to be as beautiful as you are to me. Oh if I could be as beautiful as you are to me. ",
    i2: "The introduction is just a summary of the book.",
    cat: {
      Learning: [1, 5],
      Introspection: [4, 8, 6],
      Environment: [7, 4],
      Behavior: [26],
      Nature: [15, 16, 9, 0],
      Mechanical: [],
      Date: true,
    },
  },
  p51: {
    i1: "A plea to the importance of a library.",
    cat: {
      Learning: [13],
      Introspection: [4, 14, 12],
      Environment: [16],
      Behavior: [27, 14, 21, 22],
      Nature: [5],
      Mechanical: [9],
      Date: false,
    },
  },
  p52: {
    i1: "You could describe the behavior of the human race completely by simply stating $49.99 ",
    i2: "A major band is in the recording studio recording their fifth album.",
    cat: {
      Learning: [2, 5],
      Introspection: [6],
      Environment: [1, 2, 5, 23],
      Behavior: [3],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p53: {
    i1: "Potential energy is always growing. Just as other energy is being expelled.",
    i2: "You start off with a goal of helping people, of trying to figure out a better method..",
    cat: {
      Learning: [14],
      Introspection: [7, 12],
      Environment: [1, 5],
      Behavior: [20, 2, 15, 1],
      Nature: [3, 17, 19],
      Mechanical: [],
      Date: false,
    },
  },
  p54: {
    i1: "So why prevent people from feeling pain? Isn't that the same as hurting them in the long run? ",
    cat: {
      Learning: [],
      Introspection: [7, 13],
      Environment: [9, 1, 14, 24, 5],
      Behavior: [1, 28, 13, 19],
      Nature: [0],
      Mechanical: [],
      Date: false,
    },
  },
  p55: {
    i1: "A conversation between two lunatics. ",
    i2: "It was much easier to get a pen and notebook this time.",
    i3: "Each page is a different person a different personality..",
    i4: "The nuclear bomb is a tool to create suns or stars...",
    cat: {
      Learning: [1],
      Introspection: [0, 4, 8, 14],
      Environment: [],
      Behavior: [8],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p56: {
    i1: "[9.24.11] Some lights you can only see from the perspective of being completely surrounded by darkness. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p57: {
    i1: "Why won't you assholes just let me die? I filled out a ???do not recessitate??? form you motherffuckers better not keepme alive. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p58: {
    i1: "That???s the hard thing. Trying to write as if you were someone else. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p59: {
    i1: "I???m afraid that even in my writing, in the place where I am free to be completely honest, I???m not. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p60: {
    i1: "I will explain, or try to explain my troubles to this blank sheet of paper. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p61: {
    i1: "I saw the light, comin through the trees. It's the moment of my ascension, my last breath had come??? ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p62: {
    i1: "The power to pull apart that which was once whole. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p63: {
    i1: "I never knew that I could be myself at a party.",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p64: {
    i1: "I can???t believe that when I was with you, when we were recently together, all I could talk about was my bookbinding. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p65: {
    i1: "Drawing of embryos ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p66: {
    i1: "It???s not manic and depression, it is manic and change. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p67: {
    i1: "The waiter shorted me on my change??? ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p68: {
    i1: "[10.8.11]It???s dark and all the doors are locked???. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p69: {
    i1: "I feel like clean is not always clean and there is a purity that comes from being dirty. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p70: {
    i1: "There???s no limit to what I can create. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p71: {
    i1: "Why am I so uncreative when it comes to conversation? ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p72: {
    i1: "Back in the cooler there are these tiny little Velosa Raptors that run around.. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p73: {
    i1: "Sometimes for brief moments I will fall into different states of consciousness. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p74: {
    i1: "'When you comfort me, it doesnt bring me comfort actually. When you comfort me.' -Feist ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p75: {
    i1: "Your encouragement and praise does little to empower me. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p76: {
    i1: "It is an infected, puss filled, thorn in my side when I see someone foolishly wasting the infinite potential of their mind.  ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p77: {
    i1: "In everything there must be maintained a balance. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p78: {
    i1: "I keepwanting to formulate a piece of writing that will pull me into my creative space. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p79: {
    i1: "[Environments and States] ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p80: {
    i1: "The economy is so bad that the lady at the Bus station had to cut back on her games. No 3-D DS this year. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p81: {
    i1: "if you watch me??? That is.. Just keepwatching and your life will be happy and carefree. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p82: {
    i1: "People are forced to make a decision to save their asses. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p83: {
    i1: "We do not know how to control our own minds. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p84: {
    i1: "The only way its gonna work is if the powerful are allowed to have their way and the weak realize the power they gain from having to deal with the struggle. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p85: {
    i1: "It would be impossible to have a tiny star as a power source because.. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p86: {
    i1: "[11.19.11] The archeologist, treasure hunter and conspiracy theorist Ron Pastore came to visit us tonight. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p87: {
    i1: "Several time throughout the evening we commented about thee potentially hazardous results of spilling the beans about all this. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p88: {
    i1: "It becomes your interaction with the universe. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p89: {
    i1: "Gradually they are encroaching on our lives. we lose the freedom to decide.. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p90: {
    i1: "[11.30.11] I have no desire to become famous or rich or well-known. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p91: {
    i1: "Gradually they are encroaching on our lives. Gradually we lose the freedom to determine what is and is not in our environment.  ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p92: {
    i1: "I am surrounded by a wealth of resources. It???s such an adventure using different materials to create things. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p93: {
    i1: "That should have been the goal for some time now.  ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p94: {
    i1: "Worthy hands are usually those which are calloused and rough. ",
    i2: "I keepexpecting those things around me to bring me serenity ",
    i3: "Space time is a blanket, a 3-D blanket. ",
    i4: "Light seen shining through a keywhole in the door... ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p95: {
    i1: "The minds of today have unfortunately became infected with a disease. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p96: {
    i1: "The answer comes easily when all one must do is consider the opposite of the norm and a whole new world of possibilities floods the mind. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p97: {
    i1: "To achieve focus you must first find your bearings, ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p98: {
    i1: "The place looks pretty quaint from the outside. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p99: {
    i1: "The feeling of being cradled by the soil. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p100: {
    i1: "A city needs to be treated like a human being ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p101: {
    i1: "drawing ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p102: { i1: "blank " },
  p103: {
    i1: "Drawing ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p104: { i1: "blank " },
  p105: {
    i1: "Drawing ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p106: { i1: "blank " },
  p107: {
    i1: "Flipping through mind spaces a mile a minute. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p108: {
    i1: "My challenge is to understand why all these minds have chosen to harbor certain thoughts.  ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p109: {
    i1: "I have came to the realization that I often act contrary to what I would have imagined I???d acted when considered from an outside perspective. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p110: {
    i1: "I???m like a shower in a drought but then it freezes during the middle of the night??? ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p111: {
    i1: "Just imagine having to second guess everything that you do. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p112: {
    i1: "Beautiful girls will not stand to be with someone who doesn???t cultivate their outward appearance.  ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p113: {
    i1: "On a jet the environment is quite alien. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p114: {
    i1: "[1.7.12] Writing would have been much easier to promote before the development off all these distractions of the mind. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p115: {
    i1: "I refrain from speaking not for lack of words but due to a lack of an audience. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p116: {
    i1: "[1.11.12] Thoughts are a flame above my head. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p117: {
    i1: "I may not have the equipment or the formal training to be a sound engineer, but thats not gonna stopme. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p118: {
    i1: "I am sailing,.. to a far shore??? ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
  },
  p119: {
    i1: "I always figured that i would end upbeing court jester to the masses. ",
    cat: {
      Learning: [],
      Introspection: [],
      Environment: [],
      Behavior: [],
      Nature: [],
      Mechanical: [],
      Date: false,
    },
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

categories.printCategories("p21");
const resultPages = categories.searchPages("history");
console.log(...resultPages);
