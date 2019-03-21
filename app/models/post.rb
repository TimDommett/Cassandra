# == Schema Information
#
# Table name: chirps
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  # validate :chirp_too_long

  has_many :votes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Vote

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

# check the next two
  # has_many :voters,
  #   through: :votes,
  #   source: :user
  #
  # has_many :commentors,
  #   through: :votes,
  #   source: :user

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  # has_and_belongs_to_many :tags
  # def chirp_too_long
  #   if body.length > 140
  #     errors[:body] << "too long"
  #   end
  # end
end
