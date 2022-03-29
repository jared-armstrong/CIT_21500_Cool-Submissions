Vue.component ('counter', {
    props: ['name', 'codename'],
    data: function(){
        return {
            toggle: false
        }
    },
    template: '<button v-on:click="toggle"> <div>{{name}}</div></button>'
})

var app = new Vue({
    el: "#app",
    data: {
        name: "",
        email: "",
        validateName: "",
        validateEmail: "",
        submit: "",
        list: [{name: "Protagonist", codename: "Joker", toggle: false},
            {name: "Anne", codename: "Panther", toggle: false},
            {name: "Ryuji", codename: "Skull", toggle: false}],
    },

    methods: {
        check: function () {
            if (
                this.validateName == null &&
                this.validateEmail == null
            ) {
                this.submit = "Submission Successful";
            } else {
                this.submit = "Not Submitted. Missing required fields.";
            }
        }
    },


    watch: {
        name: function () {
            if (this.name.length <= 2) {
                this.validateName = "Name must require more than 2 letters.";
            } else if ((this.name.length = 0 || this.name.length > 2)) {
                this.validateName = null;
            }
        },

        email: function (email) {
            var chars = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!chars.test(email)) {
                this.validateEmail = "Invalid email address. Format as billybob@domain.xxx";
            } else if (chars.test(email)) {
                this.validateEmail = null;
            }
        },
    }
});