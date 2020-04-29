// 500 Commonly used six-letter words I started with,
// randomly choosing 50, ended up using 20
let sixLetterWords = `abroad
accept
access
across
acting
action
active
actual
advice
advise
affect
afford
afraid
agency
agenda
almost
always
amount
animal
annual
answer
anyone
anyway
appeal
appear
around
arrive
artist
aspect
assess
assist
assume
attack
attend
august
author
avenue
backed
barely
battle
beauty
became
become
before
behalf
behind
belief
belong
berlin
better
beyond
bishop
border
bottle
bottom
bought
branch
breath
bridge
bright
broken
budget
burden
bureau
button
camera
cancer
cannot
carbon
career
castle
casual
caught
center
centre
chance
change
charge
choice
choose
chosen
church
circle
client
closed
closer
coffee
column
combat
coming
common
comply
copper
corner
costly
county
couple
course
covers
create
credit
crisis
custom
damage
danger
dealer
debate
decade
decide
defeat
defend
define
degree
demand
depend
deputy
desert
design
desire
detail
detect
device
differ
dinner
direct
doctor
dollar
domain
double
driven
driver
during
easily
eating
editor
effect
effort
eighth
either
eleven
emerge
empire
employ
enable
ending
energy
engage
engine
enough
ensure
entire
entity
equity
escape
estate
ethnic
exceed
except
excess
expand
expect
expert
export
extend
extent
fabric
facing
factor
failed
fairly
fallen
family
famous
father
fellow
female
figure
filing
finger
finish
fiscal
flight
flying
follow
forced
forest
forget
formal
format
former
foster
fought
fourth
French
friend
future
garden
gather
gender
german
global
golden
ground
growth
guilty
handed
handle
happen
hardly
headed
health
height
hidden
holder
honest
impact
import
income
indeed
injury
inside
intend
intent
invest
island
itself
jersey
joseph
junior
killed
labour
latest
latter
launch
lawyer
leader
league
leaves
legacy
length
lesson
letter
lights
likely
linked
liquid
listen
little
living
losing
lucent
luxury
mainly
making
manage
manner
manual
margin
marine
marked
market
martin
master
matter
mature
medium
member
memory
mental
merely
merger
method
middle
miller
mining
minute
mirror
mobile
modern
modest
module
moment
morris
mostly
mother
motion
moving
murder
museum
mutual
myself
narrow
nation
native
nature
nearby
nearly
nights
nobody
normal
notice
notion
number
object
obtain
office
offset
online
option
orange
origin
output
oxford
packed
palace
parent
partly
patent
people
period
permit
person
phrase
picked
planet
player
please
plenty
pocket
police
policy
prefer
pretty
prince
prison
profit
proper
proven
public
pursue
raised
random
rarely
rather
rating
reader
really
reason
recall
recent
record
reduce
reform
regard
regime
region
relate
relief
remain
remote
remove
repair
repeat
replay
report
rescue
resort
result
retail
retain
return
reveal
review
reward
riding
rising
robust
ruling
safety
salary
sample
saving
saying
scheme
school
screen
search
season
second
secret
sector
secure
seeing
select
seller
senior
series
server
settle
severe
sexual
should
signal
signed
silent
silver
simple
simply
single
sister
slight
smooth
social
solely
sought
source
soviet
speech
spirit
spoken
spread
spring
square
stable
status
steady
stolen
strain
stream
street
stress
strict
strike
string
strong
struck
studio
submit
sudden
suffer
summer
summit
supply
surely
survey
switch
symbol
system
taking
talent
target
taught
tenant
tender
tennis
thanks
theory
thirty
though
threat
thrown
ticket
timely
timing
tissue
toward
travel
treaty
trying
twelve
twenty
unable
unique
united
unless
unlike
update
useful
valley
varied
vendor
versus
victim
vision
visual
volume
walker
wealth
weekly
weight
wholly
window
winner
winter
within
wonder
worker
wright
writer
yellow`;

let sixLetterWordArray = sixLetterWords.split("\n");

var randomSixLetterWord =
  sixLetterWordArray[Math.floor(Math.random() * sixLetterWordArray.length)];

//Beware, these are highly offensive words (slurs and derogatory terms) that I do not agree with the use of. They are listed below only to be filtered (removed) from my game.
let definitelyOffensiveWords = `ABO
ABOS
BAYWOP
BAYWOPS
BALDIE
BALDIES
BALDY
BOHUNK
BOHUNKS
BUCKRA
BUCKRAS
BULLDIKE
BULLDIKES
BULLDYKE
BULLDYKES
BUMBOY
BUMBOYS
CHOLA
CHOLAS
CHOLO
CHOLOS
COLOREDS
COMSYMP
COMSYMPS
CRIP
CRIPS
CUNT
CUNTS
DAGO
DAGOES
DAGOS
DARKEY
DARKEYS
DARKIE
DARKIES
DARKY 
DIKEY
DOGAN
DOGANS
DYKEY
fag
faggot
FAGGOTRY
FAGGOTRIES
FAGGOTY
FAGGY
FAGGIER
FAGGIEST
FATSO
FATSOES
FATSOS
FEMINAZI
FEMINAZIS
GINZO
GINZOES
GOOLIE
GOOLIES
GOY
GOYIM
GOYS
GOYISH
GOYISHE
GRAYBEARD
GRAYBEARDS
GREYBEARD
GREYBEARDS
HAOLE
HAOLES
HEBE
HEBES
HONKEY
HONKEYS
HONKIE
HONKIES
HONKY 
ho
hos
HUNKEY
HUNKEYS
HUNKIE
HUNKIES
JEW
JEWED
JEWING
JEWS
JIGABOO
JIGABOOS
KIKE
KIKES
LES
LESES
LESBO
LESBOS
LEZ
LEZZES
LEZZIE
LEZZIES
LEZZY
MICK
MICKS
NIGGER
NIGGERS
NITCHIE
NITCHIES
PAPISM
PAPISMS
PAPIST
PAPISTS
PAPISTIC
PAPISTRY
PAPISTRIES
PICANINNY
PICANINNIES
PICKANINNY
PICKANINNIES
PICKNEY
PICKNEYS
POLACK
POLACKS
POMMIE
POMMIES
POMMY
POOFS
POOFTAH
POOFTAHS
POOFTER
POOFTERS
POOFY
POOFIER
POOFIEST
POONTANG
POONTANGS
POOVE
POOVES
POPERY
POPERIES
POPISH
POPISHLY
RAGHEAD
RAGHEADS
redneck
REDSKIN
REDSKINS
SCHVARTZE
SCHVARTZES
SCHWARTZE
SCHWARTZES
SHEENEY
SHEENEYS
SHEENIE
SHEENIES
SHEGETZ
SHKOTZIM
SHEMALE
SHEMALES
SHICKSA
SHICKSAS
SHIKSA
SHIKSAS
SHIKSE
SHIKSES
SHIKSEH
SHIKSEHS
SHKOTZIM
SHVARTZE
SHVARTZES
SPIC
SPICS
SPICK
SPICKS
SPIK
SPIKS
SQUAW
SQUAWS
VENDU
VENDUS
WETBACK
WETBACKS
WHITIES
WOG
WOGS
WOGGISH
WOP
WOPS
WRINKLIE
WRINKLIES
YID
YIDS`;

let definitelyOffensiveWordsArray = definitelyOffensiveWords.split("\n");

var lowercaseDefinitelyOffensiveWordsArray = [
  "abo",
  "abos",
  "baldie",
  "baldies",
  "baldy",
  "baywop",
  "baywops",
  "bohunk",
  "bohunks",
  "buckra",
  "buckras",
  "bulldike",
  "bulldikes",
  "bulldyke",
  "bulldykes",
  "bumboy",
  "bumboys",
  "chola",
  "cholas",
  "cholo",
  "cholos",
  "coloreds",
  "comsymp",
  "comsymps",
  "crip",
  "crips",
  "cunt",
  "cunts",
  "dago",
  "dagoes",
  "dagos",
  "darkey",
  "darkeys",
  "darkie",
  "darkies",
  "darky ",
  "dikey",
  "dogan",
  "dogans",
  "dykey",
  "fag",
  "faggier",
  "faggiest",
  "faggot",
  "faggotries",
  "faggotry",
  "faggoty",
  "faggy",
  "fatso",
  "fatsoes",
  "fatsos",
  "feminazi",
  "feminazis",
  "ginzo",
  "ginzoes",
  "goolie",
  "goolies",
  "goy",
  "goyim",
  "goyish",
  "goyishe",
  "goys",
  "graybeard",
  "graybeards",
  "greybeard",
  "greybeards",
  "haole",
  "haoles",
  "hebe",
  "hebes",
  "ho",
  "honkey",
  "honkeys",
  "honkie",
  "honkies",
  "honky ",
  "hos",
  "hunkey",
  "hunkeys",
  "hunkie",
  "hunkies",
  "jew",
  "jewed",
  "jewing",
  "jews",
  "jigaboo",
  "jigaboos",
  "kike",
  "kikes",
  "les",
  "lesbo",
  "lesbos",
  "leses",
  "lez",
  "lezzes",
  "lezzie",
  "lezzies",
  "lezzy",
  "mick",
  "micks",
  "nigger",
  "niggers",
  "nitchie",
  "nitchies",
  "papism",
  "papisms",
  "papist",
  "papistic",
  "papistries",
  "papistry",
  "papists",
  "picaninnies",
  "picaninny",
  "pickaninnies",
  "pickaninny",
  "pickney",
  "pickneys",
  "polack",
  "polacks",
  "pommie",
  "pommies",
  "pommy",
  "poofier",
  "poofiest",
  "poofs",
  "pooftah",
  "pooftahs",
  "poofter",
  "poofters",
  "poofy",
  "poontang",
  "poontangs",
  "poove",
  "pooves",
  "poperies",
  "popery",
  "popish",
  "popishly",
  "raghead",
  "ragheads",
  "redneck",
  "redskin",
  "redskins",
  "schvartze",
  "schvartzes",
  "schwartze",
  "schwartzes",
  "sheeney",
  "sheeneys",
  "sheenie",
  "sheenies",
  "shegetz",
  "shemale",
  "shemales",
  "shicksa",
  "shicksas",
  "shiksa",
  "shiksas",
  "shikse",
  "shikseh",
  "shiksehs",
  "shikses",
  "shkotzim",
  "shkotzim",
  "shvartze",
  "shvartzes",
  "spic",
  "spick",
  "spicks",
  "spics",
  "spik",
  "spiks",
  "squaw",
  "squaws",
  "vendu",
  "vendus",
  "wetback",
  "wetbacks",
  "whities",
  "wog",
  "woggish",
  "wogs",
  "wop",
  "wops",
  "wrinklie",
  "wrinklies",
  "yid",
  "yids"
];

// Square bracket notation for word information_____________________________________________________________________________________________________

const gameWords = [
  {
    index: 0,
    startingWord: "formal",
    sixLetterWordsFromWordArray: ["formal"],
    fiveLetterWordsFromWordArray: ["flora", "foram", "molar", "moral"],
    fourLetterWordsFromWordArray: [
      "farl",
      "farm",
      "faro",
      "flam",
      "foal",
      "foam",
      "fora",
      "form",
      "from",
      "loaf",
      "loam",
      "marl",
      "mola",
      "mora",
      "oral",
      "roam",
      "rolf"
    ],
    threeLetterWordsFromWordArray: [
      "arf",
      "arm",
      "far",
      "for",
      "fro",
      "lam",
      "lar",
      "mar",
      "moa",
      "mol",
      "mor",
      "oaf",
      "oar",
      "ora",
      "ram",
      "rom"
    ]
  },

  {
    index: 1,
    startingWord: "spoken",
    sixLetterWordsFromWordArray: ["spoken"],
    fiveLetterWordsFromWordArray: [
      "kenos",
      "knops",
      "knosp",
      "opens",
      "peons",
      "pokes",
      "pones",
      "spoke"
    ],
    fourLetterWordsFromWordArray: [
      "eons",
      "epos",
      "keno",
      "kens",
      "keps",
      "knop",
      "kops",
      "noes",
      "nope",
      "nose",
      "okes",
      "ones",
      "open",
      "opes",
      "pens",
      "peon",
      "peso",
      "poke",
      "pone",
      "pons",
      "pose",
      "skep",
      "soke",
      "sone"
    ],
    threeLetterWordsFromWordArray: [
      "ens",
      "eon",
      "ken",
      "kep",
      "kop",
      "kos",
      "nos",
      "oes",
      "oke",
      "one",
      "ons",
      "ope",
      "ops",
      "ose",
      "pen",
      "pes",
      "sen",
      "son",
      "sop"
    ]
  },

  {
    index: 2,
    startingWord: "detect",
    sixLetterWordsFromWordArray: ["detect"],
    fiveLetterWordsFromWordArray: [],
    fourLetterWordsFromWordArray: ["cede", "cete", "deet", "teed"],
    threeLetterWordsFromWordArray: ["cee", "dee", "ted", "tee", "tet"]
  },

  {
    index: 3,
    startingWord: "prison",
    sixLetterWordsFromWordArray: ["orpins", "prions", "prison", "spinor"],
    fiveLetterWordsFromWordArray: [
      "irons",
      "noirs",
      "noris",
      "opsin",
      "ornis",
      "orpin",
      "pions",
      "pirns",
      "porns",
      "prion",
      "rosin"
    ],
    fourLetterWordsFromWordArray: [
      "inro",
      "ions",
      "iron",
      "nips",
      "noir",
      "nori",
      "pins",
      "pion",
      "pirn",
      "piso",
      "pois",
      "pons",
      "porn",
      "pros",
      "rins",
      "rips",
      "snip",
      "sori",
      "sorn",
      "spin"
    ],
    threeLetterWordsFromWordArray: [
      "ins",
      "ion",
      "nip",
      "nor",
      "nos",
      "ons",
      "ops",
      "ors",
      "pin",
      "pis",
      "poi",
      "pro",
      "psi",
      "rin",
      "rip",
      "sin",
      "sip",
      "sir",
      "son",
      "sop",
      "sri"
    ]
  },

  {
    index: 4,
    startingWord: "nobody",
    sixLetterWordsFromWordArray: ["nobody"],
    fiveLetterWordsFromWordArray: ["boody"],
    fourLetterWordsFromWordArray: [
      "body",
      "bond",
      "bony",
      "boon",
      "boyo",
      "doby",
      "yond"
    ],
    threeLetterWordsFromWordArray: [
      "bod",
      "boo",
      "boy",
      "don",
      "nob",
      "nod",
      "noo",
      "ono",
      "yob",
      "yod",
      "yon"
    ]
  },

  {
    index: 5,
    startingWord: "church",
    sixLetterWordsFromWordArray: ["church"],
    fiveLetterWordsFromWordArray: ["curch"],
    fourLetterWordsFromWordArray: [],
    threeLetterWordsFromWordArray: ["cru", "cur", "huh"]
  },

  {
    index: 6,
    startingWord: "artist",
    sixLetterWordsFromWordArray: ["artist", "strait", "strati", "traits"],
    fiveLetterWordsFromWordArray: [
      "airts",
      "astir",
      "sitar",
      "stair",
      "start",
      "stria",
      "tarsi",
      "tarts",
      "trait"
    ],
    fourLetterWordsFromWordArray: [
      "airs",
      "airt",
      "aits",
      "arts",
      "rais",
      "rats",
      "rias",
      "sari",
      "sati",
      "star",
      "stat",
      "stir",
      "tars",
      "tart",
      "tats",
      "tits",
      "tsar"
    ],
    threeLetterWordsFromWordArray: [
      "air",
      "ais",
      "ait",
      "ars",
      "art",
      "att",
      "its",
      "rai",
      "ras",
      "rat",
      "ria",
      "sat",
      "sir",
      "sit",
      "sri",
      "tar",
      "tas",
      "tat",
      "tis",
      "tit"
    ]
  },

  {
    index: 7,
    startingWord: "hardly",
    sixLetterWordsFromWordArray: ["hardly"],
    fiveLetterWordsFromWordArray: ["hardy", "hydra", "lardy", "lyard"],
    fourLetterWordsFromWordArray: [
      "aryl",
      "dahl",
      "dhal",
      "dray",
      "hard",
      "harl",
      "hyla",
      "lady",
      "lard",
      "yald",
      "yard"
    ],
    threeLetterWordsFromWordArray: [
      "dah",
      "dal",
      "day",
      "dry",
      "had",
      "hay",
      "lad",
      "lar",
      "lay",
      "rad",
      "rah",
      "ray",
      "rya",
      "yah",
      "yar"
    ]
  },

  {
    index: 8,
    startingWord: "moving",
    sixLetterWordsFromWordArray: ["moving"],
    fiveLetterWordsFromWordArray: [],
    fourLetterWordsFromWordArray: ["vino"],
    threeLetterWordsFromWordArray: [
      "gin",
      "ion",
      "mig",
      "mog",
      "mon",
      "nim",
      "nog",
      "nom",
      "vig",
      "vim"
    ]
  },

  {
    index: 9,
    startingWord: "wonder",
    sixLetterWordsFromWordArray: ["downer", "wonder"],
    fiveLetterWordsFromWordArray: [
      "dower",
      "drone",
      "drown",
      "endow",
      "owned",
      "owner",
      "redon",
      "rewon",
      "rowed",
      "rowen"
    ],
    fourLetterWordsFromWordArray: [
      "doer",
      "done",
      "dore",
      "down",
      "drew",
      "enow",
      "nerd",
      "node",
      "owed",
      "redo",
      "rend",
      "rode",
      "wend",
      "word",
      "wore",
      "worn",
      "wren"
    ],
    threeLetterWordsFromWordArray: [
      "den",
      "dew",
      "doe",
      "don",
      "dor",
      "dow",
      "end",
      "eon",
      "ern",
      "new",
      "nod",
      "nor",
      "now",
      "ode",
      "one",
      "ore",
      "owe",
      "own",
      "red",
      "rod",
      "roe",
      "row",
      "wed",
      "wen",
      "woe",
      "won"
    ]
  },

  {
    index: 10,
    startingWord: "anyone",
    sixLetterWordsFromWordArray: ["anyone"],
    fiveLetterWordsFromWordArray: ["annoy", "anyon"],
    fourLetterWordsFromWordArray: [
      "aeon",
      "anon",
      "neon",
      "nona",
      "none",
      "yean"
    ],
    threeLetterWordsFromWordArray: [
      "ane",
      "any",
      "aye",
      "eon",
      "nae",
      "nan",
      "nay",
      "one",
      "yea",
      "yen",
      "yon"
    ]
  },

  {
    index: 11,
    startingWord: "mature",
    sixLetterWordsFromWordArray: ["mature"],
    fiveLetterWordsFromWordArray: [
      "armet",
      "mater",
      "muter",
      "ramet",
      "tamer",
      "urate"
    ],
    fourLetterWordsFromWordArray: [
      "arum",
      "mare",
      "mart",
      "mate",
      "maut",
      "meat",
      "meta",
      "mura",
      "mure",
      "mute",
      "rate",
      "ream",
      "tame",
      "tare",
      "team",
      "tear",
      "term",
      "tram",
      "true",
      "urea"
    ],
    threeLetterWordsFromWordArray: [
      "amu",
      "are",
      "arm",
      "art",
      "ate",
      "ear",
      "eat",
      "eau",
      "emu",
      "era",
      "eta",
      "mae",
      "mar",
      "mat",
      "met",
      "mut",
      "ram",
      "rat",
      "rem",
      "ret",
      "rue",
      "rum",
      "rut",
      "tae",
      "tam",
      "tar",
      "tau",
      "tea",
      "uta",
      "ute"
    ]
  },

  {
    index: 12,
    startingWord: "button",
    sixLetterWordsFromWordArray: ["button"],
    fiveLetterWordsFromWordArray: [],
    fourLetterWordsFromWordArray: [
      "bott",
      "bout",
      "bunt",
      "butt",
      "tout",
      "unto"
    ],
    threeLetterWordsFromWordArray: [
      "bot",
      "bun",
      "but",
      "nob",
      "not",
      "nub",
      "nut",
      "out",
      "ton",
      "tot",
      "tub",
      "tun",
      "tut"
    ]
  },

  {
    index: 13,
    startingWord: "repeat",
    sixLetterWordsFromWordArray: ["repeat", "retape"],
    fiveLetterWordsFromWordArray: [
      "apter",
      "arete",
      "eater",
      "etape",
      "pater",
      "peart",
      "perea",
      "peter",
      "prate",
      "taper"
    ],
    fourLetterWordsFromWordArray: [
      "aper",
      "pare",
      "part",
      "pate",
      "pear",
      "peat",
      "peer",
      "pere",
      "pert",
      "prat",
      "pree",
      "rape",
      "rapt",
      "rate",
      "reap",
      "rete",
      "tape",
      "tare",
      "tarp",
      "tear",
      "tepa",
      "trap",
      "tree"
    ],
    threeLetterWordsFromWordArray: [
      "ape",
      "apt",
      "are",
      "art",
      "ate",
      "ear",
      "eat",
      "era",
      "ere",
      "eta",
      "par",
      "pat",
      "pea",
      "pee",
      "per",
      "pet",
      "rap",
      "rat",
      "ree",
      "rep",
      "ret",
      "tae",
      "tap",
      "tar",
      "tea",
      "tee"
    ]
  },

  {
    index: 14,
    startingWord: "phrase",
    sixLetterWordsFromWordArray: [
      "phrase",
      "raphes",
      "seraph",
      "shaper",
      "sherpa"
    ],
    fiveLetterWordsFromWordArray: [
      "apers",
      "apres",
      "asper",
      "ephas",
      "hares",
      "harps",
      "heaps",
      "hears",
      "pares",
      "parse",
      "pears",
      "phase",
      "prase",
      "presa",
      "rapes",
      "raphe",
      "reaps",
      "rheas",
      "shape",
      "share",
      "sharp",
      "shear",
      "spare",
      "spear"
    ],
    fourLetterWordsFromWordArray: [
      "aper",
      "apes",
      "apse",
      "ares",
      "arse",
      "ears",
      "epha",
      "eras",
      "haes",
      "haps",
      "hare",
      "harp",
      "hasp",
      "heap",
      "hear",
      "hers",
      "pare",
      "pars",
      "pase",
      "pash",
      "pear",
      "peas",
      "pehs",
      "rape",
      "raps",
      "rase",
      "rash",
      "rasp",
      "reap",
      "reps",
      "resh",
      "rhea",
      "sear",
      "sera",
      "shea",
      "spae",
      "spar"
    ],
    threeLetterWordsFromWordArray: [
      "ahs",
      "ape",
      "are",
      "ars",
      "ash",
      "asp",
      "ear",
      "era",
      "ers",
      "hae",
      "hap",
      "has",
      "hep",
      "her",
      "hes",
      "pah",
      "par",
      "pas",
      "pea",
      "peh",
      "per",
      "pes",
      "rah",
      "rap",
      "ras",
      "rep",
      "res",
      "sae",
      "sap",
      "sea",
      "ser",
      "sha",
      "she",
      "spa"
    ]
  },

  {
    index: 15,
    startingWord: "ending",
    sixLetterWordsFromWordArray: ["ending", "ginned"],
    fiveLetterWordsFromWordArray: ["deign", "dinge", "inned"],
    fourLetterWordsFromWordArray: [
      "deni",
      "dine",
      "ding",
      "gied",
      "gien",
      "nide",
      "nine"
    ],
    threeLetterWordsFromWordArray: [
      "den",
      "die",
      "dig",
      "din",
      "end",
      "eng",
      "ged",
      "gen",
      "gid",
      "gie",
      "gin",
      "inn",
      "neg"
    ]
  },

  {
    index: 16,
    startingWord: "bright",
    sixLetterWordsFromWordArray: ["bright"],
    fiveLetterWordsFromWordArray: [
      "bight",
      "birth",
      "brith",
      "girth",
      "grith",
      "right"
    ],
    fourLetterWordsFromWordArray: [
      "brig",
      "brit",
      "girt",
      "grit",
      "thir",
      "trig"
    ],
    threeLetterWordsFromWordArray: [
      "big",
      "bit",
      "ghi",
      "gib",
      "git",
      "hit",
      "rib",
      "rig"
    ]
  },

  {
    index: 17,
    startingWord: "pretty",
    sixLetterWordsFromWordArray: ["pretty"],
    fiveLetterWordsFromWordArray: ["petty"],
    fourLetterWordsFromWordArray: [
      "pert",
      "prey",
      "pyre",
      "tret",
      "trey",
      "tyer",
      "type",
      "tyre",
      "yett"
    ],
    threeLetterWordsFromWordArray: [
      "per",
      "pet",
      "pry",
      "pye",
      "rep",
      "ret",
      "rye",
      "tet",
      "try",
      "tye",
      "yep",
      "yet"
    ]
  },

  {
    index: 18,
    startingWord: "struck",
    sixLetterWordsFromWordArray: ["struck", "trucks"],
    fiveLetterWordsFromWordArray: [
      "crust",
      "curst",
      "rucks",
      "stuck",
      "truck",
      "tucks"
    ],
    fourLetterWordsFromWordArray: [
      "crus",
      "curs",
      "curt",
      "cusk",
      "cuts",
      "ruck",
      "rusk",
      "rust",
      "ruts",
      "scut",
      "suck",
      "tuck",
      "tusk"
    ],
    threeLetterWordsFromWordArray: [
      "cru",
      "cur",
      "cut",
      "rut",
      "suk",
      "tsk",
      "uts"
    ]
  },

  {
    index: 19,
    startingWord: "sector",
    sixLetterWordsFromWordArray: [
      "corset",
      "coster",
      "escort",
      "rectos",
      "scoter",
      "sector"
    ],
    fiveLetterWordsFromWordArray: [
      "ceros",
      "cores",
      "corse",
      "coset",
      "cotes",
      "crest",
      "escot",
      "recto",
      "roset",
      "rotes",
      "score",
      "store",
      "torcs",
      "tores",
      "torse"
    ],
    fourLetterWordsFromWordArray: [
      "cero",
      "core",
      "cors",
      "cost",
      "cote",
      "cots",
      "eros",
      "erst",
      "orcs",
      "ores",
      "orts",
      "recs",
      "rest",
      "rets",
      "rocs",
      "roes",
      "rose",
      "rote",
      "rots",
      "scot",
      "sect",
      "sore",
      "sort",
      "toes",
      "torc",
      "tore",
      "tors",
      "tres"
    ],
    threeLetterWordsFromWordArray: [
      "cor",
      "cos",
      "cot",
      "ers",
      "oes",
      "orc",
      "ore",
      "ors",
      "ort",
      "ose",
      "rec",
      "res",
      "ret",
      "roc",
      "roe",
      "rot",
      "sec",
      "ser",
      "set",
      "sot",
      "toe",
      "tor"
    ]
  }
];

let twentyRandomSixLetterWordArray = [
  "spoken",
  "formal",
  "detect",
  "prison",
  "nobody",
  "church",
  "artist",
  "hardly",
  "moving",
  "wonder",
  "anyone",
  "mature",
  "button",
  "repeat",
  "phrase",
  "ending",
  "bright",
  "pretty",
  "struck",
  "sector"
];

// Word from which will display Letters to Work With

let arrayToPickFrom = [...gameWords];
let randomLevel;

let random =
  gameWords[Math.floor(Math.random() * twentyRandomSixLetterWordArray.length)];

// Function to input number of words that can be made from each chosen 6 letter word, by length of the words that can be made.
function inputNumberOfWords() {
  var item6 = document.getElementById("numberOfSixes");
  var item5 = document.getElementById("numberOfFives");
  var item4 = document.getElementById("numberOfFours");
  var item3 = document.getElementById("numberOfThrees");
  var length6 = "(" + randomLevel.sixLetterWordsFromWordArray.length + ")";
  var length5 = "(" + randomLevel.fiveLetterWordsFromWordArray.length + ")";
  var length4 = "(" + randomLevel.fourLetterWordsFromWordArray.length + ")";
  var length3 = "(" + randomLevel.threeLetterWordsFromWordArray.length + ")";
  item6.innerHTML = length6;
  item5.innerHTML = length5;
  item4.innerHTML = length4;
  item3.innerHTML = length3;
}

// Function to Get Random Level/ 6-letter word _________________

function getRandomLevel() {
  const randomIndex = Math.floor(Math.random() * arrayToPickFrom.length);
  randomLevel = arrayToPickFrom[randomIndex];

  arrayToPickFrom.splice(randomIndex, 1);

  console.log("array to pick from", arrayToPickFrom);
  inputNumberOfWords();
}

// Function to Scramble Word ________________________

function scrambleWord(string) {
  const scrambledString = [];

  const stringArr = string.split("");

  while (stringArr.length) {
    scrambledString.push(
      stringArr.splice(Math.floor(Math.random() * (stringArr.length - 1)), 1)[0]
    );
  }

  return scrambledString.join("");
}

var scrambledWordToDisplay;

document.getElementById(
  "showLettersToWorkWith"
).innerHTML = scrambledWordToDisplay;

let table3 = document.getElementById("threeLetterWordHolder");
let table4 = document.getElementById("fourLetterWordHolder");
let table5 = document.getElementById("fiveLetterWordHolder");
let table6 = document.getElementById("sixLetterWordHolder");

function clearTable() {
  table3.innerHTML = "";
  table4.innerHTML = "";
  table5.innerHTML = "";
  table6.innerHTML = "";
}

// Begin Game Button, onclick __________________________

const beginGameButton = document.getElementById("beginGameButton");
const letters = document.getElementById("showLettersToWorkWith");

beginGameButton.onclick = function beginGame() {
  getRandomLevel();
  scrambledWordToDisplay = scrambleWord(randomLevel.startingWord);
  console.log(randomLevel);
  document.getElementById(
    "showLettersToWorkWith"
  ).innerHTML = scrambledWordToDisplay;
  var inputHolder = document.querySelector("#wordInputHolder");
  var messageUser = document.getElementById("messageToUser");
  inputHolder.style.visibility = "visible";
  messageUser.style.visibility = "visible";
  var entButton = document.getElementById("enterButton");
  entButton.style.display = "flex";
  beginGameButton.style.display = "none";
  letters.style.display = "flex";
  document.getElementById("directions").style.visibility = "hidden";
  document.getElementById("startLogo").style.visibility = "hidden";
};

// Next Round Button, onclick ___________________________________

const nextBtn = document.getElementById("nextRoundButton");

nextBtn.onclick = function nextRound() {
  document.getElementById("wordInput").value = "";
  clearTable();
  nextBtn.style.display = "none";

  getRandomLevel();
  document.getElementById("showLettersToWorkWith").innerHTML = scrambleWord(
    randomLevel.startingWord
  );

  console.log(document.getElementById("showLettersToWorkWith").innerHTML);
  console.log(randomLevel.startingWord);
};

// Enter key leads to "enter button click"
let input1 = document.getElementById("wordInput");
input1.addEventListener("keydown", function(e) {
  if (e.code === "Enter") {
    submitEntry();
  }
});

let wordDiv = document.createElement("div");
wordDiv.className = "word";

function clearMsgToUser() {
  document.getElementById("messageToUser").innerHTML = "";
}

// Function for clicking Enter Butteon ___________________________
function submitEntry(e) {
  const input = document.getElementById("wordInput");
  var userInput = document.getElementById("wordInput").value;
  var success6 = "You found the longest word/s!";
  var success5 = "Five letter word found";
  var success4 = "Four letter word found";
  var success3 = "Three letter word found";
  var defaultLog =
    "Please enter a word with 3 to 6 of the above letters. Slurs and derogatory words are excluded.";

  const length = userInput.length;
  const lcUserInput = userInput.toLowerCase();
  setTimeout(clearMsgToUser, 5000);
  switch (length) {
    case 6:
      if (randomLevel.sixLetterWordsFromWordArray.includes(lcUserInput)) {
        document.getElementById("messageToUser").innerHTML = success6;
        let wordDiv = document.createElement("div");
        wordDiv.className = "word";
        wordDiv.innerHTML = userInput;
        document.getElementById("sixLetterWordHolder").appendChild(wordDiv);
        console.log(randomLevel.startingWord);
        nextBtn.style.display = "flex";
      } else {
        document.getElementById("messageToUser").innerHTML = "Try again.";
        console.log(document.getElementById("messageToUser").innerHTML);
      }
      break;

    case 5:
      if (randomLevel.fiveLetterWordsFromWordArray.includes(lcUserInput)) {
        console.log(success5);
        document.getElementById("messageToUser").innerHTML = success5;
        console.log(document.getElementById("messageToUser").innerHTML);

        let wordDiv = document.createElement("div");
        wordDiv.className = "word";
        wordDiv.innerHTML = userInput;

        document.getElementById("fiveLetterWordHolder").appendChild(wordDiv);
      } else {
        document.getElementById("messageToUser").innerHTML = "Try again.";
        console.log(document.getElementById("messageToUser").innerHTML);
      }
      break;

    case 4:
      if (randomLevel.fourLetterWordsFromWordArray.includes(lcUserInput)) {
        console.log(success4);
        document.getElementById("messageToUser").innerHTML = success4;
        console.log(document.getElementById("messageToUser").innerHTML);

        let wordDiv = document.createElement("div");
        wordDiv.className = "word";
        wordDiv.innerHTML = userInput;

        document.getElementById("fourLetterWordHolder").appendChild(wordDiv);
      } else {
        document.getElementById("messageToUser").innerHTML = "Try again.";
        console.log(document.getElementById("messageToUser").innerHTML);
      }
      break;

    case 3:
      if (randomLevel.threeLetterWordsFromWordArray.includes(lcUserInput)) {
        console.log(success3);
        document.getElementById("messageToUser").innerHTML = success3;
        console.log(document.getElementById("messageToUser").innerHTML);

        let wordDiv = document.createElement("div");
        wordDiv.className = "word";
        wordDiv.innerHTML = userInput;

        document.getElementById("threeLetterWordHolder").appendChild(wordDiv);
      } else {
        document.getElementById("messageToUser").innerHTML = "Try again.";
        console.log(document.getElementById("messageToUser").innerHTML);
      }
      break;

    default:
      console.log(defaultLog);
      document.getElementById("messageToUser").innerHTML = defaultLog;
      console.log(document.getElementById("messageToUser").innerHTML);
  }
  input.value = "";
}
document.getElementById("enterButton").onclick = submitEntry;
