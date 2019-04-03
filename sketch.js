 
 function setup() {
  noCanvas(); 

let foo = new p5.Speech(); // speech synthesis object

foo.speak('welcome. how can i help you');

let rec = new p5.SpeechRec('eng-US',gotspeech);
let continuous=true;
let interimResults=false;
rec.start(continuous,interimResults);
  
  let bot = new RiveScript({utf8: true});
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady() {

    console.log('chatbot ready!');
      bot.sortReplies();
     

}

function brainError() {
  console.log('chatbot Error!');

}

  

  let user_input=select('#user_input');
  let output=select('#output');
   


function gotspeech() {
if(rec.resultValue){


 


 let input=rec.resultString;
 user_input.value(input);
  console.log(input);
let username = "local-user";
    


  // NOTE: the API has changed in v2.0.0 and returns a Promise now.
  bot.reply(username,input).then(function(reply) {
    foo.setVoice("Google UK English Female");

    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(reply))
        {
          window.open(reply);
          foo.speak("sure")
          output.value("sure");
        }
        else
        {
          foo.speak(reply);
    output.value(reply);
        }
     
    
  });
}
// finsish

}
}


function is_url(reply)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(reply))
        {
          return 1;
        }
        else
        {
          return 0;
        }
}











