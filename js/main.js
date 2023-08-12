window.onload = async () => {
  const { tours } = await fetch('../tours.json').then(res => res.json())

  // Lasted tours
  const lastedTours = document.getElementById('lasted-tours')

  tours.slice(0, 3).forEach(tour => {
    const div = document.createElement('div')
    div.className = "col-md-4 wow fadeInDown col-9"
    div.setAttribute('data-wow-delay', ".2s")

    div.innerHTML = `
      <ul class="list-marked-2 box-categories-list">
        <li><a href="#"><img src="${tour.featured_image}" alt="" width="368" height="420"/></a>
          <h5 class="box-categories-title">${tour.name}</h5>
        </li>
      </ul>
    `

    lastedTours.appendChild(div)
  });

  // All tours list
  const Tourslist = document.getElementById('hot-tours-list')

  tours.slice(3).forEach((tour, idx) => {
    const div = document.createElement('div')
    div.className = "col-sm-6 col-md-12 wow fadeInRight"

    div.innerHTML = `
      <article class="product-big">
       <div class="unit flex-column flex-md-row align-items-md-stretch">
         <div class="unit-left"><a class="product-big-figure" href="#"><img src="${tour.featured_image}" alt="" width="600" height="366"/></a></div>
         <div class="unit-body">
           <div class="product-big-body">
             <h5 class="product-big-title"><a href="#">${tour.name}</a></h5>
             <small style="opacity: 0.7;">${tour.date}</small>
             <div class="group-sm group-middle justify-content-start">
               <div class="product-big-rating"><span class="icon material-icons-star"></span><span class="icon material-icons-star"></span><span class="icon material-icons-star"></span><span class="icon material-icons-star"></span><span class="icon material-icons-star_half"></span></div>
             </div>
             <p class="product-big-text">${tour.description}</p><a class="button button-black-outline button-ujarak" href="#">Reservar</a>
             <div class="product-big-price-wrap"><span class="product-big-price">$${tour.price.toLocaleString()}</span></div>
           </div>
         </div>
       </div>
      </article>
    `

    Tourslist.appendChild(div)
  });


  // Gallery
  const gallery = document.getElementById('gallery')
  const photos = tours.flatMap(tour => tour.images.concat([tour.featured_image]))

  photos.forEach(photo => {
    const div = document.createElement('article')
    div.className = "thumbnail thumbnail-mary"

    div.innerHTML = `
      <div class="thumbnail-mary-figure"><img src="${photo}" alt="" width="270" height="195"/>
      </div>
      <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="${photo}" data-lightgallery="item"><img src="images/gallery-image-1-270x195.jpg" alt="" width="270" height="195"/></a>
      </div>
    `

    gallery.appendChild(div)
  });
}