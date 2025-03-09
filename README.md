Agency Jekyll theme
====================

Agency theme based on [Agency bootstrap theme ](https://startbootstrap.com/template-overviews/agency/)

# How to use

###Portfolio 

Portfolio projects are in '/_posts'

Images are in '/img/portfolio'

###About

Images are in '/img/about/'

###Team

Team members and info are in '_config.yml'

Images are in '/img/team/'


# Demo

View this jekyll theme in action [here](https://y7kim.github.io/agency-jekyll-theme)

=========
For more details, read [documentation](http://jekyllrb.com/)



==========Run project=============


Tải RubyInstaller từ https://rubyinstaller.org/
<!-- ruby -v -->

gem install bundler jekyll

bundle init

Open Gemfile and edit

source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins

bundle install
bundle exec jekyll serve





=============Deploy github page============

<!-- _config.yml -->
baseurl: "/agency-jekyll-theme-tiendo"
url: "https://tiendo0808.github.io"

bundle install
bundle exec jekyll serve





