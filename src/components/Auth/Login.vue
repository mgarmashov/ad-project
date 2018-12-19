<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid" ref="form" validation>
                            <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="login" required :rules="loginRules"></v-text-field>
                            <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password" :counter="3" required :rules="passwordRules"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="onSubmit" :disabled="!valid">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        login: '',
        password: '',
        valid: false,
        loginRules: [
          v => !!v || 'Login is required'
        ],
        passwordRules: [
          v => (v && v.length >= 3) || 'Password must be longer than 3 symbols'
        ]
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          let user = {
            login: this.login,
            password: this.password
          }
          console.log(user)
        }
      }
    }
  }
</script>

<style scoped>

</style>