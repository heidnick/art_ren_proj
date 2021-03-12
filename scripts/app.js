let app;
var audio;

Vue.component('written-component', {
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-2">
        </div>
        <div class="col-md-8">
          <p>Raphael and Giulio Romano were Italian painters during the Renaissance era. Because of misinterpretations of documentation, the attribution to Raphael’s most famous paintings were disputed. Cecil Gould’s article in the Burling Magazine, Raphael versus Giulio Romano: the swing back, addresses what he deems, “the Giulio fallacy.” Because of certain aspects, theories, and variations in art styles between Raphael’s paintings, art historians believed that Raphael’s apprentice, Giulio Romano, was behind the most famous paintings of Raphael during the Renaissance era. Gould agrees that certain parts of Raphael’s work may not be entirely his, but provides evidence towards Raphael completing the majority, if not all his famous paintings. </p>
          <p>One of the most highly disputed paintings of Raphael’s was the Transfiguration. On Cecil Gould’s account, Raphael wrote that he completed the piece entirely on his own and with much effort, because he did not put full effort into his last paintings for the same patron that he was commissioning Transfiguration to. A hundred years after Raphael’s death, art historians began to question if Raphael completed the painting before his death. Not only did they question the Transfiguration, but every work of Raphael’s in the last five years of his life. Gould provided numerous facts about the “Giulio fallacy,” or the debate between which artist should be attributed Raphael’s paintings.</p>
          <p>Gould stated that Raphael claimed he was almost done with painting the Transfiguration, and there are various other letters that support his statement. It is unlikely that Giulio’s abilities were strong enough at the time to complete most of the lower painting because he was only about fifteen at the time of when he would be working on it. Raphael also stated he had a strong relationship with Giulio Romano, but never said he was exceptionally talented. Belief that the lower half of the Transfiguration was painted by Giulio Romano stemmed from art historians seeing how different the themes and quality were between the lower half of the painting. They assumed it was a different painter because the styles in between the upper and lower half were very different in their realism in faces. The thought that Giulio was the painter of the lower half of the Transfiguration stemmed from a misinterpretation of a payment to Giulio after Raphael’s death. Also, the inky shadows in the lower half were interpreted as Romano’s style. It did not help Raphael’s case that he was extremely versatile in the way he was able to switch styles from one piece to another. Gould provided evidence against the theme variation in the lower and upper half by making the connection to Raphael’s similarly contrasting in theme paintings, St Cecilia and Disputa. </p>
          <p>(The paragraphs above include a summary of the article title listed above. The link can be found <a target="_blank" href="https://www.jstor.org/stable/880797">here</a>.</p>
          <p>After reviewing the facts that Gould laid out in the article, it makes sense how easily one misinterpretation can spiral even if there is evidence against it. It was fascinating when Gould introduced the comparisons made between Giulio and Raphael’s style. When comparing the female portrait by Romano, and La Fornarina by Raphael, there are so many differences. Raphael’s use of paint to focus on shadows made the painting look extremely smooth and rich in texture. The face in Giulio’s painting looks realistic, but thin and gaunt as opposed to full and weighty in Raphael’s. Although there are differences in the faces, the bodies, use of transparency in clothing, and natural posing positions are very similar in both paintings. When comparing both painters La Fornarina portraits, Giulio is much closer to Raphael’s style in the facial features such as the eye structure and shadowing, fullness in color and use of chiaroscuro, and facial expressions. This is very interesting because it makes sense how someone could get the two artists paintings mixed up with how similar they are. </p>
          <p>The inky background shadows argument towards Giulio in the lower half of the Transfiguration doesn’t seem very strong because of the La Fornarina paintings. Raphael clearly has a similar dark inky style in his picture, and his use of shadows is impeccable. As far as the argument of the themes and styles between the upper and lower portions of the painting, the connection seems so fluid that it would be very shocking that another artist, especially a fifteen year old, could step in and execute it so masterfully. As far as the themes suggesting that it was a different painter in the lower and upper halves, by looking at St Cecilia and Disputa, Raphael clearly is very capable of creating two contrasting themes in his paintings.</p>
          <p>The things that were not explained in the article was the lack of documentation. I would like to know more about the process of attribution and if this happened to any other artists at the time. It is quite unfortunate that Raphael died right before the Transfiguration was shown to public, so that it a large factor in why it was so disputed most likely. </p>
          </div>
        <div class="col-md-2">
        </div>
    </div>
  `
});

Vue.component('romano-component', {
  template: `
    <div>
      <img class="image" src="./images/portrait.jpg" alt="Portrait of Giulio Romano">
      </br>
      <h1>Giulio Romano</h1>
      <p><a target="_blank" href="https://en.wikipedia.org/wiki/Giulio_Romano">Giulio Romano</a> was an Italian painter and apprentice of widely known Rennaisance painter, Raphael.</p>
    </div>
  `
});

Vue.component('nav-bar-component', {
    data: function() {
      return {selected: 0}
    },
    props: ['selected'],
    methods: {
      returnSelected: function(num){
        this.selected = num;
        console.log('num: ' , num);
        this.$emit('clicked-nav-item', this.selected);
      }
    },
    template: `
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a v-on:click="returnSelected(0)" class="navbar-brand" href="#">Giulio Romano</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a v-on:click="returnSelected(1)" class="nav-link active" aria-current="page" href="#">Essay</a>
          </li>
          <li class="nav-item">
            <a v-on:click="returnSelected(2)" class="nav-link active" aria-current="page" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
    `
});

Vue.component('about-component', {
  template: `
  <div>
    </br>
    <p>This site was created by Nick Heid using Vue.js, Bootstrap 5, and CSS.</p>
    <p>Click this link to see my other projects: <a target="_blank" href="https://github.com/heidnick">github</a></p> 
  </div>
  `
});

Vue.component('image-section-component', {
  template: `
  <div>
    <h3 class="underline">Mentioned Art</h3>
    </br>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4">
          <img class="image" src="./images/g1.jpg" alt="Female Portrait by Giulio Romano">
          <p>Female Portrait by Giulio Romano</p>
        </div>
        <div class="col-sm-4">
          <img class="image" src="./images/r1.jpeg" alt="La Fornarina by Raphael">
          <p>La Fornarina by Raphael</p>
        </div>
        <div class="col-sm-4">
          <img class="image" src="./images/g2.jpg" alt="La Fornarina by Giulio Romano">
          <p>La Fornarina by Giulio Romano</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <img class="image" src="./images/stcec.jpg" alt="St Cecilia by Raphael">
        <p>St Cecilia by Raphael</p>
      </div>
      <div class="col-sm-4">
        <img class="image" src="./images/transfiguration.jpg" alt="The Transfiguration by Raphael">
        <p>The Transfiguration by Raphael</p>
      </div>
      <div class="col-sm-4">
        <img class="image" src="./images/disputa.jpg" alt="Disputa by Raphael">
        <p>Disputa by Raphael</p>
      </div>
    </div>
  </div>
  `
});


Vue.component('essay-component', {
  template: `
  <div>
    </br>
    <h3 class="italic">Raphael versus Giulio Romano: The Swing Back</h3>
    <h3 class="underline">Summary</h3>
    <written-component></written-component>
    </br>
    </br>
    <image-section-component></image-section-component>
  </div>
  `
});

function init() {

/*------------------------Main Component--------------------------*/
    app = new Vue({
        el: '#app',
        data: {
            nav_item_selected: 0,
        },
        mounted(){       
            
        },
        methods: {
          clickedNavItem: function(value){
            console.log('value ', value);
            this.nav_item_selected = value;
          },
        },
        template: `
        <div class="container-fluid">
            <nav-bar-component :selected="nav_item_selected" @clicked-nav-item="clickedNavItem"></nav-bar-component>
            <div class="row">
                <div class="col text-center">
                    <div v-if="nav_item_selected == 0">
                      </br>
                      </br>
                      <romano-component></romano-component>
                    </div>
                    <div v-else-if="nav_item_selected == 1">
                      <essay-component></essay-component>
                    </div>
                    <div v-else>
                      <about-component></about-component>
                    </div>
                </div>
            </div>
        </div>
        `
    }); 
}


