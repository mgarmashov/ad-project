<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-card-media
                            src="http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg"
                            height="300px"
                    ></v-card-media>
                    <v-card-text>
                        <h1 class="text--primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, sapiente.</h1>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning">Edit</v-btn>
                        <v-btn class="success" flat>Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>