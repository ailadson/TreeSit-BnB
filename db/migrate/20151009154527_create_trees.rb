class CreateTrees < ActiveRecord::Migration
  def change
    create_table :trees do |t|
      t.text :description, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      
      t.timestamps null: false
    end
  end
end
