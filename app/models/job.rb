class Job < ApplicationRecord
  has_one :category
  has_one :user
  has_many :comments, dependent: :destroy

end
