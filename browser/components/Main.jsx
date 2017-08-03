import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.addEventListener("scroll", function(event) {

      var topDistance = this.pageYOffset;
      var innerHeight = this.innerHeight;
      var layers = document.querySelectorAll(".parallax");
      var layersFixed = document.querySelectorAll('.fixedMenu');

      //unfix menu from the top of screen
      if (layersFixed.length > 0 && ((topDistance + 70) <= innerHeight)) {
        console.log("Here's where it un-happened ", topDistance, " * ", innerHeight)
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
          console.log("Here's where it happened ", topDistance, " * ", innerHeight)
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
      <div>
         <div className="layer menu toBeStickied parallax" data-depth="1.00">
          <ul className="allMenuButtons">
              <li className="menuButton">
                <h2>PROJECTS</h2>
              </li>
              <li className="menuButton">
                <h2>ABOUT</h2>
              </li>
              <li className="menuButton">
                <h2>RESUME</h2>
              </li>
              <li className="menuButton">
                <h2>CONTACT</h2>
              </li>
          </ul>
        </div>
        {/* <div className="fixedMenu" data-depth="1.00">
          <ul className="allMenuButtons">
              <li className="menuButton">
                <h2>PROJECTS</h2>
              </li>
              <li className="menuButton">
                <h2>ABOUT</h2>
              </li>
              <li className="menuButton">
                <h2>RESUME</h2>
              </li>
              <li className="menuButton">
                <h2>CONTACT</h2>
              </li>
          </ul>
        </div> */}
        <div id="parent">
          <div className="layer number1 parallax" datatype="parallax" data-depth="1.00"></div>
          <div className="layer number2 parallax" datatype="parallax" data-depth="0.65"></div>
          <div className="layer number3 parallax" datatype="parallax" data-depth="0.50"></div>
          <div className="layer nameLogo parallax" datatype="parallax" data-depth="0.3"></div>
          <div className="layer number4 parallax" datatype="parallax" data-depth="0.80"></div>
          {/* <div className="layer number5" datatype="parallax"></div>
          <div className="layer number6" datatype="parallax"></div> */}
        </div>
        <p>thisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthis</p>
        <img src="https://i.redd.it/2oz1vk3vvbdz.jpg" />
      </div>

    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
