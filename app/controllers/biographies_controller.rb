class BiographiesController < ApplicationController
  def create
    @biography= Biography.new(biography_params)
    @biography.save
    redirect_to root_path
  end
  private
  def biography_params
    params.require(:biography).permit(:name, :body)    
  end
end
