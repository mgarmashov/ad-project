<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Advertisment</h1>

                <v-card class="elevation-7 mb-3" v-for="ad in ads">
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media
                                :src="ad.imageSrc"
                                height="160"
                                :key="ad.id"
                            >
                            </v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ad.title}}</h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="info"
                                        :to="'/ad/' + ad.id"
                                >Open</v-btn>

                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {title: '1st ad', description: '', promo: true, imageSrc: 'http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg', id: '1'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>