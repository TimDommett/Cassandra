class AddCategoriesToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :categories, :text, array: true, default: []
  end
end
