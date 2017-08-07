import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu.jsx';
import Content from './Content.jsx';
import scrollToWithAnimation from 'scrollto-with-animation'



class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    var selectedDiv = document.querySelectorAll('#'+nextProps.match.path.slice(1))[0];
    var divOffset = selectedDiv.offsetTop;
    var parentOffset = selectedDiv.offsetParent.offsetTop;
    var distanceToScroll = divOffset + parentOffset - 20;
    console.log("received ", distanceToScroll, "from ", selectedDiv)

    scrollToWithAnimation(document.body, 'scrollTop', distanceToScroll, 1000, 'linearTween');
  }

  componentWillMount() {
    window.addEventListener("scroll", function(event) {

      var topDistance = this.pageYOffset;
      var innerHeight = this.innerHeight;
      var layers = document.querySelectorAll(".parallax");
      var layersFixed = document.querySelectorAll('.fixedMenu');
      // var menuHeight = document.querySelectorAll('.menu') || document.querySelectorAll('.fixedMenu');

      //unfix menu from the top of screen
      if (layersFixed.length > 0 && ((topDistance + 70) <= innerHeight)) {
        // console.log("Here's where it un-happened ", topDistance, " * ", innerHeight, "height ", menuHeight)
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

        //Fix menu bar to the top of screen
        if (layer.classList.contains('toBeStickied') && topDistance + 70 >= innerHeight) {
          // console.log("Here's where it happened ", topDistance, " * ", innerHeight, "height ", menuHeight)
          layer.classList.remove('parallax');
          layer.classList.remove('toBeStickied');
          layer.classList.remove('menu');
          layer.classList.add('fixedMenu');
          var fixed = document.querySelectorAll('.fixedMenu')[0];

          var fixedTranslate = 'translate3d(0px, 0px, 0px)';
          fixed.style['-moz-transform'] = fixedTranslate;
          fixed.style['-ms-transform'] = fixedTranslate;
          fixed.style['-o-transform'] = fixedTranslate;
          fixed.style['transform'] = fixedTranslate;

          console.log(layer)
        } else {
          var translate3d = 'translate3d(0, ' + movement + 'px, 0)';
          layer.style['-moz-transform'] = translate3d;
          layer.style['-ms-transform'] = translate3d;
          layer.style['-o-transform'] = translate3d;
          layer.style.transform = translate3d;
        }
      }
    });
  }

  render() {
    return (
      <div className="container w-100">
        <div id="header" className="fl w-100">
          <div className="layer number1 parallax" datatype="parallax" data-depth="1.00"></div>
          <div className="layer number2 parallax" datatype="parallax" data-depth="0.65"></div>
          <div className="layer number3 parallax" datatype="parallax" data-depth="0.50"></div>
          <div className="layer nameLogo parallax" datatype="parallax" data-depth="0.50"></div>
          <div className="layer number4 parallax" datatype="parallax" data-depth="0.80"></div>
            <img src="http://localhost:1337/layer-images/filler.png" className="picture parallax" data-depth="1.00" style={{height: `${this.innerHeight}`}} />
        </div>
        <Menu />
        <Content />
      </div>
    );
  }
}

export default Main;
