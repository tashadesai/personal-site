import React, { Component } from 'react';
import Menu from './Menu.jsx';
import Content from './Content.jsx';
import scrollToWithAnimation from 'scrollto-with-animation';
import scroller from 'scroll-to-js';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    var selectedDiv = document.querySelectorAll('#'+nextProps.match.path.slice(1))[0];
    var divOffset = selectedDiv.offsetTop;
    var parentOffset = selectedDiv.offsetParent.offsetTop;
    var distanceToScroll = divOffset + parentOffset - 20;

    // scrollToWithAnimation(document.body, 'scrollTop', distanceToScroll, 1000, 'linearTween');

    // scroller(document.body, distanceToScroll, 1000)

    $('html, body').animate({
      scrollTop: distanceToScroll
    }, 1000);

  }

  componentWillMount() {
    window.addEventListener("scroll", function(event) {
      var topDistance = this.pageYOffset;
      var innerHeight = this.innerHeight;
      var layers = document.querySelectorAll(".parallax");
      var layersFixed = document.querySelectorAll('.fixedMenu');
      var content = document.querySelector("#content");

      //unfix menu from the top of screen
      if (layersFixed.length > 0 && ((topDistance + 70) <= innerHeight)) {
        content.style['padding-top'] = '0';
        layersFixed[0].classList.add('parallax');
        layersFixed[0].classList.add('toBeStickied');
        layersFixed[0].classList.remove('fixedMenu');
        layersFixed[0].classList.add('menu');
      }

      //for the menu: where this.innerHeight === topDistance + menu.height, stop translation
      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var depth = layer.getAttribute('data-depth');
        var movement = -(topDistance * depth);
        var content = document.querySelector("#content");

        //Fix menu bar to the top of screen
        if (layer.classList.contains('toBeStickied') && topDistance + 70 >= innerHeight) {
          layer.classList.remove('parallax');
          layer.classList.remove('toBeStickied');
          layer.classList.remove('menu');
          layer.classList.add('fixedMenu');
          var fixed = document.querySelectorAll('.fixedMenu')[0];
          content.style['padding-top'] = document.querySelectorAll("#menu")[0].offsetHeight + 'px';

          var fixedTranslate = 'translate3d(0px, 0px, 0px)';
          fixed.style['-moz-transform'] = fixedTranslate;
          fixed.style['-ms-transform'] = fixedTranslate;
          fixed.style['-o-transform'] = fixedTranslate;
          fixed.style['transform'] = fixedTranslate;

        } else {
          var translate3d = 'translate3d(0, ' + movement + 'px, 0)';
          layer.style['-moz-transform'] = translate3d;
          layer.style['-ms-transform'] = translate3d;
          layer.style['-o-transform'] = translate3d;
          layer.style.transform = translate3d;
        }
      }
    });

    window.addEventListener("resize", function(event) {
      document.querySelector("#header").style['height'] = (innerHeight - 70) + 'px';
    });
  }

  componentDidMount() {
    document.querySelector("#header").style['height'] = (innerHeight - 70) + 'px';
  }

  render() {
    return (
      <div className="container w-100">
        <div id="header" className="fl w-100">
          <div className="layer number1 parallax" datatype="parallax" data-depth="0.80"></div>
          <div className="layer number2 parallax" datatype="parallax" data-depth="0.40"></div>
          <div className="layer number3 parallax" datatype="parallax" data-depth="0.50"></div>
          <div className="layer nameLogo parallax" datatype="parallax" data-depth="0.50"></div>
          <div className="layer number4 parallax" datatype="parallax" data-depth="0.10"></div>
            <img src="/layer-images/filler.png" className="picture parallax" data-depth="1.00" style={{height: `${this.innerHeight}`}} />
        </div>
        <Menu />
        <Content />
      </div>
    );
  }
}

export default Main;

//data depth trial 1: 1, 0.65, 0.5, 0.5, 0.8, 1(filler)
//data depth trial 2: 0.8, 0.4, 0.5, 0.5, 0.1, 1(filler)
