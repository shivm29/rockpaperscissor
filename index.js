console.log('hloo')
let rock = document.getElementById("rock")
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')

let botrock = document.getElementById("botrock")
let botpaper = document.getElementById("botpaper")
let botscissor = document.getElementById("botscissor")
let score = document.getElementById("score");

let result = document.getElementById('result');
// console.log(botpaper.value)
// console.log(parseInt(rock.value)) 
let wincounts = 0, losecounts = 0 , gameover = false, matchcounter = 0;


const hands = document.querySelectorAll('.element');
console.log(hands[0].innerText)

console.log(Math.floor(Math.random() * 3));

hands.forEach(hand => {
let storebotcolor, storehandcolor; 
 
    hand.onclick = () => {
        let bot = Math.floor(Math.random() * 3);
        console.log("bot : " +bot)
        
        let human = parseInt(hand.value);
        
        if(bot == parseInt(hand.value)) {
          console.log('Draw'); 
          result.innerText = 'Draw(-_-)'
          hand.style.backgroundColor = '#ffff0044'
          if(bot == 0) botrock.style.backgroundColor = '#ffff0044';
          else if(bot == 1) botpaper.style.backgroundColor  = '#ffff0044'
          else botscissor.style.backgroundColor = '#ffff0044'
        }
        else if(human == 0 && bot == 1) {
          console.log('lost')
          rock.style.backgroundColor = '#ff000044';
          botpaper.style.backgroundColor = '#0080003a';
          result.innerText = "lost(ಥ _ʖಥ)"
          losecounts++;
         
        }
         else if(human == 0 && bot == 2) {
          console.log('won')
           rock.style.backgroundColor = '#0080003a';
          botscissor.style.backgroundColor = '#ff000044';
          result.innerText = 'Wonʕ ▀ ڡ ▀ ʔ'
          
           }
         else if(human == 1 && bot == 0) {
          console.log('won')
           paper.style.backgroundColor = '#0080003a';
          botrock.style.backgroundColor = '#ff000044';
          result.innerText = 'Wonʕ ▀ ڡ ▀ ʔ'
         }
         else if(human == 1 && bot == 2) {
          console.log('lost')
           paper.style.backgroundColor = '#ff000044';
          botscissor.style.backgroundColor = '#0080003a';
          result.innerText = "lost(ಥ _ʖಥ)"
         }
         else if(human == 2 && bot == 0) {
          console.log('lost')
          scissor.style.backgroundColor = '#ff000044';
          botrock.style.backgroundColor = '#0080003a';
          result.innerText = "lost(ಥ _ʖಥ)" 
}
         else if(human == 2 && bot == 1) {
          console.log('won')
          scissor.style.backgroundColor = '#0080003a';
          botpaper.style.backgroundColor = '#ff000044';
          result.innerText = 'Wonʕ ▀ ڡ ▀ ʔ'
         }
    //   -------------------------
         else if(bot == 0 && human == 1) {
          console.log('won')
          paper.style.backgroundColor = '#0080003a';
          botrock.style.backgroundColor = '#ff000044';
          result.innerText = 'Wonʕ ▀ ڡ ▀ ʔ'
         }
         else if(bot == 0 && human == 2) {
          console.log('lost')
          scissor.style.backgroundColor = '#ff000044';
          botrock.style.backgroundColor = '#0080003a';
          result.innerText = "lost(T＿T)"
          }
         else if(bot == 1 && human == 0) {
          console.log('lost')
           rock.style.backgroundColor = '#ff000044';
          botpaper.style.backgroundColor = '#0080003a';
          result.innerText = "lost(ಥ _ʖಥ)"
          }
         else if(bot == 1 && human == 2) {
          console.log('won')
           scissor.style.backgroundColor = '#0080003a';
          botpaper.style.backgroundColor = '#ff000044';
          result.innerText = 'Wonʕ ▀ ڡ ▀ ʔ'
          }
         else if(bot == 2 && human == 0) {
          console.log('won')
          rock.style.backgroundColor = '#0080003a';
          botscissor.style.backgroundColor = '#ff000044';
          result.innerText = 'Wonʕ ▀ ڡ ▀ ʔ'
             
        }
         else if(bot == 2 && human == 1) {
          console.log('lost')
          paper.style.backgroundColor = '#ff000044';
          botscissor.style.backgroundColor = '#0080003a';
            result.innerText = "lost(ಥ _ʖಥ)"
            
        }
        
        
    //  ----------------------------------------------------
        
         
      function restore () {
        
        console.log('function restore called')
        
         if(bot==0) {
        botrock.style.backgroundColor = '#ffffff1d';
        hand.style.backgroundColor = '#ffffff1d';
      }else if(bot == 1) {
        botpaper.style.backgroundColor = '#ffffff1d';
        hand.style.backgroundColor = '#ffffff1d';
      } 
      else if(bot == 2) {
        botscissor.style.backgroundColor = '#ffffff1d';
        hand.style.backgroundColor = '#ffffff1d';
      }
        result.innerHTML = "";
        
      }
        
        setTimeout(restore, 500);
        
        
      }
  

 
  
})

