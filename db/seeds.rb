# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{email:"amyers0@pen.io"},
{email:"esanchez1@craigslist.org"},
{email:"mwilliamson2@slideshare.net"},
{email:"hlittle3@ifeng.com"},
{email:"shawkins4@opensource.org"}]);

categories = Category.create([{name:"meetups"},
                              {name:"jobs"}]);


comments = Comment.create([{comment:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."},
{comment:"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia."},
{comment:"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam."},
{comment:"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit."},
{comment:"Integer non velit."},
{comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue."},
{comment:"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."},
{comment:"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit."},
{comment:"Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."},
{comment:"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."},
{comment:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."},
{comment:"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."},
{comment:"Etiam faucibus cursus urna."},
{comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."},
{comment:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."},
{comment:"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."},
{comment:"Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit."},
{comment:"Nam nulla."},
{comment:"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."},
{comment:"Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo."}]);
