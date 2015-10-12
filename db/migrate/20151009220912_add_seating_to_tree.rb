class AddSeatingToTree < ActiveRecord::Migration
  def change
    add_column :trees, :seating, :integer
  end
end
