class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :email
      t.string :password_digest
      t.integer :role

      t.timestamps
    end
  end
end
