class RemovePostIdFromTags < ActiveRecord::Migration[5.2]
  def change
    remove_column :tags, :post_id, :integer
  end
end
