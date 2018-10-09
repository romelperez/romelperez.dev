export default {
  slides: [
    {
      children: [{
        element: 'Heading',
        children: 'JavaScript Animations'
      }, {
        element: 'Paragraph',
        children: '¡How to make the web come alive with animations!'
      }, {
        element: 'div',
        props: { className: 'star-bg' },
        children: ''
      }, {
        element: 'div',
        props: { className: 'star-field' },
        children: [{
          element: 'div',
          props: { className: 'star' },
          children: ''
        }, {
          element: 'div',
          props: { className: 'star' },
          children: ''
        }, {
          element: 'div',
          props: { className: 'star' },
          children: ''
        }]
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h2', 'style': { fontSize: '74px' } },
        children: 'Animation on the web'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/javascript-animations/css.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'CSS'
      }, {
        element: 'Paragraph',
        children: 'We make use of transitions and keyframes in order to animate DOM elements'
      }]
    },
    {
      children: [{
        element: 'List',
        children: [{
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/romelperez/pen/GYjPmN', target: '_blank' },
            children: 'CSS Basic Transition'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/romelperez/pen/aRmPyg', target: '_blank' },
            children: 'CSS Basic Animation'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/davidkpiano/pen/Xempjq', target: '_blank' },
            children: 'CSS Cat Swinging on String'
          }]
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/javascript-animations/canvas.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'Canvas and WebGL'
      }, {
        element: 'Paragraph',
        children: 'Draw bitmap graphs on 2D and 3D'
      }]
    },
    {
      children: [{
        element: 'List',
        children: [{
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/joniibra/pen/dGzMPq', target: '_blank' },
            children: 'BACKGROUND: Animated Flow Neon'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/FrankFitzGerald/pen/LAbfm', target: '_blank' },
            children: 'Sakura Animation using WebGL'
          }]
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/javascript-animations/javascript.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'JavaScript'
      }, {
        element: 'Paragraph',
        children: 'Use a functional approach to animate DOM elements'
      }]
    },
    {
      children: [{
        element: 'List',
        children: [{
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/romelperez/pen/GYjPGm', target: '_blank' },
            children: 'JavaScript Animation setInterval'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/romelperez/pen/gBwZdR', target: '_blank' },
            children: 'JavaScript Animation requestAnimationFrame'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/gpyne/pen/mJmrgr', target: '_blank' },
            children: 'JavaScript Animation The endless tweak'
          }]
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/javascript-animations/tools.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h2', 'style': { fontSize: '74px' } },
        children: 'Libraries'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/javascript-animations/animatecss.png' }
      }, {
        element: 'Paragraph',
        children: [{
          element: 'Link',
          props: { href: 'https://daneden.github.io/animate.css', target: '_blank' },
          children: 'daneden.github.io/animate.css'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/javascript-animations/anime.png' }
      }, {
        element: 'Paragraph',
        children: [{
          element: 'Link',
          props: { href: 'http://animejs.com', target: '_blank' },
          children: 'animejs.com'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/javascript-animations/greensock.png' }
      }, {
        element: 'Paragraph',
        children: [{
          element: 'Link',
          props: { href: 'https://greensock.com', target: '_blank' },
          children: 'greensock.com'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/javascript-animations/react.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h2', 'style': { fontSize: '74px' } },
        children: 'React Animations'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'Components Integration'
      }, {
        element: 'Paragraph',
        children: 'Add interactivity to React components DOM elements using animation tools'
      }]
    },
    {
      children: [{
        element: 'List',
        children: [{
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://greensock.com/react', target: '_blank' },
            children: 'React and GreenSock'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/romelperez/pen/bmgxZR', target: '_blank' },
            children: 'React and GreenSock - Simple'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codepen.io/romelperez/pen/mzRQWj', target: '_blank' },
            children: 'React and GreenSock - Multiple Elements'
          }]
        }]
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'React Spring'
      }, {
        element: 'Paragraph',
        children: 'A set of spring-physics based primitives'
      }]
    },
    {
      children: [{
        element: 'List',
        children: [{
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'http://react-spring.surge.sh', target: '_blank' },
            children: 'React Spring Docs'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codesandbox.io/s/kxl04n34wr', target: '_blank' },
            children: 'Basic Spring Animation'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://codesandbox.io/s/3vwoq51nl5', target: '_blank' },
            children: 'Basic Transition Animation'
          }]
        }]
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h2', 'style': { fontSize: '74px' } },
        children: 'How to compare'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'Control'
      }, {
        element: 'Paragraph',
        children: 'How do you pause, re-start, go to a point in time, slow down or create dynamic keyframes?'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'Performance'
      }, {
        element: 'Paragraph',
        children: 'What about mobile? What if you are animating 100 elements or 10\'000 elements?'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'Options'
      }, {
        element: 'Paragraph',
        children: 'What if secuences or timelines? How to staggering? What about more realistic easing?'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h1' },
        children: '"Evaluate what you need for your project and adjust for your team to choose an animation tool"'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3', 'style': { fontSize: '62px' } },
        children: 'Honorable mentions'
      }, {
        element: 'List',
        children: [{
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API', target: '_blank' },
            children: 'Web Animations API'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://reactcommunity.org/react-transition-group', target: '_blank' },
            children: 'React Transition Group'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'https://github.com/chenglou/react-motion', target: '_blank' },
            children: 'React Motion'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { href: 'http://velocityjs.org', target: '_blank' },
            children: 'VelocityJS'
          }]
        }]
      }]
    },
    {
      children: [{
        element: 'Link',
        props: {
          'href': 'https://romelperez.com',
          'target': '_blank',
          'style': {
            'fontSize': '80px',
            'fontWeight': 'bold'
          }
        },
        children: 'RomelPerez.com'
      }]
    }
  ]
};
