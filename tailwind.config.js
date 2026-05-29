const colors = require("tailwindcss/colors");

module.exports = {
  extend: {
    transitionProperty: {
      'height': 'height',
    }
  },

  plugins: [
    require('tailwindcss-animated')
  ],

	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	fontSize: {
		'xs': '.7rem',
		'sm': '.85rem',
		'base': '1.05rem',
		'2xl': '1.25rem',
		'3xl': '2rem',
		'4xl': '2.5rem',
		'5xl': ['3.5rem', { 'lineHeight': '70px' }],
		'6xl': '4rem',
		'7xl': '5rem',
	},
	theme:{
    fontFamily: {
      'serif': ['Space Grotesk', 'ui-serif', 'Georgia'],
      'sans': ['Space Grotesk','ui-sans-serif', 'system-ui'],
      'mono': ['Poppins','ui-monospace', 'SFMono-Regular'],
      'display': ['Poppins','Oswald'],
      'body': ['DM Sans','"Open Sans"'],
    },
    container: {
      screens: {
        xl: '1240px',
        '2xl': '1240px',
      },
    },
		colors: {
			'primary': '#dce5d3', //'#2C5338',
			'secondary': '#052205', //'#B3CFAF',
      'accent': '#5F38E3', //'#B3CFAF',
      'lowLight': '#0B1130', //'#B3CFAF',
			transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      title: '#333',
      body: '#58595b'
		}
	}
}

/** 
module.exports = {
  theme: {
    container: {
      screens: {
        xl: '1240px',
        '2xl': '1240px',
      },
    },
    extend: {
      boxShadow: {
        'inner': '7px 7px 0px #000',
      }
    },

    colors: {
      'primary': '#214BE7',
      'secondary': '#97B0F9',
      'dark-black': '#23211f',
      'med-black': '#343231',
      'black': '#000000',
      'black-med': '#595959',
      'light-grey': '#F3F2F2',
      'med-grey': '#0000001f',
      'white': '#FFFFFF'
    },
    fontFamily: {
      'serif': ['Merriweather', 'ui-serif', 'Georgia'],
      'sans': ['faktum','ui-sans-serif', 'system-ui'],
      'mono': ['faktum','ui-monospace', 'SFMono-Regular'],
      'display': ['faktum','Oswald'],
      'body': ['faktum','"Open Sans"'],
    },
    fontSize: {
      'xs': '.7rem',
      'base': '1.05rem',
      '2xl': '1.25rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': ['3.5rem', { 'lineHeight': '70px' }],
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  
  plugins: [],
}
*/
