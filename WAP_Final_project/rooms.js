

const divIDRooms = ['desmoines', 'fairfield', 'alexandria', 'Arlington', 'newyork', 'losangeles', 'chicago']

function showImages(index) {

    let width = '700px';
    let result = ''
    let imageSources = [
        'images/DesMoineOutside.jpg',
        "images/DSMRoomsInside.jpg",
        "images/DSMRoomsInside2.jpg",
        "images/DSMRoomsInside3.jpg"

    ]
    for (let img of imageSources) {
        result += `<div class="carousel-item ${(index == 1) ? "active" : ""}">
        <img src="${img}" style="width: ${width}" />
        </div>`
    }
    return result
}
function viewRoomDetails(index) {
    window.location.href = `room_details.html?room_id=${index}`
}

function createRooms() {
    let rooms = document.createElement('div');

    const romms_obj = [{"name": "Hyatt Place Des Moines Downtown", "price": 70},{"name": "Hyatt Place West Des Moines/ Jordan Creek", "price": 130},{name: "Hyatt Place New York",price : 190}, {name: "Hyatt Place Chicago",price : 200}];


    let start;

   const data = romms_obj.map((room_object,index) => (
       `<div class="row">
       <div class="col-sm-4">
       <div id="carouselExampleControls+${index}" class="carousel slide" data-ride="carousel">
           <div class="carousel-inner">
             <div class="carousel-item active">
               <img class="d-block w-100" src="images/1.jpg" alt="First slide">
             </div>
             <div class="carousel-item">
               <img class="d-block w-100" src="images/2.jpg" alt="Second slide">
             </div>
             <div class="carousel-item">
               <img class="d-block w-100" src="images/3.jpg" alt="Third slide">
             </div>
           </div>
           <a class="carousel-control-prev" href="#carouselExampleControls+${index}" role="button" data-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <!-- <span class="sr-only">Previous</span> -->
           </a>
           <a class="carousel-control-next" href="#carouselExampleControls+${index}" role="button" data-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <!-- <span class="sr-only">Next</span> -->
           </a>
         </div>
   </div>
   <div class="col-sm-8">
       <h2>${room_object.name}</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, neque explicabo. Reprehenderit, repellat iusto. Repellendus eius quo, non et vel, quasi animi distinctio, aliquid id cupiditate tempora! Quibusdam, ipsa optio?</p>
       <p><strong>$${room_object.price}</strong></p>
       <button class="btn btn-primary" onclick="viewRoomDetails(${index + 1})">View Details</button>
   </div>
   </div> <br /> <br /> <hr />`

    ));


    document.getElementById('rooms-container').innerHTML = data;


   


    let previousButtons = rooms.querySelectorAll('button.previous')
    let nextButtons = rooms.querySelectorAll('button.next')

    for (let prevButton of previousButtons) {
        prevButton.addEventListener('click', function () {
            const imageDiv = prevButton.closest('.imageDiv')
            imageDiv.scrollTo({ left: imageDiv.scrollLeft - 400, behavior: 'smooth' })
        })
    }

    for (let nextButton of nextButtons) {
        nextButton.addEventListener('click', function () {
            const imageDiv = nextButton.closest('.imageDiv')
            imageDiv.scrollTo({ left: imageDiv.scrollLeft + 400, behavior: 'smooth' })
        })
    }

    document.body.append(rooms);


}

function searchRooms() {
    window.open("http://127.0.0.1:3000/WAP_Final_project/rooms.html", "_blank")
}

createRooms()