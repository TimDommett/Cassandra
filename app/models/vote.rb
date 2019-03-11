# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  chirp_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Vote < ApplicationRecord
  # This is actually redundant since Rails 5+ will automatically validate
  # belongs to relationships, and the foreign keys will be implicitly
  # checked as a result
  validates :user_id, :post_id, presence: true

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post
    # optional: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    # optional: true
end
