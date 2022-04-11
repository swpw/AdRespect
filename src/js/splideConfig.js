import Splide from '@splidejs/splide'

const splidePricingSettings = {
  perPage: 3,
  gap: '24px',
  rewind: false,
  rewindByDrag: false,
  arrows: false,
  drag: false,
  pagination: false,
  start: 1,
  breakpoints: {
    1140:{
      perPage: 1,
      drag: true,
      padding: '27.5%',
      gap: 0,
      perMove: 1
    },
    768:{
      padding: '30%',
    },
    650:{
      padding: '32%',
    },
    550:{
      padding: 0,
    },
  }
}

const splideGallerySettings = {
  type: 'loop',
  perPage: 2,
  gap: '64px',
  rewind: true,
  rewindByDrag: true,
  arrows: false,
  drag: true,
  lazyLoad: true,
  breakpoints: {
		1024: {
			gap: '32px'
		},
		768: {
			perPage: 1,
      gap: '44px'
		},
		425: {
      gap: '30px'
		},
  }
}

new Splide('#splide-gallery', splideGallerySettings).mount()
new Splide('#splide-monthly', splidePricingSettings).mount()
new Splide('#splide-yearly', splidePricingSettings).mount()
