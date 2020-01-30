class Post < ApplicationRecord
  validates :title, :content, :weight, presence: true
  belongs_to :user
end
