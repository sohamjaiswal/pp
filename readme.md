# Personal Portfolio 'PP'

Provided are common components and templates that would be required to make an IMO decent looking portfolio.

# Requirements

Usage has only been tested on linux with yarn.

# Known Issue

Prettier pre commit hook causes a "," in /src/components/glass-box/glass-box.scss at line 7, Remove that and everything should sail smooth from there.

# Usage

1. Edit main.tsx in /src/templates/main or create a new template refering to main.
2. Edit my-conf.tsx in /src to match your template.
3. Add/Change Main Route in App.tsx to route to your template with supplied config.
4. Test using storybook and build with webpack.
5. Profit.

Crediting this repo would be much appreciated.

# Contributing

Feel free to fork and PR this repo and expand on the components, sticking with the theme (or not).

Help with documentation would be much appreciated.
