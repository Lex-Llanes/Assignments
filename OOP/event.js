
class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
      this.addAvailableTickets = function(ticketType, ticketPrice){
        //console.log("This is line 8", this.availableTickets.push(ticketType, ticketPrice));
        const ticket = new TicketType (ticketType, ticketPrice);
        this.availableTickets.push(ticket);
      }
      this.allTickets = function() {
          console.log(this.availableTickets[0].returnType());
          for(let i = 0; i < this.availableTickets.length; i++){
            `All Tickets - ${i + 1}. ${this.availableTickets[i].returnType()}  \$${this.availableTickets[i].returnPrice()} `
          }
      }
    }
  }


class TicketType {
    constructor(type, price){
        this.ticketType = type;
        this.ticketPrice = price;
        this.returnType = function (){
            return this.ticketType;
        }
        this.returnPrice = function (){
            return this.ticketPrice;
        }
    }
}








// The below statement creates an object.
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );


//create a few more objects
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');


//create an empty event array
const eventArray = new Array();

// pushing single object to an array
eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
console.log(eventArray);


/**************** Part 2 of Lesson ****************/
  console.log("This is line 50", eventObj1.addAvailableTickets("human", 299));
  eventObj1.addAvailableTickets("vampire", 99);
    eventObj1.allTickets();
  //console.log(eventObj1.availableTickets);




















  document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  });