exports.private = () =>{
	return`*「❗」ONLY PRIVATE CHAT*`
	}
exports.wait = () => {
    return `*「❗」MOHON TUNGGU SEBENTAR*`
}
exports.ok = () => {
    return `*「✅」DONE*`
}

exports.err = () => {
    return `*「❗」FITUR EROR ATAU MAINTANCE*`
}
exports.erorLink = () => {
    return `*「❗」LINK TIDAK VALID ATAU EROR*`
}
exports.media = () => {
    return `*Silahkan pilih media yang ingin kamu download*`
}
exports.replyImg = (prefix, command) => {
    return `*Kirim/Reply Foto Dengan Caption ${prefix + command}*`
}

exports.wrongFormat = (prefix) => {
    return `*「❗」FORMAT SALAH*`
}

exports.emptyMess = () => {
    return `*「❗」MASUKAN PESAN YANG INGIN DISAMPAIKAN*`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `*「❗」COMMAND ${command} TIDAK TERSEDIA DIDALAM MENU*`
}

exports.ownerOnly = () => {
    return `*「❗」ONLY OWNER*`
}

exports.doneOwner = () => {
    return `*「✅」DONE OWNER*`
}

exports.groupOnly = () => {
    return `*「❗」ONLY GROUP*`
}

exports.adminOnly = () => {
    return `*「❗」ONLY ADMIN GROUP*`
}

exports.nhFalse = () => {
    return `*「❗」KODE TIDAK VALID ATAU INVALID*`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `*「❗」USER BUKAN ADMIN*`
}

exports.adminAlready = () => {
    return `*「❗」TIDAK BISA MEMPROMOTE USER YANG SUDAH MENJADI ADMIN*`
}

exports.botNotAdmin = () => {
    return `*「❗」JADIKAN BOT ADMIN TERLEBIH DAHULU*`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `*「❗」UKURAN ATAU SIZE FILE TERLALU BESAR*`
}

exports.notNum = (q) => {
    return `"${q}", *「❗」MASUKAN TEXT BUKAN ANGKA*`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Selamat ${salam} Member ${pushname} ❤️, 
Aku Adalah *${botname}*, Aku Adalah Bot Beta Multi-Device WhatsApp.
Jika Ada Kesalahan Atau Bug Padaku Silahkan Lapor Ownerku Yaa!!
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time : ${time}*
*🧾 List-Menu Abdillah-Botz :*

╭─❒ 「 Bot Info 」 
▸ #owner
▸ #rules
▸ #sc
▸ #ping
▸ #runtime
▸ #botstatus
▸ #donate
╰❒ 


╭─❒ 「 Owner 」 
▸ < evaluate
▸ > evaluate
▸ $ exec
▸ => exec
▸ #setmenu [query]
▸ #setmenu templateLocation
▸ #setmenu templateTenor
▸ #setmenu katalog
▸ #setmenu katalog2
▸ #setmenu list
▸ #setwm packname|author
▸ #sendsesi
▸ #listpc
▸ #listgc
▸ #broadcast [text]
▸ #bc [text]
▸ #bcgc [text]
▸ #nsfw [on/off]
▸ #mute [on/off]
▸ #banchat
▸ #unbanchat
▸ #autorespond [on/off]
▸ #antiviewonce [on/off]
▸ #join [link]
▸ #self
▸ #public [only bot]
▸ #del [reply pesan bot]
▸ #setppbot [reply image]
╰❒ 

╭─❒ 「 Store Menu 」
▸ #list
▸ #addlist [key|respond]
▸ #dellist [key]
▸ #update [key|respond]
▸ #store
▸ #kali
▸ #bagi
▸ #tambah
▸ #kurang
▸ #kalkulator
▸ #proses
▸ #done [surah|ayat]
╰❒ 


╭─❒ 「 Database 」 
▸ #setcmd [reply stiker]
▸ #delcmd [reply stiker]
▸ #listcmd
▸ #absen
▸ #cekabsen
▸ #deleteabsen
▸ #absenstart
▸ #addmsg [nama file]
▸ #getmsg [nama file]
▸ #listmsg
▸ #delmsg [nama file]
╰❒ 


╭─❒ 「 Group 」 
▸ #listonline
▸ #sider
▸ #wm packname|author
▸ #infochat
▸ #setdesk [text]
▸ #setppgrup [reply image]
▸ #antilink [on/off]
▸ #revoke
▸ #leave
▸ #add [62***]
▸ #kick @tag
▸ #leave
▸ #linkgc
▸ #take packname|author
▸ #group [open/close]
▸ #tagall [text]
▸ #hidetag [text]
╰❒ 

╭─❒ 「 Anime 」 
▸ #quotesanime
▸ #anime [query]
▸ #manga [query]
▸ #character [query]
╰❒ 

╭─❒ 「 Tag 」 
▸ #stickertag
▸ #videotag [query]
▸ #vntag [query]
▸ #imagetag [query]
╰❒ 

╭─❒ 「 Stalking 」 
▸ #igstalk [username]
▸ #ghstalk [username]
▸ #ytstalk [channel]
╰❒ 

╭─❒ 「 Search 」 
▸ #ytsearch [query]
▸ #wallpaper [query]
▸ #wallpaper2 [query]
▸ #google [query]
▸ #playstore [query]
▸ #shopee [query]
▸ #pinterest [query]
╰❒ 

╭─❒ 「 Converter 」
▸ #toaudio [video]
▸ #tomp3 [video]
▸ #tovn [video]
▸ #stiker [reply image]
▸ #tourl [image/video/stiker]
▸ #togif [sticker]
▸ #tomp4 [sticker]
▸ #toimg [reply sticker]
╰❒ 

╭─❒ 「 Download 」 
▸ #ytplay
▸ #ytsearch
▸ #ytmp3
▸ #ytmp4
▸ #telesticker
▸ #tiktoknowm
▸ #tiktokmusic
▸ #spotify
▸ #spotifysearch
▸ #jooxplay
▸ #igdl
▸ #igdl2
▸ #twtdl
▸ #fbdl
▸ #zippyshare
▸ #pinterest
▸ #pinterest2
▸ #pinterestdl
▸ #pixiv
▸ #pixivdl
╰❒ 

╭─❒ 「 Primbon 」
▸ #nomorhoki 887435047326
▸ #artimimpi [query]
▸ #artinama [query]
▸ #ramaljodoh
▸ #ramaljodohbali
▸ #suamiistri
▸ #ramalcinta
▸ #cocoknama
▸ #pasangan
▸ #jadiannikah
▸ #sifatusaha
▸ #rezeki
▸ #pekerjaan
▸ #nasib
▸ #penyakit
▸ #tarot
▸ #fengshui
▸ #haribaik
▸ #harisangar
▸ #harisial
▸ #nagahari
▸ #arahrezeki
▸ #peruntungan
▸ #weton
▸ #karakter
▸ #keberuntungan
▸ #memancing
▸ #masasubur
▸ #zodiak 
╰❒ ▸ #shio [query]

╭─❒ 「 Random Anime 」
▸ #loli
▸ #neko
▸ #waifu
▸ #shinobu
▸ #megumin
▸ #bully
▸ #cuddle
▸ #cry
▸ #hug
▸ #awoo
▸ #kiss
▸ #lick
▸ #pat
▸ #smug
▸ #bonk
▸ #yeet
▸ #blush
▸ #smile
▸ #wave
▸ #highfive
▸ #handhold
▸ #nom
▸ #bite
▸ #glomp
▸ #slap
▸ #kill
▸ #happy
▸ #wink
▸ #poke
▸ #dance
╰❒ ▸ #cringe

╭─❒ 「 Nsfw & Sfw 」
▸ #ahegao
▸ #ass
▸ #bdsm
▸ #blowjob
▸ #cuckold
▸ #cum
▸ #ero
▸ #femdom
▸ #foot
▸ #gangbang
▸ #glasses
▸ #jahy
▸ #manga
▸ #masturbation
▸ #neko
▸ #orgy
▸ #panties
▸ #pussy
▸ #tentacles
▸ #thighs
▸ #yuri
▸ #feet
▸ #lewdkemo
▸ #woof
▸ #gasm
▸ #solo
▸ #8ball
▸ #goose
▸ #avatar
▸ #hololewd
▸ #gecg
▸ #holo
▸ #fox_girl
▸ #tits
▸ #eroyuri
▸ #holoyero
▸ #lizard
▸ #keta
▸ #eron
▸ #erok
▸ #kemonomimi
▸ #cum_jpg
▸ #nsfw_avatar
▸ #erofeet
▸ #meow
▸ #wallpaper
▸ #waifu
▸ #trap
▸ #lewd
▸ #pussy_jpg
▸ #futanari
▸ #lewdk
▸ #solog
▸ #smug
▸ #cum
▸ #slap
▸ #les
▸ #erokemo
▸ #bj
▸ #pwankg
▸ #pat
▸ #poke
▸ #feed
▸ #nsfw_neko_gif
▸ #pussy
▸ #feetg
▸ #baka
▸ #hug
▸ #kiss
▸ #tickle
▸ #spank
▸ #kuni
▸ #classic
▸ #boobs
▸ #anal
▸ #ngif
▸ #cuddle
╰❒ ▸ #zettai

╭─❒ 「 Ephoto360 Menu 」
▸ #wetglass
▸ #multicolor3d
▸ #watercolor
▸ #luxurygold
▸ #galaxywallpaper
▸ #lighttext
▸ #beautifulflower
▸ #puppycute
▸ #royaltext
▸ #heartshaped
▸ #birthdaycake
▸ #galaxystyle
▸ #hologram3d
▸ #greenneon
▸ #glossychrome
▸ #greenbush
▸ #metallogo
▸ #noeltext
▸ #glittergold
▸ #textcake
▸ #starsnight
▸ #wooden3d
▸ #textbyname
▸ #writegalacy
▸ #galaxybat
▸ #snow3d
▸ #birthdayday
▸ #goldplaybutton
▸ #silverplaybutton
▸ #freefire
╰❒ 
 
╭─❒ 「 Photooxy Menu 」
▸ #shadow
▸ #cup
▸ #cup1
▸ #romance
▸ #smoke
▸ #burnpaper
▸ #lovemessage
▸ #undergrass
▸ #love
▸ #coffe
▸ #woodheart
▸ #woodenboard
▸ #summer3d
▸ #wolfmetal
▸ #nature3d
▸ #underwater
▸ #golderrose
▸ #summernature
▸ #letterleaves
▸ #glowingneon
▸ #fallleaves
▸ #flamming
▸ #harrypotter
▸ #carvedwood
╰❒

╭─❒ 「 Textpro Menu 」
▸ #blackpink
▸ #neon
▸ #greenneon
▸ #advanceglow
▸ #futureneon
▸ #sandwriting
▸ #sandsummer
▸ #sandengraved
▸ #metaldark
▸ #neonlight
▸ #holographic
▸ #text1917
▸ #minion
▸ #deluxesilver
▸ #newyearcard
▸ #bloodfrosted
▸ #halloween
▸ #jokerlogo
▸ #fireworksparkle
▸ #natureleaves
▸ #bokeh
▸ #toxic
▸ #strawberry
▸ #box3d
▸ #roadwarning
▸ #breakwall
▸ #icecold
▸ #luxury
▸ #cloud
▸ #summersand
▸ #horrorblood
▸ #thunder
╰❒ 

╭─❒ 「 Others 」
▸ #afk [reason]
▸ #translate kode_bahasa text
▸ #kalkulator [query]
▸ #smeme [text]
▸ #smeme2 [text|text]
▸ #memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
▸ #kuismath
▸ #tebak [option]
▸ #tekateki
▸ #susunkata
╰❒ ▸ #caklontong

╭─❒ 「 Asupan Menu 」
▸ #chika
▸ #delvira
▸ #ayu
▸ #bunga
▸ #aura
▸ #nisa
▸ #ziva
▸ #yana
▸ #viona
▸ #syania
▸ #riri
▸ #syifa
▸ #mama_gina
▸ #alcakenya
▸ #mangayutri
▸ #rikagusriani
▸ #asupan
▸ #bocil
▸ #geayubi
▸ #santuy
▸ #ukhty
╰❒ ▸ #syifa

╭─❒ 「 Telegram Sticker 」
▸ #awoawo
▸ #benedict
▸ #chat
▸ #dbfly
▸ #dino_kuning
▸ #doge
▸ #gojosatoru
▸ #hope_boy
▸ #jisoo
▸ #kr_robot
▸ #kucing
▸ #lonte
▸ #manusia_lidi
▸ #menjamet
▸ #meow
▸ #nicholas
▸ #patrick
▸ #popoci
▸ #sponsbob
▸ #kawan_sponsbob
╰❒ ▸ #tyni

╭─❒ 「 Random Cewe 」
▸ #china 
▸ #indonesia 
▸ #malaysia 
▸ #thailand 
▸ #korea 
▸ #japan 
▸ #vietnam 
▸ #jenni 
▸ #jiso 
▸ #lisa  
╰❒ ▸ #rose

╭─❒ 「 TqTo 」 
▸ My God
▸ My Parents
▸ Fatih A.
▸ Ferdi
▸ DikaArdnt
▸ Mhankbarbar
▸ Nurutomo
▸ Rashid
▸ ZeeoneOfc
▸ HafidzAbdillah
▸ Penyedia Module
╰❒ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *▸ #allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan AbdillahBotz di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Sugenh Enjing Matusuwun! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan AbdillahBotz
😖🙏
`
}
exports.welcome = () =>{
	return`*Jangan Lupa Intro❤️*
	
╭ 𝖭𝖺𝗆𝖺 :
▸ 𝖴𝗆𝗎𝗋 :
▸ 𝖦𝖾𝗇𝖽𝖾𝗋 :
▸ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Seeyou Goodbye 👋`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

WhatsApp: wa.me/628895656884
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
▸ #owner
▸ #rules
▸ #sc
▸ #ping
▸ #runtime
▸ #botstatus
╰❒ ▸ #donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
▸ < evaluate
▸ > evaluate
▸ $ exec
▸ => exec
▸ #setmenu [query]
▸ #setmenu templateLocation
▸ #setmenu templateTenor
▸ #setmenu katalog
▸ #setmenu katalog2
▸ #setmenu list
▸ #setwm packname|author
▸ #sendsesi
▸ #listpc
▸ #listgc
▸ #broadcast [text]
▸ #bc [text]
▸ #bcgc [text]
▸ #nsfw [on/off]
▸ #mute [on/off]
▸ #banchat
▸ #unbanchat
▸ #autorespond [on/off]
▸ #antiviewonce [on/off]
▸ #join [link]
▸ #self
▸ #public [only bot]
▸ #del [pesan bot]
╰❒ ▸ #setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
▸ #setcmd [reply stiker]
▸ #delcmd [reply stiker]
▸ #listcmd
▸ #absen
▸ #cekabsen
▸ #deleteabsen
▸ #absenstart
▸ #addmsg [nama file]
▸ #getmsg [nama file]
▸ #listmsg
╰❒ ▸ #delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
▸ #listonline
▸ #sider
▸ #wm packname|author
▸ #infochat
▸ #setdesk [text]
▸ #setppgrup [reply image]
▸ #antilink [on/off]
▸ #revoke
▸ #leave
▸ #add [62***]
▸ #kick @tag
▸ #leave
▸ #linkgc
▸ #take packname|author
▸ #group [open/close]
▸ #tagall [text]
╰❒ ▸ #hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
▸ #quotesanime
▸ #anime [query]
▸ #manga [query]
╰❒ ▸ #character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
▸ #stickertag
▸ #videotag [query]
▸ #vntag [query]
╰❒ ▸ #imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
▸ #igstalk [username]
▸ #ghstalk [username]
╰❒ ▸ #ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
▸ #ytsearch [query]
▸ #wallpaper [query]
▸ #google [query]
▸ #wikimedia [query]
▸ #hentai
▸ #wattpad [query]
▸ #webtoons [query]
▸ #drakor [query]
╰❒ ▸ #pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
▸ #toaudio [video]
▸ #tomp3 [video]
▸ #tovn [video]
▸ #stiker [reply image]
▸ #tourl [image/video]
▸ #togif [sticker]
▸ #tomp4 [sticker]
╰❒▸ #toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
▸ #wanted [reply image/stiker]
▸ #utatoo [reply image/stiker]
▸ #unsharpen [reply image/stiker]
▸ #thanos [reply image/stiker]
▸ #sniper [reply image/stiker]
▸ #sharpen [reply image/stiker]
▸ #sepia [reply image/stiker]
▸ #scary [reply image/stiker]
▸ #rip [reply image/stiker]
▸ #redple [reply image/stiker]
▸ #rejected [reply image/stiker]
▸ #posterize [reply image/stiker]
▸ #ps4 [reply image/stiker]
▸ #pixelize [reply image/stiker]
▸ #missionpassed [reply image/stiker]
▸ #moustache [reply image/stiker]
▸ #lookwhatkarenhave [reply image/stiker]
▸ #jail [reply image/stiker]
▸ #invert [reply image/stiker]
▸ #instagram [reply image/stiker]
▸ #greyscale [reply image/stiker]
▸ #glitch [reply image/stiker]
▸ #gay [reply image/stiker]
▸ #frame [reply image/stiker]
▸ #fire [reply image/stiker]
▸ #distort [reply image/stiker]
▸ #dictator [reply image/stiker]
▸ #deepfry [reply image/stiker]
▸ #ddungeon [reply image/stiker]
▸ #circle [reply image/stiker]
▸ #challenger [reply image/stiker]
▸ #burn [reply image/stiker]
▸ #brazzers [reply image/stiker]
╰❒ ▸ #beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
▸ #jail [reply image/stiker]
▸ #red [reply image/stiker]
▸ #gay [reply image/stiker]
▸ #bloo [reply image/stiker]
▸ #blue [reply image/stiker]
▸ #sepia [reply image/stiker]
▸ #green [reply image/stiker]
▸ #glass [reply image/stiker]
▸ #invert [reply image/stiker]
▸ #blurple [reply image/stiker]
▸ #blurple2 [reply image/stiker]
▸ #wasted [reply image/stiker]
▸ #passed [reply image/stiker]
▸ #triggered [reply image/stiker]
▸ #comrade [reply image/stiker]
▸ #greyscale [reply image/stiker]
▸ #threshold [reply image/stiker]
▸ #brightness [reply image/stiker]
╰❒ ▸ #invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
▸ #tiktok [link]
▸ #tiktoknowm [link]
▸ #tiktokwm [link]
▸ #tiktokaudio [link]
▸ #ytdl [link]
▸ #play [query]
▸ #ytmp3 [link]
▸ #ytshortmp3 [link]
▸ #ytmp4 [link]
▸ #ytshorts [link]
▸ #facebook [link]
▸ #facebooksd [link]
▸ #facebookhd [link]
▸ #fbaudio [link]
▸ #igstory [username]
▸ #igdl [link]
▸ #igphoto [link]
▸ #igvideo [link]
▸ #igreels [link]
▸ #igtv [link]
▸ #soundcloud [link]
▸ #gitclone [link repo]
▸ #gitrepo [username repo branch]
▸ #mediafire [link]
╰❒ ▸ #twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
▸ #loli
▸ #neko
▸ #waifu
▸ #shinobu
▸ #megumin
▸ #bully
▸ #cuddle
▸ #cry
▸ #hug
▸ #awoo
▸ #kiss
▸ #lick
▸ #pat
▸ #smug
▸ #bonk
▸ #yeet
▸ #blush
▸ #smile
▸ #wave
▸ #highfive
▸ #handhold
▸ #nom
▸ #bite
▸ #glomp
▸ #slap
▸ #kill
▸ #happy
▸ #wink
▸ #poke
▸ #dance
╰❒ ▸ #cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
▸ #ahegao
▸ #ass
▸ #bdsm
▸ #blowjob
▸ #cuckold
▸ #cum
▸ #ero
▸ #femdom
▸ #foot
▸ #gangbang
▸ #glasses
▸ #jahy
▸ #manga
▸ #masturbation
▸ #neko
▸ #orgy
▸ #panties
▸ #pussy
▸ #tentacles
▸ #thighs
▸ #yuri
▸ #feet
▸ #lewdkemo
▸ #woof
▸ #gasm
▸ #solo
▸ #8ball
▸ #goose
▸ #avatar
▸ #hololewd
▸ #gecg
▸ #holo
▸ #fox_girl
▸ #tits
▸ #eroyuri
▸ #holoyero
▸ #lizard
▸ #keta
▸ #eron
▸ #erok
▸ #kemonomimi
▸ #cum_jpg
▸ #nsfw_avatar
▸ #erofeet
▸ #meow
▸ #wallpaper
▸ #waifu
▸ #trap
▸ #lewd
▸ #pussy_jpg
▸ #futanari
▸ #lewdk
▸ #solog
▸ #smug
▸ #cum
▸ #slap
▸ #les
▸ #erokemo
▸ #bj
▸ #pwankg
▸ #pat
▸ #poke
▸ #feed
▸ #nsfw_neko_gif
▸ #pussy
▸ #feetg
▸ #baka
▸ #hug
▸ #kiss
▸ #tickle
▸ #spank
▸ #kuni
▸ #classic
▸ #boobs
▸ #anal
▸ #ngif
▸ #cuddle
╰❒ ▸ #zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
▸ #halloween2 text|text2
▸ #horror text|text2
▸ #game8bit text|text2
▸ #layered text|text2
▸ #glitch2 text|text2
▸ #coolg text|text2
▸ #coolwg text|text2
▸ #realistic text|text2
▸ #space3d text|text2
▸ #gtiktok text|text2
▸ #stone text|text2
▸ #marvel text|text2
▸ #marvel2 text|text2
▸ #pornhub text|text2
▸ #avengers text|text2
▸ #metalr text|text2
▸ #metalg text|text2
▸ #metalg2 text|text2
▸ #halloween2 text|text2
▸ #lion text|text2
▸ #wolf_bw text|text2
▸ #wolf_g text|text2
▸ #ninja text|text2
▸ #3dsteel text|text2
▸ #horror2 text|text2
▸ #lava text|text2
▸ #bagel text|text2
▸ #blackpink text
▸ #rainbow2 text
▸ #water_pipe text
▸ #halloween text
▸ #sketch text
▸ #sircuit text
▸ #discovery text
▸ #metallic2 text
▸ #fiction text
▸ #demon text
▸ #transformer text
▸ #berry text
▸ #thunder text
▸ #magma text
▸ #3dstone text
▸ #neon text
▸ #glitch text
▸ #harry_potter text
▸ #embossed text
▸ #broken text
▸ #papercut text
▸ #gradient text
▸ #glossy text
▸ #watercolor text
▸ #multicolor text
▸ #neon_devil text
▸ #underwater text
▸ #bear text
▸ #wonderfulg text
▸ #christmas text
▸ #neon_light text
▸ #snow text
▸ #cloudsky text
▸ #luxury2 text
▸ #gradient2 text
▸ #summer text
▸ #writing text
▸ #engraved text
▸ #summery text
▸ #3dglue text
▸ #metaldark text
▸ #neonlight text
▸ #oscar text
▸ #minion text
▸ #holographic text
▸ #purple text
▸ #glossyb text
▸ #deluxe2 text
▸ #glossyc text
▸ #fabric text
▸ #neonc text
▸ #newyear text
▸ #newyear2 text
▸ #metals text
▸ #xmas text
▸ #blood text
▸ #darkg text
▸ #joker text
▸ #wicker text
▸ #natural text
▸ #firework text
▸ #skeleton text
▸ #balloon text
▸ #balloon2 text
▸ #balloon3 text
▸ #balloon4 text
▸ #balloon5 text
▸ #balloon6 text
▸ #balloon7 text
▸ #steel text
▸ #gloss text
▸ #denim text
▸ #decorate text
▸ #decorate2 text
▸ #peridot text
▸ #rock text
▸ #glass text
▸ #glass2 text
▸ #glass3 text
▸ #glass4 text
▸ #glass5 text
▸ #glass6 text
▸ #glass7 text
▸ #glass8 text
▸ #captain_as2 text
▸ #robot text
▸ #equalizer text
▸ #toxic text
▸ #sparkling text
▸ #sparkling2 text
▸ #sparkling3 text
▸ #sparkling4 text
▸ #sparkling5 text
▸ #sparkling6 text
▸ #sparkling7 text
▸ #decorative text
▸ #chocolate text
▸ #strawberry text
▸ #koifish text
▸ #bread text
▸ #matrix text
▸ #blood2 text
▸ #neonligth2 text
▸ #thunder2 text
▸ #3dbox text
▸ #neon2 text
▸ #roadw text
▸ #bokeh text
▸ #gneon text
▸ #advanced text
▸ #dropwater text
▸ #wall text
▸ #chrismast text
▸ #honey text
▸ #drug text
▸ #marble text
▸ #marble2 text
▸ #ice text
▸ #juice text
▸ #rusty text
▸ #abstra text
▸ #biscuit text
▸ #wood text
▸ #scifi text
▸ #metalr text
▸ #purpleg text
▸ #shiny text 
▸ #jewelry text
▸ #jewelry2 text
▸ #jewelry3 text
▸ #jewelry4 text
▸ #jewelry5 text
▸ #jewelry6 text
▸ #jewelry7 text
▸ #jewelry8 text
▸ #metalh text
▸ #golden text
▸ #glitter text
▸ #glitter2 text
▸ #glitter3 text
▸ #glitter4 text
▸ #glitter5 text
▸ #glitter6 text
▸ #glitter7 text
▸ #metale text
▸ #carbon text
▸ #candy text
▸ #metalb text
▸ #gemb text
▸ #3dchrome text
▸ #metalb2 text
▸ #metalg text
╰❒ ▸ #metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
▸ #ttp [text]
▸ #attp [text]
▸ #afk [reason]
▸ #translate kode_bahasa text
▸ #kalkulator [query]
▸ #smeme [text]
▸ #smeme2 [text|text]
╰❒ ▸ #memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
▸ #kuismath
▸ #tebak [option]
▸ #tekateki
▸ #susunkata
╰❒ ▸ #caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
▸ #chika
▸ #delvira
▸ #ayu
▸ #bunga
▸ #aura
▸ #nisa
▸ #ziva
▸ #yana
▸ #viona
▸ #syania
▸ #riri
▸ #syifa
▸ #mama_gina
▸ #alcakenya
▸ #mangayutri
▸ #rikagusriani
▸ #asupan
▸ #bocil
▸ #geayubi
▸ #santuy
▸ #ukhty
╰❒ ▸ #syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
▸ #china 
▸ #indonesia 
▸ #malaysia 
▸ #thailand 
▸ #korea 
▸ #japan 
▸ #vietnam 
▸ #jenni 
▸ #jiso 
▸ #lisa  
╰❒ ▸ #rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
▸ My God
▸ My Parents
▸ Fatih A.
▸ Ferdi
▸ DikaArdnt
▸ Mhankbarbar
▸ Nurutomo
▸ Rashid
▸ ZeeoneOfc
▸ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
▸ #nomorhoki 887435047326
▸ #artimimpi [query]
▸ #artinama [query]
▸ #ramaljodoh
▸ #ramaljodohbali
▸ #suamiistri
▸ #ramalcinta
▸ #cocoknama
▸ #pasangan
▸ #jadiannikah
▸ #sifatusaha
▸ #rezeki
▸ #pekerjaan
▸ #nasib
▸ #penyakit
▸ #tarot
▸ #fengshui
▸ #haribaik
▸ #harisangar
▸ #harisial
▸ #nagahari
▸ #arahrezeki
▸ #peruntungan
▸ #weton
▸ #karakter
▸ #keberuntungan
▸ #memancing
▸ #masasubur
▸ #zodiak 
╰❒ ▸ #shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
▸ #awoawo
▸ #benedict
▸ #chat
▸ #dbfly
▸ #dino_kuning
▸ #doge
▸ #gojosatoru
▸ #hope_boy
▸ #jisoo
▸ #kr_robot
▸ #kucing
▸ #lonte
▸ #manusia_lidi
▸ #menjamet
▸ #meow
▸ #nicholas
▸ #patrick
▸ #popoci
▸ #sponsbob
▸ #kawan_sponsbob
╰❒
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
▸ #wetglass
▸ #multicolor3d
▸ #watercolor
▸ #luxurygold
▸ #galaxywallpaper
▸ #lighttext
▸ #beautifulflower
▸ #puppycute
▸ #royaltext
▸ #heartshaped
▸ #birthdaycake
▸ #galaxystyle
▸ #hologram3d
▸ #greenneon
▸ #glossychrome
▸ #greenbush
▸ #metallogo
▸ #noeltext
▸ #glittergold
▸ #textcake
▸ #starsnight
▸ #wooden3d
▸ #textbyname
▸ #writegalacy
▸ #galaxybat
▸ #snow3d
▸ #birthdayday
▸ #goldplaybutton
▸ #silverplaybutton
▸ #freefire
╰❒`
}

exports.photooxy = (prefix) =>{
	return`╭─❒ 「 Photooxy Menu 」
▸ #shadow
▸ #cup
▸ #cup1
▸ #romance
▸ #smoke
▸ #burnpaper
▸ #lovemessage
▸ #undergrass
▸ #love
▸ #coffe
▸ #woodheart
▸ #woodenboard
▸ #summer3d
▸ #wolfmetal
▸ #nature3d
▸ #underwater
▸ #golderrose
▸ #summernature
▸ #letterleaves
▸ #glowingneon
▸ #fallleaves
▸ #flamming
▸ #harrypotter
▸ #carvedwood
╰❒`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
▸ #coverbannerlol text|heroes
▸ #pubglogomaker text|style
▸ #colorfulpubg text|color
▸ #astronotspace text|style
▸ #wallpaperaov text|heroes
▸ #maketeamlogo text|style
▸ #circlemarcotteam text|logo
▸ #wallpaperml text|heroes
▸ #dragonballfb text|character
▸ #bannerofaov text|character
▸ #effect3donbeach text|background
▸ #cutegirlgamer text|logo
▸ #footballteam text|logo
▸ #beautifulshimmering text|champion
▸ #pubgcutelogo text|logo
▸ #elegantrotation text|logo
▸ #logogamingassasin text|logo
▸ #introvideomaker text|logo
▸ #gaminglogo4fvs text|logo
▸ #blueneon text|logo
▸ #metalmascot text|logo
▸ #anonymous text|style
▸ #lolpentakill text|style
▸ #avatarleagueofking text|style
▸ #avatarff text|character
▸ #overwatchwallpaper text|character
▸ #rovwallpaperhd text|hero
▸ #rovwallpaper text|avatar
▸ #beautifulgalaxylol text|style
▸ #crossfirecover text|character
▸ #lolwallpaper text|wallpaper
▸ #coverdota2 text|heroes
▸ #coverleagueofking text|character
▸ #avatar3q360 text|avatar
▸ #coverofwarface text|character
▸ #newlolavatar text|avatar
▸ #csgocover text|background
▸ #coverloknew text|hero
▸ #coverfblol text|letters
▸ #overwatchcover text|hero
▸ #crossfirestyle text|avatar
▸ #avatarlolbyname text|style
▸ #lolcoverbyname text|avatar
▸ #cyberhunterfb text|character
▸ #coverfreefirefb text|character
▸ #gamingmascot text|style
▸ #coveronepiecefb text|character
▸ #bannerytcsgo text|banner
▸ #fbgamepubgcover text|template
▸ #banneroflol text|text2|banner
▸ #bannerofaov2 text|text2|banner
▸ #teamlogo text|text2|background
▸ #companylogo2 text|text2|background
▸ #companylogo text|text2|background
▸ #gradientlogo text|text2|background
▸ #pencilsketch text|text2|icon
▸ #gunlogogaming text|text2|background
▸ #banneroffreefire text|text2|background
▸ #letterlogos text|text2|thumb
▸ #bannerofoverwatch text|text2|background
▸ #bannerofapex text|text2|background
▸ #bannerofpubg text|text2|background
▸ #mascotstyle text|text2|thumb
▸ #logoaccording text|text2|thumb
╰❒ ▸ #avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
▸ #asmaulhusna
▸ #kisahnabi [nabi]
▸ #jadwalshalat [daerah]
▸ #randomquran
▸ #randomquran2
▸ #listsurah
▸ #tafsirsurah [surah]
╰❒ ▸ #alquranaudio [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
▸ #list
▸ #addlist [key|respond]
▸ #dellist [key]
▸ #update [key|respond]
▸ #store
▸ #kali
▸ #bagi
▸ #tambah
▸ #kurang
▸ #kalkulator
▸ #proses
╰❒ ▸ #done
`
}


exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
▸ #sound1
▸ #sound2
▸ #sound3
▸ #sound4
▸ #sound5
▸ #sound6
▸ #sound7
▸ #sound8
▸ #sound9
▸ #sound10
▸ #sound11
▸ #sound12
▸ #sound13
▸ #sound14
▸ #sound15
▸ #sound16
▸ #sound17
▸ #sound18 
▸ #sound19
▸ #sound20
▸ #sound21
▸ #sound22
▸ #sound23
▸ #sound24
▸ #sound25
▸ #sound26
▸ #sound27
▸ #sound28
▸ #sound29
▸ #sound30
▸ #sound31
▸ #sound32
▸ #sound33
▸ #sound34
▸ #sound35
▸ #sound36
▸ #sound37
▸ #sound38
▸ #sound39
▸ #sound40
▸ #sound41
▸ #sound42
▸ #sound43
▸ #sound44
▸ #sound45
▸ #sound46
▸ #sound47
▸ #sound48
▸ #sound49
▸ #sound50
▸ #sound51
▸ #sound52
▸ #sound53
▸ #sound54
▸ #sound55
▸ #sound56
▸ #sound57
▸ #sound58
▸ #sound59
▸ #sound60
▸ #sound61
▸ #sound62
▸ #sound63
▸ #sound64
▸ #sound65
▸ #sound66
▸ #sound67
▸ #sound68
▸ #sound69
╰❒ ▸ #sound70
`
}
