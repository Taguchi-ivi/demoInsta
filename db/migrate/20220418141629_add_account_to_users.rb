class AddAccountToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :account, :string
    add_index :users, :account, unique: true
  end
end
