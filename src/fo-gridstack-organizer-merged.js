// console.info('fo-gridstack-organizer.js: Start')

import './lib/gridstack.js-develop/src/gridstack'
import './lib/gridstack.js-develop/src/gridstack.jQueryUI'
import './lib/gridstack.css'

import FoGridstackItem from './fo-gridstack-item-merged'
import './fo-gridstack-organizer.css'

export default {

    // Props are component data that can be set in the html tag using attributes.
    
    props: {
        id: String, 

        // fo-gridstack-item defaults.

        itemDefaultBackground: {
            type: String,
            default: 'transparent'
        },
        itemDefaultColor: {
            type: String,
            default: 'black'
        },
        itemDefaultContent: {
            type: String,
            default: 'This is the default content for fo-gridstack-item!'
        },
        itemDefaultDataGsX: {
            type: String,
            default: '0'
        },
        itemDefaultDataGsY: {
            type: String,
            default: '0'
        },
        itemDefaultDataGsWidth: {
            type: String,
            default: '4'
        },
        itemDefaultDataGsHeight:{
            type: String,
            default: '4'
        },
        itemDefaultFontFamily: {
            type: String,
            default: 'Helvetica, Arial, "Noto Sans", sans-serif'
        },
        itemDefaultFontSize: {
            // Corresponding attribute: font-size
            type: String,
            default: '16px'
        },
        itemDefaultPadding: {
            type: String,
            default: '0px'
        },
        itemDefaultTextAlign: {
            type: String,
            default: 'left'
        },

        // The data structure that specifies the items.

        items: {
            type: Object,
            default: null
        }

        // TODO: Add a prop for item spacing, that sets the width/height of the gutter that separates items.

    },

    components: {
        'fo-gridstack-item': FoGridstackItem,
    },

    data() { return {
        // testString: 'This is a testString!'    
    }},

    // In the template we set the id of the outer div to be the same as the id of the vue component.
    // Code inside the component should see this as unique and should not confuse it with the vue component itself.

    template: `
        <div :id='id' class='outer-div' ref='outerDiv'>

    <!-- 
    TODO: Make data-gs-animate into props. 
    -->

    <div id='border'>
        <div class="grid-stack" data-gs-width="12" data-gs-animate="yes">

            <!-- For some unknown reason, "v-for='item in items'" doesn't work, but iterating the array index does. -->

            <fo-gridstack-item 
                v-for='n in items.length' 
                :key='items[n-1].id' 
                v-bind:id='items[n-1].id'
                v-bind:contentId='items[n-1].contentId'
                v-bind:background='items[n-1].background' 
                v-bind:content='items[n-1].content'
                v-bind:dataGsX='items[n-1].dataGsX'
                v-bind:dataGsY='items[n-1].dataGsY'
                v-bind:dataGsWidth='items[n-1].dataGsWidth'
                v-bind:dataGsHeight='items[n-1].dataGsHeight'
            >
            </fo-gridstack-item>
    
        </div>

    </div>       
    
</div>


    `,

    mounted() {
        // console.info'fo-gridstack-organizer.js: mounted(): Start')

        // console.info'fo-gridstack-organizer.js: mounted(): this.items =')
        // console.infothis.items)

        // Initialize convenience references.
    
        this.vueOuterDiv = document.getElementById(this.id)

        // Initialize styles.

        this.initializeOuterDivStyles()

        // TODO: DO WE NEED THIS?

        hljs.initHighlightingOnLoad();

        // Activate Gridstack.

        // TODO: Make the parameters used here into props.

        $(function () {
            $('.grid-stack').gridstack({
                width: 12,
                alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                resizable: {
                    handles: 'e, se, s, sw, w'
                }
            });
        });

        // console.info'fo-gridstack-organizer.js: mounted(): End')
    },

    watch: {
    },

    methods: {


        // NOTE: <fo-gridstack-organizer> is not concerned with its background, which is therefore set to 'transparent'. 
        //       Setting the background color or image is the concern of the element that contains <fo-gridstack-organizer>. 

    }
}

// console.info("fo-gridstack-organizer.js: End")
