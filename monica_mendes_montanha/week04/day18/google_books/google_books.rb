require 'httparty'
require 'pry'

# gem install httparty
# in pry
# require 'httparty'
# => true
# @title = "Jaws"   # IRL: params[:title]
# => "Jaws"
# url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
# @info = HTTParty.get url
# @info.keys
# @info["items"][0].keys
# @info["items"][0]["volumeInfo"].keys
# @info["items"][0]["volumeInfo"]["imageLinks"].keys
# @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
# @book_cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
# => "http://books.google.com/books/content?id=Xo5xSQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" (img)

# <img src=" <%= @book_cover %> ">
