<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                                v-for="ad in ads"
                                :src="ad.imageSrc"
                                :key="ad.id"
                        >
                            <div class="carousel-link">
                                <v-btn class="error" :to="'/ad/' + ad.id"> {{ ad.title}}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        v-for="ad of ads"
                        :key="ad.id">
                    <v-card>
                        <v-img
                                :src="ad.imageSrc"
                                height="200px"

                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ ad.title}}</h3>
                                <div>{{ ad.description}}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
                            <v-btn raised class="primary">Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {title: '1st ad', description: '', promo: true, imageSrc: 'http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg', id: '1'},
          {title: '2st ad', description: '', promo: false, imageSrc: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL.jpg', id: '2'},
          {title: '3st ad', description: '', promo: true, imageSrc: 'https://bipbap.ru/wp-content/uploads/2017/06/tmb_145037_6611.jpg', id: '3'},
          {title: '4st ad', description: '', promo: false, imageSrc: 'https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg', id: '4'},
          {title: '5st ad', description: '', promo: true, imageSrc: 'https://interesno-vse.ru/wp-content/uploads/morning_pic_1.jpg', id: '5'},
          {title: '6st ad', description: '', promo: false, imageSrc: 'https://images.aif.ru/007/410/7099f160be2419d6128e3a57e62ec326.jpg', id: '6'}
        ]
      }
    }
  }
</script>

<style scoped>
    .carousel-link {
        position: absolute;
        bottom: 60px;
        left: 50%;
        background: rgba(0,0,0, 0.5);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-radius: 5px;
    }
</style>