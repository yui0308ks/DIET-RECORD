class AddNowweightToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :nowweight, :float
  end
end
