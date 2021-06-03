// pages/main/main.js
Page({

  /**
   * Page initial data
   */
  data: {
    selectBtn: "Major & Year",
    selectWindowStatus: false,
    majorList: ["CIS", "EME", "ECE", "CIV ", "MAT", "FST", "FAH",
                "FBA", "FED", "FHS", "FLL", "FSS", "HC"],
    yearList: [1, 2, 3, 4],
    selected_year_id: 0,
    selected_major_id: " "
  },

  showSelectWindow: function () {
    console.log("tapped")
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      selectWindowStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },

  hideSelectWindow: function () {
    console.log("hide")
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        Sel: false,
        selectWindowStatus: false,
      })
    }.bind(this), 200)
  },

  selectBtn_year: function (e) {
    this.setData ({
      selected_year_id: e.currentTarget.dataset.id
    })
    console.log(e.currentTarget.dataset.id)
  },

  selectBtn_major: function (e) {
    this.setData ({
      selected_major_id: e.currentTarget.dataset.id
    })
    console.log(e.currentTarget.dataset.id)
  },

  confirmBtn: function (e) {
    if (this.data.selected_major_id!=0&&this.data.selected_year_id!=" ") {
      this.setData({
        selectBtn: this.data.selected_major_id +  " & " + "Year " + this.data.selected_year_id
      })
      this.hideSelectWindow()
    }
  },

  cancerBtn: function (e) {
    this.setData({
      selected_major_id: " ",
      selected_year_id: 0,
      selectBtn: "Major & Year"
    })
    this.hideSelectWindow()
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})