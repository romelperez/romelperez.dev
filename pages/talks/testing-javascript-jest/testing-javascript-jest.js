export default {
  slides: [
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/start.png' }
      }, {
        element: 'Heading',
        children: 'Testing en JavaScript con Jest'
      }, {
        element: 'Paragraph',
        children: 'Una introducción al testing de aplicaciones web basadas en JavaScript con Jest implementando TDD'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h2', 'style': { fontSize: '74px' } },
        children: '¿Qué es software testing?'
      }]
    },
    {
      props: { 'bgImage': '/static/talks/testing-javascript-jest/analogy.png' }
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/testing.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Software Testing'
      }, {
        element: 'Paragraph',
        children: 'Es el proceso de investigar el proyecto con el objetivo de determinar la calidad del software.'
      }, {
        element: 'Paragraph',
        children: [{
          element: 'small',
          children: 'Fuente: '
        }, {
          element: 'Link',
          props: { 'href': 'https://es.wikipedia.org/wiki/Pruebas_de_software', 'target': '_blank' },
          children: 'es.wikipedia.org/wiki/Pruebas_de_software'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/code.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Métodos'
      }, {
        element: 'List',
        children: [{
          element: 'li',
          children: 'Estático vs dinámico: sin ejecutar y ejecutando el software, como linting y demos respectivamente'
        }, {
          element: 'li',
          children: 'Modelo de caja: white-box, en donde se conoce el código fuente y black-box donde el mismo se desconoce'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/code.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Niveles'
      }, {
        element: 'List',
        children: [{
          element: 'li',
          children: 'Unit testing'
        }, {
          element: 'li',
          children: 'Integration testing'
        }, {
          element: 'li',
          children: 'System testing'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/unit-testing.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Unit testing'
      }, {
        element: 'Paragraph',
        children: 'Unidades o componentes individuales.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/integration-testing.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Integration testing'
      }, {
        element: 'Paragraph',
        children: 'Unidades o componentes individuales son combinados y testeados como grupo.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/system-testing.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'System testing'
      }, {
        element: 'Paragraph',
        children: 'El software completo o integrado es testeado.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/code.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Tipos'
      }, {
        element: 'List',
        children: [{
          element: 'li',
          children: 'Funcionales, no funcionales: rasgos técnicos o no técnicos'
        }, {
          element: 'li',
          children: 'Compatibilidad: si el software funciona bien para diferentes plataformas'
        }, {
          element: 'li',
          children: 'Rendimiento: si el tiempo de carga o velocidad de respuesta es adecuado'
        }]
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h2', 'style': { fontSize: '74px' } },
        children: 'Pero ¿Para qué testear?'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/bug.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Reduce los bugs'
      }, {
        element: 'Paragraph',
        children: 'TDD reduce la densidad de bugs en producción entre un 40-80%.'
      }, {
        element: 'Paragraph',
        children: [{
          element: 'small',
          children: 'Fuente: '
        }, {
          element: 'Link',
          props: { 'href': 'https://medium.com/javascript-scene/863d5beb3ce9', 'target': '_blank' },
          children: 'medium.com/javascript-scene/863d5beb3ce9'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/design.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Mejora el diseño y arquitectura'
      }, {
        element: 'Paragraph',
        children: 'Te ayuda a modularizar, independizar, enfocar, te obliga a desacoplar y además de ser una documentación viva.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/people.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Organización y comunicación'
      }, {
        element: 'Paragraph',
        children: 'Facilita la organización del trabajo y mejora la comunicación entre miembros del equipo de desarrollo.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/quality.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Calidad'
      }, {
        element: 'Paragraph',
        children: 'La confiabilidad y la calidad del producto final es mucho más alta cuando se testea el software.'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h2', 'style': { fontSize: '74px' } },
        children: 'Ok ¿Cuándo hacerlo?'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/complexity.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'En el proyecto'
      }, {
        element: 'Paragraph',
        children: 'Tamaño, complejidad, calendario, datos, entre otros.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/people.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'En el equipo'
      }, {
        element: 'Paragraph',
        children: 'Número de miembros, habilidad, entre otros.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/time-cost.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Tiempos y costos'
      }, {
        element: 'Paragraph',
        children: 'Testear cuesta y requiere tiempo, pero los resultados lo ameritan.'
      }]
    },
    {
      props: { 'bgImage': '/static/talks/testing-javascript-jest/software_testing_curve.jpg' }
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h2', 'style': { fontSize: '74px' } },
        children: 'Que berraquera ¿Cómo lo hago?'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/automatization.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Automatización'
      }, {
        element: 'Paragraph',
        children: 'Siempre se testea, sea el proceso manual o automatizado. Aunque es necesario hacer parte del proceso manual, la idea es automatizar lo mayor posible.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/tdd.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'TDD'
      }, {
        element: 'Paragraph',
        children: 'Test-Driven Development hace uso de repetir el ciclo:'
      }, {
        element: 'List',
        children: [{
          element: 'li',
          children: 'Crea el test inicialmente fallido'
        }, {
          element: 'li',
          children: 'Escribe el código para pasar el test'
        }, {
          element: 'li',
          children: 'Mejora la versión del código'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/code.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Herramientas'
      }, {
        element: 'List',
        children: [{
          element: 'li',
          children: 'Test runner: se encarga de ejecutar de manera organizada y controlada los tests'
        }, {
          element: 'li',
          children: 'Assertion library: ayuda en la validación y verificación las unidades de testeo'
        }, {
          element: 'li',
          children: 'Debugger: para encontrar las fuentes de los errores'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/jest.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Test Runner: Jest'
      }, {
        element: 'Paragraph',
        children: 'Nos permite crear \'test cases\' en Node.js y en el navegador. Corre serialmente tests síncronos y asíncronos, generando reportes y mapeando errores.'
      }, {
        element: 'Paragraph',
        children: [{
          element: 'small',
          children: 'Documentación: '
        }, {
          element: 'Link',
          props: { 'href': 'https://jestjs.io', 'target': '_blank' },
          children: 'jestjs.io'
        }]
      }]
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'bash' },
        children: `$ cd /my/project/folder/
$ npm init -y
$ npm install --save-dev jest`
      }]
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'text' },
        children: `- src/
  - sum.js
  - sum.test.js`
      }]
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'text' },
        children: 'package.json'
      }, {
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `{
  ...
  \"scripts\": {
    \"test\": \"jest\"
  },
  ...
}`
      }]
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'text' },
        children: 'src/sum.test.js'
      }, {
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `const sum = require('./sum');

// Una agrupación
describe('Sum', () => {
  it('Should sum two positive numbers', () => {
    // Una unidad de test
  });

  it('Should return 0 if no parameters are provided', () => {
    // Una unidad de test
  });
});`
      }]
    },
    {
      props: { 'bgImage': '/static/talks/testing-javascript-jest/example1.jpg' }
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { 'src': '/static/talks/testing-javascript-jest/jest.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Assertion Library: Jest Matchers'
      }, {
        element: 'Paragraph',
        children: 'Crea comparaciones para verificar que lo que ocurre es lo correcto y esperado.'
      }, {
        element: 'Paragraph',
        children: [{
          element: 'small',
          children: 'Documentación: '
        }, {
          element: 'Link',
          props: { 'href': 'https://jestjs.io', 'target': '_blank' },
          children: 'jestjs.io'
        }]
      }]
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `const sum = require('./sum');

describe('Sum', () => {
  it('Should sum two positive numbers', () => {
    const actual = sum(5, 4);
    const expected = 9;
    expect(actual).toBe(expected);
  });

  it('Should return 0 if no parameters are provided', () => {
    const actual = sum();
    const expected = 0;
    expect(actual).toBe(expected);
  });
});`
      }]
    },
    {
      props: { 'bgImage': '/static/talks/testing-javascript-jest/example2.jpg' }
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'text' },
        children: 'src/sum.js'
      }, {
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `function sum(a, b) {
  return a + b;
}

module.exports = sum;`
      }]
    },
    {
      props: { 'bgImage': '/static/talks/testing-javascript-jest/example3.jpg' }
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'text' },
        children: 'src/sum.js'
      }, {
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `function sum(a = 0, b = 0) {
  return a + b;
}

module.exports = sum;`
      }]
    },
    {
      props: { 'bgImage': '/static/talks/testing-javascript-jest/example4.jpg' }
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Muy bonito todo pero ¿Podemos hacer algo más serio?'
      }, {
        element: 'Paragraph',
        children: 'Vamos a testear algunos módulos de un sistema autónomo de aterrizaje de aviones!'
      }, {
        element: 'Paragraph',
        children: [{
          element: 'small',
          children: 'Versión final en: '
        }, {
          element: 'Link',
          props: { 'href': 'https://github.com/romelperez/jest-workshop', 'target': '_blank' },
          children: 'romelperez/jest-workshop'
        }]
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Algunos Recursos'
      }, {
        element: 'List',
        children: [{
          element: 'li',
          children: [{
            element: 'Link',
            props: { 'href': 'https://www.youtube.com/playlist?list=PLAIjpj9Un1BBA1y_6VQuVLEuJY8rMavRV', 'target': '_blank' },
            children: 'Introducción a Testing de Web Apps'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { 'href': 'https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9', 'target': '_blank' },
            children: '5 Common Misconceptions About TDD & Unit Tests'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { 'href': 'https://www.youtube.com/watch?v=TWBDa5dqrl8', 'target': '_blank' },
            children: 'Unit testing: How to get your team started'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { 'href': 'https://www.youtube.com/watch?v=tfkUN8Jr9zY', 'target': '_blank' },
            children: 'Unit Testing JavaScript'
          }]
        }, {
          element: 'li',
          children: [{
            element: 'Link',
            props: { 'href': 'https://addyosmani.com/first', 'target': '_blank' },
            children: 'FIRST'
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
