// NÃO REMOVA OS CREDITOS POR FAVOR, LEVOU MUITO TEMPO PRA SE FAZER UM BOT ASSIM!
// SEGUNDO A LICENÇA MIT, REMOVER OS CREDITOS É CRIME, DÊ OS DIREITOS AO CRIADOR!
const config = require('./config/config.json')
const prefix = config.prefix
exports.help = help()
function help() {
	return `   *☾ Meus comandos ☽*

_ℹ️ -_ *AVISO!* _Caso algum comando não funcione significa que o servidor caiu e é necessário esperar que volte._


vv

`
}

exports.randomh = randomh()
function randomh() {
	return `   *Random Menu*

_ℹ️ -_ *AVISO!* _Caso algum comando não funcione significa que o servidor caiu e é necessário esperar que volte._

*${prefix}help (mensagem)*
_Informe erros para os responsáveis da Taiga._

*${prefix}dog*
_Você adora cachorrinhos? Pois eu amo!_

*${prefix}loli*
_Lolis são pra dar amor e carinho..._

*${prefix}waifu*
_Com isso eu mando foto de waifus lindas._

*${prefix}neko*
_Bom...uma neko as vezes cai bem né?_

*${prefix}Frase*
_Nesse comando eu te envio frases inspiradoras._

*${prefix}randomAnime*
_Envie isso e eu enviarei de volta fotos aleatorias de anime._

*${prefix}getmeme*
_Por que não curtir uns memes né?_

*${prefix}Husb*
_Essa e a mesma coisa da waifu, mas em versão homem._

*${prefix}randomwall*
_Mais wallpapers de anime, mas desse vez são de personagens._

*${prefix}pokemon*
_Quer ver fotos de pokemons?_

*${prefix}dva*
_Isso e pra obter fotos da DVA do OverWatch._

*${prefix}hug*
_É aqui que eu boto fotos fofinhas que tem um abraço entre personagens de anime._

*${prefix}Baguette*
_Já é hora do meu pãozinho?!_

*${prefix}Yuri*
_Caso você goste de algo mais lesbico em anime, aqui está._

*${prefix}girl*
_Caso você seja feio, pode obter fotos de garotas bonitas por aqui._

*${prefix}Life*
_Que tal se a gente stalkear alguém aleatorio do mundo hoje?_

*${prefix}Fox*
_Raposinhas bonitas, e não, eu não estou falando do Kurama, e sim das de verdade!_

*${prefix}gato*
_Gatos velho, simplesmente gatos._

*${prefix}Macaco*
_Pegue umas fotos de macacos aqui._

*${prefix}baka*
_"Bakaaa!"_

*${prefix}ball*
_8 Ball de frases aleatorias._

*${prefix}cocegas*
_Hmmm, cocegas em anime eu acho..._

*${prefix}Lizard*
_Fotinhas de lagarto nerr._

*${prefix}feed*
_Eventos que tem haver com comida em animes._

*${prefix}quack*
_Ui ui, vai uns patos ~gansos~ ou sei la...?_

*${prefix}poke*
_Tome uns petelecos!_

*${prefix}cafune*
_Todos amamos cafune..._

*${prefix}Kisu*
_Umas fotinhas de beijo..._

*${prefix}Tapa*
_Fotos de tapinhas!_

*${prefix}Truth*
_Algumas verdades sobre o universo dos animes._

*${prefix}Icon*
_Icones para por no perfil._

*${prefix}Face*
_Icon do rosto de garotas de anime._

*${prefix}Yaoi*
_Yaoi sem hentai._

*${prefix}Look*
_Olhos na tela eheheh_

*${prefix}Holo*
_Fotinhas da personagem Holo._

*${prefix}fatos*
_Conta fatos de animais_

*${prefix}curiosidade*
_Adquira curiosidades._

*${prefix}trecho*
_Frases de pessoas._

`}

exports.funh = funh()
function funh() {
	return `   *Fun Menu*

_ℹ️ -_ *AVISO!* _Caso algum comando não funcione significa que o servidor caiu e é necessário esperar que volte._

*${prefix}help (mensagem)*
_Informe erros para os responsáveis da Taiga._

*${prefix}taiga (mensagem)*
_Quer conversar um pouco?_

*${prefix}speak <mensagem>*
_Vamos conversar por voz?_

*${prefix}anime [nome]*
_Com isso você pesquisa um anime._

*${prefix}Wallpaper (Nome)*
_Quer obter uns wallpapers? Deixe comigo!_

*${prefix}quote*
_Que tal criar sua propria frase inspiradora?_

*${prefix}search (digite numa foto)*
_Com isso você pode pesquisar fotos para achar o nome do anime._

*${prefix}kiss @marque_uma_Pessoa*
_Vou fazer você e sua pessoa querida se beijarem!_

*${prefix}Random <assunto>*
_Se usar isso, vou escolher alguém aleatorio do grupo._

*${prefix}image <nome>*
_Está sem internet fora do WhatsApp? Posso ajudar mandando fotos do pinterest._

*${prefix}msg <frase>*
_Vamos brincar de mimica por texto?_

*${prefix}slap @marque_alguém*
_Irei de ajudar a descer um tapasso nos outros._

*${prefix}ship <@pessoa @pessoa>*
_Quer saber o quanto seus amigos combinam?_

*${prefix}Gender <nome>*
_Se quiser saber sobre o nome de alguém use isso._

*${prefix}Death <nome>*
_Calcularei a idade que você vai morrer baseando-me nas ultimas mortes registradas._

*${prefix}Resposta <frase>*
_Adicione respostas na Íris._

*${prefix}brainly <pergunta>*
_Pesquise no brainly._

*${prefix}ttp <frase>*
_Transforme frases em stickers._

*${prefix}nasa -data <ano/mês/dia>*
_Obtenha informações da nasa._

*${prefix}ptt <marque um audio>*
_Faça a bot gravar audios do grupo/pessoas como se fosse dela._

*${prefix}gado <@pessoa>*
_Veja o quanto ela é gada._

*${prefix}oculto*
_???_

*${prefix}detector*
_Detecta gostosas no grupo._

*${prefix}gamemode <tipo>*
_Comando de minecraft só de zoas._

*${prefix}roleta <valor>*
_Aposte na roleta-russa._

*${prefix}Chance <Do que>*
_Calcule as chances._

*${prefix}enviar <-gp, -pv, -help> | <mensagem>*
_Converse com outros grupos sem precisar entrar neles._

*${prefix}allid*
_Pega as IDs dos grupos para usar no comando ${prefix}enviar._

*${prefix}akinator*
_Jogue Akinator no WhatsApp, instruções após comando._

*${prefix}Level*
_Veja seu ranking e nível._

*${prefix}Players*
_Veja o TOP 10 do Ranking._

*${prefix}cassino <valor>*
_Aposte no cassino para ganhar XP!_

*${prefix}nivel*
_Obtenha informações do seu XP e Ranking em forma de texto._

*${prefix}wallhaven <tema>*
_Obtenha Wallpapers, uma alternativa ao comando 21._

*${prefix}letra <nome da música>*
_Busque letras de música._

*${prefix}reedit <nome>*
_Obtenha publicações de algum subreedit._

*${prefix}Video <nome>*
_Procure videos do YouTube._

*${prefix}signo <signo>*
_Adquira o horoscopo do dia._

`}

exports.utilh = utilh()
function utilh() {
	return `   *Util Menu*

_ℹ️ -_ *AVISO!* _Caso algum comando não funcione significa que o servidor caiu e é necessário esperar que volte._

*${prefix}help (mensagem)*
_Informe erros para os responsáveis da Íris._

*${prefix}sticker*
_Faço suas imagens virarem sticker rapidinho!_

*${prefix}gif*
_Com isso você pode fazer stickers com gifs também!_

*${prefix}tts (sigla de idioma) [frase]*
_Eu também posso fazer mimica! Por voz!_

*${prefix}Idiomas*
_Isso e para usar com o comando de cima._

*${prefix}marcar*
_Peça para a bot marcar você (serve pra copiar e marcar a si mesmo)._

*${prefix}StickerNoBG*
_Isso é pra fazer stickers sem aquela parte do fundo._

*${prefix}ownerGroup*
_Quer conhecer o dono do grupo mas tem preguica de anotar os números? Use isso!_

*${prefix}adms*
_Com isso eu chamo e te mostro quem são os ADMS do grupo._

*32 - ${prefix}flip <cara/coroa> <valor>*
_Aposte no cara ou coroa._

*${prefix}Roll*
_Esse é o famoso jogo do par ou impar, ou seja, dados._

*${prefix}poll*
_Verifique enquentes ativas._

*${prefix}vote (número)*
_Vote numa enquete, se estiver tendo uma..._

*${prefix}newpoll (nome)*
_Crie uma enquete para os outros votarem._

*${prefix}ins (nome)*
_Adicione opções de voto na enquete._

*${prefix}Math <expressão>*
_Realiza calculos matematicos._

*${prefix}screenshot*
_Tem medo de acessar sites? Use isso e eu mostro pra você o que tem dentro!_

*${prefix}img <marque um sticker>*
_Se quiser pegar a foto de um sticker, posso converte-la para você._

*${prefix}Giphy <Link do site giphy>*
_Faça stickers por link usando o site giphy, ele é muito bom._

*${prefix}send <link de imagem>*
_Caso queira, posso enviar as fotos de um link._

*${prefix}sip <Digite um IP>*
_Posso conseguir algumas informações de um IP._

*${prefix}scep <Digite o CEP>*
_Se quiser pode me pedir pra pesquisar sobre um CEP._

*${prefix}Mac <número do MAC>*
_Com isso eu irei pesquisar de onde é o MAC._

*${prefix}simg <Use numa foto>*
_Posso pesquisar imagens na internet usando esse comando._

*${prefix}upimg <Use numa foto>*
_Se usar esse comando, irei fazer upload de suas imagens com duração de 1 dia._

*${prefix}contar <mensagem>*
_Quer contas as letras que tem em um texto?_

*${prefix}inverter <frase>*
_Se quiser inverter as palavras temos isso._

*${prefix}Google <termo>*
_Pesquise coisas no Google._

*${prefix}stalkig <username>*
_Stalkeie instagram._

*${prefix}maps <local>*
_Mostra o mapa de um local._

*${prefix}clima <cidade>*
_Saiba sobre o clima atual da sua cidade._

*${prefix}get <marque um arquivo>*
_Peça pra bot reenviar um arquivo._

*${prefix}conv -h*
_Converta temperatura ou distância._

*${prefix}qr <Texto>*
_Cria QR Codes com textos._

*${prefix}valor <Quantia/Tipo de Moeda>*
_Converta moedas de outros países em real._

*${prefix}coins*
_Veja a lista de moedas pra usar no comando anterior, é uma lista gigante._

*${prefix}data*
_Data do sistema._

*${prefix}placa <aaa1111>*
_Puxe informações de veiculos._

*${prefix}scnpj <27865757000102>*
_Puxe dados de um CNPJ._*136 - ${prefix}Encode <frase>*
_Converta frases e números para Binario._

*${prefix}Decode <nome>*
_Traduza Binario._

*${prefix}Covid <País em Inglês>*
_Obtenha o total de casos do Covid-19._

*${prefix}Paises*
_Obtenha a lista de países para o comando acima._

*${prefix}email <email> | <Assunto> | <Texto>*
_Mande um email anônimo para alguém._

*${prefix}letra <nome da música>*
_Busque letras de música._

*${prefix}reedit <nome>*
_Obtenha publicações de algum subreedit._

*${prefix}Video <nome>*
_Procure videos do YouTube._

*${prefix}reverter <foto>*
_Reverta uma foto._

*${prefix}encurtar <link>*
_Encurte links sem aqueles montes de propagandas._

*${prefix}translate <sigla de idioma> <frase ou mensagem marcada>*
_Traduza mensagens para algum idioma especifico._

*${prefix}groupinfo*
_Veja algumas informações desse grupo._

*${prefix}criador*
_Conheça o carinha legal que me construiu.._

*${prefix}ping*
_Bem, isso é pra medir o quão rápida eu estou._

*${prefix}botstat*
_Eu coloco aqui diversas informações minhas sobre mensagens._

*${prefix}wame*
_Envio o link do seu WhatsApp._
`}

exports.txtimg = txtimg()
function txtimg() {
	return `   *Texto para imagem*

_ℹ️ -_ *AVISO!* _Caso algum comando não funcione significa que o servidor caiu e é necessário esperar que volte._

*${prefix}help (mensagem)*
_Informe erros para os responsáveis da Taiga._

*${prefix}Light <Frase>*
_Uma logo de neon em luz._

*${prefix}make <frase>*
_Caso você queira escrever no meu diario ~Death Note~ use isso._

*${prefix}slogan <Nome>*
_Posso fazer uns slogans bonitinhos para você._

*${prefix}pornhub <texto 1 | texto 2>*
_Crie sua propria logo do PornHub._

*${prefix}3D <texto>*
_Crie textos em 3D._

*${prefix}Logo <nome>*
_Crie logos em preto e pink._

*${prefix}gaming <nome>*
_Crie logos de jogador._

*${prefix}Neon <Frase1|Frase2|Frase3>*
_Uma logo de neon estilo hackerman._

*${prefix}Fogareu <Nick>*
_Crie logos do fogo gratuito._

*${prefix}Thunder <frase>*
_Uma logo do céu com trovões._

*${prefix}Wolf <Frase1|Frase2>*
_Logo de Lobos._

*${prefix}Light <Frase>*
_Uma logo de neon em luz._

*${prefix}wasted <foto>*
_Cria uma imagem de wasted igual ao GTA V._

*${prefix}gtav <foto>*
_Crie a capa do novo GTA V de PS2._

`}

exports.down = down()
function down() {
    return `
	*Downloads*

*Caso algum comando não funcione significa que o servidor caiu e é necessário esperar.*

*${prefix}Play <nome>*
_Baixe musicas pelo nome._

*${prefix}Mp3 <link do YouTube>*
_Baixe audios por link._

*${prefix}Mp4 <link do YouTube>*
_Baixe videos por link._

*${prefix}fb <link facebook>*
_Baixe videos do facebook._`
}

exports.owner = owner()
function owner() {
    return `
*⚠ [Meu dono Apenas] ⚠*

*${prefix}Clearall*
_Com isso todas as mensagens são limpas._

*${prefix}Broad <-all/-gp> (mensagem)*
_Posso enviar uma mensagem para todos ou apenas os grupos usando, mas cuidado com BAN (se for muitos)._

*${prefix}Leaveall*
_Se desejar saio de todos os grupos._

*${prefix}Tela*
_Peça-me um print da tela._

*${prefix}Blocklist*
_Saiba quem tentou me ligar, atacar ou floodar._

*${prefix}mutepv <número sem + ou ->*
_Mande a Íris ignorar pessoas no PV._

*${prefix}encerrar*
_Faz com que eu me desligue._

*${prefix}give <@Pessoa> <Quantidade>*
_Adquira ou dê XP para as pessoas e si mesmo (também remove XP se usar com <-quantidade>._

*${prefix}kickall*
_Remova todos os membros._

*${prefix}cmd <comando>*
_Rode terminal/programação pelo WhatsApp._

*${prefix}block <numero> ou <marque uma mensagem>*
_Bloqueia pessoas._

*${prefix}unblock <numero> ou <marque uma mensagem>*
_Desbloqueia pessoas._`
}

exports.admins = admins()
function admins() {
    return `
*⚠ [Administradores Apenas] ⚠*
_Comandos que apenas os ademiros podem usar!_

*1 - ${prefix}kick @user ou <Marque uma mensagem>*
_Expulse bebados do bar (pode ser mais de 1)._

*2 - ${prefix}promote @user ou <Marque uma mensagem>*
_Faça os bebados do bar virarem administradores._

*3 - ${prefix}leave*
_Se quiser eu saio do barzinho._

*4 - ${prefix}demote @user ou <Marque uma mensagem>*
_Isso é pra você demitir administradores do barzinho._

*5 - ${prefix}everyone <assunto>*
_Marque todos os bebados para uma porradaria! ~Brincadeira, ou não~_

*6 - ${prefix}del [Marque a mensagem do BOT]*
_Se precisar deletar minhas mensagens, use isso._

*7 - ${prefix}onlyadms [on|off]*
_Com isso eu fecho o bar apenas para os administradores, e vice versa._

*8 - ${prefix}setimage*
_Dê ao seu bar uma cara nova!_

*9 - ${prefix}revoke*
_Se usar isso, eu irei resetar o link._

*10 - ${prefix}Bomb <número sem espaco, + e - >*
_Ataque com spam SMS quem vier fazer gracinhas em seu grupo._

*11 - ${prefix}blacklist <on/off>*
_Bane quem tiver nela quando entrarem no grupo._

*12 - ${prefix}fake <on/off>*
_Bane números de fora do seu país._

*13 - ${prefix}bklist <on/off número>*
_Adicione ou remova pessoas da blacklist._

*14 - ${prefix}mute <on/off>*
_Faz com que eu pare de fazer comandos no grupo de quem usou._

*15 - ${prefix}unkick <Marque uma mensagem>*
_Desfaz um ban._

*16 - ${prefix}autosticker <on/off>*
_Faz stickers com todas as fotos que mandarem._

*17 - ${prefix}welcome [enable|disable]*
_Me faz dar Boas-Vindas e Good-Bye._

*18 - ${prefix}rank <On/Off>*
_Ativa o sistema de "RPG"._

*19 - ${prefix}softban @pessoa ou <Marque uma mensagem>*
_Bane o usuário e o adiciona novamente em 30 minutos._

*20 - ${prefix}add (numero)*
_Com isso você pode adicionar as pessoas._

*21 - ${prefix}Exclusive [on|off]*
_Ativa os comandos exclusivos como bomb, anti links/porno._`
}

exports.lang = lang()
function lang() {
    return `
☾ Linguas do comando de Voz ☽
       ☾ Use sem ' ' ☽

'af' =  'Africano'

'ar' =  'Arabico'

'au' =  'Inglês da Australia'

'br' =  'Português do Brasil'

'ca' =  'Catalã (Catalonia)'

'cn' =  'Chinês (Mandarin/China)'

'cs' =  'Tcheca'

'cy' =  'Galês'

'da' =  'Dinamarquês'

'de' =  'Germanico/Alemão'

'el' =  'Grega'

'en' =  'Inglês'

'eo' =  'Esperanto'

'es' =  'Espanhol'

'fi' =  'Finlandês'

'fr' =  'Francês'

'hi' =  'Hindi'

'hr' =  'Croácio'

'ht' =  'Haitiano'

'hu' =  'Húngaro'

'hy' =  'Armenico'

'id' =  'Indonesio'

'is' =  'islandês'

'it' =  'Italiano'

'jp' =  'Japonês'

'ko' =  'Coreano'

'la' =  'Latim'

'lv' =  'Letonês'

'mk' =  'Macedónio'

'nl' =  'Holandês'

'no' =  'Norueguês'

'pl' =  'Polonês'

'pt' =  'Português de Portugal'

'ro' =  'Romeno'

'ru' =  'Russo'

'sk' =  'Eslovaco'

'sp' =  'Espanhol da Espanha'

'sq' =  'Albanês'

'sr' =  'Servia'

'su' =  'Espanhol dos Estados Unidos'

'sv' =  'Sueco'

'sw' =  'Suaíli'

'ta' =  'Tamil'

'th' =  'Thailandês'

'tr' =  'Turco'

'tw' =  'Chinês (Mandarin/Taiwan)'

'uk' =  'Inglês do Reino Unido)'

'us' =  'Inglês dos Estados Unidos'

'vi' =  'Vietnamita'

'yu' =  'Chinês (Cantonesa)'

'zh' =  'Chinês'`
}

exports.convh = convh()
function convh() {
	return `_Para usar você deve digitar_ *${prefix}conv [-sigla] [Número para conversão]* _, confira abaixo as siglas e um exemplo._

*-h* _= Esse menu._

*-c* _= Converte de Fahfenheit para Celsius._

*-f* _= Converte Celsius para Fahfenheit._

*-q* _= Converte Milhas para Quilômetros._

*-m* _= Converte Quilômetros para Milhas._

_Exemplo de uso:_ *${prefix}conv -c 113*
`}

exports.paises = paises()
function paises() {
	return `_Nomes aceitos no comando_ *${prefix}covid*\n\nAfghanistan\n\nAlbania\n\nAlgeria\n\nAndorra\n\nAngola\n\nAnguilla\n\nAntigua and Barbuda\n\nArgentina\n\nArmenia\n\nAruba\n\nAustralia\n\nAustria\n\nAzerbaijan\n\nBahamas\n\nBahrain\n\nBangladesh\n\nBarbados\n\nBelarus\n\nBelgium\n\nBelize\n\nBenin\n\nBermuda\n\nBhutan\n\nBolivia\n\nBosnia and Herzegovina\n\nBotswana\n\nBrazil\n\nBritish Virgin Islands\n\nBrunei\n\nBulgaria\n\nBurkina Faso\n\nBurundi\n\nCAR\n\nCabo Verde\n\nCambodia\n\nCameroon\n\nCanada\n\nCaribbean Netherlands\n\nCayman Islands\n\nChad\n\nChannel Islands\n\nChile\n\nChina\n\nColombia\n\nComoros\n\nCongo\n\nCosta Rica\n\nCroatia\n\nCuba\n\nCuraçao\n\nCyprus\n\nCzechia\n\nDRC\n\nDenmark\n\nDiamond Princess\n\nDjibouti\n\nDominica\n\nDominican Republic\n\nEcuador\n\nEgypt\n\nEl Salvador\n\nEquatorial Guinea\n\nEritrea\n\nEstonia\n\nEswatini\n\nEthiopia\n\nFaeroe Islands\n\nFalkland Islands\n\nFiji\n\nFinland\n\nFrance\n\nFrench Guiana\n\nFrench Polynesia\n\nGabon\n\nGambia\n\nGeorgia\n\nGermany\n\nGhana\n\nGibraltar\n\nGreece\n\nGreenland\n\nGrenada\n\nGuadeloupe\n\nGuatemala\n\nGuinea-Bissau\n\nGuinea\n\nGuyana\n\nHaiti\n\nHonduras\n\nHong Kong\n\nHungary\n\nIceland\n\nIndia\n\nIndonesia\n\nIran\n\nIraq\n\nIreland\n\nIsle of Man\n\nIsrael\n\nItaly\n\nIvory Coast\n\nJamaica\n\nJapan\n\nJordan\n\nKazakhstan\n\nKenya\n\nKuwait\n\nKyrgyzstan\n\nLaos\n\nLatvia\n\nLebanon\n\nLesotho\n\nLiberia\n\nLibya\n\nLiechtenstein\n\nLithuania\n\nLuxembourg\n\nMS Zaandam\n\nMacao\n\nMadagascar\n\nMalawi\n\nMalaysia\n\nMaldives\n\nMali\n\nMalta\n\nMarshall Islands\n\nMartinique\n\nMauritania\n\nMauritius\n\nMayotte\n\nMexico\n\nMicronesia\n\nMoldova\n\nMonaco\n\nMongolia\n\nMontenegro\n\nMontserrat\n\nMorocco\n\nMozambique\n\nMyanmar\n\nNamibia\n\nNepal\n\nNetherlands\n\nNew Caledonia\n\nNew Zealand\n\nNicaragua\n\nNiger\n\nNigeria\n\nNorth Macedonia\n\nNorway\n\nOman\n\nPakistan\n\nPalestine\n\nPanama\n\nPapua New Guinea\n\nParaguay\n\nPeru\n\nPhilippines\n\nPoland\n\nPortugal\n\nQatar\n\nRomania\n\nRussia\n\nRwanda\n\nRéunion\n\nS. Korea\n\nSaint Kitts and Nevis\n\nSaint Lucia\n\nSaint Martin\n\nSaint Pierre Miquelon\n\nSamoa\n\nSan Marino\n\nSao Tome and Principe\n\nSaudi Arabia\n\nSenegal\n\nSerbia\n\nSeychelles\n\nSierra Leone\n\nSingapore\n\nSint Maarten\n\nSlovakia\n\nSlovenia\n\nSolomon Islands\n\nSomalia\n\nSouth Africa\n\nSouth Sudan\n\nSpain\n\nSri Lanka\n\nSt. Barth\n\nSt. Vincent Grenadines\n\nSudan\n\nSuriname\n\nSweden\n\nSwitzerland\n\nSyria\n\nTaiwan\n\nTajikistan\n\nTanzania\n\nThailand\n\nTimor-Leste\n\nTogo\n\nTrinidad and Tobago\n\nTunisia\n\nTurkey\n\nTurks and Caicos\n\nUAE\n\nUK\n\nUSA\n\nUganda\n\nUkraine\n\nUruguay\n\nUzbekistan\n\nVanuatu\n\nVatican City\n\nVenezuela\n\nVietnam\n\nWallis and Futuna\n\nWestern Sahara\n\nWorld\n\nYemen\n\nZambia\n\nZimbabwe`
}
