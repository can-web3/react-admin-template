// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    // eğer CSS’iniz farklı klasördeyse:
    // './src/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38CAB3',
      },
    },
  },
  plugins: [],
}
