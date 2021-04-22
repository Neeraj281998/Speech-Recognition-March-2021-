const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine, Hope You are also Fine";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") || text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Sam , What's your name";
      texts.appendChild(p);
    }
    if (
        text.includes("Neeraj") || text.includes("Niraj")|| text.includes("neeraj") ||text.includes("niraj")
      ) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Nice Name Sir";
        texts.appendChild(p);
      }
      if (
        text.includes("How was your day") 
      ) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Having Nice day Sir";
        texts.appendChild(p);
      }
      if (
        text.includes("what are you doing") 
      ) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "waiting for your command sir";
        texts.appendChild(p);
      }
    if (
        text.includes("hello") || text.includes("hay") || text.includes("Hey")
      ) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Hello Sir";
        texts.appendChild(p);
      }
      if (
        text.includes("Help") || ("help")
      ) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Which kind of help you need Sir";
        texts.appendChild(p);
      }
      if (
        text.includes("Java tutorial") || text.includes("java tutorial")
      ) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Java tutorial is opening";
        texts.appendChild(p);
        console.log("opening java Tutorial")
        window.open("https://www.javatpoint.com/java-tutorial")
      }
    if (text.includes("Python tutorial")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Python Tutorial";
      texts.appendChild(p);
      console.log("opening Python Tutorial");
      window.open("https://docs.python.org/3/tutorial/");
    }
    if (text.includes("Maharashtra coronavirus") || text.includes("Maharashtra corona case"))   {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "wait a second";
        texts.appendChild(p);
        console.log("opening maharastra cases");
        window.open("https://www.google.com/search?q=maharashtra+covid+cases&rlz=1C1CHBF_enIN918IN918&oq=maharashtra+&aqs=chrome.4.69i57j35i39j0i131i395i433l2j0i131i433j69i61l3.6595j1j7&sourceid=chrome&ie=UTF-8");
      }
      if (text.includes("covid test centre in Pune")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Loading Test center in Pune";
        texts.appendChild(p);
        console.log("Loading test center in pune");
        window.open("https://www.google.com/search?rlz=1C1CHBF_enIN918IN918&tbs=lf:1&tbm=lcl&sxsrf=ALeKk01d2_BSbTOgcFjjQ9Uqk993wc3slw:1618641602849&q=covid+test+center+pune&rflfq=1&num=10&sa=X&ved=2ahUKEwjjmYbu1YTwAhVPbn0KHQGqDQMQjGp6BAgeECE&biw=1536&bih=722");
      }
      if (text.includes("map")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Opening Google Map";
        texts.appendChild(p);
        console.log("opening Google map");
        window.open("https://www.google.co.in/maps");
      }
      if (text.includes("news")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Latest news opening...";
        texts.appendChild(p);
        console.log("opening latest news");
        window.open("https://www.google.com/search?q=news+india&rlz=1C1CHBF_enIN918IN918&sxsrf=ALeKk03y0WMPMP7PYGQvdgTvzF5q21SdWA%3A1618642147571&ei=44R6YO-cIp3Yz7sP2t-dyA8&oq=news+india&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEIMBMgsIABCxAxCDARCRAjILCAAQsQMQgwEQkQIyCAgAEJECEIsDMgkIABAHEB4QiwMyCAgAEJECEIsDMgYIABAHEB4yCwgAELEDEIMBEIsDMgUIABCLAzILCAAQsQMQgwEQiwM6BwgjELADECc6BwgAEEcQsAM6BwgAELADEENQnyFYsCRg7ChoAXACeACAAe0CiAGoDpIBBTItMi40mAEAoAEBqgEHZ3dzLXdpesgBCrgBAcABAQ&sclient=gws-wiz&ved=0ahUKEwivmuXx14TwAhUd7HMBHdpvB_kQ4dUDCA4&uact=5");
      }
      if (text.includes("YouTube") || text.includes("youtube")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "opening YouTube";
        texts.appendChild(p);
        console.log("opening YouTube ");
        window.open("https://www.YouTube.com");
      }
      if (text.includes("hackerrank") || text.includes("Hackerrank")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "opening Hackkerank";
        texts.appendChild(p);
        console.log("opening Hackerank ");
        window.open("https://www.hackerrank.com/");
      }
      if (text.includes("GitHub") || text.includes("github")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "opening GitHub";
        texts.appendChild(p);
        console.log("opening GitHub ");
        window.open("https://www.GitHub.com");
      }

    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
