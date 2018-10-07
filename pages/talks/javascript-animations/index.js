import React from 'react';
import withStyles from 'react-jss';

import TalkBase from '../_talk';
import talk from './javascript-animations';

const styles = {
  '@global': {
    '.star-bg': {
      background: 'url(/static/img/background-xlarge.jpg) no-repeat center',
      backgroundSize: 'cover',
      height: '100%',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -3
    },

    '@keyframes sf-fly-by-1': {
      'from': {
        transform: 'translateZ(-600px)',
        opacity: 0.5,
      },
      'to': {
        transform: 'translateZ(0)',
        opacity: 0.5
      }
    },

    '@keyframes sf-fly-by-2': {
      'from': {
        transform: 'translateZ(-1200px)',
        opacity: 0.5,
      },
      'to': {
        transform: 'translateZ(-600px)',
        opacity: 0.5
      }
    },

    '@keyframes sf-fly-by-3': {
      'from': {
        transform: 'translateZ(-1800px)',
        opacity: 0.5,
      },
      'to': {
        transform: 'translateZ(-1200px)',
        opacity: 0.5
      }
    },

    '.star-field': {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      perspective: 600,
      '-webkit-perspective': 600,
      zIndex: -1
    },

    '.star-field .star': {
      boxShadow: '-411px -476px #30fffe, 777px -407px #30fffe, -387px -477px #30fffe, -91px -235px #30fffe, 491px -460px #30fffe, 892px -128px #30fffe, 758px -277px #30fffe, 596px 378px #30fffe, 647px 423px whitesmoke, 183px 389px #30fffe, 524px -237px #30fffe, 679px -535px #30fffe, 158px 399px #30fffe, 157px 249px #30fffe, 81px -450px #30fffe, 719px -360px #30fffe, -499px 473px #30fffe, -158px -349px #30fffe, 870px -134px #30fffe, 446px 404px #30fffe, 440px 490px #30fffe, 414px 507px #30fffe, -12px 246px #30fffe, -384px 369px #30fffe, 641px -413px #30fffe, 822px 516px #30fffe, 449px 132px #30fffe, 727px 146px #30fffe, -315px -488px #30fffe, 952px -70px #30fffe, -869px -29px #30fffe, 502px 80px #30fffe, 764px 342px #30fffe, -150px -380px #30fffe, 654px -426px #30fffe, -325px -263px #30fffe, 755px -447px #30fffe, 729px -177px #30fffe, -682px -391px #30fffe, 554px -176px #30fffe, -85px -428px #30fffe, 714px 55px #30fffe, 359px -285px #30fffe, -362px -508px #30fffe, 468px -265px #30fffe, 74px -500px #30fffe, -514px 383px #30fffe, 730px -92px #30fffe, -112px 287px #30fffe, -853px 79px #30fffe, 828px 475px #30fffe, -681px 13px #30fffe, -176px 209px #30fffe, 758px 457px #30fffe, -383px -454px #30fffe, 813px 179px #30fffe, 608px 98px whitesmoke, -860px -65px #30fffe, -572px 272px #30fffe, 459px 533px #30fffe, 624px -481px #30fffe, 790px 477px #30fffe, 731px -403px #30fffe, 70px -534px #30fffe, -23px 510px #30fffe, -652px -237px whitesmoke, -690px 367px #30fffe, 810px 536px #30fffe, 774px 293px #30fffe, -362px 97px #30fffe, 563px 47px #30fffe, 313px 475px #30fffe, 839px -491px #30fffe, -217px 377px #30fffe, -581px 239px #30fffe, -857px 72px #30fffe, -23px 340px #30fffe, -837px 246px white, 170px -502px #30fffe, 822px -443px #30fffe, 795px 497px #30fffe, -814px -337px #30fffe, 206px -339px #30fffe, -779px 108px #30fffe, 808px 2px #30fffe, 665px 41px #30fffe, -564px 64px #30fffe, -380px 74px #30fffe, -369px -60px #30fffe, 47px -495px #30fffe, -383px 368px #30fffe, 419px 288px #30fffe, -598px -50px #30fffe, -833px 187px #30fffe, 378px 325px whitesmoke, -703px 375px #30fffe, 392px 520px #30fffe, -492px -60px #30fffe, 759px 288px #30fffe, 98px -412px #30fffe, -911px -277px #30fffe',
      transformStyle: 'preserve-3d',
      position: 'absolute',
      top: '50%',
      left: '50%',
      height: 4,
      width: 4,
      borderRadius: 2
    },

    '.star-field .star:nth-child(1)': {
      animation: 'sf-fly-by-1 5s linear infinite'
    },

    '.star-field .star:nth-child(2)': {
      animation: 'sf-fly-by-2 5s linear infinite'
    },

    '.star-field .star:nth-child(3)': {
      animation: 'sf-fly-by-3 5s linear infinite'
    }
  },
  slide: {
    transform: 'none !important'
  }
};

const JavaScriptAnimations = ({ classes }) => (
  <TalkBase slideClassName={classes.slide} talk={talk} />
);

export default withStyles(styles)(JavaScriptAnimations);
