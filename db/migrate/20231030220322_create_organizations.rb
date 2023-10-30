class CreateOrganizations < ActiveRecord::Migration[7.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :email
      t.string :address
      t.text :description

      t.timestamps
    end
  end
end
