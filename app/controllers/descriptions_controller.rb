class DescriptionsController < ApplicationController

  def create
    @description = Description.new(description_params)
    @description.save
    redirect_to root_path
  end
  private
  def description_params
    params.require(:description).permit(:text)
  end
end
