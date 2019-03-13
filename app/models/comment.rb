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

class Step < ApplicationRecord
  # N.B. Remember, Rails 5 automatically validates the presence of
  # belongs_to associations, so we can leave the validation of todo out
  # here.
  validates :comment, presence: true
  # validates :done, inclusion: { in: [true, false] }

  after_initialize { self.done = false if self.done.nil? }

  belongs_to :post

  has_one :user,
    through: :post,
    source: :user
end
