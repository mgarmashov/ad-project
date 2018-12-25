<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form v-model="valid" ref="form" validation class="mb-3">
                    <v-text-field
                            name="title"
                            label="Ad title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v || 'Поле обязательное']"
                    ></v-text-field>
                    <v-textarea
                            name="description"
                            label="Ad desc"
                            type="text"
                            v-model="description"
                            required
                            :rules="[v => !!v || 'Поле обязательное']"
                            multi-line
                    ></v-textarea>
                </v-form>
                <v-layout row mb-3 >
                    <v-flex xs12>
                        <v-btn
                                class="warning"
                        >
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" alt="" height="100">
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                            :label="'Показывать в слайдере'"
                            v-model="promo"
                            color="primary"
                        >
                        </v-switch>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                class="success"
                                @click="createAd"
                                :loading="loading"
                                :disabled="!valid || loading"
                        >Создать</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'http://s4.fotokto.ru/photo/full/177/1778943.jpg'
          }

          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
        }
      }
    }
  }
</script>

<style scoped>

</style>