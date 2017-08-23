class AddPicurlToBiography < ActiveRecord::Migration[5.1]
  def change
    add_column :biographies, :picurl, :string
  end
end
