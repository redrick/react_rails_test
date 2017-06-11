# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[["Stay Hungry. Stay Foolish.", "Steve Jobs"],
 ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
 ["Argue with idiots, and you become an idiot.", "Paul Graham"],
 ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
 ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]].each do |quote|
    Quote.create(content: quote.first, author: quote.last)
end
