class CreateJoinTableTagUser < ActiveRecord::Migration[5.2]
  def change
    create_join_table :tags, :users do |t|
      t.index [:tag_id, :user_id]
      # t.index [:user_id, :tag_id]
    end
  end
end
