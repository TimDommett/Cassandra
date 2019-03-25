class Comment < ApplicationRecord
  # N.B. Remember, Rails 5 automatically validates the presence of
  # belongs_to associations, so we can leave the validation of todo out
  # here.
  belongs_to :post
  belongs_to :tag
end
