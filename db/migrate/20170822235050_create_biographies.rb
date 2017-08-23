class CreateBiographies < ActiveRecord::Migration[5.1]
  def change
    create_table :biographies do |t|
      t.string :name
      t.text :body
      t.string :picurl

      t.timestamps
    end
  end
end
