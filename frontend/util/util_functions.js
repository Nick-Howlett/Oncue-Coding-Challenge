export const formatTime = time => {
  const hours = time.length == 5 ? time.slice(0, 2) : time.slice(11, 13); //time comes in two forms, 05:00 or entire datestring
  if(hours < 10){
    return hours.slice(1) + " AM";
  }
  else if(hours < 12){
    return hours + " AM";
  }
  else if(hours == 12){
    return hours + " PM";
  }
  else{
    return hours % 12 + " PM";
  }
};