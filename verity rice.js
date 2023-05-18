Vue.config.devtools = true

new Vue({
  el: "#app",
  methods: {
    updateActiveIndex(index) {
      this.activeIndex = index;
    }
  },
  data() {
    return {
      activeIndex: 0,
      btnActiveClass: 'is-active',
      btnClass: 'feature-button',
      features: [
        {
          name: "Recipe Plans",
          description: 'Healthy ideas for efficient, tasty meals all week long, with your own preferences in mind'
        },
        {
          name: "Favorites",
          description: 'Keep track of all your ride-or-die meals for easy access on the go'
        },
        {
          name: "Explore",
          description: 'Find new recipes to try based on your favorites and food preferences'
        },
        {
          name: "Grocery Lists",
          description: 'Keep track of what you need to buy for efficient grocery store runs'
        }
      ],
      appImages: [
        {
          src:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/36489/app-screen-1a.png"
        },
        {
          src:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/36489/app-screen-2a.png"
        },
        {
          src:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/36489/app-screen-3a.png"
        },
        {
          src:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/36489/app-screen-4a.png"
        }
      ]
    };
  }
});
