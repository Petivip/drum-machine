var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var bankOne = [
{
  keyTrigger: "Q",
  id: "Heater-1",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyTrigger: "W",
  id: "Heater-2",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyTrigger: "E",
  id: "Heater-3",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyTrigger: "S",
  id: "Clap",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyTrigger: "D",
  id: "Open-HH",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyTrigger: "X",
  id: "Kick",
  src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyTrigger: "C",
  id: "Closed-HH",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



var bankTwo = [
{
  keyTrigger: "Q",
  id: "Chord-1",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  keyTrigger: "W",
  id: "Chord-2",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  keyTrigger: "E",
  id: "Chord-3",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  keyTrigger: "A",
  id: "Shaker",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },

{
  keyTrigger: "S",
  id: "Open-HH",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },

{
  keyTrigger: "D",
  id: "Closed-HH",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },

{
  keyTrigger: "Z",
  id: "Punchy-Kick",
  src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

{
  keyTrigger: "X",
  id: "Side-Stick",
  src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },

{
  keyTrigger: "C",
  id: "Snare",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }];var



Drumpad = function (_React$Component) {_inherits(Drumpad, _React$Component);
  function Drumpad(props) {_classCallCheck(this, Drumpad);var _this = _possibleConstructorReturn(this, (Drumpad.__proto__ || Object.getPrototypeOf(Drumpad)).call(this,
    props));_this.











    handleKey = function (event) {
      if (event.keyCode == this.props.keyTrigger.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDis(this.props.id);
      }
    };_this.handleClick = _this.handleClick.bind(_this);_this.handleKey = _this.handleKey.bind(_this);return _this;}_createClass(Drumpad, [{ key: "componentDidMount", value: function componentDidMount() {document.addEventListener("keydown", this.handleKey);window.focus();} }, { key: "componentUnmoount", value: function componentUnmoount() {document.removeEventListener("keydown", this.handlekey);} }, { key: "handleClick", value: function handleClick()
    {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDis(this.props.id);
    } }, { key: "render", value: function render()
    {var _this2 = this;
      return (
        React.createElement("div", { className: "pad", id: this.props.id, onClick: this.handleClick },
          React.createElement("h1", null, this.props.keyTrigger),
          React.createElement("audio", {
            className: "bet",
            id: this.props.KeyTrigger,
            src: this.props.src,
            ref: function ref(_ref) {return _this2.audio = _ref;} })));



    } }]);return Drumpad;}(React.Component);var


Drumapp = function (_React$Component2) {_inherits(Drumapp, _React$Component2);
  function Drumapp(props) {_classCallCheck(this, Drumapp);var _this3 = _possibleConstructorReturn(this, (Drumapp.__proto__ || Object.getPrototypeOf(Drumapp)).call(this,
    props));
    _this3.state = {
      dis: "Press a key",
      bank: bankOne,
      vol: 0.4 };

    _this3.handleDis = _this3.handleDis.bind(_this3);
    _this3.bankSwitch = _this3.bankSwitch.bind(_this3);
    _this3.volumeChange = _this3.volumeChange.bind(_this3);return _this3;
  }_createClass(Drumapp, [{ key: "handleDis", value: function handleDis(
    display) {
      this.setState({
        dis: display });

    } }, { key: "volumeChange", value: function volumeChange(
    e) {
      this.setState({
        vol: e.target.value });

    } }, { key: "bankSwitch", value: function bankSwitch()
    {
      if (this.state.bank == bankOne) {
        this.setState({
          bank: bankTwo });

      } else {
        this.setState({
          bank: bankOne });

      }
    } }, { key: "render", value: function render()
    {var _this4 = this;
      var ban = this.state.bank;
      var bankSlider = this.state.bank === bankOne ? {
        float: 'left' } :
      {
        float: 'right' };

      {
        var clips = [].slice.call(document.getElementsByClassName('bet'));
        clips.forEach(function (sound) {
          sound.volume = _this4.state.vol;
        });
      }
      return (
        React.createElement("div", { id: "container" },

          React.createElement("div", { className: "main" },
            ban.map(function (x) {return (
                React.createElement(Drumpad, {
                  id: x.id,
                  keyTrigger: x.keyTrigger,
                  src: x.src,
                  handleDis: _this4.handleDis }));})),



          React.createElement("div", { className: "control" },
            React.createElement("p", null, "Bank Switch"),
            React.createElement("div", { id: "togglebank", onClick: this.bankSwitch, className: "type" },
              React.createElement("div", { style: bankSlider, className: "inner-type" })),

            React.createElement("div", { className: "volume-slider" },
              React.createElement("input", { type: "range", min: "0", max: "1", step: "0.01", value: this.state.vol, onChange: this.volumeChange })),

            React.createElement("div", { id: "dis" }, this.state.dis),
            React.createElement("div", { id: "footer" }, "Coded By Petros Melake"))));



    } }]);return Drumapp;}(React.Component);


ReactDOM.render(React.createElement(Drumapp, null), document.getElementById('app'));