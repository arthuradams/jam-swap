class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.string :email
      t.string :phone
      t.string :street
      t.string :city
      t.string :state
      t.string :picture_url

      t.timestamps
    end
  end
end
