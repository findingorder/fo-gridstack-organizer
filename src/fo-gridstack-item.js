// console.info('fo-gridstack-item.js: Start')

import './lib/gridstack.js-develop/src/gridstack'
import './lib/gridstack.js-develop/src/gridstack.jQueryUI'

export default {

    // Props are component data that can be set in the html tag using attributes.

    // TODO: Most of these props will also need to exist at the fo-gridstack-organizer level as well, as defaults.
    
    props: {
        id: {
            type: String,
            default: 'transparent'
        },
        background: {
            type: String,
            default: 'transparent'
        },
        color: {
            type: String,
            default: 'black'
        },
        content: {
            type: Object,
            default: 'fo-gridstack-item'
        },
        contentId: {
            type: String,
            default: 'defaultContentId'
        },
        dataGsX: {
            type: String,
            default: '0'
        },
        dataGsY: {
            type: String,
            default: '0'
        },
        dataGsWidth: {
            type: String,
            default: '4'
        },
        dataGsHeight:{
            type: String,
            default: '3'
        },
        fontFamily: {
            type: String,
            default: 'Helvetica, Arial, "Noto Sans", sans-serif'
        },
        fontSize: {
            // Corresponding attribute: font-size
            type: String,
            default: '16px'
        },
        padding: {
            type: String,
            default: '0px'
        },
        textAlign: {
            type: String,
            default: 'left'
        }

        // font-family: 'Indie Flower', cursive;

        // TODO: This CSS is for the one with the finger icon. Do this from the data instead.
        // .grid-stack-item-content .fa {
        //     font-size: 64px;
        //     display: block;
        //     margin: 20px 0 10px;
        // }
        
    },

    data() { return {
    }},

    // In the template we set the id of the outer div to be the same as the id of the vue component.
    // Code inside the component should see this as unique and should not confuse it with the vue component itself.

    template: `
        {{vueTemplate}}
    `,

    mounted() {
        // console.info('fo-gridstack-item.js: mounted(): Start')

        // Initialize convenience references.



        // Initialize styles.

        this.setGridstackItemContentStyles()

        // console.info'fo-gridstack-item.js: mounted(): this.content = ')
        // console.info'"' + this.content + '"')
    

        // console.info('fo-gridstack-item.js: mounted(): End')
    },

    watch: {
    },

    methods: {
        setGridstackItemContentStyles() {
            let gic = this.$refs.gridstackItemContent.style
                gic.background = this.background
                gic.color = this.color
                gic.fontFamily = this.fontFamily
                gic.fontSize = this.fontSize
                gic.padding = this.padding
                gic.textAlign = this.textAlign
        }

    }
}

// console.info("fo-gridstack-item.js: End")
