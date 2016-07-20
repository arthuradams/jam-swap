class CreateMeetups < ActiveRecord::Migration[5.0]
  def change
    create_table :meetups do |t|
      t.string   "title"
      t.text     "description"
      t.string   "url"
      t.datetime "created_at",  null: false
      t.datetime "updated_at",  null: false
    end
  end
end
