# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :string
#  todo_id    :integer
#  done       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  # N.B. Remember, Rails 5 automatically validates the presence of
  # belongs_to associations, so we can leave the validation of todo out
  # here.
  validates :tag, presence: true

  belongs_to :post

  belongs_to :user,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :User
end
