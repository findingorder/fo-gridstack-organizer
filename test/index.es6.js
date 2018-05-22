console.info('test/index.es6.js: Start')

// https://vuejs-tips.github.io/cheatsheet/

// Uses a symlink to the ../dist directory.
// import FoGridstackOrganizer from './dist/fo-gridstack-organizer-bundle.js'

// import './dist-gridstack-temp/gridstack.es6.js'
// import './dist-gridstack-temp/gridstack.jQueryUI.es6.js'

import FoGridstackOrganizer from './dist/fo-gridstack-organizer-bundle.js'
import FoStickyNote from './lib/fo-sticky-note-bundle.js'

// import TestComponent from './TestComponent.js'


// The VueJS application.

var vueModel = new Vue({
    el: '#app',
    components: {
        'fo-gridstack-organizer': FoGridstackOrganizer,
        'fo-sticky-note': FoStickyNote,
        // TestComponent
    },
    
    // Each data object in dataObjects[] represents a gridstack item + sticky note instance.
    data: {
        // TODO: Create the data structure that specifies all of the gridstack items we want,
        //       and bind it to the <fo-gridstack-organizer>.

        loremIpsum: [
            'Lorem ipsum dolor sit amet consectetur, adipiscing elit primis augue.',
            'Convallis odio vitae litora ornare laoreet, lobortis mus venenatis purus.',
            'Erat pellentesque volutpat cras, ligula non.',
            'Imperdiet volutpat penatibus class sollicitudin, praesent proin.',
            'Tellus sem phasellus mattis in, tortor auctor.',
            'Parturient ultrices fermentum commodo tristique congue, suspendisse sed hac.',
            'Consequat penatibus viverra risus, nunc dictum, condimentum vestibulum.',
            'Ac ultrices massa vitae aliquam integer, semper vivamus accumsan.',
            'Enim sem pulvinar condimentum class, eu habitasse curae.',
            'Quisque vehicula senectus penatibus nascetur, nulla nunc etiam vulputate litora, vivamus eget convallis.',
            'Molestie rhoncus erat cursus orci est, lacus tempor aliquet.',
            'Ut faucibus augue convallis placerat, elementum sodales.',
            'Posuere tellus eget dis curabitur facilisis, semper hendrerit sociis justo.',
            'Diam lacinia dignissim vulputate, bibendum convallis, class consequat.',
            'Bibendum est congue tincidunt, duis venenatis gravida, neque inceptos.',
            'Suscipit commodo consequat suspendisse aptent proin, accumsan sapien himenaeos.',
            'Donec potenti blandit montes laoreet per, facilisi lobortis aliquet.',
            'Non enim sollicitudin tempus fermentum curae, interdum rutrum egestas habitasse.',
            'Netus tempus hendrerit nam placerat lacinia, ornare tempor platea.',
            'Lobortis porta nec montes quam, dapibus orci molestie.'
        ],
        items: [

            { id: 'A', contentId: 'AA', noteId: '', dataGsX: '0',  dataGsY: '0', dataGsWidth: '4', dataGsHeight: '4', content: '1' },
            { id: 'B', contentId: 'BB', noteId: '', dataGsX: '4',  dataGsY: '0', dataGsWidth: '4', dataGsHeight: '4', content: '2' },
            { id: 'C', contentId: 'CC', noteId: '', dataGsX: '4',  dataGsY: '0', dataGsWidth: '4', dataGsHeight: '4', content: '3' },
            { id: 'D', contentId: 'DD', noteId: '', dataGsX: '10', dataGsY: '0', dataGsWidth: '2', dataGsHeight: '2', content: '4' },
            { id: 'E', contentId: 'EE', noteId: '', dataGsX: '0',  dataGsY: '2', dataGsWidth: '2', dataGsHeight: '2', content: '5' },
            { id: 'F', contentId: 'FF', noteId: '', dataGsX: '2',  dataGsY: '2', dataGsWidth: '2', dataGsHeight: '4', content: '6' },
            { id: 'G', contentId: 'GG', noteId: '', dataGsX: '8',  dataGsY: '2', dataGsWidth: '4', dataGsHeight: '2', content: '7' },
            { id: 'H', contentId: 'HH', noteId: '', dataGsX: '0',  dataGsY: '4', dataGsWidth: '2', dataGsHeight: '2', content: '8' },
            { id: 'I', contentId: 'II', noteId: '', dataGsX: '4',  dataGsY: '4', dataGsWidth: '4', dataGsHeight: '2', content: '9' },
            { id: 'J', contentId: 'JJ', noteId: '', dataGsX: '8',  dataGsY: '3', dataGsWidth: '2', dataGsHeight: '2', content: '10' },
            { id: 'K', contentId: 'KK', noteId: '', dataGsX: '0',  dataGsY: '4', dataGsWidth: '2', dataGsHeight: '2', content: '11' }
        ],
        colorPalettes: [["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"],["#ecd078","#d95b43","#c02942","#542437","#53777a"],["#556270","#4ecdc4","#c7f464","#ff6b6b","#c44d58"],["#774f38","#e08e79","#f1d4af","#ece5ce","#c5e0dc"],["#e8ddcb","#cdb380","#036564","#033649","#031634"],["#490a3d","#bd1550","#e97f02","#f8ca00","#8a9b0f"],["#594f4f","#547980","#45ada8","#9de0ad","#e5fcc2"],["#00a0b0","#6a4a3c","#cc333f","#eb6841","#edc951"],["#e94e77","#d68189","#c6a49a","#c6e5d9","#f4ead5"],["#3fb8af","#7fc7af","#dad8a7","#ff9e9d","#ff3d7f"],["#d9ceb2","#948c75","#d5ded9","#7a6a53","#99b2b7"],["#ffffff","#cbe86b","#f2e9e1","#1c140d","#cbe86b"],["#efffcd","#dce9be","#555152","#2e2633","#99173c"],["#343838","#005f6b","#008c9e","#00b4cc","#00dffc"],["#413e4a","#73626e","#b38184","#f0b49e","#f7e4be"],["#ff4e50","#fc913a","#f9d423","#ede574","#e1f5c4"],["#99b898","#fecea8","#ff847c","#e84a5f","#2a363b"],["#655643","#80bca3","#f6f7bd","#e6ac27","#bf4d28"],["#00a8c6","#40c0cb","#f9f2e7","#aee239","#8fbe00"],["#351330","#424254","#64908a","#e8caa4","#cc2a41"],["#554236","#f77825","#d3ce3d","#f1efa5","#60b99a"],["#ff9900","#424242","#e9e9e9","#bcbcbc","#3299bb"],["#5d4157","#838689","#a8caba","#cad7b2","#ebe3aa"],["#8c2318","#5e8c6a","#88a65e","#bfb35a","#f2c45a"],["#fad089","#ff9c5b","#f5634a","#ed303c","#3b8183"],["#ff4242","#f4fad2","#d4ee5e","#e1edb9","#f0f2eb"],["#d1e751","#ffffff","#000000","#4dbce9","#26ade4"],["#f8b195","#f67280","#c06c84","#6c5b7b","#355c7d"],["#1b676b","#519548","#88c425","#bef202","#eafde6"],["#bcbdac","#cfbe27","#f27435","#f02475","#3b2d38"],["#5e412f","#fcebb6","#78c0a8","#f07818","#f0a830"],["#452632","#91204d","#e4844a","#e8bf56","#e2f7ce"],["#eee6ab","#c5bc8e","#696758","#45484b","#36393b"],["#f0d8a8","#3d1c00","#86b8b1","#f2d694","#fa2a00"],["#f04155","#ff823a","#f2f26f","#fff7bd","#95cfb7"],["#2a044a","#0b2e59","#0d6759","#7ab317","#a0c55f"],["#bbbb88","#ccc68d","#eedd99","#eec290","#eeaa88"],["#b9d7d9","#668284","#2a2829","#493736","#7b3b3b"],["#b3cc57","#ecf081","#ffbe40","#ef746f","#ab3e5b"],["#a3a948","#edb92e","#f85931","#ce1836","#009989"],["#67917a","#170409","#b8af03","#ccbf82","#e33258"],["#e8d5b7","#0e2430","#fc3a51","#f5b349","#e8d5b9"],["#aab3ab","#c4cbb7","#ebefc9","#eee0b7","#e8caaf"],["#300030","#480048","#601848","#c04848","#f07241"],["#ab526b","#bca297","#c5ceae","#f0e2a4","#f4ebc3"],["#607848","#789048","#c0d860","#f0f0d8","#604848"],["#a8e6ce","#dcedc2","#ffd3b5","#ffaaa6","#ff8c94"],["#3e4147","#fffedf","#dfba69","#5a2e2e","#2a2c31"],["#b6d8c0","#c8d9bf","#dadabd","#ecdbbc","#fedcba"],["#fc354c","#29221f","#13747d","#0abfbc","#fcf7c5"],["#1c2130","#028f76","#b3e099","#ffeaad","#d14334"],["#edebe6","#d6e1c7","#94c7b6","#403b33","#d3643b"],["#cc0c39","#e6781e","#c8cf02","#f8fcc1","#1693a7"],["#dad6ca","#1bb0ce","#4f8699","#6a5e72","#563444"],["#a7c5bd","#e5ddcb","#eb7b59","#cf4647","#524656"],["#fdf1cc","#c6d6b8","#987f69","#e3ad40","#fcd036"],["#5c323e","#a82743","#e15e32","#c0d23e","#e5f04c"],["#230f2b","#f21d41","#ebebbc","#bce3c5","#82b3ae"],["#b9d3b0","#81bda4","#b28774","#f88f79","#f6aa93"],["#3a111c","#574951","#83988e","#bcdea5","#e6f9bc"],["#5e3929","#cd8c52","#b7d1a3","#dee8be","#fcf7d3"],["#1c0113","#6b0103","#a30006","#c21a01","#f03c02"],["#382f32","#ffeaf2","#fcd9e5","#fbc5d8","#f1396d"],["#e3dfba","#c8d6bf","#93ccc6","#6cbdb5","#1a1f1e"],["#000000","#9f111b","#b11623","#292c37","#cccccc"],["#c1b398","#605951","#fbeec2","#61a6ab","#accec0"],["#8dccad","#988864","#fea6a2","#f9d6ac","#ffe9af"],["#f6f6f6","#e8e8e8","#333333","#990100","#b90504"],["#1b325f","#9cc4e4","#e9f2f9","#3a89c9","#f26c4f"],["#5e9fa3","#dcd1b4","#fab87f","#f87e7b","#b05574"],["#951f2b","#f5f4d7","#e0dfb1","#a5a36c","#535233"],["#413d3d","#040004","#c8ff00","#fa023c","#4b000f"],["#eff3cd","#b2d5ba","#61ada0","#248f8d","#605063"],["#2d2d29","#215a6d","#3ca2a2","#92c7a3","#dfece6"],["#cfffdd","#b4dec1","#5c5863","#a85163","#ff1f4c"],["#4e395d","#827085","#8ebe94","#ccfc8e","#dc5b3e"],["#9dc9ac","#fffec7","#f56218","#ff9d2e","#919167"],["#a1dbb2","#fee5ad","#faca66","#f7a541","#f45d4c"],["#ffefd3","#fffee4","#d0ecea","#9fd6d2","#8b7a5e"],["#a8a7a7","#cc527a","#e8175d","#474747","#363636"],["#ffedbf","#f7803c","#f54828","#2e0d23","#f8e4c1"],["#f8edd1","#d88a8a","#474843","#9d9d93","#c5cfc6"],["#f38a8a","#55443d","#a0cab5","#cde9ca","#f1edd0"],["#4e4d4a","#353432","#94ba65","#2790b0","#2b4e72"],["#0ca5b0","#4e3f30","#fefeeb","#f8f4e4","#a5b3aa"],["#a70267","#f10c49","#fb6b41","#f6d86b","#339194"],["#9d7e79","#ccac95","#9a947c","#748b83","#5b756c"],["#edf6ee","#d1c089","#b3204d","#412e28","#151101"],["#046d8b","#309292","#2fb8ac","#93a42a","#ecbe13"],["#4d3b3b","#de6262","#ffb88c","#ffd0b3","#f5e0d3"],["#fffbb7","#a6f6af","#66b6ab","#5b7c8d","#4f2958"],["#ff003c","#ff8a00","#fabe28","#88c100","#00c176"],["#fcfef5","#e9ffe1","#cdcfb7","#d6e6c3","#fafbe3"],["#9cddc8","#bfd8ad","#ddd9ab","#f7af63","#633d2e"],["#30261c","#403831","#36544f","#1f5f61","#0b8185"],["#d1313d","#e5625c","#f9bf76","#8eb2c5","#615375"],["#ffe181","#eee9e5","#fad3b2","#ffba7f","#ff9c97"],["#aaff00","#ffaa00","#ff00aa","#aa00ff","#00aaff"],["#c2412d","#d1aa34","#a7a844","#a46583","#5a1e4a"]],
        paletteIndex: 0
    },
    created() {
        console.info('index.es6.js: ceated(): Fired!')
    },
    mounted() {
        console.info('index.es6.js: mounted(): Fired! this.items.length = ' + this.items.length)

        this.paletteIndex = this.getRandomInt(1, this.colorPalettes.length) - 1

        var i;
        for (i = 0; i < this.items.length; i++) {
            // console.info'index.es6.js: mounted(): Iterating items: i = ' + i)
            this.items[i].id = this.guid()
            this.items[i].contentId = this.items[i].id + '-content'
            this.items[i].noteId = this.items[i].id + '-note'
            this.items[i].content = this.items[i].content + this.items[i].id + ' original content: ' + this.loremIpsum[i]
            let colorIndex = this.getRandomInt(0, 4)
            // console.info('index.es6.js: mounted(): Iterating items: colorIndex = ' + colorIndex)            
            this.items[i].background = this.colorPalettes[this.paletteIndex][colorIndex]

        }

        this.$nextTick(function () {            
            console.info('index.es6.js: mounted(): $nextTick: Fired!')
            // Code that will run only after the entire view has been rendered.

            var FoStickyNoteClass = Vue.extend(FoStickyNote)
            var i   
            for (i = 0; i < this.items.length; i++) {
                // Instantiate an off-window instance of an foStickyNote for each item, and assign it to the 
                // item's content?
    
                // console.info'index.es6.js: mounted(): Instating note with noteId = ' + this.items[i].noteId)
                let noteInstance = new FoStickyNoteClass({
                    propsData: { 
                        id: this.items[i].noteId,
                        noteTitle: this.items[i].noteId,
                        note: this.loremIpsum[i],
                        backgroundColor: this.items[i].background
                    }
                })       
                this.items[i].instance = noteInstance
                noteInstance.$mount()
            }
            for (i = 0; i < this.items.length; i++) {
                console.info('index.es6.js: mounted(): $nextTick: this.items[' + i +'].id = ' + this.items[i].id)
                console.info('index.es6.js: mounted(): $nextTick: Getting div with id = contentId = ' + this.items[i].contentId)
    
                let contentDiv = document.getElementById(this.items[i].contentId)
    
                console.info('index.es6.js: mounted(): $nextTick: contentDiv = ')
                console.info(contentDiv)
    
                contentDiv.innerText = ''
                contentDiv.appendChild(this.items[i].instance.$el)
    
    
            }
            for (i = 0; i < this.items.length; i++) {
                let itemToActivate = this.items[i].instance
                    // itemToActivate.$props.resizeTrigger = this.guid()
                    itemToActivate.$props.titleSetViewModeTrigger = this.guid()

                // this.$nextTick(function () {
                // })

            }        
        })

        console.info('index.es6.js: mounted(): End')
    }, // mounted()
    beforeUpdate() {
        console.info('index.es6.js: beforeUpdate(): Fired!')     

    },
    updated() {
        console.info('index.es6.js: updated(): Fired!')        
    },
    activated() {
        console.info('index.es6.js: activated(): Fired!')        
    },

    methods: {

        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1)
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4()
        },
        // onClick() {
        //     // console.info'test/index.es6.js: onClick(): Fired!')
        //     var ComponentClass = Vue.extend(TestComponent)
        //     var instance = new ComponentClass({
        //         propsData: { type: 'primary' }
        //     })
        //     instance.$slots.default = ['Click me!']
        //     instance.$mount() // pass nothing
        //     // console.info'test/index.es6.js: onClick(): instance.$el =')
        //     // console.infoinstance.$el)
        //     this.$refs.container.appendChild(instance.$el)    
            
        // },
        // onClickStickyNote() {
        //     // console.info'test/index.es6.js: onClick(): Fired!')
        //     var ComponentClass = Vue.extend(FoStickyNote)
        //     // console.info'test/index.es6.js: onClick(): After Vue.extend()')
        //     let noteId = this.guid()
        //     var instance = new ComponentClass({
        //         propsData: { 
        //             id: noteId,
        //             noteTitle: noteId,
        //             note: 'This was added when you clicked the button!'
        //         }
        //     })
        //     // console.info'test/index.es6.js: onClick(): After new; instance =')
        //     // console.infoinstance)


        //     // instance.$slots.default = ['Click me!']
        //     instance.$mount() // pass nothing
        //     // console.info'test/index.es6.js: onClick(): After $mount')

        //     // Make an outer outer div that can contain the sticky note.

        //     let ooDiv = document.createElement('div')
        //     ooDiv.style.height = '200px'
        //     ooDiv.style.width = '200px'
        //     ooDiv.style.maxHeight = '200px'
        //     ooDiv.style.maxWidth = '200px'
        //     ooDiv.appendChild(instance.$el)

        //     this.$refs.container.appendChild(ooDiv)
        //     instance.$props.resizeTrigger = this.guid()
            
        // }
    }        

}) // new Vue



console.info('test/index.es6.js: End')


// let handItem = {
//     id: 'handItem',
//     dataGsX: '8', DataGsY: '0', 
//     dataGsWidth: '2', dataGsHeight: '2', 
//     dataGsMinWidth: '2', dataGsNoResize: 'yes', 
//     background: 'white',
//     content: 'Drag me!' 
//     // <span class='fa fa-hand-o-up'></span> Drag me!
// }
// this.items.push(handItem)

