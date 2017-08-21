class CreateSlogans < ActiveRecord::Migration[5.1]
  def change
    create_table :slogans do |t|
      t.text :text

      t.timestamps
    end
  end
end
