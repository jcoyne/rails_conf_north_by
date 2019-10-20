# Samvera Connect 2019 Stimulus and Webpacker Workshop

This code base is for use during the 2018 Samvera Connect Stimulus workshop.

In order to run this application, you need SQLite on your
machine. The application comes with a pre-seeded SQLite database.

This application does not specify a Ruby version, for ease of install.
It was developed with Ruby 2.6.2, but should run with any
version of Ruby 2.5 and up (which is the prerequisite for Rails 6.0).

In order to get set up, you should do the following

1. Clone and download this repository
1. In the directory for this repo, make sure you are running Rails 2.5 or up
1. run `bundle install`
1. run `yarn`
1. run `./bin/rails server`
1. go to http://localhost:3000
1. You should see a webpage that looks like a schedule


There is also a Docker setup. Please note that Noel will be much less
likely to troubleshoot docker issues.

To use Docker:

1. `docker-compose up`
1. Wait....it will take a while before the app is running.
1. Go to http://localhost:3000

You should be able to edit the files normally.
