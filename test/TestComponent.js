console.info("TestComponent.js: Start")

export default {
    components: {
    },

    // Props are component data that can be set in the html tag using attributes.
    
    props:  [ 'type' ],

    data() { return {
    }},

    // In the template we set the id of the outer div to be the same as the id of the vue component.
    // Code inside the component should see this as unique and should not confuse it with the vue component itself.


    template: `
        <div id='vueOuterDiv' ref='vueOuterDiv'>
        <button :class="type" @click="componentButtonOnClick"><slot/></Button>
        </div>
    `,

    mounted() {
    },

    watch: {
    },

    methods: {
        componentButtonOnClick() {
            console.info('TestComponent.js: componentButtonOnClick(): Fired!')
            let outerDiv = this.$refs.vueOuterDiv
            console.info('TestComponent.js: componentButtonOnClick(): outerDiv = ')
            console.info(outerDiv)
        },

    
    }
}

console.info("Button.js: End")
