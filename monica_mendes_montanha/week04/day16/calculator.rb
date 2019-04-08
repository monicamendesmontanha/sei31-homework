require 'pry'
require 'rainbow'

# binding.pry

def show_menu
  puts "-=" * 15
  puts "CALCULATOR" #TODO: you could .center here to make it look nice
  puts "--" * 15 # El cheapo divider horinzotal line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponentiation"
  puts "[sr] - Square_roots"
  puts "[q] - Quit"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

  puts "Enter the number: "
  a = gets.to_f
  puts "Enter the number: "
  b = gets.to_f
  puts "-•" *15

  case menu_choice
  when 'a'
    p "#{a} + #{b} = #{a+b}"
  when 's'
    p "#{a} - #{b} = #{a-b}"
  when 'm'
    p "#{a} * #{b} = #{a*b}"
  when 'd'
    p "#{a} / #{b} = #{a/b}"
  when 'e'
    p "#{a} ** #{b} = #{a**b}"
  when 'sr'
    p "#{Integer.sqrt(a)}"
  else
    puts "Invalid selection!"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts 'Thanks for using crappy calculator!'