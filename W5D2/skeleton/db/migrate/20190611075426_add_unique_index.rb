class AddUniqueIndex < ActiveRecord::Migration[5.1]
  def change

    add_index :toys, [ :name, :toyable_type, :toyable_id ], unique: true
  end
end
