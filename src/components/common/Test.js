export default {
  name: 'Test',
  data() {
    return {
      buttons: [
        1, 2, 3, 4
      ],
      type: 'button'
    }
  },
  render: function (h) {
    return (
      <div>
        {
          this.buttons.map(it => {
            switch (it) {
              case 1:
                return <div>1</div>
              case 2:
                return <div>2</div>
              case 3:
                return <div>3</div>
              case 4:
                return <div>4</div>
              default:
                break
            }
          })
        }
      </div>
    )
  },
  methods: {
    click(a) {
      console.log('asdfasdf' + a)
    }
  }
}
