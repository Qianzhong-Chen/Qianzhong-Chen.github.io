# Qianzhong Chen — Academic Website

Personal research website for Qianzhong Chen, a PhD student in Stanford Aeronautics & Astronautics working on robot learning, embodied AI, reward modeling, world models, and autonomous systems.

The site is built with Jekyll and deployed through GitHub Pages.

## Content

- Homepage: `_pages/about.md`
- Publications page: `_pages/publications.md`
- Publication records: `_data/publications.yml`
- CV page: `_pages/cv.md`
- Navigation: `_data/navigation.yml`
- Modern visual theme: `_sass/_modern.scss`

To add or update a publication, edit `_data/publications.yml`. Publications marked with `selected: true` also appear on the homepage.

## Local preview

This repository uses Ruby 3.3 installed through Homebrew:

```bash
PATH="/opt/homebrew/opt/ruby@3.3/bin:/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH" bundle install
PATH="/opt/homebrew/opt/ruby@3.3/bin:/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH" bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000/`. Changes are rebuilt and refreshed automatically.
