class CreateTagsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :tag, null: false
      t.integer :post_id, null: false
      t.timestamps
    end
  end
end
