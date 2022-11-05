export default function timer(hour : number,minute : number,second : number){
    let seconds = (hour * 3600) + (minute * 60) + second
     setTimeout(function setTime() {
         --seconds
         if(!seconds) setTime()
    }, 1000)
    return seconds
}