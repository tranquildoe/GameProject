// // // When it comes down to it, slurs are a quick way to dehumanize someone (quote author).
// // // I have excluded all slurs and derogatory words based on race, origin, gender, sexual orientation, religion and physicality. 
// // // If you find any slur/s I have missed, please feel free to email me at ciervatranquila@gmail.com.


// // let definitelyOffensiveWords= 
// // `ABO
// // ABOS
// // BAYWOP
// // BAYWOPS
// // BALDIE
// // BALDIES
// // BALDY
// // BOHUNK
// // BOHUNKS
// // BUCKRA
// // BUCKRAS
// // BULLDIKE
// // BULLDIKES
// // BULLDYKE
// // BULLDYKES
// // BUMBOY
// // BUMBOYS
// // CHOLA
// // CHOLAS
// // CHOLO
// // CHOLOS
// // COLOREDS
// // COMSYMP
// // COMSYMPS
// // CRIP
// // CRIPS
// // CUNT
// // CUNTS
// // DAGO
// // DAGOES
// // DAGOS
// // DARKEY
// // DARKEYS
// // DARKIE
// // DARKIES
// // DARKY 
// // DIKEY
// // DOGAN
// // DOGANS
// // DYKEY
// // fag
// // faggot
// // FAGGOTRY
// // FAGGOTRIES
// // FAGGOTY
// // FAGGY
// // FAGGIER
// // FAGGIEST
// // FATSO
// // FATSOES
// // FATSOS
// // FEMINAZI
// // FEMINAZIS
// // GINZO
// // GINZOES
// // GOOLIE
// // GOOLIES
// // GOY
// // GOYIM
// // GOYS
// // GOYISH
// // GOYISHE
// // GRAYBEARD
// // GRAYBEARDS
// // GREYBEARD
// // GREYBEARDS
// // HAOLE
// // HAOLES
// // HEBE
// // HEBES
// // HONKEY
// // HONKEYS
// // HONKIE
// // HONKIES
// // HONKY 
// // ho
// // hos
// // HUNKEY
// // HUNKEYS
// // HUNKIE
// // HUNKIES
// // JEW
// // JEWED
// // JEWING
// // JEWS
// // JIGABOO
// // JIGABOOS
// // KIKE
// // KIKES
// // LES
// // LESES
// // LESBO
// // LESBOS
// // LEZ
// // LEZZES
// // LEZZIE
// // LEZZIES
// // LEZZY
// // MICK
// // MICKS
// // NIGGER
// // NIGGERS
// // NITCHIE
// // NITCHIES
// // PAPISM
// // PAPISMS
// // PAPIST
// // PAPISTS
// // PAPISTIC
// // PAPISTRY
// // PAPISTRIES
// // PICANINNY
// // PICANINNIES
// // PICKANINNY
// // PICKANINNIES
// // PICKNEY
// // PICKNEYS
// // POLACK
// // POLACKS
// // POMMIE
// // POMMIES
// // POMMY
// // POOFS
// // POOFTAH
// // POOFTAHS
// // POOFTER
// // POOFTERS
// // POOFY
// // POOFIER
// // POOFIEST
// // POONTANG
// // POONTANGS
// // POOVE
// // POOVES
// // POPERY
// // POPERIES
// // POPISH
// // POPISHLY
// // RAGHEAD
// // RAGHEADS
// // redneck
// // REDSKIN
// // REDSKINS
// // SCHVARTZE
// // SCHVARTZES
// // SCHWARTZE
// // SCHWARTZES
// // SHEENEY
// // SHEENEYS
// // SHEENIE
// // SHEENIES
// // SHEGETZ
// // SHKOTZIM
// // SHEMALE
// // SHEMALES
// // SHICKSA
// // SHICKSAS
// // SHIKSA
// // SHIKSAS
// // SHIKSE
// // SHIKSES
// // SHIKSEH
// // SHIKSEHS
// // SHKOTZIM
// // SHVARTZE
// // SHVARTZES
// // SPIC
// // SPICS
// // SPICK
// // SPICKS
// // SPIK
// // SPIKS
// // SQUAW
// // SQUAWS
// // VENDU
// // VENDUS
// // WETBACK
// // WETBACKS
// // WHITIES
// // WOG
// // WOGS
// // WOGGISH
// // WOP
// // WOPS
// // WRINKLIE
// // WRINKLIES
// // YID
// // YIDS`;

// // definitelyOffensiveWordsArray = definitelyOffensiveWords.split("\n");


// // var lowercaseDefinitelyOffensiveWordsArray = ["abo", "abos", "baldie", "baldies", "baldy", "baywop", "baywops", "bohunk", "bohunks", "buckra", "buckras", "bulldike", "bulldikes", "bulldyke", "bulldykes", "bumboy", "bumboys", "chola", "cholas", "cholo", "cholos", "coloreds", "comsymp", "comsymps", "crip", "crips", "cunt", "cunts", "dago", "dagoes", "dagos", "darkey", "darkeys", "darkie", "darkies", "darky ", "dikey", "dogan", "dogans", "dykey", "fag", "faggier", "faggiest", "faggot", "faggotries", "faggotry", "faggoty", "faggy", "fatso", "fatsoes", "fatsos", "feminazi", "feminazis", "ginzo", "ginzoes", "goolie", "goolies", "goy", "goyim", "goyish", "goyishe", "goys", "graybeard", "graybeards", "greybeard", "greybeards", "haole", "haoles", "hebe", "hebes", "ho", "honkey", "honkeys", "honkie", "honkies", "honky ", "hos", "hunkey", "hunkeys", "hunkie", "hunkies", "jew", "jewed", "jewing", "jews", "jigaboo", "jigaboos", "kike", "kikes", "les", "lesbo", "lesbos", "leses", "lez", "lezzes", "lezzie", "lezzies", "lezzy", "mick", "micks", "nigger", "niggers", "nitchie", "nitchies", "papism", "papisms", "papist", "papistic", "papistries", "papistry", "papists", "picaninnies", "picaninny", "pickaninnies", "pickaninny", "pickney", "pickneys", "polack", "polacks", "pommie", "pommies", "pommy", "poofier", "poofiest", "poofs", "pooftah", "pooftahs", "poofter", "poofters", "poofy", "poontang", "poontangs", "poove", "pooves", "poperies", "popery", "popish", "popishly", "raghead", "ragheads", "redneck", "redskin", "redskins", "schvartze", "schvartzes", "schwartze", "schwartzes", "sheeney", "sheeneys", "sheenie", "sheenies", "shegetz", "shemale", "shemales", "shicksa", "shicksas", "shiksa", "shiksas", "shikse", "shikseh", "shiksehs", "shikses", "shkotzim", "shkotzim", "shvartze", "shvartzes", "spic", "spick", "spicks", "spics", "spik", "spiks", "squaw", "squaws", "vendu", "vendus", "wetback", "wetbacks", "whities", "wog", "woggish", "wogs", "wop", "wops", "wrinklie", "wrinklies", "yid", "yids"];


// // var fruits = ["banana", "orange", "apple"];

// // function checkIfOffensiveWord (arrayToCheck) {
// //     var isThereOffensiveWord = false;
// //     arrayToCheck.filter(word => {
// //     var word = word.toLowerCase(); 
// //     lowercaseDefinitelyOffensiveWordsArray.forEach(offensiveWord => {
// //         if (word === offensiveWord) {
// //             isThereOffensiveWord = true;
// //             return console.log('offensive word in there !!!!!!!!!!!!!!!');
// //          }
// //             else {
// //                 console.log('no offensive words yet')
// //             }
// //     })
// // })
// // console.log(isThereOffensiveWord)
// // }
// // checkIfOffensiveWord(fruits)
// let str = "artist";
// function scrambleWord (string) {

//     var scrambledString = [];

//     string = string.split (''); 
//     while (string.length) {
//         scrambledString.push(string.splice(Math.floor (Math.random () * (string.length - 1)) , 1)[0]);
//     }

//     return scrambledString.join ('');

// }

// console.log(scrambleWord());


// let twentyRandomSixLetterWordArray = ["formal", "spoken", "detect", "prison", "nobody", "church", "artist", "hardly", "moving", "wonder", "anyone", "mature", "button", "repeat", "phrase", "ending", "bright", "pretty", "struck", "sector"];

// Word 1
let word1 = "formal";
let sixLetterWordsFromWord1 = 
`formal`
// 1
let fiveLetterWordsFromWord1 =
`flora
foram
molar
moral`;
// 
let fourLetterWordsFromWord1 = 
`farl
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
let threeLetterWordsFromWord1 =
`arf
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
let sixLetterWordsFromWord2 = 
`spoken`;
// 1
let fiveLetterWordsFromWord2 =
`kenos
knops
knosp
opens
peons
pokes
pones
spoke`;
// 
let fourLetterWordsFromWord2 = 
`eons
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
let threeLetterWordsFromWord2 =
`ens
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
let word3 = "detect"
let sixLetterWordsFromWord3 = 
`detect`
// 
let fiveLetterWordsFromWord3 =
``;
// 
let fourLetterWordsFromWord3 = 
`cede
cete
deet
teed`;
//
let threeLetterWordsFromWord3 =
`cee
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
let word4 = `prison`
let sixLetterWordsFromWord4 = 
`orpins
prions
prison
spinor`;
// 
let fiveLetterWordsFromWord4 =
`irons
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
let fourLetterWordsFromWord4 = 
`inro
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
spin`
//
let threeLetterWordsFromWord4 =
`ins
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
let sixLetterWordsFromWord5 = 
`nobody`;
// 
let fiveLetterWordsFromWord5 =
`boody`;
// 
let fourLetterWordsFromWord5 = 
`body
bond
bony
boon
boyo
doby
yond`;
//
let threeLetterWordsFromWord5 =
`bod
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
let sixLetterWordsFromWord6 = 
`church`;
// 
let fiveLetterWordsFromWord6 =
`curch`;
// 
let fourLetterWordsFromWord6 = 
``;
//
let threeLetterWordsFromWord6 =
`cru
cur
huh`;
// 
var sixLetterWordsFromWord6Array = sixLetterWordsFromWord6.split("\n");

var fiveLetterWordsFromWord6Array = fiveLetterWordsFromWord6.split("\n");

var fourLetterWordsFromWord6Array = fourLetterWordsFromWord6.split("\n");

var threeLetterWordsFromWord6Array = threeLetterWordsFromWord6.split("\n");


// Word 7
let word7 = `artist`;
let sixLetterWordsFromWord7 = 
`artist
strait
strati
traits`;
// 
let fiveLetterWordsFromWord7 =
`airts
astir
sitar
stair
start
stria
tarsi
tarts
trait`;
// 
let fourLetterWordsFromWord7 = 
`airs
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
let threeLetterWordsFromWord7 =
`air
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
let sixLetterWordsFromWord8 = 
`hardly`;
// 
let fiveLetterWordsFromWord8 =
`hardy
hydra
lardy
lyard`;
// 
let fourLetterWordsFromWord8 = 
`aryl
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
let threeLetterWordsFromWord8 =
`dah
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
let sixLetterWordsFromWord9 = 
`moving`;
// 
let fiveLetterWordsFromWord9 =
``;
// None!
// 
let fourLetterWordsFromWord9 = 
`vino`;
//
let threeLetterWordsFromWord9 =
`gin
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
let sixLetterWordsFromWord10 = 
`downer
wonder`;
// 
let fiveLetterWordsFromWord10 =
`dower
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
let fourLetterWordsFromWord10 = 
`doer
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
let threeLetterWordsFromWord10 =
`den
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
let sixLetterWordsFromWord11 = 
`anyone`;
// 
let fiveLetterWordsFromWord11 =
`annoy
anyon`;
// 
let fourLetterWordsFromWord11 = 
`aeon
anon
neon
nona
none
yean`;
//
let threeLetterWordsFromWord11 =
`ane
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
let word12 = `mature`
let sixLetterWordsFromWord12 = 
`mature`;
// 
let fiveLetterWordsFromWord12 =
`armet
mater
muter
ramet
tamer
urate`;
// 
let fourLetterWordsFromWord12 = 
`arum
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
let threeLetterWordsFromWord12 =
`amu
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
let sixLetterWordsFromWord13 = 
`button`;
// 
let fiveLetterWordsFromWord13=
``;
// None!
// 
let fourLetterWordsFromWord13 = 
`bott
bout
bunt
butt
tout
unto`;
//
let threeLetterWordsFromWord13 =
`bot
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
let sixLetterWordsFromWord14 = 
`repeat
retape`;
// 
let fiveLetterWordsFromWord14 =
`apter
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
let fourLetterWordsFromWord14 = 
`aper
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
let threeLetterWordsFromWord14 =
`ape
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
let sixLetterWordsFromWord15 = 
`phrase
raphes
seraph
shaper
sherpa`;
// 
let fiveLetterWordsFromWord15 =
`apers
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
let fourLetterWordsFromWord15 = 
`aper
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
let threeLetterWordsFromWord15 =
`ahs
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
let sixLetterWordsFromWord16 = 
`ending
ginned`;
// 
let fiveLetterWordsFromWord16 =
`deign
dinge
inned`;
// 
let fourLetterWordsFromWord16 = 
`deni
dine
ding
gied
gien
nide
nine`;
//
let threeLetterWordsFromWord16 =
`den
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
let sixLetterWordsFromWord17 = 
`bright`;
// 
let fiveLetterWordsFromWord17 =
`bight
birth
brith
girth
grith
right`;
// 
let fourLetterWordsFromWord17= 
`brig
brit
girt
grit
thir
trig`;
//
let threeLetterWordsFromWord17 =
`big
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
let sixLetterWordsFromWord18 = 
`pretty`;
// 
let fiveLetterWordsFromWord18 =
`petty`;
// 
let fourLetterWordsFromWord18 = 
`pert
prey
pyre
tret
trey
tyer
type
tyre
yett`;
//
let threeLetterWordsFromWord18 =
`per
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
let sixLetterWordsFromWord19 = 
`struck
trucks`;
// 
let fiveLetterWordsFromWord19 =
`crust
curst
rucks
stuck
truck
tucks`;
// 
let fourLetterWordsFromWord19 = 
`crus
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
let threeLetterWordsFromWord19 =
`cru
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
let sixLetterWordsFromWord20 = 
`corset
coster
escort
rectos
scoter
sector`;
// 
let fiveLetterWordsFromWord20 =
`ceros
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
let fourLetterWordsFromWord20 = 
`cero
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
let threeLetterWordsFromWord20 =
`cor
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
