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

// console.log(sixLetterWordArray);

// use later to select random word out of the 50 words
var randomSixLetterWord =
  sixLetterWordArray[Math.floor(Math.random() * sixLetterWordArray.length)];

// console.log(randomSixLetterWord);

// When it comes down to it, slurs are a quick way to dehumanize someone (quote author).
// I have excluded all slurs and derogatory words based on race, origin, gender, sexual orientation, religion and physicality.
// If you find any slur/s I have missed, please feel free to email me at ciervatranquila@gmail.com.

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

var fruits = ["banana", "orange", "apple"];

// function checkIfOffensiveWord (arrayToCheck) {
//     var isThereOffensiveWord = false;
//     arrayToCheck.filter(word => {
//     var word = word.toLowerCase();
//     lowercaseDefinitelyOffensiveWordsArray.forEach(offensiveWord => {
//         if (word === offensiveWord) {
//             isThereOffensiveWord = true;
//             return console.log('offensive word in there !!!!!!!!!!!!!!!');
//          }
//             else {
//                 console.log('no offensive words yet')
//             }
//     })
// })
// console.log(isThereOffensiveWord)
// }
// checkIfOffensiveWord(fourLetterWordsFromWord1Array);

// let array = [];
// function randomWords(sixLetterWordArray) {
// for (let i=0; i<50; i++) {
//     let randomIndex = Math.floor(Math.random() * sixLetterWordArray.length)
//     array.push(sixLetterWordArray[randomIndex]);
// }
// // console.log(array);
// }

// randomWords(sixLetterWordArray);

// fiftyRandomSixLetterWords = [1."formal", 2"spoken", 3"detect", 4"prison", 5"nobody", 6"church", 7"artist", 8"hardly", 9"moving", 10"wonder", 11"anyone", 12"mature", 13"button", 14"repeat", 15"phrase", 16"ending", 17"bright", 18"pretty", 19"struck", 20"sector", "silent", "legacy", "mainly", "happen", "defeat", "income", "afford", "berlin", "became", "solely", "agency", "rarely", "couple", "tennis", "direct", "thanks", "barely", "office", "circle", "relief", "moment", "manner", "domain", "across", "invest", "modest", "border", "twenty", "obtain", "modern"];

// let twentyRandomSixLetterWordArray = ["formal", "spoken", "detect", "prison", "nobody", "church", "artist", "hardly", "moving", "wonder", "anyone", "mature", "button", "repeat", "phrase", "ending", "bright", "pretty", "struck", "sector"];

// Word 1
let word1 = "formal";
let sixLetterWordsFromWord1 = `formal`;
// 1
let fiveLetterWordsFromWord1 = `flora
foram
molar
moral`;
//
let fourLetterWordsFromWord1 = `farl
farm
faro
flam
foal
foam
fora
form
from
loaf
loam
marl
mola
mora
oral
roam
rolf`;
//
let threeLetterWordsFromWord1 = `arf
arm
far
for
fro
lam
lar
mar
moa
mol
mor
oaf
oar
ora
ram
rom`;
//
var sixLetterWordsFromWord1Array = sixLetterWordsFromWord1.split("\n");

var fiveLetterWordsFromWord1Array = fiveLetterWordsFromWord1.split("\n");

var fourLetterWordsFromWord1Array = fourLetterWordsFromWord1.split("\n");

var threeLetterWordsFromWord1Array = threeLetterWordsFromWord1.split("\n");

// Word 2
let word2 = "spoken";
let sixLetterWordsFromWord2 = `spoken`;
// 1
let fiveLetterWordsFromWord2 = `kenos
knops
knosp
opens
peons
pokes
pones
spoke`;
//
let fourLetterWordsFromWord2 = `eons
epos
keno
kens
keps
knop
kops
noes
nope
nose
okes
ones
open
opes
pens
peon
peso
poke
pone
pons
pose
skep
soke
sone`;
//
let threeLetterWordsFromWord2 = `ens
eon
ken
kep
kop
kos
nos
oes
oke
one
ons
ope
ops
ose
pen
pes
sen
son
sop`;
//
var sixLetterWordsFromWord2Array = sixLetterWordsFromWord2.split("\n");

var fiveLetterWordsFromWord2Array = fiveLetterWordsFromWord2.split("\n");

var fourLetterWordsFromWord2Array = fourLetterWordsFromWord2.split("\n");

var threeLetterWordsFromWord2Array = threeLetterWordsFromWord2.split("\n");

// Word 3
let word3 = "detect";
let sixLetterWordsFromWord3 = `detect`;
//
let fiveLetterWordsFromWord3 = ``;
//
let fourLetterWordsFromWord3 = `cede
cete
deet
teed`;
//
let threeLetterWordsFromWord3 = `cee
dee
ted
tee
tet`;
//

var sixLetterWordsFromWord3Array = sixLetterWordsFromWord3.split("\n");

var fiveLetterWordsFromWord3Array = fiveLetterWordsFromWord3.split("\n");

var fourLetterWordsFromWord3Array = fourLetterWordsFromWord3.split("\n");

var threeLetterWordsFromWord3Array = threeLetterWordsFromWord3.split("\n");

// Word 4
let word4 = `prison`;
let sixLetterWordsFromWord4 = `orpins
prions
prison
spinor`;
//
let fiveLetterWordsFromWord4 = `irons
noirs
noris
opsin
ornis
orpin
pions
pirns
porns
prion
rosin`;
//
let fourLetterWordsFromWord4 = `inro
ions
iron
nips
noir
nori
pins
pion
pirn
piso
pois
pons
porn
pros
rins
rips
snip
sori
sorn
spin`;
//
let threeLetterWordsFromWord4 = `ins
ion
nip
nor
nos
ons
ops
ors
pin
pis
poi
pro
psi
rin
rip
sin
sip
sir
son
sop
sri`;
//
var sixLetterWordsFromWord4Array = sixLetterWordsFromWord4.split("\n");

var fiveLetterWordsFromWord4Array = fiveLetterWordsFromWord4.split("\n");

var fourLetterWordsFromWord4Array = fourLetterWordsFromWord4.split("\n");

var threeLetterWordsFromWord4Array = threeLetterWordsFromWord4.split("\n");

// Word 5
let word5 = `nobody`;
let sixLetterWordsFromWord5 = `nobody`;
//
let fiveLetterWordsFromWord5 = `boody`;
//
let fourLetterWordsFromWord5 = `body
bond
bony
boon
boyo
doby
yond`;
//
let threeLetterWordsFromWord5 = `bod
boo
boy
don
nob
nod
noo
ono
yob
yod
yon`;
//
var sixLetterWordsFromWord5Array = sixLetterWordsFromWord5.split("\n");

var fiveLetterWordsFromWord5Array = fiveLetterWordsFromWord5.split("\n");

var fourLetterWordsFromWord5Array = fourLetterWordsFromWord5.split("\n");

var threeLetterWordsFromWord5Array = threeLetterWordsFromWord5.split("\n");

// Word 6
let word6 = `church`;
let sixLetterWordsFromWord6 = `church`;
//
let fiveLetterWordsFromWord6 = `curch`;
//
let fourLetterWordsFromWord6 = ``;
//
let threeLetterWordsFromWord6 = `cru
cur
huh`;
//
var sixLetterWordsFromWord6Array = sixLetterWordsFromWord6.split("\n");

var fiveLetterWordsFromWord6Array = fiveLetterWordsFromWord6.split("\n");

var fourLetterWordsFromWord6Array = fourLetterWordsFromWord6.split("\n");

var threeLetterWordsFromWord6Array = threeLetterWordsFromWord6.split("\n");

// Word 7
let word7 = `artist`;
let sixLetterWordsFromWord7 = `artist
strait
strati
traits`;
//
let fiveLetterWordsFromWord7 = `airts
astir
sitar
stair
start
stria
tarsi
tarts
trait`;
//
let fourLetterWordsFromWord7 = `airs
airt
aits
arts
rais
rats
rias
sari
sati
star
stat
stir
tars
tart
tats
tits
tsar`;
//
let threeLetterWordsFromWord7 = `air
ais
ait
ars
art
att
its
rai
ras
rat
ria
sat
sir
sit
sri
tar
tas
tat
tis
tit`;
//
var sixLetterWordsFromWord7Array = sixLetterWordsFromWord7.split("\n");

var fiveLetterWordsFromWord7Array = fiveLetterWordsFromWord7.split("\n");

var fourLetterWordsFromWord7Array = fourLetterWordsFromWord7.split("\n");

var threeLetterWordsFromWord7Array = threeLetterWordsFromWord7.split("\n");

// Word 8
let word8 = `hardly`;
let sixLetterWordsFromWord8 = `hardly`;
//
let fiveLetterWordsFromWord8 = `hardy
hydra
lardy
lyard`;
//
let fourLetterWordsFromWord8 = `aryl
dahl
dhal
dray
hard
harl
hyla
lady
lard
yald
yard`;
//
let threeLetterWordsFromWord8 = `dah
dal
day
dry
had
hay
lad
lar
lay
rad
rah
ray
rya
yah
yar`;
//
var sixLetterWordsFromWord8Array = sixLetterWordsFromWord8.split("\n");

var fiveLetterWordsFromWord8Array = fiveLetterWordsFromWord8.split("\n");

var fourLetterWordsFromWord8Array = fourLetterWordsFromWord8.split("\n");

var threeLetterWordsFromWord8Array = threeLetterWordsFromWord8.split("\n");

// Word 9
let word9 = `moving`;
let sixLetterWordsFromWord9 = `moving`;
//
let fiveLetterWordsFromWord9 = ``;
// None!
//
let fourLetterWordsFromWord9 = `vino`;
//
let threeLetterWordsFromWord9 = `gin
ion
mig
mog
mon
nim
nog
nom
vig
vim`;
//
var sixLetterWordsFromWord9Array = sixLetterWordsFromWord9.split("\n");

var fiveLetterWordsFromWord9Array = fiveLetterWordsFromWord9.split("\n");

var fourLetterWordsFromWord9Array = fourLetterWordsFromWord9.split("\n");

var threeLetterWordsFromWord9Array = threeLetterWordsFromWord9.split("\n");

// Word 10
let word = `wonder`;
let sixLetterWordsFromWord10 = `downer
wonder`;
//
let fiveLetterWordsFromWord10 = `dower
drone
drown
endow
owned
owner
redon
rewon
rowed
rowen`;
//
let fourLetterWordsFromWord10 = `doer
done
dore
down
drew
enow
nerd
node
owed
redo
rend
rode
wend
word
wore
worn
wren`;
//
let threeLetterWordsFromWord10 = `den
dew
doe
don
dor
dow
end
eon
ern
new
nod
nor
now
ode
one
ore
owe
own
red
rod
roe
row
wed
wen
woe
won`;
//
var sixLetterWordsFromWord10Array = sixLetterWordsFromWord10.split("\n");

var fiveLetterWordsFromWord10Array = fiveLetterWordsFromWord10.split("\n");

var fourLetterWordsFromWord10Array = fourLetterWordsFromWord10.split("\n");

var threeLetterWordsFromWord10Array = threeLetterWordsFromWord10.split("\n");

// Word 11
let word11 = `anyone`;
let sixLetterWordsFromWord11 = `anyone`;
//
let fiveLetterWordsFromWord11 = `annoy
anyon`;
//
let fourLetterWordsFromWord11 = `aeon
anon
neon
nona
none
yean`;
//
let threeLetterWordsFromWord11 = `ane
any
aye
eon
nae
nan
nay
one
yea
yen
yon`;
//
var sixLetterWordsFromWord11Array = sixLetterWordsFromWord11.split("\n");

var fiveLetterWordsFromWord11Array = fiveLetterWordsFromWord11.split("\n");

var fourLetterWordsFromWord11Array = fourLetterWordsFromWord11.split("\n");

var threeLetterWordsFromWord11Array = threeLetterWordsFromWord11.split("\n");

// Word 12
let word12 = `mature`;
let sixLetterWordsFromWord12 = `mature`;
//
let fiveLetterWordsFromWord12 = `armet
mater
muter
ramet
tamer
urate`;
//
let fourLetterWordsFromWord12 = `arum
mare
mart
mate
maut
meat
meta
mura
mure
mute
rate
ream
tame
tare
team
tear
term
tram
true
urea`;
//
let threeLetterWordsFromWord12 = `amu
are
arm
art
ate
ear
eat
eau
emu
era
eta
mae
mar
mat
met
mut
ram
rat
rem
ret
rue
rum
rut
tae
tam
tar
tau
tea
uta
ute`;
//
var sixLetterWordsFromWord12Array = sixLetterWordsFromWord12.split("\n");

var fiveLetterWordsFromWord12Array = fiveLetterWordsFromWord12.split("\n");

var fourLetterWordsFromWord12Array = fourLetterWordsFromWord12.split("\n");

var threeLetterWordsFromWord12Array = threeLetterWordsFromWord12.split("\n");

// Word 13
let word13 = `button`;
let sixLetterWordsFromWord13 = `button`;
//
let fiveLetterWordsFromWord13 = ``;
// None!
//
let fourLetterWordsFromWord13 = `bott
bout
bunt
butt
tout
unto`;
//
let threeLetterWordsFromWord13 = `bot
bun
but
nob
not
nub
nut
out
ton
tot
tub
tun
tut`;
//
var sixLetterWordsFromWord13Array = sixLetterWordsFromWord13.split("\n");

var fiveLetterWordsFromWord13Array = fiveLetterWordsFromWord13.split("\n");

var fourLetterWordsFromWord13Array = fourLetterWordsFromWord13.split("\n");

var threeLetterWordsFromWord13Array = threeLetterWordsFromWord13.split("\n");

// Word 14
let word14 = `repeat`;
let sixLetterWordsFromWord14 = `repeat
retape`;
//
let fiveLetterWordsFromWord14 = `apter
arete
eater
etape
pater
peart
perea
peter
prate
taper`;
//
let fourLetterWordsFromWord14 = `aper
pare
part
pate
pear
peat
peer
pere
pert
prat
pree
rape
rapt
rate
reap
rete
tape
tare
tarp
tear
tepa
trap
tree`;
//
let threeLetterWordsFromWord14 = `ape
apt
are
art
ate
ear
eat
era
ere
eta
par
pat
pea
pee
per
pet
rap
rat
ree
rep
ret
tae
tap
tar
tea
tee`;
//
var sixLetterWordsFromWord14Array = sixLetterWordsFromWord14.split("\n");

var fiveLetterWordsFromWord14Array = fiveLetterWordsFromWord14.split("\n");

var fourLetterWordsFromWord14Array = fourLetterWordsFromWord14.split("\n");

var threeLetterWordsFromWord14Array = threeLetterWordsFromWord14.split("\n");

// Word 15
let word15 = `phrase`;
let sixLetterWordsFromWord15 = `phrase
raphes
seraph
shaper
sherpa`;
//
let fiveLetterWordsFromWord15 = `apers
apres
asper
ephas
hares
harps
heaps
hears
pares
parse
pears
phase
prase
presa
rapes
raphe
reaps
rheas
shape
share
sharp
shear
spare
spear`;
//
let fourLetterWordsFromWord15 = `aper
apes
apse
ares
arse
ears
epha
eras
haes
haps
hare
harp
hasp
heap
hear
hers
pare
pars
pase
pash
pear
peas
pehs
rape
raps
rase
rash
rasp
reap
reps
resh
rhea
sear
sera
shea
spae
spar`;
//
let threeLetterWordsFromWord15 = `ahs
ape
are
ars
ash
asp
ear
era
ers
hae
hap
has
hep
her
hes
pah
par
pas
pea
peh
per
pes
rah
rap
ras
rep
res
sae
sap
sea
ser
sha
she
spa`;
//
var sixLetterWordsFromWord15Array = sixLetterWordsFromWord15.split("\n");

var fiveLetterWordsFromWord15Array = fiveLetterWordsFromWord15.split("\n");

var fourLetterWordsFromWord15Array = fourLetterWordsFromWord15.split("\n");

var threeLetterWordsFromWord15Array = threeLetterWordsFromWord15.split("\n");

// Word 16
let word16 = `ending`;
let sixLetterWordsFromWord16 = `ending
ginned`;
//
let fiveLetterWordsFromWord16 = `deign
dinge
inned`;
//
let fourLetterWordsFromWord16 = `deni
dine
ding
gied
gien
nide
nine`;
//
let threeLetterWordsFromWord16 = `den
die
dig
din
end
eng
ged
gen
gid
gie
gin
inn
neg`;
//
var sixLetterWordsFromWord16Array = sixLetterWordsFromWord16.split("\n");

var fiveLetterWordsFromWord16Array = fiveLetterWordsFromWord16.split("\n");

var fourLetterWordsFromWord16Array = fourLetterWordsFromWord16.split("\n");

var threeLetterWordsFromWord16Array = threeLetterWordsFromWord16.split("\n");

// Word 17
let word17 = `bright`;
let sixLetterWordsFromWord17 = `bright`;
//
let fiveLetterWordsFromWord17 = `bight
birth
brith
girth
grith
right`;
//
let fourLetterWordsFromWord17 = `brig
brit
girt
grit
thir
trig`;
//
let threeLetterWordsFromWord17 = `big
bit
ghi
gib
git
hit
rib
rig`;
//
var sixLetterWordsFromWord17Array = sixLetterWordsFromWord17.split("\n");

var fiveLetterWordsFromWord17Array = fiveLetterWordsFromWord17.split("\n");

var fourLetterWordsFromWord17Array = fourLetterWordsFromWord17.split("\n");

var threeLetterWordsFromWord17Array = threeLetterWordsFromWord17.split("\n");

// Word 18
let word18 = `pretty`;
let sixLetterWordsFromWord18 = `pretty`;
//
let fiveLetterWordsFromWord18 = `petty`;
//
let fourLetterWordsFromWord18 = `pert
prey
pyre
tret
trey
tyer
type
tyre
yett`;
//
let threeLetterWordsFromWord18 = `per
pet
pry
pye
rep
ret
rye
tet
try
tye
yep
yet`;
//
var sixLetterWordsFromWord18Array = sixLetterWordsFromWord18.split("\n");

var fiveLetterWordsFromWord18Array = fiveLetterWordsFromWord18.split("\n");

var fourLetterWordsFromWord18Array = fourLetterWordsFromWord18.split("\n");

var threeLetterWordsFromWord18Array = threeLetterWordsFromWord18.split("\n");

// Word 19
let word19 = `struck`;
let sixLetterWordsFromWord19 = `struck
trucks`;
//
let fiveLetterWordsFromWord19 = `crust
curst
rucks
stuck
truck
tucks`;
//
let fourLetterWordsFromWord19 = `crus
curs
curt
cusk
cuts
ruck
rusk
rust
ruts
scut
suck
tuck
tusk`;
//
let threeLetterWordsFromWord19 = `cru
cur
cut
rut
suk
tsk
uts`;
//
var sixLetterWordsFromWord19Array = sixLetterWordsFromWord19.split("\n");

var fiveLetterWordsFromWord19Array = fiveLetterWordsFromWord19.split("\n");

var fourLetterWordsFromWord19Array = fourLetterWordsFromWord19.split("\n");

var threeLetterWordsFromWord19Array = threeLetterWordsFromWord19.split("\n");

// Word 20
let word20 = `sector`;
let sixLetterWordsFromWord20 = `corset
coster
escort
rectos
scoter
sector`;
//
let fiveLetterWordsFromWord20 = `ceros
cores
corse
coset
cotes
crest
escot
recto
roset
rotes
score
store
torcs
tores
torse`;
//
let fourLetterWordsFromWord20 = `cero
core
cors
cost
cote
cots
eros
erst
orcs
ores
orts
recs
rest
rets
rocs
roes
rose
rote
rots
scot
sect
sore
sort
toes
torc
tore
tors
tres`;
//
let threeLetterWordsFromWord20 = `cor
cos
cot
ers
oes
orc
ore
ors
ort
ose
rec
res
ret
roc
roe
rot
sec
ser
set
sot
toe
tor`;
//
var sixLetterWordsFromWord20Array = sixLetterWordsFromWord20.split("\n");

var fiveLetterWordsFromWord20Array = fiveLetterWordsFromWord20.split("\n");

var fourLetterWordsFromWord20Array = fourLetterWordsFromWord20.split("\n");

var threeLetterWordsFromWord20Array = threeLetterWordsFromWord20.split("\n");

// DATA _____________________________________________________________________________________________________

const gameWords = [
  {
    number: 1,
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
    number: 2,
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
    number: 3,
    startingWord: "detect",
    sixLetterWordsFromWordArray: ["detect"],
    fiveLetterWordsFromWordArray: [""],
    fourLetterWordsFromWordArray: ["cede", "cete", "deet", "teed"],
    threeLetterWordsFromWordArray: ["cee", "dee", "ted", "tee", "tet"]
  },

  {
    number: 4,
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
    number: 5,
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
    number: 6,
    startingWord: "church",
    sixLetterWordsFromWordArray: ["church"],
    fiveLetterWordsFromWordArray: ["curch"],
    fourLetterWordsFromWordArray: [""],
    threeLetterWordsFromWordArray: ["cru", "cur", "huh"]
  },

  {
    number: 7,
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
    number: 8,
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
    number: 9,
    startingWord: "moving",
    sixLetterWordsFromWordArray: ["moving"],
    fiveLetterWordsFromWordArray: [""],
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
    number: 10,
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
    number: 11,
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
    number: 12,
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
    number: 13,
    startingWord: "button",
    sixLetterWordsFromWordArray: ["button"],
    fiveLetterWordsFromWordArray: [""],
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
    number: 14,
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
    number: 15,
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
    number: 16,
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
    number: 17,
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
    number: 18,
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
    number: 19,
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
    number: 20,
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

// console.log(gameWords);

// function checkIfOffensiveWord (arrayToCheck) {
//     var isThereOffensiveWord = false;
//     arrayToCheck.filter(word => {
//     var word = word.toLowerCase();
//     lowercaseDefinitelyOffensiveWordsArray.forEach(offensiveWord => {
//         if (word === offensiveWord) {
//             isThereOffensiveWord = true;
//             return console.log('offensive word in there !!!!!!!!!!!!!!!');
//          }
//             else {
//                 console.log('no offensive words yet')
//             }
//     })
// })
// console.log(isThereOffensiveWord)
// }
// checkIfOffensiveWord(fourLetterWordsFromWord20Array);

// console.log(threeLetterWordsFromWord20Array.length);

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

// let array1 = [];
// function randomWords(arrayInsert) {
// for (let i=0; i<2; i++) {
//     let randomIndex = Math.floor(Math.random() * arrayInsert.length)
//     array1.push(arrayInsert[randomIndex]);
// }
// // console.log(arrayInsert);
// }

// console.log(randomWords(twentyRandomSixLetterWordArray));

// Word from which will display Letters to Work With

let random = gameWords[Math.floor(Math.random() * twentyRandomSixLetterWordArray.length)]; 

// Function to Get Random Level _________________

let randomLevel =
  gameWords[Math.floor(Math.random() * twentyRandomSixLetterWordArray.length)];

function getRandomLevel() {
let randomLevel2 =gameWords[Math.floor(Math.random() * twentyRandomSixLetterWordArray.length)];
let randomLevelStartWord = randomLevel2.startingWord;
console.log("random2", randomLevelStartWord);
};

// getRandomLevel();


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

var scrambledWordToDisplay = scrambleWord(randomLevel.startingWord);

document.getElementById(
  "showLettersToWorkWith"
).innerHTML = scrambledWordToDisplay;

// console.log(document.getElementById("showLettersToWorkWith").innerHTML);

// console.log(randomLevel.startingWord);

let table3 = document.getElementById("threeLetterWordHolder");
let table4 = document.getElementById("fourLetterWordHolder");
let table5 = document.getElementById("fiveLetterWordHolder");
let table6 = document.getElementById("sixLetterWordHolder");


function clearTable(){
  table3.innerHTML = "";
  table4.innerHTML = "";
  table5.innerHTML = "";
  table6.innerHTML = "";
  // while (table3.firstChild) {
  //   table3.removeChild(table3.firstChild);
  // } 
  // while (table4.firstChild) {
  //   table4.removeChild(table4.firstChild);
  // } 
  // while (table5.firstChild) {
  //   table5.removeChild(table5.firstChild);
  // } 
  // while (table6.firstChild) {
  //   table6.removeChild(table6.firstChild);
  // } 
  
}









const beginGameButton = document.getElementById("beginGameButton");
const letters = document.getElementById("showLettersToWorkWith");

beginGameButton.onclick = function beginGame() {

var inputHolder = document.querySelector("#wordInputHolder");
var messageUser = document.getElementById("messageToUser");
console.log("visible")
inputHolder.style.visibility = "visible";
messageUser.style.visibility = "visible";
var entButton = document.getElementById("enterButton");
entButton.style.display="flex";


beginGameButton.style.display = "none";
letters.style.display="flex";

console.log(document.getElementById("showLettersToWorkWith").innerHTML);

console.log(randomLevel.startingWord);

}

const nextBtn= document.getElementById("nextRoundButton");

nextBtn.onclick = function nextRound() {
  document.getElementById("wordInput").value = '';
  clearTable();
  nextBtn.style.display = "none";
  randomLevel = gameWords[Math.floor(Math.random() * twentyRandomSixLetterWordArray.length)]; 
  document.getElementById(
    "showLettersToWorkWith"
  ).innerHTML = scrambleWord(randomLevel.startingWord);
  // console.log('YO', randomLevel.startingWord)
  // console.log('letters to work with', document.getElementById("showLettersToWorkWith").innerHTML);
  console.log(document.getElementById("showLettersToWorkWith").innerHTML);
  console.log("next round word:", randomLevel.startingWord);
}

// Enter key leads to "enter button click"
let input1 = document.getElementById("wordInput");
input1.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    submitEntry();
    // input1.value = '';
    // document.getElementById("enterButton").click();
  }
});




let wordDiv = document.createElement("div");
                wordDiv.className = "word";
                // console.log(document.getElementById("sixLetterWordHolder").appendChild(wordDiv));



function clearMsgToUser() {
  console.log('here')
  document.getElementById("messageToUser").innerHTML = "";
}

function submitEntry(e){
  const input = document.getElementById("wordInput");
  var userInput = document.getElementById("wordInput").value;
  var success6 = "You found the longest word/s!";
  var success5 = "Five letter word found";
  var success4 = "Four letter word found";
  var success3 = "Three letter word found";
  var defaultLog = "Please enter a word with 3 to 6 of the above letters. Slurs and derogatory words are excluded.";
//   console.log(userInput)
  const length = userInput.length;
  const lcUserInput = userInput.toLowerCase();
  setTimeout(clearMsgToUser, 5000);
  switch (length) {
      case 6:
          if(randomLevel.sixLetterWordsFromWordArray.includes(lcUserInput)) {
            // console.log("user input", userInput)
              // console.log("random", randomLevel.startingWord)
              // console.log(success6);
              document.getElementById("messageToUser").innerHTML = success6;              
              let wordDiv = document.createElement("div");
              wordDiv.className = "word";
              wordDiv.innerHTML = userInput;
              document.getElementById("sixLetterWordHolder").appendChild(wordDiv);
              console.log("enter, comparing to", randomLevel.startingWord)

              // let nextRoundButton = document.getElementById("nextRoundButton").innerHTML;
              // let classes = nextRoundButton.classList;

      
                  // console.log(successTarget)
              nextBtn.style.display = "flex";
              
              // successTarget.addEventListener(successTarget, changeVisibilityNextRoundButton)
              // function changeVisibilityNextRoundButton(e) {
              //     let nextRoundButton = document.getElementById("nextRoundButton");
              //     // need "(id)" at end of prev line?
                  
              //     if (nextRoundButton.style.display == 'block') {
              //         nextRoundButton.style.display = 'none';
              //     }
              //     else {nextRoundButton.style.display = 'block';

              //     }
              // }
            
          } 
          else {
              // console.log("Try again.");
              // console.log("user input", userInput);
              // console.log("random", randomLevel.startingWord)
              document.getElementById("messageToUser").innerHTML = "Try again.";
              console.log(document.getElementById("messageToUser").innerHTML);
          }
          break;
  
      case 5:
          if(randomLevel.fiveLetterWordsFromWordArray.includes(lcUserInput)) {
              console.log(success5);
              document.getElementById("messageToUser").innerHTML = success5;
              console.log(document.getElementById("messageToUser").innerHTML);

              let wordDiv = document.createElement("div");
              wordDiv.className = "word";
              wordDiv.innerHTML = userInput;

              document.getElementById("fiveLetterWordHolder").appendChild(wordDiv);
          }
          else {
              // console.log("Try again.");
              document.getElementById("messageToUser").innerHTML = "Try again.";
              console.log(document.getElementById("messageToUser").innerHTML);
          }
          break;

      case 4:
          if(randomLevel.fourLetterWordsFromWordArray.includes(lcUserInput)) {
              console.log(success4);
              document.getElementById("messageToUser").innerHTML = success4;
              console.log(document.getElementById("messageToUser").innerHTML);

              let wordDiv = document.createElement("div");
              wordDiv.className = "word";
              wordDiv.innerHTML = userInput;

              document.getElementById("fourLetterWordHolder").appendChild(wordDiv);
          } 
          else {
              // console.log("Try again.");
              document.getElementById("messageToUser").innerHTML = "Try again.";
              console.log(document.getElementById("messageToUser").innerHTML);
          }
          break;

      case 3:
          if(randomLevel.threeLetterWordsFromWordArray.includes(lcUserInput)) {
              console.log(success3);
              document.getElementById("messageToUser").innerHTML = success3;
              console.log(document.getElementById("messageToUser").innerHTML);

              let wordDiv = document.createElement("div");
              wordDiv.className = "word";
              wordDiv.innerHTML = userInput;

              document.getElementById("threeLetterWordHolder").appendChild(wordDiv);
          } 
          else {
              // console.log("Try again.");
              document.getElementById("messageToUser").innerHTML = "Try again.";
              console.log(document.getElementById("messageToUser").innerHTML);
          }
          break;
      
      default:
          console.log(defaultLog);
          document.getElementById("messageToUser").innerHTML = defaultLog;
              console.log(document.getElementById("messageToUser").innerHTML);
  }
  // console.log(userInput)
  input.value = "";
}


document.getElementById("enterButton").onclick = submitEntry;
