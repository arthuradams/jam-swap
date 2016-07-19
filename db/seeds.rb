User.destroy_all
Category.destroy_all
Post.destroy_all
Comment.destroy_all

User.create([{email:"joecal@gmail.com",password:"joecal"},
{email:"esanchez1@craigslist.org",password:"esanchez1"},
{email:"mwilliamson2@slideshare.net",password:"mwilliamson2"},
{email:"hlittle3@ifeng.com",password:"hlittle3"},
{email:"shawkins4@opensource.org",password:"shawkins4"}]);

Category.create([{name:"meetups"},
{name:"jobs"}]);

Post.create([{title:"First post",description:"This is the first description in the first post."},
{title:"Second post",description:"This is the second description in the second post."},
{title:"Third post",description:"This is the third description in the third post."},
{title:"Fourth post",description:"This is the fourth description in the forth post."}]);

Comment.create([{comment:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",post_id:1},
{comment:"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",post_id:2},
{comment:"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",post_id:3},
{comment:"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",post_id:4}]);
