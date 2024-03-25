# Sass Boilerplate

The project uses the [Sass Boilerplate](https://github.com/KittyGiraudel/sass-boilerplate) by [Kitty Giraudel](https://github.com/KittyGiraudel) ([MIT License](https://github.com/KittyGiraudel/sass-boilerplate/blob/master/LICENSE)).

# Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

*Note: when using [Eyeglass](https://github.com/sass-eyeglass/eyeglass) for distribution, it might be a fine idea to name this file `index.scss` rather than `main.scss` in order to stick to [Eyeglass modules specifications](https://github.com/sass-eyeglass/eyeglass#writing-an-eyeglass-module-with-sass-files). See [#21](https://github.com/KittyGiraudel/sass-boilerplate/issues/21) for reference.*

Reference: [Sass Guidelines](https://sass-guidelin.es/) > [Architecture](https://sass-guidelin.es/#architecture) > [Main file](https://sass-guidelin.es/#main-file)
