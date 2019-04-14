require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do all this for you automagically.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Animal < ActiveRecord::Base
  belongs_to :group, :optional => true # Since Rails 5
end

class Group < ActiveRecord::Base
  has_many :animals
end

get '/' do
  erb :home
end

# INDEX - Show all animals
get '/animals' do
  @animals = Animal.all
  erb :animals_index
end

binding.pry