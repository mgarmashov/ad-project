export default {
  state: {
    ads: [
      {title: '1st ad', description: '', promo: true, imageSrc: 'http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg', id: '1'},
      {title: '2st ad', description: '', promo: false, imageSrc: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL.jpg', id: '2'},
      {title: '3st ad', description: '', promo: true, imageSrc: 'https://bipbap.ru/wp-content/uploads/2017/06/tmb_145037_6611.jpg', id: '3'},
      {title: '4st ad', description: '', promo: false, imageSrc: 'https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg', id: '4'},
      {title: '5st ad', description: '', promo: true, imageSrc: 'https://interesno-vse.ru/wp-content/uploads/morning_pic_1.jpg', id: '5'},
      {title: '6st ad', description: '', promo: false, imageSrc: 'https://images.aif.ru/007/410/7099f160be2419d6128e3a57e62ec326.jpg', id: '6'}
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createdAd ({commit}, payload) {
      payload.id = String(Math.random())

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
