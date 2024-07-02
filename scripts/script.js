/*

A Platformer by KirboCrafter39
Enjoy this cheap ASCII art.


__/\\\________/\\\______________________/\\\_____________________________/\\\\\\\\\_____________________________________/\\\\\________________________________________________/\\\\\\\\\\_______/\\\\\\\\\____        
 _\/\\\_____/\\\//______________________\/\\\__________________________/\\\////////____________________________________/\\\///_______________________________________________/\\\///////\\\____/\\\///////\\\__       
  _\/\\\__/\\\//______/\\\_______________\/\\\________________________/\\\/____________________________________________/\\\__________/\\\____________________________________\///______/\\\____/\\\______\//\\\_      
   _\/\\\\\\//\\\_____\///___/\\/\\\\\\\__\/\\\____________/\\\\\_____/\\\______________/\\/\\\\\\\___/\\\\\\\\\_____/\\\\\\\\\____/\\\\\\\\\\\_____/\\\\\\\\___/\\/\\\\\\\__________/\\\//____\//\\\_____/\\\\\_     
    _\/\\\//_\//\\\_____/\\\_\/\\\/////\\\_\/\\\\\\\\\____/\\\///\\\__\/\\\_____________\/\\\/////\\\_\////////\\\___\////\\\//____\////\\\////____/\\\/////\\\_\/\\\/////\\\________\////\\\____\///\\\\\\\\/\\\_    
     _\/\\\____\//\\\___\/\\\_\/\\\___\///__\/\\\////\\\__/\\\__\//\\\_\//\\\____________\/\\\___\///____/\\\\\\\\\\_____\/\\\_________\/\\\_______/\\\\\\\\\\\__\/\\\___\///____________\//\\\_____\////////\/\\\_   
      _\/\\\_____\//\\\__\/\\\_\/\\\_________\/\\\__\/\\\_\//\\\__/\\\___\///\\\__________\/\\\__________/\\\/////\\\_____\/\\\_________\/\\\_/\\__\//\\///////___\/\\\__________/\\\______/\\\____/\\________/\\\__  
       _\/\\\______\//\\\_\/\\\_\/\\\_________\/\\\\\\\\\___\///\\\\\/______\////\\\\\\\\\_\/\\\_________\//\\\\\\\\/\\____\/\\\_________\//\\\\\____\//\\\\\\\\\\_\/\\\_________\///\\\\\\\\\/____\//\\\\\\\\\\\/___ 
        _\///________\///__\///__\///__________\/////////______\/////___________\/////////__\///___________\////////\//_____\///___________\/////______\//////////__\///____________\/////////_______\///////////_____


888    d8P  d8b         888                .d8888b.                   .d888 888                   .d8888b.   .d8888b.  
888   d8P   Y8P         888               d88P  Y88b                 d88P"  888                  d88P  Y88b d88P  Y88b 
888  d8P                888               888    888                 888    888                       .d88P 888    888 
888d88K     888 888d888 88888b.   .d88b.  888        888d888 8888b.  888888 888888 .d88b.  888d888   8888"  Y88b. d888 
8888888b    888 888P"   888 "88b d88""88b 888        888P"      "88b 888    888   d8P  Y8b 888P"      "Y8b.  "Y888P888 
888  Y88b   888 888     888  888 888  888 888    888 888    .d888888 888    888   88888888 888   888    888        888 
888   Y88b  888 888     888 d88P Y88..88P Y88b  d88P 888    888  888 888    Y88b. Y8b.     888   Y88b  d88P Y88b  d88P 
888    Y88b 888 888     88888P"   "Y88P"   "Y8888P"  888    "Y888888 888     "Y888 "Y8888  888    "Y8888P"   "Y8888P"  





___    __            ___                    ____                       __                                        
`MM    d'  68b         MM                   6MMMMb/                    69MM                                       
 MM   d'  Y89         MM                  8P    YM                   6M' `/                                      
 MM  d'   ___ ___  __ MM____     _____   6M      Y ___  __    ___   _MM__/M      ____  ___  __   ____     ____   
 MM d'    `MM `MM 6MM MMMMMMb   6MMMMMb  MM        `MM 6MM  6MMMMb  MMMM/MMMMM  6MMMMb `MM 6MM  6MMMMb   6MMMMb  
 MMd'      MM  MM69 " MM'  `Mb 6M'   `Mb MM         MM69 " 8M'  `Mb  MM  MM    6M'  `Mb MM69 " MM'  `Mb 6M'  `Mb 
 MMYM.     MM  MM'    MM    MM MM     MM MM         MM'        ,oMM  MM  MM    MM    MM MM'          MM MM    MM 
 MM YM.    MM  MM     MM    MM MM     MM MM         MM     ,6MM9'MM  MM  MM    MMMMMMMM MM          .M9 MM    MM 
 MM  YM.   MM  MM     MM    MM MM     MM YM      6  MM     MM'   MM  MM  MM    MM       MM       MMMM   YM.  ,MM 
 MM   YM.  MM  MM     MM.  ,M9 YM.   ,M9  8b    d9  MM     MM.  ,MM  MM  YM.  ,YM    d9 MM          `Mb  YMMMMMM 
_MM_   YM._MM__MM_   _MYMMMM9   YMMMMM9    YMMMM9  _MM_    `YMMM9'Yb_MM_  YMMM9 YMMMM9 _MM_          MM       M9 
                                                                                                     MM     ,M9  
                                                                                               MM.  ,M9   ,MM9   
                                                                                                YMMMM9   d9'     


               ,,           ,,                                                  ,...                                       
`7MMF' `YMM'   db          *MM                    .g8"""bgd                   .d' ""mm                                     
  MM   .M'                  MM                  .dP'     `M                   dM`   MM                                     
  MM .d"     `7MM  `7Mb,od8 MM,dMMb.   ,pW"Wq.  dM'       ``7Mb,od8 ,6"Yb.   mMMmmmmMMmm .gP"Ya `7Mb,od8 pd""b.   .d*"*bg. 
  MMMMM.       MM    MM' "' MM    `Mb 6W'   `Wb MM           MM' "'8)   MM    MM    MM  ,M'   Yb  MM' "'(O)  `8b 6MP    Mb 
  MM  VMA      MM    MM     MM     M8 8M     M8 MM.          MM     ,pm9MM    MM    MM  8M""""""  MM         ,89 YMb    MM 
  MM   `MM.    MM    MM     MM.   ,M9 YA.   ,A9 `Mb.     ,'  MM    8M   MM    MM    MM  YM.    ,  MM       ""Yb.  `MbmmdM9 
.JMML.   MMb..JMML..JMML.   P^YbmdP'   `Ybmd9'    `"bmmmd' .JMML.  `Moo9^Yo..JMML.  `Mbmo`Mbmmd'.JMML.        88       .M' 
                                                                                                        (O)  .M'     .d9   
                                                                                                         bmmmd'    m"'     


 __  __             __              ____                      ___  __                     __       __      
/\ \/\ \  __       /\ \            /\  _`\                  /'___\/\ \__                /'__`\   /'_ `\    
\ \ \/'/'/\_\  _ __\ \ \____    ___\ \ \/\_\  _ __    __   /\ \__/\ \ ,_\    __   _ __ /\_\L\ \ /\ \L\ \   
 \ \ , < \/\ \/\`'__\ \ '__`\  / __`\ \ \/_/_/\`'__\/'__`\ \ \ ,__\\ \ \/  /'__`\/\`'__\/_/_\_<_\ \___, \  
  \ \ \\`\\ \ \ \ \/ \ \ \L\ \/\ \L\ \ \ \L\ \ \ \//\ \L\.\_\ \ \_/ \ \ \_/\  __/\ \ \/  /\ \L\ \\/__,/\ \ 
   \ \_\ \_\ \_\ \_\  \ \_,__/\ \____/\ \____/\ \_\\ \__/.\_\\ \_\   \ \__\ \____\\ \_\  \ \____/     \ \_\
    \/_/\/_/\/_/\/_/   \/___/  \/___/  \/___/  \/_/ \/__/\/_/ \/_/    \/__/\/____/ \/_/   \/___/       \/_/




    _/    _/  _/            _/                    _/_/_/                          _/_/    _/                          _/_/_/      _/_/    
   _/  _/        _/  _/_/  _/_/_/      _/_/    _/        _/  _/_/    _/_/_/    _/      _/_/_/_/    _/_/    _/  _/_/        _/  _/    _/   
  _/_/      _/  _/_/      _/    _/  _/    _/  _/        _/_/      _/    _/  _/_/_/_/    _/      _/_/_/_/  _/_/        _/_/      _/_/_/    
 _/  _/    _/  _/        _/    _/  _/    _/  _/        _/        _/    _/    _/        _/      _/        _/              _/        _/     
_/    _/  _/  _/        _/_/_/      _/_/      _/_/_/  _/          _/_/_/    _/          _/_/    _/_/_/  _/        _/_/_/    _/_/_/        



 ,ggg,        gg                                                ,gggg,                                                              ad888888b,  ad88888ba  
dP""Y8b       dP                   ,dPYb,                     ,88"""Y8b,                        ,dPYb,    I8                       d8"     "88 d8"     "88 
Yb, `88      d8'                   IP'`Yb                    d8"     `Y8                        IP'`Yb    I8                               a88 88       88 
 `"  88    ,dP'    gg              I8  8I                   d8'   8b  d8                        I8  8I 88888888                           ,88P 88       88 
     88aaad8"      ""              I8  8'                  ,8I    "Y88P'                        I8  8'    I8                            aad8"  Y8,    ,d88 
     88""""Yb,     gg    ,gggggg,  I8 dP         ,ggggg,   I8'            ,gggggg,    ,gggg,gg  I8 dP     I8     ,ggg,    ,gggggg,      ""Y8,   "PPPPPP"88 
     88     "8b    88    dP""""8I  I8dP   88gg  dP"  "Y8gggd8             dP""""8I   dP"  "Y8I  I8dP      I8    i8" "8i   dP""""8I        `88b          88 
     88      `8i   88   ,8'    8I  I8P    8I   i8'    ,8I  Y8,           ,8'    8I  i8'    ,8I  I8P      ,I8,   I8, ,8I  ,8'    8I         "88          8P 
     88       Yb,_,88,_,dP     Y8,,d8b,  ,8I  ,d8,   ,d8'  `Yba,,_____, ,dP     Y8,,d8,   ,d8b,,d8b,_   ,d88b,  `YbadP' ,dP     Y8,Y8,     a88 8b,    a8P  
     88        Y88P""Y88P      `Y88P'"Y88P"'  P"Y8888P"      `"Y8888888 8P      `Y8P"Y8888P"`Y8PI8"888888P""Y88888P"Y8888P      `Y8 "Y888888P' `"Y8888P'   
                                                                                                I8 `8,                                                     
                                                                                                I8  `8,                                                    
                                                                                                I8   8I                                                    
                                                                                                I8   8I                                                    
                                                                                                I8, ,8'                                                    
                                                                                                 "Y8P'                                                     

oooo    oooo  o8o            .o8                   .oooooo.                       .o88o.     .                        .oooo.    .ooooo.   
`888   .8P'   `"'           "888                  d8P'  `Y8b                      888 `"   .o8                      .dP""Y88b  888' `Y88. 
 888  d8'    oooo  oooo d8b  888oooo.   .ooooo.  888          oooo d8b  .oooo.   o888oo  .o888oo  .ooooo.  oooo d8b       ]8P' 888    888 
 88888[      `888  `888""8P  d88' `88b d88' `88b 888          `888""8P `P  )88b   888      888   d88' `88b `888""8P     <88b.   `Vbood888 
 888`88b.     888   888      888   888 888   888 888           888      .oP"888   888      888   888ooo888  888          `88b.       888' 
 888  `88b.   888   888      888   888 888   888 `88b    ooo   888     d8(  888   888      888 . 888    .o  888     o.   .88P      .88P'  
o888o  o888o o888o d888b     `Y8bod8P' `Y8bod8P'  `Y8bood8P'  d888b    `Y888""8o o888o     "888" `Y8bod8P' d888b    `8bd88P'     .oP'     




Btw I found where the CodeHS ASCII art came from: https://patorjk.com/software/taag/#p=display&f=Georgi16&t=CodeHS
The only way CodeHS actually made this art is if they also made the FONT on this website ^ (i don't think they did i checked)


   ____                  ___         ____    ____  ____   
  6MMMMb/                `MM         `MM'    `MM' 6MMMMb\ 
 8P    YM                 MM          MM      MM 6M'    ` 
6M      Y   _____     ____MM   ____   MM      MM MM       
MM         6MMMMMb   6MMMMMM  6MMMMb  MM      MM YM.      
MM        6M'   `Mb 6M'  `MM 6M'  `Mb MMMMMMMMMM  YMMMMb  
MM        MM     MM MM    MM MM    MM MM      MM      `Mb 
MM        MM     MM MM    MM MMMMMMMM MM      MM       MM 
YM      6 MM     MM MM    MM MM       MM      MM       MM 
 8b    d9 YM.   ,M9 YM.  ,MM YM    d9 MM      MM L    ,M9 
  YMMMM9   YMMMMM9   YMMMMMM_ YMMMM9 _MM_    _MM_MYMMMM9  



*/

const PLAYERCOLOR = '#00f';

const ENEMYWIDTH = 16;
const ENEMYHEIGTH = 16;
const ENEMYCOLOR = '#f00';


async function start() {
  document.querySelector('#start').style.display = 'none';
  
  camera.init(camera);
  input.init(input);
  await audio.init(audio);
  background.init(background);
  player.init(player);
  entity.init(entity);
  level.init(codeinput.value, level);
  // Init entities - later
  
  requestAnimationFrame(update);
}

var lasttimestamp = 0;

// Main body ///////////////////////////////////////////////////////////////////
function update(timestamp) {
  camera.helpers.setUpFrame(camera);
  camera.update(timestamp, player, camera);
  input.update(input);
  background.update(camera, audio, background);
  level.update(camera, level);
  audio.update(camera, audio);
  player.update(camera, level, input, player);
  entity.update(camera, level, player, entity);
  requestAnimationFrame(update);
  //setTimeout(update, 100);
}


var started = false;

/*
onunhandledrejection = (e) => {
  console.log(e.message);
}
*/

var codeinput = document.querySelector('#input');

codeinput.onkeydown = (e) => {
  if (e.code == 'Enter' && e.ctrlKey && !started) {
    start();
    started = true;
  }
}

fetch('./assets/defaultcode.txt').then((response) => response.text()).then((text) => {codeinput.value = text});