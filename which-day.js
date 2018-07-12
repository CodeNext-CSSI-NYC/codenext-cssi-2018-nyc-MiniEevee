// Declare a function whichDay that takes two parameters:
// A day of the week, and a number of days from now.
// It should return the day of the week it will be that many days from now.

// Tests
console.log((whichDay("Thursday", 4) == "Monday"));
console.log((whichDay("Tuesday", 100) == "Thursday"));

function whichDay(day, time) {

    if(time % 7 == 1) {
      if(day == "Monday"){
        return("Tuesday");
      }
      else if(day == "Tuesday") {
        return("Wednesday");
      }
      else if(day == "Wednesday") {
        return("Thursday");
      }
      else if(day == "Thursday") {
        return("Friday");
      }
      else if(day == "Friday") {
        return("Saturday");
      }
      else if(day == "Saturday") {
        return("Sunday");
      }
      else if(day == "Sunday") {
        return("Monday");
      }
    }
    if(time % 7 == 2) {
      if(day == "Monday"){
        return("Wednesday");
      }
      else if(day == "Tuesday") {
        return("Thursday");
      }
      else if(day == "Wednesday") {
        return("Friday");
      }
      else if(day == "Thursday") {
        return("Saturday");
      }
      else if(day == "Friday") {
        return("Sunday");
      }
      else if(day == "Saturday") {
        return("Monday");
      }
      else if(day == "Sunday") {
        return("Tuesday");
      }
    }

        if(time % 7 == 3) {
          if(day == "Monday"){
            return("Thursday");
          }
          else if(day == "Tuesday") {
            return("Friday");
          }
          else if(day == "Wednesday") {
            return("Saturday");
          }
          else if(day == "Thursday") {
            return("Sunday");
          }
          else if(day == "Friday") {
            return("Monday");
          }
          else if(day == "Saturday") {
            return("Tuesday");
          }
          else if(day == "Sunday") {
            return("Wednesday");
          }
        }

            if(time % 7 == 4) {
              if(day == "Monday"){
                return("Friday");
              }
              else if(day == "Tuesday") {
                return("Saturday");
              }
              else if(day == "Wednesday") {
                return("Sunday");
              }
              else if(day == "Thursday") {
                return("Monday");
              }
              else if(day == "Friday") {
                return("Tuesday");
              }
              else if(day == "Saturday") {
                return("Wednesday");
              }
              else if(day == "Sunday") {
                return("Thursday");
              }
            }
                if(time % 7 == 5) {
                  if(day == "Monday"){
                    return("Saturday");
                  }
                  else if(day == "Tuesday") {
                    return("Sunday");
                  }
                  else if(day == "Wednesday") {
                    return("Monday");
                  }
                  else if(day == "Thursday") {
                    return("Tuesday");
                  }
                  else if(day == "Friday") {
                    return("Wednesday");
                  }
                  else if(day == "Saturday") {
                    return("Thursday");
                  }
                  else if(day == "Sunday") {
                    return("Friday");
                  }
                }
                    if(time % 7 == 6) {
                      if(day == "Monday"){
                        return("Sunday");
                      }
                      else if(day == "Tuesday") {
                        return("Monday");
                      }
                      else if(day == "Wednesday") {
                        return("Tuesday");
                      }
                      else if(day == "Thursday") {
                        return("Wednesday");
                      }
                      else if(day == "Friday") {
                        return("Thursday");
                      }
                      else if(day == "Saturday") {
                        return("Friday");
                      }
                      else if(day == "Sunday") {
                        return("Saturday");
                      }
                    }
                        if(time % 7 == 0) {
                          if(day == "Monday"){
                            return(day);
                          }
                          else if(day == "Tuesday") {
                            return(day);
                          }
                          else if(day == "Wednesday") {
                            return(day);
                          }
                          else if(day == "Thursday") {
                            return(day);
                          }
                          else if(day == "Friday") {
                            return(day);
                          }
                          else if(day == "Saturday") {
                            return(day);
                          }
                          else if(day == "Sunday") {
                            return(day);
                          }
                        }

}
