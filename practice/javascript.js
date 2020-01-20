// When it comes down to it, slurs are a quick way to dehumanize someone (quote author).
// I have excluded all slurs and derogatory words based on race, origin, gender, sexual orientation, religion and physicality. 
// If you find any slur/s I have missed, please feel free to email me at ciervatranquila@gmail.com.


let definitelyOffensiveWords= 
`ABO
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

definitelyOffensiveWordsArray = definitelyOffensiveWords.split("\n");


var lowercaseDefinitelyOffensiveWordsArray = ["abo", "abos", "baldie", "baldies", "baldy", "baywop", "baywops", "bohunk", "bohunks", "buckra", "buckras", "bulldike", "bulldikes", "bulldyke", "bulldykes", "bumboy", "bumboys", "chola", "cholas", "cholo", "cholos", "coloreds", "comsymp", "comsymps", "crip", "crips", "cunt", "cunts", "dago", "dagoes", "dagos", "darkey", "darkeys", "darkie", "darkies", "darky ", "dikey", "dogan", "dogans", "dykey", "fag", "faggier", "faggiest", "faggot", "faggotries", "faggotry", "faggoty", "faggy", "fatso", "fatsoes", "fatsos", "feminazi", "feminazis", "ginzo", "ginzoes", "goolie", "goolies", "goy", "goyim", "goyish", "goyishe", "goys", "graybeard", "graybeards", "greybeard", "greybeards", "haole", "haoles", "hebe", "hebes", "ho", "honkey", "honkeys", "honkie", "honkies", "honky ", "hos", "hunkey", "hunkeys", "hunkie", "hunkies", "jew", "jewed", "jewing", "jews", "jigaboo", "jigaboos", "kike", "kikes", "les", "lesbo", "lesbos", "leses", "lez", "lezzes", "lezzie", "lezzies", "lezzy", "mick", "micks", "nigger", "niggers", "nitchie", "nitchies", "papism", "papisms", "papist", "papistic", "papistries", "papistry", "papists", "picaninnies", "picaninny", "pickaninnies", "pickaninny", "pickney", "pickneys", "polack", "polacks", "pommie", "pommies", "pommy", "poofier", "poofiest", "poofs", "pooftah", "pooftahs", "poofter", "poofters", "poofy", "poontang", "poontangs", "poove", "pooves", "poperies", "popery", "popish", "popishly", "raghead", "ragheads", "redneck", "redskin", "redskins", "schvartze", "schvartzes", "schwartze", "schwartzes", "sheeney", "sheeneys", "sheenie", "sheenies", "shegetz", "shemale", "shemales", "shicksa", "shicksas", "shiksa", "shiksas", "shikse", "shikseh", "shiksehs", "shikses", "shkotzim", "shkotzim", "shvartze", "shvartzes", "spic", "spick", "spicks", "spics", "spik", "spiks", "squaw", "squaws", "vendu", "vendus", "wetback", "wetbacks", "whities", "wog", "woggish", "wogs", "wop", "wops", "wrinklie", "wrinklies", "yid", "yids"];


var fruits = ["banana", "orange", "apple"];

function checkIfOffensiveWord (arrayToCheck) {
    var isThereOffensiveWord = false;
    arrayToCheck.filter(word => {
    var word = word.toLowerCase(); 
    lowercaseDefinitelyOffensiveWordsArray.forEach(offensiveWord => {
        if (word === offensiveWord) {
            isThereOffensiveWord = true;
            return console.log('offensive word in there !!!!!!!!!!!!!!!');
         }
            else {
                console.log('no offensive words yet')
            }
    })
})
console.log(isThereOffensiveWord)
}
checkIfOffensiveWord(fruits)

