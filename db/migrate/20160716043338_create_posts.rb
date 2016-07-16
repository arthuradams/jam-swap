class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :description, null: false, limit: 4000
      t.string :email
      t.string :phone
      t.string :street
      t.string :city
      t.string :state
      t.string :picture_url
      t.references :user, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true
      t.timestamps
    end
  end
end
